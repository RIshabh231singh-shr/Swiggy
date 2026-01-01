export default function GroceryCard({ groceryitems }) {
  return (
    <>
      <a className="min-w-55 shrink-0" href={groceryitems?.action?.link}>
        <img
          className="h-36 w-48 object-contain mx-auto"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            groceryitems?.imageId
          }
        ></img>
        <div className="font-bold text-xl text-center">
          {groceryitems?.action?.text}
        </div>
      </a>
    </>
  );
}
