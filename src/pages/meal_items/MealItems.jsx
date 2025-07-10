import { useParams } from "react-router"
import { MealItemCard } from "./MealItemCard";
import { useApi } from "../../hooks/useApi";

export default function MealItems() {



  const { category } = useParams();
  const [load, data, err] = useApi('https://www.themealdb.com/api/json/v1/1/filter.php', {
    c: category
  }
  );

  return (
    <div className="p-10 grid grid-cols-4 gap-7">

      {data && data.meals.map((meal) => {
        return <MealItemCard key={meal.idMeal} meal={meal} />
      })}

    </div>
  )
}
