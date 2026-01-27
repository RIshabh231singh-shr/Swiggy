import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  return (
    <>
      <div className="m-16 w-[80%] container mx-auto flex gap-5 flex-wrap">
        <div className="text-2xl font-bold">Order Our best food options</div>
        <div className="w-full mt-5 container mx-auto flex gap-5 flex-nowrap overflow-x-auto no-scrollbar">
          {imageGridCards.map((foodData) => (
            //yaha ek card banaya hai
            <FoodCard key={foodData.id} foodData={foodData} />
          ))}
        </div>
      </div>
    </>
  );
}
