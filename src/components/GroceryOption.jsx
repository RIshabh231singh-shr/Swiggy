import { GrocerGridCard } from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption() {
  return (
    <>
      <div className=" mt-16 w-[80%] flex flex-wrap container mx-auto">
        <div className="text-2xl font-bold">Shop groceries on Instamart</div>
        <div className="w-full mt-5 flex flex-nowrap overflow-x-auto container mx-auto gap-5 no-scrollbar">
          {GrocerGridCard.map((groceryitems) => (
            //ek grocessary card banaenge means bas likhege bnenga khi aur
            <GroceryCard
              key={groceryitems.id}
              groceryitems={groceryitems}
            ></GroceryCard>
          ))}
        </div>
      </div>
    </>
  );
}
