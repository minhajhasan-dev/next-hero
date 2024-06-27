"use client";
import Image from "next/image";
import { useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const laodData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      console.log(data);
      setMeals(data.meals);
    } catch (err) {
      setError("Data not found");
    }
  };
  const handler = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  return (
    <div className="mt-12">
      <input
        onChange={handler}
        type="text"
        placeholder="search meals..."
        className="p-4 outline-none border-transparent text-slate-900"
      />
      <button
        onClick={() => laodData()}
        className="bg-red-400 rounded-xl text-white py-2 px-4"
      >
        Search
      </button>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {meals?.length === 0 && <p>No Data Found</p>}
        {meals?.length > 0 &&
          !error &&
          meals?.map((meal) => (
            <div key={meal.idMeal} className="bg-gray-200 p-4">
              <Image
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold">{meal.strMeal}</h3>
              <p>{meal.strInstructions}</p>
            </div>
          ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Meals;

// 78-1 theke dekhi
