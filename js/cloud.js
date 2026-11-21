// =========================================================================
// SINCRONIZACIÓN EN LA NUBE (Firebase Auth + Firestore)
// - localStorage sigue siendo la copia local (rápida y funciona sin conexión).
// - Si hay sesión iniciada, el progreso (appState.topics) se sube a Firestore
//   y se baja al abrir la página desde cualquier dispositivo.
// - Gana siempre la versión más reciente (topicsUpdatedAt).
// =========================================================================
window.Cloud = (() => {
    const cfg = window.FIREBASE_CONFIG || {};
    const configured = cfg.apiKey && !String(cfg.apiKey).startsWith('PEGAR');
    const BTN_BASE = 'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ';
    const STYLES = {
        off:   'bg-slate-100 hover:bg-slate-200 text-slate-700',
        ok:    'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200',
        busy:  'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200',
        error: 'bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200'
    };

    let auth = null, db = null, user = null;
    let pushTimer = null, dirty = false;

    function setUI(label, kind, title) {
        const btn = document.getElementById('auth-btn');
        const lbl = document.getElementById('auth-label');
        if (!btn || !lbl) return;
        lbl.textContent = label;
        btn.className = BTN_BASE + (STYLES[kind] || STYLES.off);
        btn.title = title || '';
    }

    function hhmm() {
        return new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
    }

    function init() {
        if (!configured || typeof firebase === 'undefined') {
            setUI('Solo en este dispositivo', 'off', 'Falta configurar Firebase');
            return;
        }
        firebase.initializeApp(cfg);
        auth = firebase.auth();
        db = firebase.firestore();

        setUI('Guardar en la nube', 'off', 'Iniciá sesión con Google para guardar tu progreso');

        auth.onAuthStateChanged(async (u) => {
            user = u;
            if (!u) {
                setUI('Guardar en la nube', 'off', 'Iniciá sesión con Google para guardar tu progreso');
                return;
            }
            setUI('Sincronizando…', 'busy', u.email || '');
            await pull();
        });

        document.addEventListener('visibilitychange', () => {
            if (!user) return;
            if (document.visibilityState === 'hidden') flush();
            else pull();
        });
    }

    async function toggleAuth() {
        if (!auth) {
            showToast('Falta configurar Firebase (js/firebase-config.js)');
            return;
        }
        if (user) {
            if (confirm('¿Cerrar sesión? Tu progreso queda guardado en la nube.')) {
                await flush();
                await auth.signOut();
            }
            return;
        }
        try {
            await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        } catch (e) {
            console.error('Error de inicio de sesión:', e);
            if (e.code !== 'auth/popup-closed-by-user') {
                showToast('No se pudo iniciar sesión: ' + (e.code || 'error'));
            }
        }
    }

    function docRef() {
        return db.collection('users').doc(user.uid);
    }

    // Baja el progreso de la nube y lo compara con el local
    async function pull() {
        if (!user || dirty) return;   // si hay cambios locales pendientes, primero se suben
        try {
            const snap = await docRef().get();
            const localTs = appState.topicsUpdatedAt || 0;
            if (snap.exists) {
                const data = snap.data();
                const remoteTs = data.topicsUpdatedAt || 0;
                if (remoteTs > localTs) {
                    applyRemoteTopics(JSON.parse(data.topicsJson), remoteTs);
                } else if (localTs > remoteTs) {
                    await push();
                    return;
                }
            } else if (localTs > 0) {
                await push();
                return;
            }
            setUI('Sincronizado ✓', 'ok', (user.email || '') + ' · ' + hhmm());
        } catch (e) {
            console.error('Error al bajar datos:', e);
            setUI('Sin conexión', 'error', 'No se pudo sincronizar. Se reintenta al volver a la página.');
        }
    }

    async function push() {
        if (!user) return;
        clearTimeout(pushTimer);
        try {
            await docRef().set({
                topicsJson: JSON.stringify(appState.topics),
                topicsUpdatedAt: appState.topicsUpdatedAt || Date.now(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            dirty = false;
            setUI('Sincronizado ✓', 'ok', (user.email || '') + ' · ' + hhmm());
        } catch (e) {
            console.error('Error al subir datos:', e);
            setUI('Sin conexión', 'error', 'Cambios guardados en este dispositivo. Se reintenta solo.');
        }
    }

    // Llamado desde saveState() cuando cambió el progreso
    function schedulePush() {
        if (!user) return;
        dirty = true;
        setUI('Guardando…', 'busy', '');
        clearTimeout(pushTimer);
        pushTimer = setTimeout(push, 1500);
    }

    async function flush() {
        if (user && dirty) await push();
    }

    return { init, toggleAuth, schedulePush };
})();
