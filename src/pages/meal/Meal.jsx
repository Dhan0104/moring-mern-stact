import { Typography } from "@material-tailwind/react";

import { useParams } from "react-router"
import { useApi } from "../../hooks/useApi";

export default function Meal() {

  const { id } = useParams();
  const [load, data, err] = useApi('https://www.themealdb.com/api/json/v1/1/lookup.php', {
    i: id
  });

  if (load) return <h1>Loading....</h1>
  if (err) return <h1>{err}</h1>


  return (
    <div className="p-5">
      {data && data.meals.map((meal) => {



        const youTubeId = meal.strYoutube.split('=')[1];
        return <div key={meal.idMeal} className="space-y-5">
          <h1 className="text-xl">{meal.strMeal}</h1>
          <div className="flex gap-10">
            <img className="h-[300px] w-[300px] object-cover" src={meal.strMealThumb} alt="" />
            <iframe width="420" height="300"
              src={`https://www.youtube.com/embed/${youTubeId}`}>
            </iframe>
          </div>

          <div className="flex gap-10">
            <div>
              <Typography variant="h6" className="mb-2">Ingredients</Typography>
              {Object.keys(meal).map((str) => {
                if (str.includes('strIngredient')) {
                  return <h1>{meal[str]}</h1>
                }

              })}
            </div>

            <div>
              <Typography variant="h6" className="mb-2">Measurement</Typography>
              {Object.keys(meal).map((str) => {
                if (str.includes('strMeasure')) {
                  return <h1>{meal[str]}</h1>
                }

              })}
            </div>



          </div>





          <Typography className="italic">{meal.strInstructions}</Typography>

        </div>
      })}

    </div>
  )
}
