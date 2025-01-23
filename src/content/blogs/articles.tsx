
import { Article } from "@interfaces/interfaces";

export const articles: Article[] = [
  {
    id: "1",
    category: "tips-balance",
    slug: "21k-juntos",
    title: "21K juntos",
    subtitle: "Prepárate para tu primera media maratón",
    description: "Correr una media maratón es un objetivo desafiante pero alcanzable para muchos corredores. Con el entrenamiento adecuado y la preparación correcta, puedes completar los 21K de manera segura y satisfactoria.",
    coverImage: "/assets/images/21k-juntos.webp",
    author: "Monica Gomez",
    date: "15 de Enero, 2025",
    readingTime: "8 min de lectura",
    content: (
      <>
        <h2>¡¿Listos para empezar?!</h2>
        <p>
          Es importante que antes de empezar conozcas tu ritmo para correr tus 21k, esto para poder adaptar ese paso en los intervalos “rápidos”. Si no sabes o es tu primera vez, simplemente hazlo basado en una escala de esfuerzos.
        </p>

        <p>
          Hoy les traigo una tabla de entrenamiento para 12 semanas, así llegaremos a la meta, juntos:
        </p>

        <img src="https://www.vidaenbalance.com/wp-content/uploads/2023/05/Tabla21K_DisfrutaCuidandote-768x913.jpg" alt="Tabla de entrenamiento para 21K" title="Tabla de entrenamiento para 21K" />
      </>
    ),
    relatedArticles: [
      {
        id: "2",
        title: "Evitando lesiones",
        excerpt: "Aprende a prevenir lesiones",
        image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&h=500",
        slug: "evitando-lesiones",
        category: "tips-balance"
      },
      {
        id: "3",
        title: "El mejor tratamiento para vivir en balance",
        excerpt: "Meditación para corredores",
        image: "/assets/images/vivir-balance.webp",
        slug: "el-mejor-tratamiento-para-vivir-en-balance",
        category: "tips-balance"
      },
    ]
  },
  {
    id: "2",
    category: "tips-balance",
    slug: "evitando-lesiones",
    title: "Evitando lesiones",
    subtitle: "Aprende a prevenir lesiones",
    description: "Las lesiones son uno de los mayores obstáculos para los corredores, tanto principiantes como experimentados. Afortunadamente, con las precauciones adecuadas, muchas lesiones comunes pueden prevenirse.",
    coverImage: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=2070&h=1000",
    author: "Iñigo Salazar",
    date: "16 de Enero, 2025",
    readingTime: "6 min de lectura",
    content: (
    <>
      <h2>El origen del movimiento humano</h2>
      <p>
        Desde el inicio de los tiempos, el ser humano ha estado en constante movimiento, realizando actividad física sin llamarlo un deporte como tal. Desde el cavernícola que tenía que correr para cazar o aquel hombre de la antigua Grecia que corrió de Atenas a Maratón para anunciar el fin de la guerra.
      </p>
      <h3>La evolución de la actividad física</h3>
      <p>
        Con esto, la actividad física ha evolucionado a tener una diversidad de deportes que día a día han llevado al atleta a ser más competitivo. Estos logros son sólo la punta del iceberg, porque debajo del agua hay una suma de cualidades como: la constancia, el compromiso, la dedicación y el esfuerzo que lo llevan a cumplir sus metas.
      </p>

      <h3>El rol del atleta en el cuidado del cuerpo</h3>
      <p>
        Como atleta deben saber plantear sus metas, cuidar su cuerpo y evitar lesiones para llevarlo a esos logros. Así como, tomar en cuenta que nadie está exento de lesionarse. El objetivo es prevenir lesiones y preparar tu cuerpo de la mejor manera. El día de hoy hablaremos de 9 puntos para cualquier gesta deportiva y cómo evitar posibles lesiones.
      </p>
      <ul>
        <li><strong>Hidratación:</strong> La hidratación juega un papel fundamental, ya que evita lesiones musculares. Lo recomendable es ingerir 1 litro por cada 25 kg de peso corporal.</li>
        <li><strong>Fuerza:</strong> Este aspecto regula hasta dónde el cuerpo puede llegar. El resultado será directamente proporcional a la fuerza muscular que tengas. Si buscas explosividad, es decir, correr 100 metros, CrossFit o entrenamientos de corta duración, tendrás que hacer pocas repeticiones con mucho peso. En cambio, si tu objetivo es de larga duración, ya sea medio maratón, un triatlón, maratón, nados de aguas abiertas, será necesario realizar un entrenamiento de larga duración con muchas repeticiones y poco peso. Como consejo, progresa tu entrenamiento 10% cada 21 días para evitar lesiones.</li>
        <li><strong>Estiramiento:</strong> Es muy importante estirar posterior al entrenamiento. Nunca lo realices previo a tu sesión, ya que podrás lastimarte. Lo recomendado es estirarte en series de 30 segundos tres veces.</li>
        <li><strong>Calentamiento:</strong> Se recomienda calentar previo a la gesta deportiva, ya que de esta forma preparas y lubricas los músculos para la prevención de desgaste articular.</li>
        <li><strong>Progresión en el entrenamiento:</strong> Busca un especialista que te apoye y guíe durante todo el entrenamiento para evitar sobrecarga muscular. De esta manera, alcanzarás tu objetivo en la mejor condición.</li>
        <li><strong>Nutrición:</strong> Nuestro cuerpo funciona como un motor y la gasolina que requiere este motor está conformada de una buena alimentación. Esto será la base de un adecuado entrenamiento y es fundamental asesorarse con un especialista en nutrición deportiva.</li>
        <li><strong>Descanso:</strong> En el sueño profundo sintetizamos la glucosa de manera más eficiente. De esta manera podemos aprovechar los carbohidratos con mayor eficiencia como fuente de energía en nuestro entrenamiento. Además, durante la fase REM del sueño se alinean nuestras fibras musculares, lo cual es benefactor para obtener una buena recuperación a largo plazo. Por todo lo anterior, es indispensable dormir entre 6 y 7 horas como mínimo.</li>
        <li><strong>Equipo adecuado:</strong> Cada deporte es diferente, por lo que demanda equipo específico para cada disciplina. Esto ayudará a poder desempeñarte de una manera adecuada evitando accidentes.</li>
        <li><strong>Recuperación:</strong> Para lograr objetivos a corto, mediano y largo plazo es fundamental integrar este aspecto en el entrenamiento. La recuperación está integrada por el descanso y masajes de descarga. Estos masajes consisten en liberar el ácido láctico e hialurónico que se acumula en las piernas por los entrenamientos. Se recomienda realizarse estos masajes cada 15 días o una vez al mes, dependiendo la fase de entrenamiento en la que estés.</li>
      </ul>
      <p>
        Estos 9 componentes de la gesta deportiva son muy importantes para disminuir lesiones y cuidar tu cuerpo. Además, siguiendo estos puntos disfrutarás el deporte que elijas y aprenderás a escuchar tu cuerpo para siempre replantearte tus objetivos y llegar más lejos.
      </p>
      <p>
        <strong>"No se puede poner límites a nuestros sueños. Cuanto más soñamos, más lejos se encuentra la meta." – Michael Phelps</strong>
      </p>
    </>
    ),
      relatedArticles: [
        {
          id: "1",
          title: "21K juntos",
          excerpt: "Prepárate para tu primera media maratón",
          image: "/assets/images/21k-juntos.webp",
          slug: "21k-juntos",
          category: "tips-balance"
        },
        {
          id: "3",
          title: "El mejor tratamiento para vivir en balance",
          excerpt: "Meditación para corredores",
          image: "/assets/images/vivir-balance.webp",
          slug: "el-mejor-tratamiento-para-vivir-en-balance",
          category: "tips-balance"
        },
      ]
    },
  {
    id: "3",
    category: "tips-balance",
    slug: "el-mejor-tratamiento-para-vivir-en-balance",
    title: "El mejor tratamiento para vivir en Balance",
    subtitle: "Meditación para corredores",
    description: "La meditación no es solo para quienes practican yoga. Los corredores pueden beneficiarse enormemente de esta práctica, mejorando tanto su rendimiento físico como su bienestar mental.",
    coverImage: "/assets/images/vivir-balance.webp",
    author: "Vida en Balance",
    date: "16 de Enero, 2025",
    readingTime: "7 min de lectura",
    content: (
      <>
        <h2>Camina hacia una vida mejor</h2>
        <p>
          Menos carro y más caminata no sólo te ayuda a disminuir grasa, tonificar las piernas o ahorrar un poco en gasolina. Caminar tiene muchos más beneficios. ¿No nos crees? Descubre lo que 30 minutos de “mejor me voy caminando” puede hacer por tu cuerpo.
        </p>

        <h3>Beneficios de caminar diariamente</h3>

        <ul>
          <li>Mejora tu estado de ánimo, ¿Quién no le gusta sentirse animado?</li>
          <li>Aumenta tu rendimiento, poco a poco llegarás más lejos.</li>
          <li>Deja atrás al estrés. Tú puedes dar más.</li>
          <li>Dale un respiro a tu cuerpo, ya que ayuda a oxigenarlo.</li>
          <li>Líbrate de los líquidos retenidos</li>
          <li>El nivel elevado de colesterol va a la baja, disminúyelo paso con paso.</li>
          <li>Mejora tu circulación.</li>
          <li>Disminuye los riesgos de padecer diabetes e hipertensión.</li>
          <li>Le das fuerza a tu sistema inmunológico.Y no tienes idea de la fuerza que tienes dentro ¡Déjala salir!</li>
          <li>No hay mejor sentimiento que vivir en balance. El límite lo pones tú.</li>
        </ul>
        <p>
          ¿Ya estás caminando? ¡Regálate media hora al día, no necesitas más! Disfruta no solo de salir un poco de la rutina, sino también de darte un tiempo para ti y para mejorar tu calidad de vida.
        </p>
      </>
      ),
      relatedArticles: [
      {
        id: "1",
        title: "21K juntos",
        excerpt: "Prepárate para tu primera media maratón",
        image: "/assets/images/21k-juntos.webp",
        slug: "21k-juntos",
        category: "tips-balance"
      },
      {
        id: "2",
        title: "Evitando lesiones",
        excerpt: "Aprende a prevenir lesiones",
        image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&h=500",
        slug: "evitando-lesiones",
        category: "tips-balance"
      },
    ]
  },
  {
    id: "4",
    category: "cuerpo-en-balance",
    slug: "tu-peso-ideal",
    title: "Tu peso ideal: Más que un número",
    subtitle: "Definiendo tu peso ideal y salud",
    description: "El peso ideal no es universal. Aprende cómo la salud, el bienestar y la auto-percepción definen tu peso perfecto más allá del IMC.",
    coverImage: "/assets/images/tu-peso-ideal.webp",
    author: "Karina Salazar",
    date: "16 de Enero, 2025",
    readingTime: "7 min de lectura",
    content: (
      <>
        <h2>¿Qué es el peso ideal?</h2>

        <p>El peso ideal ha llamado la atención desde que la información relacionada con sobrepeso, obesidad y riesgos de salud han sido un foco de interés en el entorno de la buena salud hace más de 3 décadas. Lo más común es relacionar la estatura con el “peso ideal” (medir 1.60mts significa un peso ideal de 60kg), pero muchos dudan de esto. Inclusive, tengo pacientes que miden 1.60mts y se sienten bien en 65 o 70 kg o, al contrario, 50kg. Al evaluar su estado de salud, no tienen ningún tipo de riesgo.</p>

        <h2>Factores clave para evaluar el peso ideal</h2>

        <p>Recientemente se habla de la importancia de realizar revisiones periódicas del estado de salud, como glucosa, colesterol e inclusive medir el porcentaje de grasa corporal, entre otros. Estos parámetros se han relacionado con un buen estado de salud, pero en los últimos 3 años nos hemos enfocado en tener un cuerpo estético, hacer deporte y, por lo tanto, esto último también se relacionó con un buen estado de salud.</p>

        <h2>La experiencia con pacientes y el peso ideal</h2>

        <p>Como experta en la composición corporal hace casi 10 años, es mi deber decirte que no existe un peso perfecto para todos. No te podría asegurar que un IMC entre 18.5 y 24.9 (índice de masa corporal, peso entre estatura al cuadrado) significa exactamente salud y bienestar integral. En mi experiencia personal, he tenido la oportunidad de evaluar a más de 30 mil pacientes los últimos 9 años, y cada quien tiene un peso ideal distinto según su estado de salud, objetivos, auto-percepción o inclusive ideas arraigadas culturalmente (pensar que deben pesar “x” peso y con eso se sienten “bien”).</p>

        <h2>Impacto de la obesidad y la búsqueda del peso ideal</h2>

        <p>Los últimos años, los expertos en distintas ciencias de la salud y nutrición nos hemos ocupado en entender esto: lo ocurrido con la pandemia de la obesidad (las últimas 3 décadas) y cómo ha impactado negativamente en el buen estado de salud.</p>

        <h2>Recomendaciones para encontrar tu peso ideal</h2>

        <p>En la actualidad, existen métodos validados mundialmente para conocer tu composición corporal mediante métodos estandarizados (ISAK, DXA, entre otros).</p>

        <h3>Haz revisiones médicas anuales</h3>

        <p>Realiza anualmente una revisión de salud y que tu médico de cabecera o nutriólogo puedan confirmar que tus valores bioquímicos y estado de salud están dentro de rangos saludables.</p>

        <h3>Escucha a tu cuerpo</h3>

        <p>Siéntete bien con tu cuerpo. Nadie te conoce más que tú a ti mismo, y a veces la báscula puede marcar un número más alto del que esperas, pero si te sientes bien contigo, quizás estés bien.</p>

        <h2>Un enfoque integral del peso ideal</h2>

        <p>El peso ideal debe ser un conjunto de factores que incluyan el buen estado de salud, bienestar físico, mental y emocional.</p>

        <p><strong>La salud es la mejor de las libertades.</strong></p>
      </>
      ),
      relatedArticles: [
      {
        id: "5",
        title: "La importancia de las proteínas",
        excerpt: "Proteínas: pilares esenciales para tu salud",
        image: "/assets/images/importancia-proteinas.webp",
        slug: "la-importancia-de-las-proteinas",
        category: "cuerpo-en-balance"
      },
      {
        id: "6",
        title: "Qué comer según tu nivel de actividad física",
        excerpt: "Nutrientes: el combustible de tu cuerpo",
        image: "/assets/images/que-comer.webp",
        slug: "que-comer-segun-tu-nivel-de-actividad-fisica",
        category: "cuerpo-en-balance"
      },
      {
        id: "7",
        title: "Nutrición alcalina ¿Sabes lo que es?",
        excerpt: "Equilibra tu pH para una vida más saludable",
        image: "/assets/images/nutricion-alcalina.webp",
        slug: "nutricion-alcalina",
        category: "cuerpo-en-balance"
      }
    ]
  },
  {
    id: "5",
    category: "cuerpo-en-balance",
    slug: "la-importancia-de-las-proteinas",
    title: "La importancia de las proteínas",
    subtitle: "Proteínas: pilares esenciales para tu salud",
    description: "Descubre la importancia de las proteínas, su rol en el organismo, cómo calcular tu ingesta diaria y las mejores fuentes naturales para mantener una alimentación balanceada.",
    coverImage: "/assets/images/importancia-proteinas.webp",
    author: "Karina Salazar",
    date: "17 de Enero, 2025",
    readingTime: "4 min de lectura",
    content: (
      <>
        <h2>¿Qué son las proteínas y por qué son importantes?</h2>
        <p>
          Si queremos entender la importancia de las proteínas, primero tenemos que definirlas: las proteínas son las encargadas de la "batalla" de la vida y participan en todas las actividades de nuestro organismo. Son “materiales de construcción” que aparecen en todas las células del cuerpo humano, aparte, transportan oxígeno, construyen tejidos y copian el ADN para la próxima generación.
        </p>

        <h2>Tipos de proteínas y sus funcione</h2>

        <p>Si bien muchas de las proteínas construyen músculo, otras son encargadas de regular procesos, estas son llamadas enzimas.</p>

        <h2>La importancia del equilibrio nutricional</h2>

        <p>Pero si nos vamos a lo práctico, lo que deben conocer es que las proteínas no son el único, ni mejor nutriente para vivir sano, también necesitamos de los carbohidratos y las grasas.</p>

        <h2>¿Cuánta proteína debemos consumir?</h2>

        <p>Las proteínas deben constituir entre un 20 y 30% de la ingesta total de nuestra alimentación. Eso significa que, si tenemos una dieta promedio de 2000 kcal, entre 400 a 600 kcal deben ser de fuentes proteicas.</p>
        <p>Cada gramo de proteína aporta 4 kcal, por lo que debemos ingerir unos 100 a 120 gramos de proteína diariamente.</p>

        <h3>¿Cómo distribuir la ingesta de proteínas?</h3>

        <p>La pregunta que podrían estarse haciendo es: ¿cuándo debo ingerir esta proteína? Es simple, podemos dividir el requerimiento en:</p>

        <ul>
          <li><strong>3 comidas principales:</strong> 25 a 35 gramos por comida.</li>
          <li><strong>2 snacks: </strong> 10 a 15 gramos por snack.</li>
        </ul>

        <h2>Fuentes de proteína recomendadas</h2>

        <p>Ahora, ¿cómo puedo obtener esos gramos de un alimento?</p>

        <ul>
          <li><strong>Huevo:</strong> 1 pieza aporta 7g promedio.</li>
          <li><strong>Proteína animal (res, pollo, cerdo, pavo):</strong> 100g aportan 20g.</li>
          <li><strong>Leche descremada:</strong> 1 taza aporta 8 a 10g.</li>
          <li><strong>Queso bajo en grasa:</strong> 30g aportan 7 a 10g.</li>
          <li><strong>Frijoles, lentejas o garbanzos cocidos:</strong> 1 taza aporta 15g.</li>
          <li><strong>Tofu:</strong> 100g aportan 10 a 15g.</li>
          <li><strong>Nueces, almendras o cacahuates:</strong> 50g aportan 10g.</li>
        </ul>

        <h2>Ajusta tu ingesta según tus objetivos</h2>

        <p>Si te gusta ser más específico, puedes utilizar la recomendación de salud de 1.2g a 2.3 gramos por kilogramos de peso.</p>

        <p><strong>Ejemplo:</strong> Si pesas 50 kilogramos, tu ingesta ideal sería entre 60 gramos y 115 gramos de proteína.
          Solo basta multiplicar por tu peso y establecer tus objetivos: mantener tu peso, bajar de peso o incrementar masa muscular. </p>

        <h2>Balance y salud: la clave de una buena alimentación</h2>

        <p>Las proteínas sí son muy importantes, pero no son las más importantes. Todo debe ser balanceado. Recuerden que no hay alimentos buenos ni malos y debemos establecer un objetivo nutricional para un óptimo estado de salud.</p>

        <p><strong>Aliméntate sanamente.</strong></p>
      </>
      ),
      relatedArticles: [
      {
        id: "4",
        title: "Tu peso ideal: Más que un número",
        excerpt: "Definiendo tu peso ideal y salud",
        image: "/assets/images/tu-peso-ideal.webp",
        slug: "tu-peso-ideal",
        category: "cuerpo-en-balance"
      },
      {
        id: "6",
        title: "Qué comer según tu nivel de actividad física",
        excerpt: "Nutrientes: el combustible de tu cuerpo",
        image: "/assets/images/que-comer.webp",
        slug: "que-comer-segun-tu-nivel-de-actividad-fisica",
        category: "cuerpo-en-balance"
      },
      {
        id: "7",
        title: "Nutrición alcalina ¿Sabes lo que es?",
        excerpt: "Equilibra tu pH para una vida más saludable",
        image: "/assets/images/nutricion-alcalina.webp",
        slug: "nutricion-alcalina",
        category: "cuerpo-en-balance"
      }
    ]
  },
  {
    id: "6",
    category: "cuerpo-en-balance",
    slug: "que-comer-segun-tu-nivel-de-actividad-fisica",
    title: "Qué comer según tu nivel de actividad física",
    subtitle: "Nutrientes: el combustible de tu cuerpo",
    description: "Descubre cómo los carbohidratos y proteínas son esenciales para el rendimiento de tu cuerpo. Aprende a calcular tus necesidades diarias y elegir las mejores fuentes para mantenerte activo y saludable.",
    coverImage: "/assets/images/que-comer.webp",
    author: "Maricarmen Osés - Nutrióloga",
    date: "17 de Enero, 2025",
    readingTime: "3 min de lectura",
    content: (
      <>
        <h2>La importancia de nutrir tu cuerpo</h2>
        <p>
          Tu cuerpo siempre da todo por ti, y los nutrientes son esenciales para que nunca se detenga. Por eso, necesitará que tú lo ayudes dándole el alimento que necesita.
        </p>

        <h2>Tu cuerpo como el auto de tus sueños</h2>

        <p>
          Supongamos que tu cuerpo es el auto de tus sueños y tú eres el conductor. Necesitas gasolina para andar. El tanque te pedirá cierto combustible para llevar a cabo tus funciones vitales, tales como respirar, mantener tu temperatura corporal, mantener tu latido cardíaco, entre muchas otras.
        </p>
        <p>Pero además de eso, tu cuerpo tiene ganas de hacer más cosas, como hacer ejercicio, correr, escalar, practicar yoga o simplemente andar en bici. Necesitarás un extra de energía, y no cualquier combustible te dará lo que necesitas.</p>
        <p>Entre más te esfuerces durante el día, mayor será la cantidad de nutrientes que vas a necesitar, en especial carbohidratos y proteínas.</p>

        <h3>¿Cuántos carbohidratos necesitas?</h3>

        <p>Los carbohidratos son la fuente de energía número uno para tu cuerpo, pero siempre deben ir de acuerdo con tu peso. Por ejemplo:</p>

        <p>Si haces ejercicio aeróbico o deportes de fondo como triatlones o carreras, y tu peso es de 60 kg, calcula: <strong>60 x 9 g = 540 g de carbohidratos al día.</strong></p>

        <img src="https://www.vidaenbalance.com/wp-content/uploads/2023/05/quecomer-img1.jpg" alt="Tabla de necesidades diaria para energía y recuperación" title="Tabla de necesidades para energía y recuperación" />

        <h2>Proteínas: esenciales para el rendimiento</h2>
        <p>
          Por otro lado, las proteínas también son un nutriente importante que puedes obtener en productos de origen animal como pescado, carne, pollo, queso, leche, yogurt, o carnes frías bajas en grasa como la línea de San Rafael Balance®.
        </p>

        <h3>¿Cuántas proteínas necesitas?</h3>

        <p>
          Las proteínas también deben calcularse según tu peso y actividad física. Por ejemplo:
        </p>

        <p>Si pesas 60 kg y practicas deportes de resistencia como correr o nadar: <strong>60 x 1.3 g = 78 g de proteína al día.</strong></p>

        <h2>Ejemplos para cubrir tus necesidades diarias de proteínas</h2>

        <p>Algunas opciones para alcanzar tu ingesta de proteínas:</p>

        <ul>
          <li>1 huevo: 7 g de proteína</li>
          <li>1 pieza de Salchicha de Pavo San Rafael Balance®: 6.5 g de proteína</li>
          <li>1 rebanada de Pechuga de Pavo San Rafael Balance®: 2.2 g de proteína</li>
          <li>1 vaso de leche (240 ml): 9 g de proteína</li>
          <li>40 g de salmón: 7 g de proteína</li>
        </ul>

        <img src="https://www.vidaenbalance.com/wp-content/uploads/2023/05/quecomer-img2.jpg" alt="Tabla de proteína y ejercicio" title="Protein and exercise"/>
      </>
      ),
      relatedArticles: [
      {
        id: "7",
        title: "Nutrición alcalina ¿Sabes lo que es?",
        excerpt: "Equilibra tu pH para una vida más saludable",
        image: "/assets/images/nutricion-alcalina.webp",
        slug: "nutricion-alcalina",
        category: "cuerpo-en-balance"
      },
      {
        id: "4",
        title: "Tu peso ideal: Más que un número",
        excerpt: "Definiendo tu peso ideal y salud",
        image: "/assets/images/tu-peso-ideal.webp",
        slug: "tu-peso-ideal",
        category: "cuerpo-en-balance"
      },
      {
        id: "5",
        title: "La importancia de las proteínas",
        excerpt: "Proteínas: pilares esenciales para tu salud",
        image: "/assets/images/importancia-proteinas.webp",
        slug: "la-importancia-de-las-proteinas",
        category: "cuerpo-en-balance"
      }
    ]
  },
  {
    id: "7",
    category: "cuerpo-en-balance",
    slug: "nutricion-alcalina",
    title: "Nutrición alcalina ¿Sabes lo que es?",
    subtitle: "Equilibra tu pH para una vida más saludable",
    description: "Descubre cómo alcalinizar tu cuerpo, equilibrar tu pH y disfrutar de una dieta balanceada. Aprende a incluir alimentos alcalinos en tu día para una vida llena de energía y vitalidad.",
    coverImage: "/assets/images/nutricion-alcalina.webp",
    author: "Marisol G Ficachi - Yoga Wellness Coach",
    date: "17 de Enero, 2025",
    readingTime: "3 min de lectura",
    content: (
      <>
      <h2>¿Tu cuerpo está sobreacidificado?</h2>
      <p>
        Puede ser que tu dieta y estilo de vida estén sobreacidificando tu cuerpo. ¿Te sientes cansado y somnoliento con frecuencia? Esto podría ser una señal de que algo no está equilibrado.
      </p>

      <h2>Efectos de la sobreacidificación</h2>

      <p>
        La sobreacidificación no solo provoca cansancio, sino que acelera el envejecimiento y abre la puerta a enfermedades. La solución: alcalinizar tu cuerpo. Así, le das la vitalidad y salud que se merece.
      </p>
      <p>La energía que necesitas para nunca detenerte está en los alimentos alcalinos. No tienes que privarte de lo que te gusta comer; la clave está en la moderación.</p>

      <p>La clave de comer rico y sano está en vivir en balance y con equilibrio.</p>

      <p>Cuando tu cuerpo tiene un ambiente interno alcalino, los tejidos eliminan impurezas y te desintoxicas a la perfección. Al contrario, si el ambiente es ácido le estás dando oportunidad a las enfermedades de atacarte.</p>

      <h2>El equilibrio del pH interno</h2>

      <p>Vivir en balance también significa equilibrar tu pH interno. El pH se mide en una escala del 0 al 14.</p>

      <h3>¿Cuál es el pH ideal?</h3>

      <p>Cuando tu pH es de 7 se dice que es neutro, si éste está por debajo del 7 es ácido y arriba es alcalino. Nuestros líquidos internos y sangre tienen que ser ligeramente alcalinos (7.35 – 7.45). Cuando estos valores se encuentran por debajo significa que no estamos en un punto saludable y puedes contraer alguna enfermedad y esto hay que evitarlo.</p>

      <p>El cuerpo trata de compensar el pH ácido usando minerales alcalinos. Ahora lo sabes, no hay pretexto para no incluir estos alimentos a tu dieta ¡come rico mientras te cuidas!</p>

      <p>No olvides incluir los suficientes nutrientes alcalinos para el rush de tu día, siempre se puede acompañar con lo que a ti te gusta comer. Por ejemplo, yo inició mi día con envaso de agua tibia con limón, a los quince minutos me preparó un jugo verde con alimentos alcalinos, después viene el plato fuerte, un desayuno con proteína para iniciar con todo. ¿Qué te parecería unas claras de huevo con Salchicha de Pavo San Rafael Balance®? Delicioso. Esta lista te ayudará a saber que alimentos son alcalinos y así los incluyes en tu dieta:</p>

      <img src="https://www.vidaenbalance.com/wp-content/uploads/2023/05/nutricion-alcalina-img1.jpg" alt="Lista de alimentos recomendados con sus cantidades" title="Guía de consumo de alimentos saludables según cantidades recomendadas."/>

      <p>Nuestros líquidos internos y sangre deben ser ligeramente alcalinos (7.35 – 7.45). Cuando estos valores están por debajo, aumenta el riesgo de contraer enfermedades.</p>

      <h2>Cómo alcalinizar tu cuerpo</h2>

      <p>El cuerpo trata de compensar el pH ácido usando minerales alcalinos. Por eso, incluir alimentos alcalinos en tu dieta es fundamental para mantener el equilibrio.</p>

      <h3>Mi rutina alcalina</h3>

      <ol>
        <li>Agua tibia con limón: Al despertar.</li>
        <li>Jugo verde con alimentos alcalinos: 15 minutos después.</li>
        <li>Desayuno balanceado: Claras de huevo con Salchicha de Pavo San Rafael Balance® para empezar con energía.</li>
      </ol>

      <img src="https://www.vidaenbalance.com/wp-content/uploads/2023/05/quecomer-img1.jpg" alt="Tabla de necesidades diaria para energía y recuperación" title="Tabla de necesidades para energía y recuperación" />

      <img src="https://www.vidaenbalance.com/wp-content/uploads/2023/05/nutricion-alcalina-img2.jpg" alt="Lista de alimentos alcalinos organizada por categoría" title="Tabla de alimentos alcalinos para una dieta equilibrada y saludable."/>
    </>
    ),
    relatedArticles: [
      {
        id: "4",
        title: "Tu peso ideal: Más que un número",
        excerpt: "Definiendo tu peso ideal y salud",
        image: "/assets/images/tu-peso-ideal.webp",
        slug: "tu-peso-ideal",
        category: "cuerpo-en-balance"
      },
      {
        id: "5",
        title: "La importancia de las proteínas",
        excerpt: "Proteínas: pilares esenciales para tu salud",
        image: "/assets/images/importancia-proteinas.webp",
        slug: "la-importancia-de-las-proteinas",
        category: "cuerpo-en-balance"
      },
      {
        id: "6",
        title: "Qué comer según tu nivel de actividad física",
        excerpt: "Nutrientes: el combustible de tu cuerpo",
        image: "/assets/images/que-comer.webp",
        slug: "que-comer-segun-tu-nivel-de-actividad-fisica",
        category: "cuerpo-en-balance"
      }
    ]
  },
  {
    id: "8",
    category: "mente-en-balance",
    slug: "como-afectan-las-emociones-a-mi-salud",
    title: "¿Cómo afectan las emociones a mi salud?",
    subtitle: "Abraza tus emociones para una vida equilibrada",
    description: "Aprende a identificar, aceptar y liberar tus emociones de manera responsable. Descubre cómo conectar contigo mismo y encontrar el equilibrio emocional para una vida más plena y feliz",
    coverImage: "/assets/images/emociones-salud.webp",
    author: "María Leal",
    date: "17 de Enero, 2025",
    readingTime: "4 min de lectura",
    content: (
      <>
        <h2>La relación entre emociones y salud</h2>
        <p>
          Lo primero que quiero resaltar al hablar sobre emociones y salud es cómo el título en este artículo nos puede confundir haciéndonos creer que las emociones nos afectan, y no es así. Las emociones son nuestras aliadas, están ahí por algo y absolutamente todas nos ayudan en nuestro camino de sanación: la ira, el enojo, la tristeza, el coraje, la alegría. Somos humanos y es totalmente normal que las sintamos. El problema es que las reprimimos y/o nos aferramos a ellas.
        </p>

        <h3>El impacto de reprimir emociones</h3>

        <p>
          Vivimos en una sociedad en donde desde muy pequeños nos enseñaron a reprimir cualquier emoción. La mayoría de las veces recibimos un “no llores”, “no es para tanto” o “hay que ser fuertes”, cuando en el fondo lo único que queremos es sacar lo que en ese momento sentimos. Y así vamos creciendo, bloqueando y pidiendo perdón por llorar, por sentir.
        </p>

        <p>¿Cuántas veces te ha pasado que estás enojado y sientes esta emoción en alguna parte de tu cuerpo? Cuando no nos permitimos liberar una emoción, se va quedando guardada en tu cuerpo, acumulándose cada vez más hasta que empiezas a enfermarte. El cuerpo tarde o temprano cobra la factura. Todas esas emociones las reprimimos porque creemos que está mal expresarlas cuando no es así. Al contrario, si aprendemos a expresarlas responsablemente entonces nos estamos haciendo un favor.</p>

        <h3>Cómo las emociones nos ayudan a crecer</h3>

        <p>Lo primero es no juzgarte. Te prometo que no hay ser humano que no experimente todas estas emociones. No te avergüences por sentirlas; todas las emociones bien utilizadas te ayudarán a sentir felicidad cada vez más seguido. Si las reprimes, estarás más lejos de la meta que es sentirte pleno y llevar una vida en equilibrio.</p>

        <h2>Conecta con tus emociones</h2>
        <h3>Abrazar y experimentar tus emociones</h3>

        <p>La clave está en abrirte a experimentar tus emociones, permitirte sentirlas, abrazarlas, sean las que sean. Todas están ahí para un propósito: hacerte sentir mejor, hacerte crecer, hacerte más consciente. Te quiero invitar a que todos los días te preguntes, sin querer engañarte: ¿Cómo estoy? ¿Cómo me siento?</p>

        <p>Siéntate contigo unos segundos a escuchar la respuesta, siéntela dentro de ti, escríbela. Si en ese momento tu sentimiento es de tristeza, pregúntate por qué la sientes y sácala. Si esa emoción es de ira, escríbelo y, si es necesario, grítalo. Hazlo las veces que necesites; estás sacando esa ira sin dañar a nadie. Estás siendo responsable contigo.</p>

        <h3>Usa el movimiento como herramienta de liberación</h3>

        <p>Puedes sacar esa emoción haciendo alguna actividad física. El movimiento es nuestro gran aliado para mover toda esa energía. Mientras más hagas este ejercicio, más estarás en contacto con tus emociones, aceptándolas y aceptándote.</p>

        <p>Atrévete a escucharte, a pedir ayuda si es necesario, a darte 5 minutos al día y a vivir abierto a sentir y experimentar todas tus emociones sin reprimirlas. Una vez que lo hagas, sentirás más calma, más felicidad y mucho más de esas emociones que sí queremos experimentar.</p>
      </>
      ),
      relatedArticles: [
      {
        id: "9",
        title: "Mindfullness en tu vida diaria",
        excerpt: "Mindfullness: el arte de vivir en el presente",
        image: "/assets/images/mindfullness.webp",
        slug: "mindfullness-en-tu-vida-diaria",
        category: "mente-en-balance"
      },
      {
        id: "10",
        title: "Paz interior, que nadie te la quite",
        excerpt: "Domina tus emociones ",
        image: "/assets/images/paz-interior.webp",
        slug: "paz-interior-que-nadie-te-la-quite",
        category: "mente-en-balance"
      },
      {
        id: "11",
        title: "Yoga Feliz",
        excerpt: "Santosha: el camino a la felicidad interior",
        image: "/assets/images/yoga-feliz.webp",
        slug: "yoga-feliz",
        category: "mente-en-balance"
      },
      {
        id: "12",
        title: "Magia en el yoga",
        excerpt: "Descubre tu verdadero ser",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2070&h=1000",
        slug: "magia-en-el-yoga",
        category: "mente-en-balance"
      }
    ]
  },
  {
    id: "9",
    category: "mente-en-balance",
    slug: "mindfullness-en-tu-vida-diaria",
    title: "Mindfullness en tu vida diaria",
    subtitle: "Mindfullness: el arte de vivir en el presente",
    description: "Descubre cómo practicar mindfulness para reducir el estrés, mejorar tu concentración y vivir plenamente en el aquí y el ahora. Solo necesitas 5 minutos al día para transformar tu calidad de vida.",
    coverImage: "/assets/images/mindfullness.webp",
    author: "María Leal",
    date: "17 de Enero, 2025",
    readingTime: "4 min de lectura",
    content: (
      <>
        <h2>El ruido de la mente y la necesidad de estar presentes</h2>
        <p>
          Vivimos en un mundo donde ya no se camina, se corre. Todo pasa demasiado rápido: ya estás pensando en pasado mañana mientras sigues procesando lo que pasó el mes pasado. Este ritmo confunde a la mente, sumiéndola en un continuo ruido que se traduce en estrés constante.
          Nuestra mente genera entre 70 y 90 mil pensamientos al día, y la mayoría se enfocan en todo, menos en el ahora.
        </p>

        <h3>La importancia del mindfulness</h3>

        <p>
          Vivimos en una sociedad en donde desde muy pequeños nos enseñaron a reprimir cualquier emoción. La mayoría de las veces recibimos un “no llores”, “no es para tanto” o “hay que ser fuertes”, cuando en el fondo lo único que queremos es sacar lo que en ese momento sentimos. Y así vamos creciendo, bloqueando y pidiendo perdón por llorar, por sentir.
        </p>

        <p>Es por eso que la práctica del mindfulness (o la práctica de estar presente), es una herramienta tan efectiva para realmente vivir y disfrutar del aquí y el ahora, que a final del día es lo único que tenemos seguro. Por ejemplo: nos pasa seguido que estamos en el trabajo mientras pensamos en las vacaciones. Y cuando por fin tienes esas dichosas y muy esperadas vacaciones, no dejas de pensar en el trabajo y en los pendientes que tienes que hacer una vez que regreses.</p>

        <h3>El arte del mindfulness: simplicidad y presencia en el día a día</h3>

        <p>Y ese es el arte del mindfulness: regresar al ahora, entrenar a la mente para que deje el ruido y encuentre el silencio, que dejes de divagar y realmente estés presente haciendo lo que te encuentres haciendo.
          Lo primero que hay que tener en cuenta con esta práctica es que es muy sencilla y que la puedes hacer en cualquier momento del día, en donde quiera que estés. Existe este gran mito de que practicar mindfulness o meditar es poner tu mente en blanco o que solo es para algunos, también creemos que hay que disponer 2 horas de tu día para poder hacerlo. Borra esta falsa idea de la cabeza, mindfulness es para todos y podemos hacerlo en cualquier momento y lugar del día.</p>

        <p>Es muy común que utilicemos el típico pretexto de no tener tiempo, cuando en realidad sólo necesitas dedicarle 5 minutos a esta práctica y ganarás mucho más tiempo en el resto de tu día, pues notarás que estás mucho más concentrado, realizarás tus tareas más rápidamente, estarás mucho más presente y tomando decisiones más acertadas, dormirás mejor lo cual hace que estés de buen humor durante el día y tengas una mayor calidad de vida.
          La clave está en empezar hoy y practicarlo diariamente, por eso se le llama “práctica” es como cualquier otro ejercicio y para observar todos los beneficios hay que hacerlo parte de tu vida diaria, de tu rutina.</p>

        <h2>¿Cómo funciona?</h2>

        <p>Se trata de enfocarte 5 minutos en algo específico. Lo más común es nuestra respiración, escúchala, siéntela en tu nariz y en tu estómago -si te sirve cierra tus ojos- Puedes empezar también por escanear tu cuerpo todas las mañanas, enfócate en cada parte de tu cuerpo por unos segundos y con eso ya lo estarás practicando. Puedes empezar solo o te recomiendo buscar un guía que te ayude, todo en equipo y en comunidad es más fácil además de que te motivará a seguir y continuar con tu práctica.</p>

        <p>No le tengas miedo a equivocarte, no hay manera de hacerlo mal, y lo más importante mientras estés haciendo mindfulness es que siempre puedes regresar, te puedes ir y estar pensando en otras cosas pero en el momento que te das cuenta ya lo estás haciendo consciente, ahí ya está funcionando todo tu trabajo, entonces regresas y vuelves a empezar, sé paciente contigo y ten siempre en cuenta y confía en que al realizar esta práctica todos los días, volviendo de ella un hábito, mejorará tu calidad de vida ¿Hay algo mejor? <strong>¡Inténtalo!</strong></p>
      </>
      ),
      relatedArticles: [
      {
        id: "10",
        title: "Paz interior, que nadie te la quite",
        excerpt: "Domina tus emociones ",
        image: "/assets/images/paz-interior.webp",
        slug: "paz-interior-que-nadie-te-la-quite",
        category: "mente-en-balance"
      },
      {
        id: "11",
        title: "Yoga Feliz",
        excerpt: "Santosha: el camino a la felicidad interior",
        image: "/assets/images/yoga-feliz.webp",
        slug: "yoga-feliz",
        category: "mente-en-balance"
      },
      {
        id: "12",
        title: "Magia en el yoga",
        excerpt: "Descubre tu verdadero ser",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2070&h=1000",
        slug: "magia-en-el-yoga",
        category: "mente-en-balance"
      },
      {
        id: "8",
        title: "¿Cómo afectan las emociones a mi salud?",
        excerpt: "Abraza tus emociones para una vida equilibrada",
        image: "/assets/images/emociones-salud.webp",
        slug: "como-afectan-las-emociones-a-mi-salud",
        category: "mente-en-balance"
      }
    ]
  },
  {
    id: "10",
    category: "mente-en-balance",
    slug: "paz-interior-que-nadie-te-la-quite",
    title: "Paz interior, que nadie te la quite",
    subtitle: "Domina tus emociones y encuentra la paz interior",
    description: "Aprende cómo dejar de querer controlarlo todo, sanar tus emociones y descubrir tu verdadera esencia para vivir en paz, armonía y plenitud",
    coverImage: "/assets/images/paz-interior.webp",
    author: "Vero Marcos",
    date: "17 de Enero, 2025",
    readingTime: "4 min de lectura",
    content: (
      <>
        <h2>El camino hacia tu paz interior</h2>
        <p>
          Cuando aprendes a controlar tus emociones, te adueñas de tu paz interior y dominas tus estados de ánimo.
          El primer paso para lograr esto es dejar de querer controlarlo todo, ya que las personas, situaciones y cosas sucederán como están destinadas a suceder, independientemente de tus esfuerzos por controlarlas.
        </p>

        <h3>¿Para qué entregarle tu paz interior al control de lo incontrolable?</h3>

        <p>
          Para comprender que las cosas pasan en un orden perfecto para tu evolución espiritual y para que de ello saques lo mejor de ti y cuando obtienes aprendizaje y descubres el opuesto positivo y la belleza colateral, en automático sientes en tu corazón un estado de paz interior inmensurable.
        </p>

        <p>Una vez que aceptas lo que sucede a tu alrededor, tu instinto hará que te adaptes a ello y descubras que lo que estás experimentando es perfecto para tu evolución y para que cambies el cuestionarte “¿por qué?” y comprendas el “¿para qué?” de lo que tienes que experimentar, para aprender a estar en paz, independiente de lo que suceda en tu entorno. El cual es perfecto para que saques provecho de esta experiencia, teniendo la certeza de que cuando superas una fuerte prueba, es porque siempre te llegará una gran bendición.</p>

        <h2>Enfócate en ti: el camino hacia la paz interior y la sanación emocional</h2>

        <p>Otro de los generadores de conflictos que te impiden tener paz interior, es poner tu atención en los demás al querer aconsejar o intervenir en la vida de las personas que te rodean, opinando en cómo deberían de ser o hacer las cosas. Esto pasa cuando estás evadiendo lo no quieres reconocer en ti y al no hacerlo criticas, juzgas y señalas las equivocaciones de los demás. Esto lo haces como un mecanismo de defensa inconsciente para exculparte de ver lo interno y lo propio, descargando tu coraje, irá, frustración, amargura y envidia contenida en la persona que se equivocó, dejando ahí tus cargas emocionales. En este caso, la solución para sanarte y recuperar tu paz es ver dentro de ti, enfocarte en ti y a sanarte; cuando hayas sanado dejarás de intervenir y de estorbar en el proceso evolutivo de las personas que te rodean.</p>

        <h2>Libérate del peso del control y del miedo al ‘qué dirán</h2>

        <p>Cuando logras todo esto dejas de sentir esa necesidad y ese peso innecesario que no te corresponde cargar, lo cual te hace vivir ligeramente y que también te ayuda a dejar vivir en paz a los demás. Dejarás de desear el querer controlar lo que las personas que te rodean piensan, dicen y hacen, sabiendo que cada uno desde su libre albedrío puede vivir como le plazca.</p>

        <p>Y por último: aprender a soltar la inútil preocupación sobre “el qué dirán” ya que hagas lo que hagas, cómo lo hagas, siempre serás juzgado y criticado por las personas que te rodean y más si eres una persona exitosa en: el amor, en lo familiar, en lo profesional, en lo social, en lo emocional y en lo económico. Aprende a vivir sin sentirte influenciado por la gente; esto a consecuencia de la admiración que sienten hacia ti y de el querer pretender ser como tú eres.</p>

        <h2>Priorízate para sanar y descubrir tu verdadera esencia</h2>

        <p>Decídete a ver por ti, a tenerte a ti como prioridad en todos los sentidos; porque cuando lo hagas en automático sanarás todas tus emociones, lo cual te hará entrar en un estado de paz que inundará tu mente, tu cuerpo y tu corazón, descubriendo así tu verdadera esencia, quién realmente eres y el extraordinario ser humano lleno de amor incondicional con un propósito de vida y una razón de vivir en amor, paz, armonía, felicidad, salud y abundancia.</p>

        <ul>
          <li>Especialista en Bienestar Integral</li>
          <li>Lic. en Artes</li>
          <li>Master en Psicología Educativa</li>
          <li>Life Coach en Terapia Insight®️</li>
          <li>Neuroestética “Arte + Ciencia</li>
          <li>Terapeuta Emocional en Línea</li>
          <li>Fundadora del Sistema de Terapia Insight®️</li>
        </ul>
      </>
      ),
      relatedArticles: [
      {
        id: "11",
        title: "Yoga Feliz",
        excerpt: "Santosha: el camino a la felicidad interior",
        image: "/assets/images/yoga-feliz.webp",
        slug: "yoga-feliz",
        category: "mente-en-balance"
      },
      {
        id: "12",
        title: "Magia en el yoga",
        excerpt: "Descubre tu verdadero ser",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2070&h=1000",
        slug: "magia-en-el-yoga",
        category: "mente-en-balance"
      },
      {
        id: "8",
        title: "¿Cómo afectan las emociones a mi salud?",
        excerpt: "Abraza tus emociones para una vida equilibrada",
        image: "/assets/images/emociones-salud.webp",
        slug: "como-afectan-las-emociones-a-mi-salud",
        category: "mente-en-balance"
      },
      {
        id: "9",
        title: "Mindfullness en tu vida diaria",
        excerpt: "Mindfullness: el arte de vivir en el presente",
        image: "/assets/images/mindfullness.webp",
        slug: "mindfullness-en-tu-vida-diaria",
        category: "mente-en-balance"
      }
    ]
  },
  {
    id: "11",
    category: "mente-en-balance",
    slug: "yoga-feliz",
    title: "Yoga Feliz",
    subtitle: "Santosha: el camino a la felicidad interior",
    description: "Descubre cómo Santosha, un principio del yoga, te ayuda a encontrar alegría y satisfacción en tu vida diaria. Aprende a dejar atrás los deseos innecesarios y a conectarte con tu felicidad interior.",
    coverImage: "/assets/images/yoga-feliz.webp",
    author: "Marisol G Ficachi - Yoga Wellness Coach",
    date: "17 de Enero, 2025",
    readingTime: "3 min de lectura",
    content: (
      <>
        <h2>Santosha: el arte de la felicidad y la paz interior</h2>
        <p>
          Sentirte feliz sólo depende de ti, y de nadie más. Lo único que necesitas para estar alegre todos los días es realmente desearlo. ¿Quieres saber cómo? Conoce Santosha, un eje principal del yoga, su significado es: “sentirte gozoso, alegre y satisfecho”.
        </p>
        <p>Ahora que lo conoces, vámonos más a fondo. Practicar yoga es todo un viaje introspectivo, voltear a ver a tu interior y estar consciente de tu presente. La felicidad es el estado natural de todos los seres humanos, y que dentro de ti hay paz.</p>

        <h3>¿Cómo encontrar la paz interior con Santosha?</h3>

        <p>
          Los yoguis ancestrales eran sabios, nos dicen que desear sin control es la razón que nos hace infelices. Pero aprendiendo a manejar la mente como un maestro controlamos estos deseos, y llegamos a un estado de felicidad que nos harán sentir alegría y paz.
        </p>

        <p>Sí, se siente bien cuando comes rico, cuando compras lo que quieres, cuando viajas, etc., pero es pasajero, lo tienes y ¡pum!, se esfumó el placer. Además, el placer y el dolor son los dos lados de una misma moneda. Pero cuando hablamos de placer y felicidad, hay una diferencia, cuando eres feliz es abundante, pero sobre todo permanente porque siempre se va a encontrar en ti.</p>

        <h2>La felicidad auténtica proviene de tu interior</h2>

        <p>Los placeres sólo dan pequeños destellos de lo que eres, pero eres mucho más que eso, la felicidad es lo que te representa, viene de ti y de ningún otro lado. No viene de una pareja, un viaje, familia o cualquier cosa que puedas pagar.</p>

        <p>Cuando le dices adiós al deseo, también se va la tensión y dejas de sobreanalizar todo lo que te pasa. Estás en paz con tu presente, y te sientes libre para tener una experiencia más verdadera y que sea la que domina tu consciencia.</p>

        <h3>Practícalo y recuerda:</h3>

        <ol>
          <li>Siéntete agradecido por lo que tienes.</li>
          <li>Diviértete, para eso estamos aquí.</li>
          <li>Tener cosas no te hace sufrir, sino querer más y más.</li>
          <li>La felicidad se construye y es independiente de cualquier circunstancia.</li>
          <li>Haz una limpieza emocional, deja esos sentimientos del pasado que pesan y no sientas ansiedad por el futuro.</li>
          <li>Sólo tú sabes qué te hace feliz, no dejes que nadie te diga cómo serlo.</li>
          <li>Trabaja para conectar contigo, así podrás conectarte con el universo.</li>
          <li>Recuerda, el yoga te ayudará a sentirte libre de los conceptos propios que te atan, de tus deseos y hábitos. Ser feliz puede ser una experiencia de todos tus días.</li>
        </ol>
      </>
      ),
      relatedArticles: [
      {
        id: "12",
        title: "Magia en el yoga",
        excerpt: "Descubre tu verdadero ser",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2070&h=1000",
        slug: "magia-en-el-yoga",
        category: "mente-en-balance"
      },
      {
        id: "8",
        title: "¿Cómo afectan las emociones a mi salud?",
        excerpt: "Abraza tus emociones para una vida equilibrada",
        image: "/assets/images/emociones-salud.webp",
        slug: "como-afectan-las-emociones-a-mi-salud",
        category: "mente-en-balance"
      },
      {
        id: "9",
        title: "Mindfullness en tu vida diaria",
        excerpt: "Mindfullness: el arte de vivir en el presente",
        image: "/assets/images/mindfullness.webp",
        slug: "mindfullness-en-tu-vida-diaria",
        category: "mente-en-balance"
      },
      {
        id: "10",
        title: "Paz interior, que nadie te la quite",
        excerpt: "Domina tus emociones ",
        image: "/assets/images/paz-interior.webp",
        slug: "paz-interior-que-nadie-te-la-quite",
        category: "mente-en-balance"
      }
    ]
  },
  {
    id: "12",
    category: "mente-en-balance",
    slug: "magia-en-el-yoga",
    title: "Magia en el yoga",
    subtitle: "Descubre tu verdadero ser a través de la introspección",
    description: "Conoce cómo escuchar a tu verdadera consciencia, diferenciarla del ego y conectarte contigo mismo mediante el silencio interno, la meditación y la atención plena.",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2070&h=1000",
    author: "Marisol G Ficachi - Yoga Wellness Coach",
    date: "17 de Enero, 2025",
    readingTime: "3 min de lectura",
    content: (
      <>
        <h2>¿Quién está al mando: tu ego o tu verdadero ser?</h2>
        <p>
          ¿Has escuchado la frase “toda cabeza es un mundo”? Es cierto, nuestra mente es todo un mundo, maravilloso y complejo. Para poder descifrarla necesitas conocerte y saber quién está controlando la situación, tu ego o tu verdadero ser (consciencia).
        </p>
        <p>Muchas personas creen que están al mando, y que su identidad son sus pensamientos y emociones, pero no se dan cuenta que realmente quién los está controlando es nada más y nada menos que su ego. El yoga te enseña a encontrar la voz de tu verdadero ser. Pero sólo puedes darle el micrófono a tu verdadero yo cuando tranquilizas a tu mente, cuando eres capaz de estar en un silencio interno y escucharte para saber quién eres.</p>

        <p>Lo más importante eres tú, descubre qué es lo que en verdad necesitas. ¿Darte un descanso, meterle velocidad a tu vida, dormir, meditar, jugar, liberarte?</p>

        <h3>Escucha los mensajes de tu consciencia y conecta con tu verdadero ser</h3>

        <p>
          Es por tu bien. Igual presta atención a tus sueños, tienen mucho que decirte. Tu cuerpo igual te está mandando mensajes, él sabe que es lo mejor para ti. Y en especial, medita todos los días y vuélvelo un ritual donde escuches a tu verdadero ser.
          Los mensajes son una guía divertida y curiosa para que sepas qué decisión tomar. ¿Qué me sirve o que dejó pasar? ¿Qué puedo mejorar? ¿Qué no estoy viendo? ¿Esta relación me ayuda a evolucionar en mi camino?
          ¡Buen viaje y conexión contigo!
        </p>
      </>
      ),
      relatedArticles: [
      {
        id: "8",
        title: "¿Cómo afectan las emociones a mi salud?",
        excerpt: "Abraza tus emociones para una vida equilibrada",
        image: "/assets/images/emociones-salud.webp",
        slug: "como-afectan-las-emociones-a-mi-salud",
        category: "mente-en-balance"
      },
      {
        id: "9",
        title: "Mindfullness en tu vida diaria",
        excerpt: "Mindfullness: el arte de vivir en el presente",
        image: "/assets/images/mindfullness.webp",
        slug: "mindfullness-en-tu-vida-diaria",
        category: "mente-en-balance"
      },
      {
        id: "10",
        title: "Paz interior, que nadie te la quite",
        excerpt: "Domina tus emociones ",
        image: "/assets/images/paz-interior.webp",
        slug: "paz-interior-que-nadie-te-la-quite",
        category: "mente-en-balance"
      },
      {
        id: "11",
        title: "Yoga Feliz",
        excerpt: "Santosha: el camino a la felicidad interior",
        image: "/assets/images/yoga-feliz.webp",
        slug: "yoga-feliz",
        category: "mente-en-balance"
      }
    ]
  }
];

