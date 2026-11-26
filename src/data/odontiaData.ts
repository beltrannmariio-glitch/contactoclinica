export type ServiceCategory =
  | 'todas'
  | 'preventiva'
  | 'especialidades'
  | 'diagnostico';

export interface DentalService {
  id: string;
  index: string;
  name: string;
  category: Exclude<ServiceCategory, 'todas'>;
  categoryLabel: string;
  image: string;
  imageAlt: string;
  simpleExplanation: string;
  treatmentObjective: string;
  detailSummary: string;
  keyAspects: string[];
}

export interface ClinicLocation {
  id: string;
  code: string;
  name: string;
  shortLabel: string;
  description: string;
  mapsUrl: string;
  image: string;
  imageAlt: string;
  accentTone: 'navy' | 'petrol' | 'turquoise';
}

export interface PatientGuideTopic {
  id: string;
  index: string;
  title: string;
  summary: string;
  recommendations: string[];
}

export interface OralHealthArticle {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  recommendations: string[];
  iconName:
    | 'brush'
    | 'sparkles'
    | 'shield'
    | 'activity'
    | 'apple'
    | 'layers'
    | 'heart';
}

export const HERO_IMAGE = '/assets/aistudio/images__21__1a75298c.jpg';
export const CAMPUS_IMAGE = '/assets/aistudio/images__18__bc85af4d.jpg';
export const HYGIENE_IMAGE = '/assets/aistudio/images__24__27b3996c.jpg';

const IMG_PREVENTIVE = '/src/assets/images/clinical_preventive_checkup_1795680210940.jpg';
const IMG_DIAGNOSTIC = '/src/assets/images/clinical_radiology_ortho_1795680211425.jpg';
const IMG_PROSTHETICS = '/src/assets/images/clinical_prosthetics_surgery_1795680211658.jpg';

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'odontologia-preventiva',
    index: '01.',
    name: 'Odontología preventiva',
    category: 'preventiva',
    categoryLabel: 'Atención preventiva',
    image: IMG_PREVENTIVE,
    imageAlt: 'Instrumental estéril de diagnóstico dental utilizado en odontología preventiva',
    simpleExplanation:
      'Área enfocada en la valoración periódica, la educación en higiene oral y el cuidado oportuno antes de que aparezcan lesiones avanzadas.',
    treatmentObjective:
      'Conservar la salud de dientes y encías mediante la prevención de caries, placa dentobacteriana y padecimientos bucales.',
    detailSummary:
      'La odontología preventiva constituye la base del cuidado bucal universitario. Permite identificar signos tempranos de alteraciones dentales y orientar al paciente sobre hábitos diarios efectivos.',
    keyAspects: [
      'Valoración clínica integral de dientes, encías y tejidos blandos.',
      'Orientación personalizada sobre técnica de cepillado y uso de hilo dental.',
      'Detección temprana de factores de riesgo en niños, jóvenes y adultos.',
    ],
  },
  {
    id: 'operatoria-dental',
    index: '02.',
    name: 'Operatoria dental',
    category: 'preventiva',
    categoryLabel: 'Atención restauradora',
    image: '/assets/aistudio/images__22__4b10a8c8.jpg',
    imageAlt: 'Atención clínica odontológica en operatoria y restauración dental UABC',
    simpleExplanation:
      'Se encarga de diagnosticar y restaurar los tejidos duros del diente afectados por caries, desgaste o fracturas menores.',
    treatmentObjective:
      'Devolver la forma, función masticatoria y estética natural de las piezas dentales dañadas conservando la mayor estructura sana posible.',
    detailSummary:
      'Mediante técnicas conservadoras y materiales restauradores actuales, la operatoria dental detiene el avance de lesiones en esmalte y dentina para proteger la vitalidad dental.',
    keyAspects: [
      'Eliminación controlada de tejido afectado por caries.',
      'Restauración anatómica y funcional de la pieza dental.',
      'Preservación de la estructura dental remanente y ajuste oclusal.',
    ],
  },
  {
    id: 'periodoncia',
    index: '03.',
    name: 'Periodoncia',
    category: 'especialidades',
    categoryLabel: 'Especialidad clínica',
    image: '/assets/aistudio/images__25__0556d21b.jpg',
    imageAlt: 'Valoración clínica periodontal en consultorio universitario',
    simpleExplanation:
      'Rama dedicada al estudio, diagnóstico y cuidado de los tejidos que rodean y sostienen a los dientes, como las encías y el hueso alveolar.',
    treatmentObjective:
      'Controlar la inflamación gingival y preservar el soporte natural de los dientes para evitar movilidad o pérdida dental.',
    detailSummary:
      'Las alteraciones periodontales suelen iniciar con sangrado o inflamación en las encías. Su atención oportuna contribuye a mantener la estabilidad dental y el equilibrio de la cavidad bucal.',
    keyAspects: [
      'Evaluación clínica del estado de las encías y tejidos de soporte.',
      'Control de placa bacteriana y cálculo dental adherido.',
      'Seguimiento periódico orientado al mantenimiento de la salud gingival.',
    ],
  },
  {
    id: 'endodoncia',
    index: '04.',
    name: 'Endodoncia',
    category: 'especialidades',
    categoryLabel: 'Especialidad clínica',
    image: IMG_DIAGNOSTIC,
    imageAlt: 'Estación de diagnóstico digital para valoración radicular y endodóntica',
    simpleExplanation:
      'Disciplina orientada a la atención del tejido interno del diente (pulpa dental) y los conductos radiculares cuando presentan inflamación o infección.',
    treatmentObjective:
      'Aliviar el dolor de origen dental, eliminar infecciones internas y conservar el diente natural en boca de manera funcional.',
    detailSummary:
      'Cuando una caries profunda o traumatismo compromete el tejido interno dental, la valoración endodóntica permite determinar la viabilidad de conservar la pieza sin recurrir a su extracción.',
    keyAspects: [
      'Diagnóstico clínico y apoyo imagenológico de la cámara pulpar y raíces.',
      'Limpieza y conformación cuidadosa del sistema de conductos.',
      'Sellado interno orientado a prevenir reinfecciones futuras.',
    ],
  },
  {
    id: 'cirugia-bucal',
    index: '05.',
    name: 'Cirugía bucal',
    category: 'especialidades',
    categoryLabel: 'Especialidad clínica',
    image: IMG_PROSTHETICS,
    imageAlt: 'Instrumental quirúrgico dental dispuesto en entorno clínico estéril',
    simpleExplanation:
      'Área clínica encargada de procedimientos quirúrgicos ambulatorios en cavidad oral, como extracciones complejas y atención de dientes retenidos.',
    treatmentObjective:
      'Resolver de forma segura y controlada padecimientos anatómicos o infecciosos que requieren intervención quirúrgica localizada.',
    detailSummary:
      'Toda valoración quirúrgica considera el estado general de salud del paciente, el análisis diagnóstico previo y las indicaciones claras para una recuperación ordenada.',
    keyAspects: [
      'Evaluación clínica y radiográfica previa a cualquier intervención.',
      'Manejo bajo protocolos universitarios de bioseguridad y esterilización.',
      'Indicaciones detalladas de cuidados posoperatorios para el paciente.',
    ],
  },
  {
    id: 'protesis-dental',
    index: '06.',
    name: 'Prótesis dental',
    category: 'especialidades',
    categoryLabel: 'Rehabilitación oral',
    image: IMG_PROSTHETICS,
    imageAlt: 'Modelos dentales cerámicos de precisión para rehabilitación protésica',
    simpleExplanation:
      'Especialidad dedicada a diseñar y adaptar estructuras que sustituyen una o varias piezas dentales ausentes o extensamente dañadas.',
    treatmentObjective:
      'Restablecer la capacidad de masticación, la fonación y la armonía facial del paciente mediante rehabilitación oral funcional.',
    detailSummary:
      'La rehabilitación protésica se planifica según las condiciones particulares de cada boca, buscando estabilidad, comodidad y facilidad de higiene para el paciente.',
    keyAspects: [
      'Análisis integral de la mordida y espacios edéntulos.',
      'Planificación de rehabilitación fija o removible acorde al caso.',
      'Orientación sobre adaptación, limpieza y conservación de la prótesis.',
    ],
  },
  {
    id: 'odontopediatria',
    index: '07.',
    name: 'Odontopediatría',
    category: 'preventiva',
    categoryLabel: 'Atención infantil',
    image: '/assets/aistudio/images__20__6d0894c2.jpg',
    imageAlt: 'Atención clínica odontopediátrica en clínica infantil universitaria UABC',
    simpleExplanation:
      'Atención odontológica diseñada para niñas, niños y adolescentes, acompañada de orientación para madres, padres y tutores.',
    treatmentObjective:
      'Acompañar el desarrollo saludable de la dentición temporal y permanente, fomentando experiencias clínicas tranquilas y hábitos preventivos.',
    detailSummary:
      'La atención temprana ayuda a vigilar el recambio dental, prevenir lesiones por caries desde la infancia y generar confianza en las consultas periódicas.',
    keyAspects: [
      'Seguimiento del crecimiento maxilar y erupción dental infantil.',
      'Medidas preventivas adaptadas a cada etapa del desarrollo.',
      'Guía práctica de higiene bucal dirigida a la familia.',
    ],
  },
  {
    id: 'radiologia-dental',
    index: '08.',
    name: 'Radiología dental',
    category: 'diagnostico',
    categoryLabel: 'Diagnóstico por imagen',
    image: IMG_DIAGNOSTIC,
    imageAlt: 'Monitor clínico con estudios radiográficos dentales panorámicos e intraorales',
    simpleExplanation:
      'Servicio de apoyo diagnóstico que obtiene imágenes internas de dientes, raíces y estructuras óseas no visibles a simple vista.',
    treatmentObjective:
      'Brindar información anatómica precisa que respalde un diagnóstico certero y una planificación clínica segura.',
    detailSummary:
      'Las imágenes radiográficas permiten observar estructuras profundas, valorar el desarrollo dental, detectar lesiones ocultas y orientar distintas especialidades odontológicas.',
    keyAspects: [
      'Apoyo diagnóstico fundamental para valoración integral.',
      'Visualización detallada de piezas dentales, raíces y hueso de soporte.',
      'Respaldo directo para planes de tratamiento interdisciplinarios.',
    ],
  },
  {
    id: 'ortodoncia',
    index: '09.',
    name: 'Ortodoncia',
    category: 'diagnostico',
    categoryLabel: 'Alineación y oclusión',
    image: IMG_DIAGNOSTIC,
    imageAlt: 'Modelo dental y diagnóstico digital para valoración de alineación ortodóntica',
    simpleExplanation:
      'Área enfocada en estudiar y corregir la posición de los dientes y la relación entre ambos maxilares durante el crecimiento o en edad adulta.',
    treatmentObjective:
      'Lograr una mordida funcional, equilibrada y armónica que facilite la higiene diaria y proteja las articulaciones y encías.',
    detailSummary:
      'Una correcta alineación dental favorece tanto la función masticatoria como la limpieza entre piezas dentales, reduciendo el riesgo de desgastes irregulares.',
    keyAspects: [
      'Estudio diagnóstico de la oclusión y alineación dental.',
      'Valoración de crecimiento cráneo-facial y espacio en arcadas.',
      'Seguimiento clínico estructurado orientado al equilibrio funcional.',
    ],
  },
];

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'clinica-naranjos',
    code: 'SEDE 01',
    name: 'Clínica Naranjos',
    shortLabel: 'Zona Naranjos · Mexicali',
    description:
      'Unidad clínica universitaria de la Facultad de Odontología UABC en Mexicali, habilitada para brindar atención y orientación odontológica a la comunidad.',
    mapsUrl: 'https://maps.app.goo.gl/VLnoo9nhLiMqKMCh6',
    image: '/assets/aistudio/images__23__a8f17da8.jpg',
    imageAlt: 'Fachada exterior de Clínica Dental Naranjos UABC en Mexicali',
    accentTone: 'navy',
  },
  {
    id: 'clinica-calafia',
    code: 'SEDE 02',
    name: 'Clínica Calafia',
    shortLabel: 'Zona Calafia · Mexicali',
    description:
      'Sede clínica universitaria orientada al cuidado bucal de pacientes y familias, respaldada por el entorno académico de la UABC.',
    mapsUrl: 'https://share.google/7CZeeMVIoVcflDBR5',
    image: '/assets/aistudio/images__19__0b29f586.jpg',
    imageAlt: 'Atención odontológica universitaria en sede clínica UABC',
    accentTone: 'petrol',
  },
  {
    id: 'clinica-calle-11',
    code: 'SEDE 03',
    name: 'Clínica Calle 11',
    shortLabel: 'Zona Calle 11 · Mexicali',
    description:
      'Clínica universitaria de la Facultad de Odontología que acerca servicios de valoración y atención odontológica a su sector de Mexicali.',
    mapsUrl: 'https://maps.app.goo.gl/xpdG1vq4aRa1hThs8',
    image: '/assets/aistudio/images__26__b71634c1.jpg',
    imageAlt: 'Estudiantes de odontología UABC realizando prácticas clínicas',
    accentTone: 'turquoise',
  },
];

export const PATIENT_GUIDE_TOPICS: PatientGuideTopic[] = [
  {
    id: 'primera-consulta',
    index: '01.',
    title: 'Primera consulta odontológica',
    summary:
      'La primera visita tiene como finalidad conocer tu estado general de salud bucal, escuchar el motivo de consulta y establecer un plan de orientación clínica claro.',
    recommendations: [
      'Acudir con tus dientes cepillados y con disponibilidad de tiempo para la valoración inicial.',
      'Comentar si presentas alguna condición médica general, alergias o si tomas medicamentos de forma habitual.',
      'Compartir cualquier molestia, sensibilidad o antecedente dental previo para facilitar una evaluación integral.',
    ],
  },
  {
    id: 'revisiones-periodicas',
    index: '02.',
    title: 'Importancia de las revisiones periódicas',
    summary:
      'Asistir a valoración dental de forma regular permite detectar alteraciones en etapas iniciales, antes de que generen dolor o requieran tratamientos más complejos.',
    recommendations: [
      'Programar revisiones preventivas periódicas incluso cuando no exista dolor o molestia evidente.',
      'Dar seguimiento a restauraciones previas, encías y estructuras de soporte dental.',
      'Reforzar técnicas de cuidado personal de acuerdo con cada etapa de la vida.',
    ],
  },
  {
    id: 'prevencion-enfermedades',
    index: '03.',
    title: 'Prevención de enfermedades bucales',
    summary:
      'La mayoría de los padecimientos bucales, como la caries y la inflamación de encías, pueden prevenirse mediante hábitos constantes y atención oportuna.',
    recommendations: [
      'Mantener una rutina constante de limpieza después de los alimentos principales y antes de dormir.',
      'Evitar el consumo frecuente de azúcares libres y bebidas ácidas entre comidas.',
      'Consultar ante signos tempranos como sangrado de encías, mal aliento persistente o sensibilidad al frío.',
    ],
  },
  {
    id: 'higiene-dental',
    index: '04.',
    title: 'Higiene dental',
    summary:
      'Una higiene bucal completa combina el cepillado adecuado, la limpieza interdental y el reemplazo oportuno de los implementos de cuidado diario.',
    recommendations: [
      'Utilizar cepillo de cerdas suaves y pasta dental fluorurada en cantidad adecuada.',
      'Complementar el cepillado diario con hilo dental para limpiar las zonas entre dientes.',
      'Renovar el cepillo dental cada tres meses o cuando las cerdas muestren desgaste.',
    ],
  },
  {
    id: 'cuidados-antes-despues',
    index: '05.',
    title: 'Cuidados antes y después de tratamientos',
    summary:
      'Seguir las indicaciones clínicas previas y posteriores a cada atención contribuye a una experiencia más cómoda y favorece una recuperación adecuada.',
    recommendations: [
      'Antes de acudir, mantener una higiene bucal cuidadosa y no suspender medicamentos indicados por tu médico sin consultarlo.',
      'Después de procedimientos bajo anestesia local, evitar masticar alimentos calientes o duros hasta recuperar por completo la sensibilidad.',
      'Respetar estrictamente las recomendaciones de reposo, higiene localizada y seguimiento indicadas en consulta.',
    ],
  },
  {
    id: 'orientacion-general',
    index: '06.',
    title: 'Orientación general para pacientes',
    summary:
      'Las clínicas universitarias de la Facultad de Odontología UABC ofrecen información transparente para acompañar a pacientes y familias durante su proceso de atención.',
    recommendations: [
      'Consultar previamente la ubicación de la clínica universitaria más conveniente mediante los enlaces oficiales de esta plataforma.',
      'Resolver cualquier duda sobre tu motivo de consulta o atención general a través del correo institucional de contacto.',
      'En el caso de menores de edad, acudir en compañía de madre, padre o tutor legal responsable.',
    ],
  },
];

export const ORAL_HEALTH_ARTICLES: OralHealthArticle[] = [
  {
    id: 'tecnica-cepillado',
    index: '01.',
    title: 'Técnica correcta de cepillado',
    subtitle: 'Control efectivo de placa sin lesionar el esmalte ni las encías',
    readTime: 'Guía práctica',
    iconName: 'brush',
    summary:
      'Cepillar los dientes con una técnica suave y ordenada es más efectivo que aplicar fuerza excesiva. El objetivo es retirar la placa bacteriana acumulada en la unión entre el diente y la encía.',
    recommendations: [
      'Coloca el cepillo en un ángulo aproximado de 45 grados hacia la línea de la encía.',
      'Realiza movimientos suaves de barrido o vibración corta, evitando frotar horizontalmente con fuerza.',
      'Limpia sistemáticamente todas las caras de los dientes: externas, internas y superficies de masticación, además de la lengua.',
    ],
  },
  {
    id: 'uso-hilo-dental',
    index: '02.',
    title: 'Uso del hilo dental',
    subtitle: 'Limpieza interdental diaria para prevenir caries ocultas e inflamación',
    readTime: 'Higiene diaria',
    iconName: 'sparkles',
    summary:
      'Las cerdas del cepillo no alcanzan los espacios estrechos entre diente y diente. El hilo dental diario completa la higiene al retirar restos alimenticios y placa en esas zonas.',
    recommendations: [
      'Utiliza un segmento suficiente de hilo dental limpio para ir avanzando con una sección nueva en cada espacio.',
      'Deslízalo suavemente entre los dientes rodeando la superficie lateral en forma de letra C.',
      'Evita golpear la encía al introducir el hilo y utilízalo al menos una vez al día, preferentemente por la noche.',
    ],
  },
  {
    id: 'prevencion-caries',
    index: '03.',
    title: 'Prevención de caries',
    subtitle: 'Protección del esmalte frente a la desmineralización',
    readTime: 'Prevención',
    iconName: 'shield',
    summary:
      'La caries dental es un proceso gradual causado por ácidos producidos por bacterias al metabolizar azúcares. Su prevención depende del control de placa, flúor y hábitos alimenticios.',
    recommendations: [
      'Cepíllate con pasta dental con flúor después de las comidas y antes de dormir.',
      'Limita el consumo frecuente de dulces, panadería refinada y bebidas azucaradas entre comidas.',
      'Acude a revisiones preventivas para detectar manchas blancas o lesiones iniciales a tiempo.',
    ],
  },
  {
    id: 'enfermedades-periodontales',
    index: '04.',
    title: 'Enfermedades periodontales',
    subtitle: 'Señales de alerta en encías y soporte dental',
    readTime: 'Salud gingival',
    iconName: 'activity',
    summary:
      'El enrojecimiento o sangrado de encías al cepillarse no debe considerarse normal. Puede ser señal temprana de gingivitis o inflamación de los tejidos que sostienen el diente.',
    recommendations: [
      'Observa si tus encías presentan sangrado, hinchazón, retracción o sensibilidad persistente.',
      'No suspendas el cepillado por temor al sangrado; utiliza un cepillo suave y acude a valoración clínica.',
      'Mantén el control de higiene interdental para evitar la acumulación de sarro en el margen gingival.',
    ],
  },
  {
    id: 'alimentacion-salud-bucal',
    index: '05.',
    title: 'Alimentación y salud bucal',
    subtitle: 'El impacto de la frecuencia alimentaria y la hidratación',
    readTime: 'Nutrición oral',
    iconName: 'apple',
    summary:
      'La salud de los dientes está estrechamente ligada al tipo de alimentos y al número de veces que se ingieren azúcares o bebidas ácidas durante el día.',
    recommendations: [
      'Prioriza agua natural como bebida principal durante el día para favorecer el flujo salival.',
      'Consume frutas y verduras frescas ricas en fibra como parte de comidas principales.',
      'Reduce el picoteo constante de botanas pegajosas o refrescos que mantienen un ambiente ácido prolongado.',
    ],
  },
  {
    id: 'cuidado-protesis',
    index: '06.',
    title: 'Cuidado de prótesis',
    subtitle: 'Higiene, conservación y descanso de los tejidos orales',
    readTime: 'Rehabilitación',
    iconName: 'layers',
    summary:
      'Las prótesis dentales requieren limpieza específica todos los días para evitar acumulación de residuos, irritación de las encías y alteraciones en los tejidos de soporte.',
    recommendations: [
      'Lava las prótesis removibles después de cada comida con un cepillo específico y agua, evitando pastas abrasivas.',
      'Retira las prótesis removibles durante la noche si así fue indicado en consulta para permitir el descanso de la mucosa.',
      'Guárdalas en un recipiente limpio y acude a revisión si notas desajuste, movimiento o roce.',
    ],
  },
  {
    id: 'salud-bucal-infantil',
    index: '07.',
    title: 'Salud bucal infantil',
    subtitle: 'Acompañamiento desde los primeros dientes',
    readTime: 'Atención familiar',
    iconName: 'heart',
    summary:
      'Los dientes temporales cumplen funciones esenciales para la masticación, el habla y la guía de los dientes permanentes. Cuidarlos desde la infancia protege la salud futura.',
    recommendations: [
      'Inicia la limpieza bucal desde la aparición del primer diente con supervisión de un adulto.',
      'Fomenta el hábito del cepillado nocturno como parte de la rutina diaria familiar.',
      'Programa consultas preventivas tempranas para acompañar el crecimiento y recambio dental.',
    ],
  },
];
