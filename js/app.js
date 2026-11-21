// =========================================================================
// BASE DE DATOS UNIFICADA: ORL (02/12) + DERMATOLOGÍA (14/12)
// =========================================================================
const STUDY_DAYS = [
    { date: "2026-11-20", label: "Vie 20/11", phase: "ORL Día 1 + Derma Base" },
    { date: "2026-11-21", label: "Sáb 21/11", phase: "ORL Día 2 + Derma Base" },
    { date: "2026-11-22", label: "Dom 22/11", phase: "ORL Día 3 + Derma Base" },
    { date: "2026-11-23", label: "Lun 23/11", phase: "ORL Día 4 + Melanoma" },
    { date: "2026-11-24", label: "Mar 24/11", phase: "ORL Día 5 + Acné/Rosácea" },
    { date: "2026-11-25", label: "Mié 25/11", phase: "ORL Día 6 + Virosis/Sarna" },
    { date: "2026-11-26", label: "Jue 26/11", phase: "ORL Día 7 + Sífilis" },
    { date: "2026-11-27", label: "Vie 27/11", phase: "ORL Día 8 + Pioderm/Micosis" },
    { date: "2026-11-28", label: "Sáb 28/11", phase: "ORL Día 9 + Lepra/TBC" },
    { date: "2026-11-29", label: "Dom 29/11", phase: "ORL Día 10 + Psoriasis" },
    { date: "2026-11-30", label: "Lun 30/11", phase: "ORL Día 11 + Eczemas" },
    { date: "2026-12-01", label: "Mar 01/12", phase: "ORL Repaso Final" },
    { date: "2026-12-02", label: "Mié 02/12", phase: "🎯 EXAMEN FINAL ORL" },
    { date: "2026-12-03", label: "Jue 03/12", phase: "100% Derma: Ampollares/Colag." },
    { date: "2026-12-04", label: "Vie 04/12", phase: "100% Derma: Farmacod/Fotob." },
    { date: "2026-12-05", label: "Sáb 05/12", phase: "100% Derma: Sistémicas/Comp." },
    { date: "2026-12-06", label: "Dom 06/12", phase: "100% Derma: Estudio Oncología" },
    { date: "2026-12-07", label: "Lun 07/12", phase: "100% Derma: Estudio Infecciosas" },
    { date: "2026-12-08", label: "Mar 08/12", phase: "100% Derma: Estudio Inflamat." },
    { date: "2026-12-09", label: "Mié 09/12", phase: "100% Derma: Estudio Autoinm." },
    { date: "2026-12-10", label: "Jue 10/12", phase: "100% Derma: Repaso General" },
    { date: "2026-12-11", label: "Vie 11/12", phase: "100% Derma: Claves de Mesa" },
    { date: "2026-12-12", label: "Sáb 12/12", phase: "100% Derma: Simulacro Oral" },
    { date: "2026-12-13", label: "Dom 13/12", phase: "100% Derma: Repaso Exprés" }
];

const TOPICS_DB = [
    // ==========================================
    // OTORRINOLARINGOLOGÍA (ORL - 02/12/2026)
    // ==========================================
    // Día 1 - Vie 20/11
    {
        id: "orl-1-1",
        subject: "orl",
        group: "Unidad 1: Cavidad Bucal, Faringe y Anillo de Waldeyer",
        dayOrder: 1,
        date: "2026-11-20",
        dateLabel: "Vie 20/11 · Día 1",
        tag: "Unidad 1 (Parte 1)",
        title: "Inmunología del anillo linfático de Waldeyer y Semiología de fauces",
        highYield: false,
        tip: "Componentes del anillo (amígdalas palatinas, faríngea/adenoides, lingual, tubáricas y cordones laterales). Examen normal vs patológico de cavidad bucal y orofaringe."
    },
    {
        id: "orl-1-2",
        subject: "orl",
        group: "Unidad 1: Cavidad Bucal, Faringe y Anillo de Waldeyer",
        dayOrder: 1,
        date: "2026-11-20",
        dateLabel: "Vie 20/11 · Día 1",
        tag: "Unidad 1 (Parte 1)",
        title: "Síndrome rinoadenoideo y Niño respirador bucal",
        highYield: true,
        tip: "Facies adenoidea (boca entreabierta, paladar ojival, labio superior corto, hipoplasia maxilar), alteraciones en deglución/respiración, ronquidos y otitis media a repetición."
    },
    // Día 2 - Sáb 21/11
    {
        id: "orl-1-3",
        subject: "orl",
        group: "Unidad 1: Cavidad Bucal, Faringe y Anillo de Waldeyer",
        dayOrder: 2,
        date: "2026-11-21",
        dateLabel: "Sáb 21/11 · Día 2",
        tag: "Unidad 1 (Parte 2)",
        title: "Anginas (faringoamigdalitis agudas) y Complicaciones (Flemón / Absceso periamigdalino)",
        highYield: true,
        tip: "Diferenciar viral vs bacteriana (S. pyogenes - criterios de Centor). Flemón/absceso periamigdalino: trismus, voz en papa caliente, abombamiento del pilar anterior y desviación de úvula."
    },
    {
        id: "orl-1-4",
        subject: "orl",
        group: "Unidad 1: Cavidad Bucal, Faringe y Anillo de Waldeyer",
        dayOrder: 2,
        date: "2026-11-21",
        dateLabel: "Sáb 21/11 · Día 2",
        tag: "Unidad 1 (Parte 2)",
        title: "Faringitis agudas/crónicas, Reflujo faringolaríngeo, Cirugía y SAHOS",
        highYield: false,
        tip: "Indicaciones absolutas y relativas de amigdalectomía y adenoidectomía. Roncopatías y Apneas Obstructivas del Sueño (SAHOS) en niños vs adultos."
    },
    // Día 3 - Dom 22/11
    {
        id: "orl-2-1",
        subject: "orl",
        group: "Unidad 2: Rinosinusal y Alergia",
        dayOrder: 3,
        date: "2026-11-22",
        dateLabel: "Dom 22/11 · Día 3",
        tag: "Unidad 2 (Parte 1)",
        title: "Anatomofisiología rinosinusal, Semiología e Imágenes de VRS",
        highYield: false,
        tip: "Complejo osteomeatal (meato medio: drenan frontal, maxilar y etmoidal anterior). Rinoscopía anterior y elección de TC sin contraste de macizo facial como gold standard."
    },
    {
        id: "orl-2-2",
        subject: "orl",
        group: "Unidad 2: Rinosinusal y Alergia",
        dayOrder: 3,
        date: "2026-11-22",
        dateLabel: "Dom 22/11 · Día 3",
        tag: "Unidad 2 (Parte 1)",
        title: "Resfrío común y Diagnóstico diferencial de obstrucción nasal",
        highYield: false,
        tip: "Causas mecánicas (desviación septal, hipertrofia de cornetes, pólipos, cuerpo extraño unilateral en niños) vs inflamatorias."
    },
    // Día 4 - Lun 23/11
    {
        id: "orl-2-3",
        subject: "orl",
        group: "Unidad 2: Rinosinusal y Alergia",
        dayOrder: 4,
        date: "2026-11-23",
        dateLabel: "Lun 23/11 · Día 4",
        tag: "Unidad 2 (Parte 2)",
        title: "Rinitis alérgica y Sinusitis aguda y crónica (incluyendo origen odontógeno)",
        highYield: true,
        tip: "Microbiología de sinusitis aguda (S. pneumoniae, H. influenzae, M. catarrhalis). Sinusitis maxilar unilateral fétida de origen odontógeno (anaerobios, 1° y 2° molar superior)."
    },
    {
        id: "orl-2-4",
        subject: "orl",
        group: "Unidad 2: Rinosinusal y Alergia",
        dayOrder: 4,
        date: "2026-11-23",
        dateLabel: "Lun 23/11 · Día 4",
        tag: "Unidad 2 (Parte 2)",
        title: "Poliposis nasal, Tríada de Samter (ASA tríada) y Tumores rinosinusales",
        highYield: true,
        tip: "Tríada de Samter: Poliposis nasal + Asma + Intolerancia a la Aspirina/AINEs. Principios de cirugía endoscópica nasosinusal (CENS)."
    },
    // Día 5 - Mar 24/11
    {
        id: "orl-3-1",
        subject: "orl",
        group: "Unidad 3: Otología y Equilibrio",
        dayOrder: 5,
        date: "2026-11-24",
        dateLabel: "Mar 24/11 · Día 5",
        tag: "Unidad 3 (Parte 1)",
        title: "Fisiología de la audición, Hipoacusias y Acumetría (Weber, Rinne, Schwabach)",
        highYield: true,
        tip: "CLAVE DE MESA: Hipoacusia conductiva (Rinne negativo, Weber lateraliza al oído enfermo) vs perceptiva/neurosensorial (Rinne positivo acortado, Weber lateraliza al oído sano). Otoscopía normal."
    },
    // Día 6 - Mié 25/11
    {
        id: "orl-3-2",
        subject: "orl",
        group: "Unidad 3: Otología y Equilibrio",
        dayOrder: 6,
        date: "2026-11-25",
        dateLabel: "Mié 25/11 · Día 6",
        tag: "Unidad 3 (Parte 2)",
        title: "Otitis externas (difusa, circunscripta, maligna) y Trompa de Eustaquio",
        highYield: false,
        tip: "Signo del trago positivo en otitis externa difusa (Pseudomonas). Otitis externa maligna/necrotizante en diabéticos o inmunocomprometidos."
    },
    {
        id: "orl-3-3",
        subject: "orl",
        group: "Unidad 3: Otología y Equilibrio",
        dayOrder: 6,
        date: "2026-11-25",
        dateLabel: "Mié 25/11 · Día 6",
        tag: "Unidad 3 (Parte 2)",
        title: "Otitis Media Aguda (OMA): criterios antibióticos y complicaciones",
        highYield: true,
        tip: "Fases de la OMA. Criterios para ATB inmediato (<6 meses, <2 años bilateral, otorrea, fiebre alta/dolor intenso) vs conducta expectante. Complicaciones intratemporales (mastoiditis) e intracraneales."
    },
    // Día 7 - Jue 26/11
    {
        id: "orl-3-4",
        subject: "orl",
        group: "Unidad 3: Otología y Equilibrio",
        dayOrder: 7,
        date: "2026-11-26",
        dateLabel: "Jue 26/11 · Día 7",
        tag: "Unidad 3 (Parte 3)",
        title: "Otitis media con efusión (OME), Timpanometría (Curvas A, B, C) y Colesteatoma",
        highYield: true,
        tip: "Curva B plana (líquido en oído medio/OME), Curva C (disfunción tubárica). Colesteatoma: otorrea fétida crónica, perforación marginal/atical, osteólisis."
    },
    {
        id: "orl-3-5",
        subject: "orl",
        group: "Unidad 3: Otología y Equilibrio",
        dayOrder: 7,
        date: "2026-11-26",
        dateLabel: "Jue 26/11 · Día 7",
        tag: "Unidad 3 (Parte 3)",
        title: "Otoesclerosis, Screening auditivo neonatal (OEA) e Implante coclear",
        highYield: true,
        tip: "Otoesclerosis: hipoacusia conductiva progresiva en mujer joven, empeora en embarazo, tímpano normal, ausencia de reflejo estapedial, muesca de Carhart. Ley de detección temprana (OEA)."
    },
    // Día 8 - Vie 27/11
    {
        id: "orl-3-6",
        subject: "orl",
        group: "Unidad 3: Otología y Equilibrio",
        dayOrder: 8,
        date: "2026-11-27",
        dateLabel: "Vie 27/11 · Día 8",
        tag: "Unidad 3 (Parte 4)",
        title: "Síndromes vertiginosos (Periférico vs Central), VPPB y Enfermedad de Ménière",
        highYield: true,
        tip: "VPPB: crisis breves (<1 min) posturales, diagnóstico con maniobra de Dix-Hallpike y tratamiento con maniobra de reposición de Epley. Ménière: tríada (vértigo + hipoacusia fluctuante + acúfenos)."
    },
    // Día 9 - Sáb 28/11
    {
        id: "orl-4-1",
        subject: "orl",
        group: "Unidad 4: Laringología y Vía Aérea",
        dayOrder: 9,
        date: "2026-11-28",
        dateLabel: "Sáb 28/11 · Día 9",
        tag: "Unidad 4 (Parte 1)",
        title: "Fisiología laríngea, Fibroscopía, Disfonía y Pseudotumores laríngeos",
        highYield: true,
        tip: "Funciones de la laringe (la esfinteriana es la filogenéticamente más antigua/vital). Nódulos vocales (bilaterales, unión 1/3 ant con 2/3 post, foniátrico) vs Pólipos (unilaterales, quirúrgico) vs Granulomas."
    },
    // Día 10 - Dom 29/11
    {
        id: "orl-4-2",
        subject: "orl",
        group: "Unidad 4: Laringología y Vía Aérea",
        dayOrder: 10,
        date: "2026-11-29",
        dateLabel: "Dom 29/11 · Día 10",
        tag: "Unidad 4 (Parte 2)",
        title: "Síndromes obstructivos laríngeos, Cáncer de laringe y Traqueostomía",
        highYield: true,
        tip: "Cáncer de laringe: glótico (el más frecuente y de mejor pronóstico porque da disfonía precoz y tiene pobre drenaje linfático), supraglótico y subglótico. Indicaciones de traqueostomía."
    },
    // Día 11 - Lun 30/11
    {
        id: "orl-5-1",
        subject: "orl",
        group: "Unidad 5: Urgencias ORL en Guardia",
        dayOrder: 11,
        date: "2026-11-30",
        dateLabel: "Lun 30/11 · Día 11",
        tag: "Unidad 5 (Guardia)",
        title: "Epistaxis (Anterior vs Posterior, Manejo escalonado y Angiofibroma juvenil)",
        highYield: true,
        tip: "TU TEMA DE APERTURA: Plexo de Kiesselbach (anterior, 90%) vs arteria esfenopalatina (posterior, grave). Manejo: compresión + vasoconstrictor -> cauterización -> taponaje anterior -> taponaje posterior (sonda Foley). Angiofibroma nasofaríngeo juvenil (varón adolescente, epistaxis severa, NO biopsiar)."
    },
    {
        id: "orl-5-2",
        subject: "orl",
        group: "Unidad 5: Urgencias ORL en Guardia",
        dayOrder: 11,
        date: "2026-11-30",
        dateLabel: "Lun 30/11 · Día 11",
        tag: "Unidad 5 (Guardia)",
        title: "Obstrucción laríngea aguda en guardia (Falso crup vs Epiglotitis) y OMA del lactante",
        highYield: true,
        tip: "Falso crup / Laringitis subglótica (viral, tos perruna, estridor inspiratorio, corticoides + adrenalina nebulizada) vs Epiglotitis (babeo, posición en trípode, fiebre alta: CONTRAINDICADO el bajalenguas por espasmo mortal). OMA del lactante: llanto nocturno, irritabilidad, rechazo del alimento."
    },
    {
        id: "orl-5-3",
        subject: "orl",
        group: "Unidad 5: Urgencias ORL en Guardia",
        dayOrder: 11,
        date: "2026-11-30",
        dateLabel: "Lun 30/11 · Día 11",
        tag: "Unidad 5 (Guardia)",
        title: "Cuerpos extraños (Pila botón) y Traumatismos faciales (Hematoma del tabique)",
        highYield: true,
        tip: "Pila botón en nariz o esófago: urgencia absoluta por necrosis licuefactiva en pocas horas. Fractura nasal: descartar siempre Hematoma del tabique (drenaje inmediato para evitar necrosis del cartílago y nariz en silla de montar). Clasificación de Le Fort."
    },
    // Día 12 - Mar 01/12
    {
        id: "orl-5-4",
        subject: "orl",
        group: "Unidad 5: Urgencias ORL en Guardia",
        dayOrder: 12,
        date: "2026-12-01",
        dateLabel: "Mar 01/12 · Día 12",
        tag: "Repaso Integral",
        title: "Simulacro oral ORL: Tema de apertura (Epistaxis) + Semiología y Casos clínicos",
        highYield: true,
        tip: "Día previo al examen: practicar exposición fluida de Epistaxis (5 min), repasar imágenes de otoscopía/rinoscopía/fauces y algoritmos de guardia."
    },

    // ==========================================
    // CLÍNICA DERMATOLÓGICA (14/12/2026)
    // ==========================================
    // Bloque 1: Generalidades
    {
        id: "derma-1-1",
        subject: "derma",
        group: "1. Generalidades, Semiología y Terapéutica",
        dayOrder: 1,
        date: "2026-11-20",
        dateLabel: "Vie 20/11 · Bloque 1",
        tag: "Doc: CC / AG",
        title: "Generalidades, Lesiones elementales primarias y secundarias + Histología",
        highYield: true,
        tip: "Imprescindible para describir fotos en el oral. Diferenciar mácula, pápula, placa, nódulo, vesícula, ampolla, pústula; erosión vs úlcera; acantosis, espongiosis, acantólisis y paraqueratosis."
    },
    {
        id: "derma-1-2",
        subject: "derma",
        group: "1. Generalidades, Semiología y Terapéutica",
        dayOrder: 5,
        date: "2026-11-24",
        dateLabel: "Mar 24/11 · Bloque 1",
        tag: "Doc: MEG",
        title: "Principios terapéuticos dermatológicos",
        highYield: false,
        tip: "Elección de vehículos (fomentos/lociones en lesiones agudas exudativas; cremas en subagudas; ungüentos/pomadas en crónicas hiperqueratósicas) y corticoides tópicos."
    },
    // Bloque 2: Oncología Cutánea
    {
        id: "derma-2-1",
        subject: "derma",
        group: "2. Oncología Cutánea y Lesiones Precancerosas",
        dayOrder: 2,
        date: "2026-11-21",
        dateLabel: "Sáb 21/11 · Bloque 2",
        tag: "Doc: CC",
        title: "Nevos y Tumores benignos (foco en Nevos Displásicos)",
        highYield: true,
        tip: "Preguntado por Consigli: características clínicas e histológicas de los nevos displásicos, síndrome del nevo displásico y diagnóstico diferencial con melanoma."
    },
    {
        id: "derma-2-2",
        subject: "derma",
        group: "2. Oncología Cutánea y Lesiones Precancerosas",
        dayOrder: 2,
        date: "2026-11-21",
        dateLabel: "Sáb 21/11 · Bloque 2",
        tag: "Doc: CC",
        title: "Lesiones Precancerosas y HACRE (Hidroarsenicismo Crónico)",
        highYield: true,
        tip: "Tomado por Carlos Consigli: queratosis actínicas, queilitis actínica, leucoplasia y HACRE (períodos: hiperhidrosis, hiperqueratosis palmoplantar, melanodermia en gotas de lluvia y carcinomas)."
    },
    {
        id: "derma-2-3",
        subject: "derma",
        group: "2. Oncología Cutánea y Lesiones Precancerosas",
        dayOrder: 3,
        date: "2026-11-22",
        dateLabel: "Dom 22/11 · Bloque 2",
        tag: "Doc: CC",
        title: "Carcinoma Basocelular (CBC) y Carcinoma Espinocelular (CEC)",
        highYield: true,
        tip: "CBC: más frecuente, borde perlado, telangiectasias, invasión local sin metástasis. CEC: asienta sobre lesiones previas/mucosas, potencial metastásico ganglionar."
    },
    {
        id: "derma-2-4",
        subject: "derma",
        group: "2. Oncología Cutánea y Lesiones Precancerosas",
        dayOrder: 4,
        date: "2026-11-23",
        dateLabel: "Lun 23/11 · Bloque 2",
        tag: "Doc: CC / MEG",
        title: "Melanoma Maligno (Completo + Conducta post-biopsia)",
        highYield: true,
        tip: "TEMA ESTRELLA (Consigli y Eleonora): ABCDE, formas clínicas, factores pronósticos (índice de Breslow, niveles de Clark, ulceración) y qué hacer si extirpás un nevo y la biopsia da melanoma (ampliación de márgenes según Breslow + biopsia de ganglio centinela)."
    },
    {
        id: "derma-2-5",
        subject: "derma",
        group: "2. Oncología Cutánea y Lesiones Precancerosas",
        dayOrder: 16,
        date: "2026-12-05",
        dateLabel: "Sáb 05/12 · Bloque 2",
        tag: "Doc: JC",
        title: "Linfomas cutáneos, Sarcoma de Kaposi, Metástasis y Paraneoplasias",
        highYield: false,
        tip: "Micosis fungoide (fases en mancha, placa y tumoral), Sarcoma de Kaposi (HHV-8) y dermatosis paraneoplásicas obligadas (acantosis nigricans maligna, eritema gyratum repens)."
    },
    // Bloque 3: Infecciosas (ITS, Bacterianas, Virales)
    {
        id: "derma-3-1",
        subject: "derma",
        group: "3. Infecciosas: ITS, Bacterianas y Virales",
        dayOrder: 7,
        date: "2026-11-26",
        dateLabel: "Jue 26/11 · Bloque 3",
        tag: "Doc: CC / JC / MEG",
        title: "Sífilis (Períodos, Laboratorio específico y Tratamiento)",
        highYield: true,
        tip: "EL MÁS TOMADO: Chancro sifilítico, secundarismo (roséola, sifílides papulosas palmoplantares, condilomas planos), qué pedir en cada período (VDRL cuantitativa vs pruebas treponémicas) y dosis de Penicilina G Benzatínica (2.4M UI)."
    },
    {
        id: "derma-3-2",
        subject: "derma",
        group: "3. Infecciosas: ITS, Bacterianas y Virales",
        dayOrder: 8,
        date: "2026-11-27",
        dateLabel: "Vie 27/11 · Bloque 3",
        tag: "Doc: JC",
        title: "Piodermitis (Impétigo ampollar, Ectima, Erisipela, Celulitis)",
        highYield: true,
        tip: "Preguntado por Javier Consigli: Impétigo ampollar (toxina exfoliativa de S. aureus, ampolla flácida y collarete descamativo) vs impétigo contagioso (costra melicérica)."
    },
    {
        id: "derma-3-3",
        subject: "derma",
        group: "3. Infecciosas: ITS, Bacterianas y Virales",
        dayOrder: 6,
        date: "2026-11-25",
        dateLabel: "Mié 25/11 · Bloque 3",
        tag: "Doc: MEG",
        title: "Virosis cutáneas (Herpes Zóster, Herpes Simple, HPV, Molusco)",
        highYield: true,
        tip: "Preguntado por Eleonora: Herpes Zóster (vesículas agrupadas en ramillete sobre base eritematosa siguiendo un dermatoma unilateral, neuralgia postherpética, tratamiento con aciclovir/valaciclovir)."
    },
    // Bloque 4: Micóticas, Parasitarias y Regional
    {
        id: "derma-4-1",
        subject: "derma",
        group: "4. Micóticas, Parasitarias y Patología Regional",
        dayOrder: 8,
        date: "2026-11-27",
        dateLabel: "Vie 27/11 · Bloque 4",
        tag: "Doc: JC / MEG",
        title: "Micosis superficiales (Onicomicosis, Dermatoficias, Pitiriasis versicolor)",
        highYield: true,
        tip: "Preguntado por Eleonora: Onicomicosis (formas clínicas, confirmación con examen micológico directo y cultivo antes de medicar, terbinafina/itraconazol)."
    },
    {
        id: "derma-4-2",
        subject: "derma",
        group: "4. Micóticas, Parasitarias y Patología Regional",
        dayOrder: 6,
        date: "2026-11-25",
        dateLabel: "Mié 25/11 · Bloque 4",
        tag: "Doc: MEG",
        title: "Ectoparasitosis (Escabiosis / Sarna y Pediculosis)",
        highYield: true,
        tip: "Preguntado por Eleonora: Sarna (prurito nocturno familiar, surco acarino y vesícula perlada, espacios interdigitales/muñecas/genitales, tratamiento con permetrina 5% o ivermectina y lavado de ropa)."
    },
    {
        id: "derma-4-3",
        subject: "derma",
        group: "4. Micóticas, Parasitarias y Patología Regional",
        dayOrder: 9,
        date: "2026-11-28",
        dateLabel: "Sáb 28/11 · Bloque 4",
        tag: "Doc: AB / JMCh",
        title: "Lepra, Tuberculosis cutánea y Patología Regional",
        highYield: false,
        tip: "Lepra (polos tuberculoide vs lepromatoso, trastornos de sensibilidad, estados reaccionales tipo 1 y 2, PQT). Leishmaniasis y micosis profundas regionales."
    },
    // Bloque 5: Inflamatorias y Eritematoescamosas
    {
        id: "derma-5-1",
        subject: "derma",
        group: "5. Inflamatorias y Eritematoescamosas",
        dayOrder: 5,
        date: "2026-11-24",
        dateLabel: "Mar 24/11 · Bloque 5",
        tag: "Doc: MEG / CC",
        title: "Acné y Rosácea (Comedogénesis y Diagnóstico diferencial)",
        highYield: true,
        tip: "Tomado por Consigli y Eleonora: qué son los comedones y cómo se forman (hiperqueratinización folicular, seborrea, C. acnes, inflamación), subtipos de rosácea y diferencia clave (en rosácea NO hay comedones)."
    },
    {
        id: "derma-5-2",
        subject: "derma",
        group: "5. Inflamatorias y Eritematoescamosas",
        dayOrder: 10,
        date: "2026-11-29",
        dateLabel: "Dom 29/11 · Bloque 5",
        tag: "Doc: MEG / JC",
        title: "Eritematoescamosas (Psoriasis: formas clínicas, gravedad y tratamiento)",
        highYield: true,
        tip: "Preguntado por Javier Consigli: formas clínicas de Psoriasis, cuál es la más grave (eritrodérmica y pustulosa generalizada de Von Zumbusch por riesgo vital/hidroelectrolítico) y cuál es la más leve (en gotas o placas limitadas)."
    },
    {
        id: "derma-5-3",
        subject: "derma",
        group: "5. Inflamatorias y Eritematoescamosas",
        dayOrder: 11,
        date: "2026-11-30",
        dateLabel: "Lun 30/11 · Bloque 5",
        tag: "Doc: CC",
        title: "Eczemas (Eccema Atópico y de Contacto) + Prurigos y Urticaria",
        highYield: true,
        tip: "Preguntado por Consigli: lesiones atópicas y topografía según edad (lactante en mejillas, infantil en pliegues, adulto liquenificación). Urticaria (habón evanescente <24h)."
    },
    {
        id: "derma-5-4",
        subject: "derma",
        group: "5. Inflamatorias y Eritematoescamosas",
        dayOrder: 16,
        date: "2026-12-05",
        dateLabel: "Sáb 05/12 · Bloque 5",
        tag: "Doc: AC",
        title: "Liquen plano, Granuloma anular y Sarcoidosis",
        highYield: false,
        tip: "Liquen plano: pápulas poligonales, planas, purpúricas, pruriginosas, estrías de Wickham, fenómeno de Koebner y compromiso mucoso/ungueal."
    },
    // Bloque 6: Autoinmunes, Ampollares y Farmacodermias
    {
        id: "derma-6-1",
        subject: "derma",
        group: "6. Autoinmunes, Ampollares y Farmacodermias",
        dayOrder: 14,
        date: "2026-12-03",
        dateLabel: "Jue 03/12 · Bloque 6",
        tag: "Doc: AC / JC",
        title: "Enfermedades Ampollares (Pénfigo vs Penfigoide: Inmunofluorescencia)",
        highYield: true,
        tip: "Preguntado por Javier Consigli: qué se ve en IF Directa en Pénfigo (depósito intercelular intraepidérmico en 'panal de abejas') vs Penfigoide ampollar (depósito lineal en zona de membrana basal), Nikolsky y clínica."
    },
    {
        id: "derma-6-2",
        subject: "derma",
        group: "6. Autoinmunes, Ampollares y Farmacodermias",
        dayOrder: 14,
        date: "2026-12-03",
        dateLabel: "Jue 03/12 · Bloque 6",
        tag: "Doc: AC / MEG",
        title: "Colagenosis (Esclerodermia, Lupus Cutáneo, Dermatomiositis)",
        highYield: true,
        tip: "Preguntado por Eleonora: Esclerodermia (morfea localizada vs esclerosis sistémica limitada/CREST y difusa, fenómeno de Raynaud, esclerodactilia). Lupus discoide vs subagudo vs agudo."
    },
    {
        id: "derma-6-3",
        subject: "derma",
        group: "6. Autoinmunes, Ampollares y Farmacodermias",
        dayOrder: 15,
        date: "2026-12-04",
        dateLabel: "Vie 04/12 · Bloque 6",
        tag: "Doc: JC",
        title: "Eritrodermias, Eritemas multiformes y Farmacodermias graves (SJS/NET/DRESS)",
        highYield: true,
        tip: "Urgencias dermatológicas: Eritema multiforme (lesiones en diana/escarapela, herpes/fármacos), Stevens-Johnson (<10% SC), NET (>30% SC, Nikolsky +) y DRESS (eosinofilia + afectación visceral)."
    },
    // Bloque 7: Complementarias y Sistémicas
    {
        id: "derma-7-1",
        subject: "derma",
        group: "7. Complementarias, Sistémicas y Poblaciones",
        dayOrder: 15,
        date: "2026-12-04",
        dateLabel: "Vie 04/12 · Bloque 7",
        tag: "Doc: JC",
        title: "Fotobiología, Discromías, Vitíligo y Púrpuras",
        highYield: false,
        tip: "UVA vs UVB, fotoprotección. Vitíligo (máculas acrómicas por destrucción de melanocitos). Púrpura palpable (vasculitis leucocitoclástica) vs no palpable."
    },
    {
        id: "derma-7-2",
        subject: "derma",
        group: "7. Complementarias, Sistémicas y Poblaciones",
        dayOrder: 16,
        date: "2026-12-05",
        dateLabel: "Sáb 05/12 · Bloque 7",
        tag: "Doc: VG / AC / JMV / MG",
        title: "Manifestaciones sistémicas, Complejo varicoso MMII, Alopecias, Uñas, Mucosa oral y Pediátrica",
        highYield: false,
        tip: "Diabetes en piel, úlceras venosas vs arteriales, alopecia areata, melanoniquia longitudinal (signo de Hutchinson), aftas/candidiasis oral y dermatitis del pañal/hemangiomas."
    }
];

// =========================================================================
// ESTADO Y PERSISTENCIA (localStorage)
// =========================================================================
const STORAGE_KEY = 'planificador_finales_orl_derma_v1';
let lastTopicsJson = null;   // para detectar cambios reales en el progreso (y sincronizar con la nube)

let appState = {
    activeTab: 'unified',       // 'unified' | 'orl' | 'derma'
    statusFilter: 'all',        // 'all' | 'pending-resumen' | 'pending-estudio' | 'high-yield' | 'completed'
    selectedDate: '2026-11-20', // Para la vista unificada ('all' o fecha YYYY-MM-DD)
    searchQuery: '',
    topics: {}                  // { [id]: { resumido: bool, estudiado: bool, star: bool, note: string } }
};

// Inicializar estado por defecto
function initDefaultTopicsState() {
    TOPICS_DB.forEach(t => {
        if (!appState.topics[t.id]) {
            appState.topics[t.id] = {
                resumido: false,
                estudiado: false,
                star: t.highYield,
                note: ''
            };
        }
    });
}

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            appState = { ...appState, ...parsed };
        }
    } catch (e) {
        console.error("Error cargando localStorage:", e);
    }
    initDefaultTopicsState();
    lastTopicsJson = JSON.stringify(appState.topics);
}

function saveState() {
    try {
        // Si cambió el progreso (no solo filtros/búsqueda), marcar fecha y avisar a la nube
        const json = JSON.stringify(appState.topics);
        if (json !== lastTopicsJson) {
            lastTopicsJson = json;
            appState.topicsUpdatedAt = Date.now();
            if (window.Cloud) Cloud.schedulePush();
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
        console.error("Error guardando localStorage:", e);
    }
}

// Aplica el progreso bajado de la nube (lo llama cloud.js)
function applyRemoteTopics(topics, ts) {
    appState.topics = topics;
    initDefaultTopicsState();
    appState.topicsUpdatedAt = ts;
    lastTopicsJson = JSON.stringify(appState.topics);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appState)); } catch (e) {}
    updateProgressStats();
    renderContent();
    lucide.createIcons();
}

// =========================================================================
// INICIALIZACIÓN DE LA UI
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    updateCountdowns();
    renderDatePills();
    updateTabUI();
    updateFilterButtonsUI();
    updateProgressStats();
    renderContent();

    // Listener de búsqueda
    const searchInput = document.getElementById('search-input');
    searchInput.value = appState.searchQuery || '';
    toggleClearSearchBtn();
    searchInput.addEventListener('input', (e) => {
        appState.searchQuery = e.target.value;
        toggleClearSearchBtn();
        saveState();
        renderContent();
    });

    lucide.createIcons();
    if (window.Cloud) Cloud.init();
});

// =========================================================================
// CUENTAS REGRESIVAS DINÁMICAS
// =========================================================================
function updateCountdowns() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const orlDate = new Date(2026, 11, 2);   // 02 Dic 2026
    const dermaDate = new Date(2026, 11, 14); // 14 Dic 2026

    const formatDays = (target) => {
        const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
        if (diff > 1) return `Faltan ${diff} días`;
        if (diff === 1) return `¡Es mañana!`;
        if (diff === 0) return `¡Hoy es el final!`;
        return `Final rendido`;
    };

    document.querySelector('#orl-countdown span').textContent = formatDays(orlDate);
    document.querySelector('#derma-countdown span').textContent = formatDays(dermaDate);
}

// =========================================================================
// CÁLCULO DE ESTADÍSTICAS Y BARRAS DE PROGRESO
// =========================================================================
function updateProgressStats() {
    let orlTotal = 0, orlRes = 0, orlEst = 0;
    let dermaTotal = 0, dermaRes = 0, dermaEst = 0;

    TOPICS_DB.forEach(t => {
        const st = appState.topics[t.id] || { resumido: false, estudiado: false };
        if (t.subject === 'orl') {
            orlTotal++;
            if (st.resumido) orlRes++;
            if (st.estudiado) orlEst++;
        } else {
            dermaTotal++;
            if (st.resumido) dermaRes++;
            if (st.estudiado) dermaEst++;
        }
    });

    const calcPct = (val, tot) => tot ? Math.round((val / tot) * 100) : 0;

    // ORL UI
    const orlResPct = calcPct(orlRes, orlTotal);
    const orlEstPct = calcPct(orlEst, orlTotal);
    document.getElementById('orl-res-text').textContent = `${orlRes}/${orlTotal} (${orlResPct}%)`;
    document.getElementById('orl-res-bar').style.width = `${orlResPct}%`;
    document.getElementById('orl-est-text').textContent = `${orlEst}/${orlTotal} (${orlEstPct}%)`;
    document.getElementById('orl-est-bar').style.width = `${orlEstPct}%`;

    // Derma UI
    const dermaResPct = calcPct(dermaRes, dermaTotal);
    const dermaEstPct = calcPct(dermaEst, dermaTotal);
    document.getElementById('derma-res-text').textContent = `${dermaRes}/${dermaTotal} (${dermaResPct}%)`;
    document.getElementById('derma-res-bar').style.width = `${dermaResPct}%`;
    document.getElementById('derma-est-text').textContent = `${dermaEst}/${dermaTotal} (${dermaEstPct}%)`;
    document.getElementById('derma-est-bar').style.width = `${dermaEstPct}%`;

    // Global Badge
    const totalAll = orlTotal + dermaTotal;
    const estAll = orlEst + dermaEst;
    const resAll = orlRes + dermaRes;
    document.getElementById('global-summary-badge').textContent = 
        `Global: ${resAll}/${totalAll} resumidos · ${estAll}/${totalAll} estudiados`;
}

// =========================================================================
// NAVEGACIÓN POR PESTAÑAS Y SELECTOR DE FECHAS
// =========================================================================
function switchTab(tabId) {
    appState.activeTab = tabId;
    saveState();
    updateTabUI();
    renderContent();
}

function updateTabUI() {
    const tabs = ['unified', 'orl', 'derma'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (t === appState.activeTab) {
            btn.className = 'tab-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white shadow-sm transition-all shrink-0';
        } else {
            btn.className = 'tab-btn flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-200/70 transition-all shrink-0';
        }
    });

    // Mostrar/ocultar selector de fechas en Vista Unificada
    const datePanel = document.getElementById('date-selector-panel');
    if (appState.activeTab === 'unified') {
        datePanel.classList.remove('hidden');
    } else {
        datePanel.classList.add('hidden');
    }

    // Actualizar banner estratégico
    const banner = document.getElementById('strategy-banner');
    if (appState.activeTab === 'unified') {
        banner.innerHTML = `
            <div class="flex items-start sm:items-center gap-3">
                <div class="p-2 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                    <i data-lucide="compass" class="w-5 h-5"></i>
                </div>
                <div>
                    <h3 class="text-xs sm:text-sm font-bold text-slate-900">Estrategia Dual (20 Nov – 13 Dic)</h3>
                    <p class="text-xs text-slate-600 mt-0.5">
                        <strong>20/11 al 01/12:</strong> Prioridad máxima a <strong>ORL</strong> (1 unidad por día) + avance liviano de resúmenes de <strong>Derma</strong>. <strong>Desde el 03/12:</strong> Foco 100% exclusivo en <strong>Dermatología</strong>.
                    </p>
                </div>
            </div>
        `;
    } else if (appState.activeTab === 'orl') {
        banner.innerHTML = `
            <div class="flex items-start sm:items-center gap-3">
                <div class="p-2 bg-teal-50 text-teal-600 rounded-xl shrink-0">
                    <i data-lucide="stethoscope" class="w-5 h-5"></i>
                </div>
                <div>
                    <h3 class="text-xs sm:text-sm font-bold text-teal-950">Plan Intensivo ORL — Examen Miércoles 02/12</h3>
                    <p class="text-xs text-slate-600 mt-0.5">
                        Programa dividido en <strong>12 días exactos</strong> (Unidades 1 a 5). Tema preparado para iniciar el oral: <strong>Epistaxis</strong>.
                    </p>
                </div>
            </div>
        `;
    } else {
        banner.innerHTML = `
            <div class="flex items-start sm:items-center gap-3">
                <div class="p-2 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                    <i data-lucide="sparkles" class="w-5 h-5"></i>
                </div>
                <div>
                    <h3 class="text-xs sm:text-sm font-bold text-rose-950">Programa Clínica Dermatológica UCC — Examen Lunes 14/12</h3>
                    <p class="text-xs text-slate-600 mt-0.5">
                        Incluye las preguntas reales tomadas por <strong>C. Consigli, J. Consigli y M. Eleonora González</strong> (Sífilis, Melanoma, Acné/Rosácea, HACRE, Psoriasis, Ampollares IF).
                    </p>
                </div>
            </div>
        `;
    }
    lucide.createIcons();
}

function renderDatePills() {
    const container = document.getElementById('date-pills-container');
    container.innerHTML = '';

    // Pill "Todos los días"
    const allBtn = document.createElement('button');
    allBtn.onclick = () => selectDateFilter('all');
    allBtn.dataset.date = 'all';
    allBtn.className = getDatePillClass('all');
    allBtn.innerHTML = `<span>Todos los días</span>`;
    container.appendChild(allBtn);

    STUDY_DAYS.forEach(d => {
        const btn = document.createElement('button');
        btn.onclick = () => selectDateFilter(d.date);
        btn.dataset.date = d.date;
        btn.className = getDatePillClass(d.date);

        // Dot indicador de materia dominante ese día
        const isDermaOnly = d.date >= "2026-12-03";
        const isExam = d.date === "2026-12-02";
        const dotColor = isExam ? 'bg-amber-400' : (isDermaOnly ? 'bg-rose-500' : 'bg-teal-500');

        btn.innerHTML = `
            <span class="w-1.5 h-1.5 rounded-full ${dotColor}"></span>
            <span>${d.label}</span>
        `;
        container.appendChild(btn);
    });
}

function getDatePillClass(dateVal) {
    const isSelected = appState.selectedDate === dateVal;
    if (isSelected) {
        return 'date-pill flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow-xs shrink-0 transition-all';
    }
    return 'date-pill flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 shrink-0 transition-all';
}

function selectDateFilter(dateVal) {
    appState.selectedDate = dateVal;
    saveState();
    renderDatePills();
    renderContent();
}

// =========================================================================
// FILTROS DE ESTADO Y BÚSQUEDA
// =========================================================================
function setStatusFilter(filter) {
    appState.statusFilter = filter;
    saveState();
    updateFilterButtonsUI();
    renderContent();
}

function updateFilterButtonsUI() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const f = btn.dataset.filter;
        if (f === appState.statusFilter) {
            btn.className = 'filter-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white shadow-xs transition-all flex items-center gap-1';
        } else if (f === 'high-yield') {
            btn.className = 'filter-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-amber-700 border border-amber-200 hover:bg-amber-50 transition-all flex items-center gap-1';
        } else {
            btn.className = 'filter-btn px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-1';
        }
    });
}

function toggleClearSearchBtn() {
    const clearBtn = document.getElementById('clear-search');
    if (appState.searchQuery.trim().length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
}

function clearSearch() {
    appState.searchQuery = '';
    document.getElementById('search-input').value = '';
    toggleClearSearchBtn();
    saveState();
    renderContent();
}

function resetFilters() {
    appState.statusFilter = 'all';
    appState.selectedDate = 'all';
    appState.searchQuery = '';
    document.getElementById('search-input').value = '';
    toggleClearSearchBtn();
    saveState();
    updateFilterButtonsUI();
    renderDatePills();
    renderContent();
}

// =========================================================================
// RENDERIZADO DE TARJETAS Y GRUPOS
// =========================================================================
function filterTopicsList() {
    return TOPICS_DB.filter(t => {
        const st = appState.topics[t.id] || { resumido: false, estudiado: false, star: t.highYield };

        // 1. Filtro por pestaña
        if (appState.activeTab === 'orl' && t.subject !== 'orl') return false;
        if (appState.activeTab === 'derma' && t.subject !== 'derma') return false;

        // 2. Filtro por fecha (solo en Vista Unificada)
        if (appState.activeTab === 'unified' && appState.selectedDate !== 'all') {
            if (t.date !== appState.selectedDate) return false;
        }

        // 3. Filtro por estado
        if (appState.statusFilter === 'pending-resumen' && st.resumido) return false;
        if (appState.statusFilter === 'pending-estudio' && st.estudiado) return false;
        if (appState.statusFilter === 'high-yield' && !st.star) return false;
        if (appState.statusFilter === 'completed' && (!st.resumido || !st.estudiado)) return false;

        // 4. Búsqueda por texto
        if (appState.searchQuery.trim() !== '') {
            const q = appState.searchQuery.toLowerCase();
            const searchable = `${t.title} ${t.tip} ${t.tag} ${t.dateLabel} ${t.group} ${st.note || ''}`.toLowerCase();
            if (!searchable.includes(q)) return false;
        }

        return true;
    });
}

function renderContent() {
    const container = document.getElementById('topics-container');
    const emptyState = document.getElementById('empty-state');
    container.innerHTML = '';

    // Caso especial en Vista Unificada: Si selecciona el día del examen ORL (02/12) o días de repaso final Derma (06/12 - 13/12)
    if (appState.activeTab === 'unified' && appState.selectedDate !== 'all') {
        renderUnifiedDaySpecialBanner(container, appState.selectedDate);
    }

    const filtered = filterTopicsList();

    if (filtered.length === 0) {
        if (container.innerHTML === '') {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }
        lucide.createIcons();
        return;
    }
    emptyState.classList.add('hidden');

    // Agrupar según la pestaña activa
    const grouped = {};
    filtered.forEach(topic => {
        let groupKey = topic.group;
        if (appState.activeTab === 'unified') {
            groupKey = topic.subject === 'orl' 
                ? 'Otorrinolaringología — Prioridad Examen 02/12' 
                : 'Clínica Dermatológica — Avance Paralelo (Examen 14/12)';
        }
        if (!grouped[groupKey]) grouped[groupKey] = [];
        grouped[groupKey].push(topic);
    });

    Object.keys(grouped).forEach(groupName => {
        const items = grouped[groupName];
        const section = document.createElement('section');
        section.className = 'bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden';

        // Cabecera del bloque
        const isOrlGroup = items[0].subject === 'orl' && appState.activeTab === 'unified';
        const isDermaGroup = items[0].subject === 'derma' && appState.activeTab === 'unified';

        let headerBg = 'bg-slate-50/90';
        let accentDot = 'bg-indigo-600';
        if (isOrlGroup || appState.activeTab === 'orl') {
            headerBg = 'bg-teal-50/50';
            accentDot = 'bg-teal-600';
        } else if (isDermaGroup || appState.activeTab === 'derma') {
            headerBg = 'bg-rose-50/50';
            accentDot = 'bg-rose-600';
        }

        const header = document.createElement('div');
        header.className = `${headerBg} px-4 sm:px-5 py-3.5 border-b border-slate-200/80 flex items-center justify-between gap-2`;
        header.innerHTML = `
            <div class="flex items-center gap-2.5">
                <span class="w-2.5 h-2.5 rounded-full ${accentDot} shrink-0"></span>
                <h2 class="font-bold text-slate-900 text-sm sm:text-base">${groupName}</h2>
            </div>
            <span class="text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 shrink-0">
                ${items.length} ${items.length === 1 ? 'tema' : 'temas'}
            </span>
        `;
        section.appendChild(header);

        // Lista de tarjetas de temas
        const list = document.createElement('div');
        list.className = 'divide-y divide-slate-100';

        items.forEach(topic => {
            const st = appState.topics[topic.id] || { resumido: false, estudiado: false, star: topic.highYield, note: '' };

            let rowBg = 'bg-white';
            if (st.resumido && st.estudiado) rowBg = 'bg-emerald-50/40';
            else if (st.resumido || st.estudiado) rowBg = 'bg-blue-50/30';

            const subjectBadge = topic.subject === 'orl'
                ? `<span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-teal-100/80 text-teal-800 border border-teal-200/80">ORL</span>`
                : `<span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-rose-100/80 text-rose-800 border border-rose-200/80">DERMA</span>`;

            const row = document.createElement('div');
            row.id = `card-${topic.id}`;
            row.className = `${rowBg} p-4 sm:px-5 transition-colors hover:bg-slate-50/70`;

            row.innerHTML = `
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <!-- Columna Izquierda: Info del tema -->
                    <div class="flex-1 min-w-0">
                        <!-- Badges superiores -->
                        <div class="flex flex-wrap items-center gap-1.5 mb-1.5">
                            ${subjectBadge}
                            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/70">
                                <i data-lucide="calendar" class="w-3 h-3 text-slate-500"></i>
                                ${topic.dateLabel}
                            </span>
                            <span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-500">
                                ${topic.tag}
                            </span>
                            <button onclick="toggleStar('${topic.id}')" title="Marcar/desmarcar como Clave de mesa"
                                class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                                    st.star 
                                    ? 'bg-amber-100 text-amber-800 border border-amber-300 shadow-2xs' 
                                    : 'bg-slate-50 text-slate-400 border border-slate-200 hover:text-amber-600 hover:border-amber-200'
                                }">
                                <span>${st.star ? '⭐ Clave de mesa' : '☆ Marcar clave'}</span>
                            </button>
                        </div>

                        <!-- Título del tema -->
                        <h3 class="font-bold text-slate-900 text-sm sm:text-[15px] leading-snug">
                            ${topic.title}
                        </h3>

                        <!-- Notas clave de mesa -->
                        <p class="text-xs text-slate-600 mt-1.5 leading-relaxed bg-slate-50/90 p-2.5 rounded-xl border border-slate-200/60">
                            <strong class="text-slate-700">Tip de examen:</strong> ${topic.tip}
                        </p>

                        <!-- Nota personal rápida -->
                        <div class="mt-2">
                            ${st.note ? `
                                <div class="flex items-center justify-between gap-2 text-xs text-indigo-900 bg-indigo-50/70 px-3 py-1.5 rounded-lg border border-indigo-100">
                                    <span>📝 <strong>Mi nota:</strong> ${escapeHTML(st.note)}</span>
                                    <button onclick="editPersonalNote('${topic.id}')" class="text-indigo-600 hover:underline font-semibold shrink-0">Editar</button>
                                </div>
                            ` : `
                                <button onclick="editPersonalNote('${topic.id}')" class="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-indigo-600 transition-colors">
                                    <i data-lucide="plus-circle" class="w-3 h-3"></i>
                                    <span>Agregar apunte personal</span>
                                </button>
                            `}
                            <div id="note-editor-${topic.id}" class="hidden mt-2 flex items-center gap-2">
                                <input type="text" id="note-input-${topic.id}" value="${escapeHTML(st.note || '')}" 
                                    placeholder="Ej: Repasar dosis de penicilina o página del libro..."
                                    class="flex-1 text-xs px-3 py-1.5 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20">
                                <button onclick="savePersonalNote('${topic.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Columna Derecha: Checkboxes Duales -->
                    <div class="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 pt-3 sm:pt-1 border-t sm:border-t-0 border-slate-100 shrink-0">
                        <label class="flex items-center sm:justify-center gap-2 sm:w-20 cursor-pointer select-none">
                            <input type="checkbox" 
                                class="custom-checkbox cb-resumido" 
                                ${st.resumido ? 'checked' : ''} 
                                onchange="toggleTopicCheck('${topic.id}', 'resumido')">
                            <span class="text-xs font-bold text-blue-700 sm:hidden">Resumido</span>
                        </label>

                        <label class="flex items-center sm:justify-center gap-2 sm:w-20 cursor-pointer select-none">
                            <input type="checkbox" 
                                class="custom-checkbox cb-estudiado" 
                                ${st.estudiado ? 'checked' : ''} 
                                onchange="toggleTopicCheck('${topic.id}', 'estudiado')">
                            <span class="text-xs font-bold text-emerald-700 sm:hidden">Estudiado</span>
                        </label>
                    </div>
                </div>
            `;
            list.appendChild(row);
        });

        section.appendChild(list);
        container.appendChild(section);
    });

    lucide.createIcons();
}

// Banner informativo para días de examen o repaso intensivo de Derma en la vista unificada
function renderUnifiedDaySpecialBanner(container, dateStr) {
    const specialMessages = {
        "2026-12-02": {
            title: "🎯 ¡Hoy rendís el Final de Otorrinolaringología!",
            desc: "Todos los éxitos en la mesa. Descansá después de rendir y mañana arrancamos 100% con Dermatología.",
            color: "bg-teal-600 text-white"
        },
        "2026-12-06": {
            title: "Fase 2 Dermatología: Estudio Activo de Oncología Cutánea",
            desc: "Ya tenés los resúmenes armados. Hoy toca fijar Nevos displásicos, HACRE, CBC, CEC y Melanoma (Breslow + conducta post-biopsia).",
            color: "bg-rose-50 border border-rose-200 text-rose-950"
        },
        "2026-12-07": {
            title: "Fase 2 Dermatología: Estudio Activo de Infecciosas",
            desc: "Foco total en Sífilis (serología por etapa y penicilina), Herpes Zóster, Impétigo ampollar, Onicomicosis y Sarna.",
            color: "bg-rose-50 border border-rose-200 text-rose-950"
        },
        "2026-12-08": {
            title: "Fase 2 Dermatología: Estudio Activo de Inflamatorias",
            desc: "Foco en Acné vs Rosácea (comedogénesis), Psoriasis (formas graves/leves) y Eccema atópico.",
            color: "bg-rose-50 border border-rose-200 text-rose-950"
        },
        "2026-12-09": {
            title: "Fase 2 Dermatología: Estudio Activo de Autoinmunes y Urgencias",
            desc: "Foco en Ampollares (IF en Pénfigo vs Penfigoide), Esclerodermia y Farmacodermias graves (SJS/NET/DRESS).",
            color: "bg-rose-50 border border-rose-200 text-rose-950"
        },
        "2026-12-10": {
            title: "Fase 2 Dermatología: Integración y Repaso de Fichas Cortas",
            desc: "Repaso de manifestaciones sistémicas, complejo varicoso de MMII, alopecias, uñas, mucosa oral y dermatología pediátrica.",
            color: "bg-rose-50 border border-rose-200 text-rose-950"
        },
        "2026-12-11": {
            title: "Recta Final Dermatología: Repaso Exclusivo ⭐ Claves de Mesa",
            desc: "Activá el filtro '⭐ Clave de mesa' arriba y repasá uno por uno los temas que tomaron Consigli y Eleonora.",
            color: "bg-amber-50 border border-amber-200 text-amber-950"
        },
        "2026-12-12": {
            title: "Recta Final Dermatología: Simulacro de Examen Oral",
            desc: "Practicá en voz alta tu tema de apertura (ej. Sífilis o Melanoma) cronometrado en 5 minutos y describí fotos de lesiones elementales.",
            color: "bg-amber-50 border border-amber-200 text-amber-950"
        },
        "2026-12-13": {
            title: "Víspera del Final (14/12): Repaso Exprés y Descanso",
            desc: "Lectura rápida de esquemas terapéuticos (penicilina, aciclovir, corticoides, isotretinoína) y a descansar temprano.",
            color: "bg-indigo-50 border border-indigo-200 text-indigo-950"
        }
    };

    if (specialMessages[dateStr]) {
        const msg = specialMessages[dateStr];
        const div = document.createElement('div');
        div.className = `${msg.color} p-4 rounded-2xl shadow-2xs mb-4`;
        div.innerHTML = `
            <h3 class="font-bold text-sm sm:text-base">${msg.title}</h3>
            <p class="text-xs sm:text-sm opacity-90 mt-1">${msg.desc}</p>
        `;
        container.appendChild(div);
    }
}

// =========================================================================
// INTERACCIONES DEL USUARIO (Checkboxes, Estrellas, Notas)
// =========================================================================
function toggleTopicCheck(topicId, field) {
    if (!appState.topics[topicId]) {
        appState.topics[topicId] = { resumido: false, estudiado: false, star: false, note: '' };
    }
    appState.topics[topicId][field] = !appState.topics[topicId][field];
    saveState();
    updateProgressStats();

    // Si hay filtro de pendientes/completados activo, re-renderizar para actualizar lista
    if (['pending-resumen', 'pending-estudio', 'completed'].includes(appState.statusFilter)) {
        setTimeout(() => renderContent(), 180);
    } else {
        // Solo actualizar color de fondo de la tarjeta
        const card = document.getElementById(`card-${topicId}`);
        const st = appState.topics[topicId];
        if (card) {
            card.classList.remove('bg-white', 'bg-emerald-50/40', 'bg-blue-50/30');
            if (st.resumido && st.estudiado) card.classList.add('bg-emerald-50/40');
            else if (st.resumido || st.estudiado) card.classList.add('bg-blue-50/30');
            else card.classList.add('bg-white');
        }
    }

    showToast(field === 'resumido' ? 'Resumen actualizado' : 'Estudio actualizado');
}

function toggleStar(topicId) {
    if (!appState.topics[topicId]) return;
    appState.topics[topicId].star = !appState.topics[topicId].star;
    saveState();
    renderContent();
    showToast(appState.topics[topicId].star ? 'Marcado como Clave de mesa' : 'Desmarcado como clave');
}

function editPersonalNote(topicId) {
    const editor = document.getElementById(`note-editor-${topicId}`);
    if (editor) {
        editor.classList.toggle('hidden');
        const input = document.getElementById(`note-input-${topicId}`);
        if (!editor.classList.contains('hidden')) input.focus();
    }
}

function savePersonalNote(topicId) {
    const input = document.getElementById(`note-input-${topicId}`);
    if (input && appState.topics[topicId]) {
        appState.topics[topicId].note = input.value.trim();
        saveState();
        renderContent();
        showToast('Apunte personal guardado');
    }
}

// =========================================================================
// UTILIDADES (Copiar resumen, Reset, Toast, Escape HTML)
// =========================================================================
function copySummary() {
    let orlT = 0, orlR = 0, orlE = 0;
    let dermaT = 0, dermaR = 0, dermaE = 0;

    TOPICS_DB.forEach(t => {
        const st = appState.topics[t.id] || {};
        if (t.subject === 'orl') {
            orlT++; if (st.resumido) orlR++; if (st.estudiado) orlE++;
        } else {
            dermaT++; if (st.resumido) dermaR++; if (st.estudiado) dermaE++;
        }
    });

    const text = `📊 Avance Finales Diciembre:\n` +
        `🩺 ORL (02/12): ${orlR}/${orlT} resumidos (${Math.round(orlR/orlT*100)}%) | ${orlE}/${orlT} estudiados (${Math.round(orlE/orlT*100)}%)\n` +
        `🔬 Dermatología (14/12): ${dermaR}/${dermaT} resumidos (${Math.round(dermaR/dermaT*100)}%) | ${dermaE}/${dermaT} estudiados (${Math.round(dermaE/dermaT*100)}%)`;

    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    showToast('Reporte de avance copiado al portapapeles');
}

function openResetModal() {
    document.getElementById('reset-modal').classList.remove('hidden');
}
function closeResetModal() {
    document.getElementById('reset-modal').classList.add('hidden');
}
function confirmReset() {
    appState.topics = {};
    initDefaultTopicsState();
    saveState();
    updateProgressStats();
    renderContent();
    closeResetModal();
    showToast('Todo el progreso fue reiniciado');
}

let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    toast.classList.remove('translate-y-24', 'opacity-0');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 2200);
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]));
}
