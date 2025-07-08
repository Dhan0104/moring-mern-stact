import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { MealItemCard } from "./MealItemCard";

export default function MealItems() {
  const [data, setData] = useState();
  const { category } = useParams();
  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: category
        }
      });
      setData(response.data);
    } catch (err) {

    }
  }
  useEffect(() => {
    getData();
  }, []);


  console.log(data);


  return (
    <div className="p-10 grid grid-cols-4 gap-7">

      {data && data.meals.map((meal) => {
        return <MealItemCard key={meal.idMeal} meal={meal} />
      })}

    </div>
  )
}
