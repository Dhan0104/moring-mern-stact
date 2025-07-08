import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function MealItemCard({ meal }) {
  const nav = useNavigate();
  return (
    <Card
      onClick={() => nav(`/meal/${meal.idMeal}`)}
      className=" overflow-hidden cursor-pointer">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          className="w-full h-[250px] object-cover"
          src={meal.strMealThumb}
          alt="ui/ux review check"
        />
      </CardHeader>

      <Typography className='text-center mt-3' variant="h6" color="blue-gray">
        {meal.strMeal}
      </Typography>


    </Card>
  );
}