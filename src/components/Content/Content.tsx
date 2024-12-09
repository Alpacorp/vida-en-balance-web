import {FC} from "react";

interface ContentProps {
  title?: string
  description?: string
  image?: string
  types?: {
    id: number
    url: string
    name: string
    description: string
  }[]
}

export const Content: FC<ContentProps> = ({title, description, image, types}) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                {title}
              </h2>
              <p className="mt-4 text-gray-500">
                {description}
              </p>
              <div className="mt-5 flex gap-1">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Información nutrimental
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Recetas
                </button>
              </div>
            </div>
            <img
              alt={title}
              src={image}
              className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {types?.map((type) => (
              <div key={type.id} className="sm:flex lg:block">
              <div className="sm:shrink-0">
                  <img alt="" src={type.url} className="size-16" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{type.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
