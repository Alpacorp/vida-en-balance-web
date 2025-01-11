
import { Article } from "@interfaces/interfaces";

export const articles: Article[] = [
  {
    id: "1",
    category: "tips-balance",
    slug: "21k-juntos",
    title: "21K juntos",
    subtitle: "Descubre cómo prepararte para una carrera de 21 kilómetros.",
    coverImage: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=2070&h=1000",
    author: "Carlos Martínez",
    date: "15 de Enero, 2024",
    readingTime: "8 min de lectura",
    content: (
      <>
        <h2 className="">Preparación para tu primera media maratón</h2>
        <p>
        Correr una media maratón es un objetivo desafiante pero alcanzable para muchos corredores.
          Con el entrenamiento adecuado y la preparación correcta, puedes completar los 21K de manera
        segura y satisfactoria.
        </p>

        <h3>Plan de entrenamiento básico</h3>
        <p>
        Un plan de entrenamiento típico para una media maratón dura entre 12 y 16 semanas.
          Durante este tiempo, aumentarás gradualmente tu kilometraje semanal y la distancia
        de tus carreras largas.
        </p>

        <h3>Nutrición e hidratación</h3>
        <p>
        La nutrición adecuada es fundamental para el éxito en una media maratón. Necesitas
        consumir suficientes carbohidratos para mantener tus niveles de energía durante el
        entrenamiento y la carrera.
        </p>

        <h2>Consejos importantes</h2>
        <ul>
        <li>Aumenta el kilometraje gradualmente</li>
        <li>Incluye días de descanso en tu plan</li>
        <li>Hidrátate adecuadamente</li>
        <li>Usa el equipo apropiado</li>
        <li>Escucha a tu cuerpo</li>
        </ul>
      </>
    ),
    relatedArticles: [
      {
        id: "2",
        title: "Evitando lesiones",
        excerpt: "Conoce cómo prevenir lesiones al correr.",
        image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&h=500",
        slug: "evitando-lesiones",
        category: "tips-balance"
      },
      {
        id: "3",
        title: "El mejor tratamiento para vivir en balance",
        excerpt: "Acciones diarias que hacen la diferencia",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&h=500",
        slug: "mejor-tratamiento-balance",
        category: "mente-balance"
      },
      {
        id: "4",
        title: "Nutrición para corredores",
        excerpt: "Guía completa de alimentación para running",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&h=500",
        slug: "nutricion-corredores",
        category: "tips-balance"
      }
    ]
  },
  {
    id: "2",
    category: "tips-balance",
    slug: "evitando-lesiones",
    title: "Evitando lesiones: Guía esencial para corredores",
    subtitle: "Aprende a prevenir lesiones y mantener tu cuerpo en óptimas condiciones.",
    coverImage: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&q=80&w=2070&h=1000",
    author: "Ana Gómez",
    date: "22 de Enero, 2024",
    readingTime: "6 min de lectura",
    content: (
    <>
      <h2>La importancia de prevenir lesiones</h2>
      <p>
      Las lesiones son uno de los mayores obstáculos para los corredores, tanto principiantes como experimentados.
        Afortunadamente, con las precauciones adecuadas, muchas lesiones comunes pueden prevenirse.
      </p>
      <h3>Calentamiento y enfriamiento</h3>
      <p>
      Nunca subestimes la importancia de un buen calentamiento antes de correr y un enfriamiento después.
        Estos rituales preparan tu cuerpo para el ejercicio y ayudan en la recuperación.
      </p>

      <h3>Técnica de carrera</h3>
      <p>
      Una técnica de carrera adecuada no solo mejora tu rendimiento, sino que también reduce el riesgo de lesiones.
        Considera tomar algunas clases con un entrenador certificado para mejorar tu forma.
      </p>

      <h2>Consejos clave para prevenir lesiones</h2>
      <ul>
      <li>Incrementa la intensidad y distancia gradualmente</li>
      <li>Usa calzado adecuado y renuévalo regularmente</li>
      <li>Incorpora ejercicios de fortalecimiento en tu rutina</li>
      <li>Mantén una buena hidratación y nutrición</li>
      <li>Escucha a tu cuerpo y descansa cuando sea necesario</li>
      </ul>

      <h3>La importancia del descanso</h3>
      <p>
      El descanso es tan importante como el entrenamiento. Asegúrate de incluir días de descanso en tu plan
        de entrenamiento y no ignores las señales de fatiga de tu cuerpo.
      </p>
    </>
    ),
    relatedArticles: [
      {
        id: "1",
        title: "21K juntos",
        excerpt: "Prepárate para tu primera media maratón.",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&h=500",
        slug: "21k-juntos",
        category: "tips-balance"
      },
      {
        id: "4",
        title: "Nutrición para corredores",
        excerpt: "Guía completa de alimentación para running",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&h=500",
        slug: "nutricion-corredores",
        category: "tips-balance"
      },
      {
        id: "5",
        title: "Entrenamiento de fuerza para corredores",
        excerpt: "Mejora tu rendimiento con ejercicios de fuerza",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&h=500",
        slug: "entrenamiento-fuerza-corredores",
        category: "tips-balance"
      }
    ]
  },
  {
    id: "3",
    category: "mente-balance",
    slug: "meditacion-para-corredores",
    title: "Meditación para corredores: Equilibrio mental en movimiento",
    subtitle: "Descubre cómo la meditación puede mejorar tu rendimiento y bienestar como corredor.",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2070&h=1000",
    author: "Laura Sánchez",
    date: "28 de Enero, 2024",
    readingTime: "7 min de lectura",
    content: (
    <>
      <h2>La conexión entre la mente y el cuerpo en el running</h2>
      <p>
      La meditación no es solo para quienes practican yoga. Los corredores pueden beneficiarse enormemente
        de esta práctica, mejorando tanto su rendimiento físico como su bienestar mental.
      </p>

      <h3>Beneficios de la meditación para corredores</h3>
      <ul>
      <li>Mejora la concentración durante las carreras largas</li>
      <li>Reduce el estrés y la ansiedad pre-competición</li>
      <li>Aumenta la conciencia corporal, ayudando a prevenir lesiones</li>
      <li>Mejora la recuperación post-entrenamiento</li>
      </ul>

      <h3>Cómo incorporar la meditación a tu rutina de running</h3>
      <p>
      Comienza con sesiones cortas de 5-10 minutos antes o después de tus entrenamientos.
        Concéntrate en tu respiración y en las sensaciones de tu cuerpo. Con el tiempo,
        podrás practicar la meditación incluso mientras corres.
      </p>

      <h2>Ejercicios de meditación para corredores</h2>
      <ol>
      <li>Escaneo corporal: Toma conciencia de cada parte de tu cuerpo mientras corres</li>
      <li>Meditación de la respiración: Sincroniza tu respiración con tus pasos</li>
      <li>Visualización: Imagina tu carrera perfecta antes de un evento importante</li>
      </ol>

      <p>
      Recuerda, la meditación es una habilidad que se desarrolla con la práctica.
        Sé paciente contigo mismo y disfruta del proceso de conectar tu mente y cuerpo.
      </p>
    </>
    ),
    relatedArticles: [
      {
        id: "1",
        title: "21K juntos",
        excerpt: "Prepárate para tu primera media maratón.",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&h=500",
        slug: "21k-juntos",
        category: "tips-balance"
      },
      {
        id: "2",
        title: "Evitando lesiones",
        excerpt: "Conoce cómo prevenir lesiones al correr.",
        image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&h=500",
        slug: "evitando-lesiones",
        category: "tips-balance"
      },
      {
        id: "6",
        title: "Manejo del estrés para atletas",
        excerpt: "Técnicas para mantener la calma bajo presión",
        image: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&w=800&h=500",
        slug: "manejo-estres-atletas",
        category: "mente-balance"
      }
    ]
  }
];

