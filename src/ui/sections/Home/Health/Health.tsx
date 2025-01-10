const posts = [
  {
    id: 1,
    title: "Cuerpo en Balance",
    href: "/cuerpo-balance",
    description:
      "A veces nos parece difícil cuidarnos, entre tantas tareas pareciera imposible. Por ello pensamos en rutinas que puedes hacer mientras estás en cualquier lugar y que te ayudarán a mantenerte en movimiento.",
    imageUrl:
      "https://www.vidaenbalance.com/wp-content/uploads/2023/03/cuerpo_balance.png",
  },
  {
    id: 2,
    title: "Mente en Balance",
    href: "/mente-en-balance",
    description:
      "Hablar de salud mental es algo que a todos nos debería preocupar. Aquí te daremos muchos tips para priorizar tu salud mental.",
    imageUrl:
      "https://www.vidaenbalance.com/wp-content/uploads/2023/03/mente_balance.png",
  },
  {
    id: 3,
    title: "Tips Balance",
    href: "/tips-balance",
    description:
      "Pequeños cambios a tu vida pueden darle grandes resultados a tu cuerpo, ¡escúchalo!",
    imageUrl:
      "https://www.vidaenbalance.com/wp-content/uploads/2023/03/recetas.png",
  },
];

export const Health = () => {
  return (
    <div className="bg-white py-10 sm:py-10">
      <div className="px-6 lg:px-8">
        <div className="mx-auto mt-5 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <img
                alt=""
                src={post.imageUrl}
                className="absolute inset-0 -z-10 size-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <div>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-white">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
