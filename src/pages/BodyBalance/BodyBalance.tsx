import { HeartIcon, ScaleIcon, ChatBubbleLeftIcon } from '@heroicons/react/20/solid'

import { idealWeight, proteins, eatPhisical, alcalineDiet, bodyBalance } from "@assets/images/components"

const cards = [
  {
    name: 'Cuerpo en Balance',
    description: 'Pensamos en rutinas que puedes hacer mientras estás en cualquier lugar y que te ayudarán a mantenerte en movimiento.',
    icon: ScaleIcon,
    href: '/cuerpo-balance',
  },
  {
    name: 'Tips Balance',
    description: 'Conoce nuestros productos y tips para llevar una vida saludable.',
    icon: ChatBubbleLeftIcon,
    href: '/tips-balance',
  },
  {
    name: 'Mente en Balance',
    description: 'Encuentra recetas y consejos para mantener una alimentación balanceada.',
    icon: HeartIcon,
    href: '/mente-balance',
  },
]

const posts = [
  {
    id: 1,
    title: 'Tu peso ideal',
    href: '#',
    imageUrl: idealWeight,
  },
  {
    id: 2,
    title: 'La importancia de las proteínas',
    href: '#',
    imageUrl: proteins,
  },
  {
    id: 3,
    title: 'Qué comer según tu nivel de actividad física',
    href: '#',
    imageUrl: eatPhisical,
  },
  {
    id: 4,
    title: 'Nutrición alcalina ¿Sabes lo que es?',
    href: '#',
    imageUrl: alcalineDiet,
  },
]

export const BodyBalance = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src={bodyBalance}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950 via-gray-900/70"/>
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-montserrat-semiBold tracking-tight text-white sm:text-7xl">Cuerpo en Balance</h2>
            <p className="mt-8 text-pretty text-lg font-montserrat-medium text-gray-100 sm:text-xl/8">
              Pensamos en rutinas que puedes hacer mientras estás en cualquier lugar y que te ayudarán a mantenerte en movimiento.
            </p>
          </div>
          <div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {cards.map((card) => (
              <a href={card.href} key={card.name} className="flex gap-x-4 rounded-xl bg-white/10 p-6 ring-1 ring-inset ring-white/10
                hover:ring-white/20 hover:bg-white/10 transition-transform duration-100 transform-gpu hover:scale-105
              ">
                <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-amber-500"/>
                <div className="text-base/7">
                  <h3 className="font-montserrat-semiBold text-white">{card.name}</h3>
                  <p className="mt-2 text-gray-300">{card.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-montserrat-semiBold tracking-tight text-gray-900 sm:text-5xl">
                Noticias recientes
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                Encuentra recetas y consejos para mantener una alimentación balanceada.
              </p>
            </div>
            <div
              className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80
                    hover:ring-1 hover:ring-white/20 transition-transform duration-100 transform-gpu hover:scale-105
                  "
                >
                  <img alt={post.title} src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover"/>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                  <h3 className="mt-3 text-lg/6 font-montserrat-semiBold text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0"/>
                      {post.title}
                    </a>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
