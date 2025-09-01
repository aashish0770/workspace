const Tour = ({ tour }) => {
  const { image, info, name, price } = tour;

  return (
    <article className="bg-white rounded-2xl shadow-md mb-2 hover:scale-105 cursor-pointer overflow-hidden transition hover:shadow-xl flex flex-col md:flex-row h-[25rem] max-w-2xl mx-auto">
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={name}
          className="w-full h-32 md:h-full object-cover"
        />
      </div>

      <footer className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
          <h4 className="text-lg font-bold text-green-600">€{price}</h4>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{info}</p>
      </footer>
    </article>
  );
};

export default Tour;
