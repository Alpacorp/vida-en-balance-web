export const Headings = ({text, customClassName}: { text: string, customClassName?: string }) => {
  return (
      <div className={`px-4 py-20 sm:px-6 lg:px-8 ${customClassName} bg-amber-400`}>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          {text}
        </h2>
      </div>
  );
};

