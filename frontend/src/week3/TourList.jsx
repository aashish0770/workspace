import Tour from "./tour";

const TourList = ({ tours }) => {
  return (
    <section className="px-4">
      <div className="title text-center mb-8">
        <h2 className="text-2xl font-bold">our tours</h2>
        <div className="underline w-16 h-1 bg-green-500 mx-auto mt-2 rounded"></div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default TourList;
