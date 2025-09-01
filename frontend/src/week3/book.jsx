import React from "react";
import { books } from "./data";

function Booklists() {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-white underline decoration-4 underline-offset-8 decoration-gray-800 font-bold mb-6">
        Book List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map(({ id, title, author, year, genre }) => (
          <div
            key={id}
            className="bg-white rounded-2xl p-5 border cursor-pointer hover:scale-105 hover:shadow-xl shadow-amber-400 transition duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Author:</span> {author}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Year:</span> {year}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Genre:</span> {genre}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booklists;
