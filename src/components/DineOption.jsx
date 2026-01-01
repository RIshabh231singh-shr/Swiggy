import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";
export default function DineOptions() {
  return (
    <div>
      <div className="w-[80%] font-bold text-2xl mt-24 mb-8 container mx-auto">
        <div>Discover best restaurant on Dineout</div>
      </div>
      <div className="w-[80%] container mx-auto flex gap-5 flex-nowrap overflow-x-auto mb-8">
        {dineoutRestaurants.map((resturants) => (
          <DineCard key={resturants.info.id} resturants={resturants}></DineCard>
        ))}
      </div>
    </div>
  );
}
