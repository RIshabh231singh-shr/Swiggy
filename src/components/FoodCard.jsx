export default function foodCard({ foodData }) {
  return (
    <>
      <a className="min-w-55 shrink-0" href={foodData?.action?.link}>
        <img
          className="w-36 h-48 object-cover mx-auto"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            foodData?.imageId
          }
        ></img>
      </a>
    </>
  );
}
