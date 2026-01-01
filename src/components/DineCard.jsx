export default function DineCard({ resturants }) {
  return (
    <>
      <div className="max-w-sm flex-none">
        <a href={resturants.cta.link} target="blank">
          <div className="relative">
            <img
              className="w-82 h-48"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                resturants?.info?.mediaFiles[0]?.url
              }
              alt=""
            />
            <p className="z-25 absolute bottom-2 left-4 text-xl font-bold text-white">
              {resturants.info.name}
            </p>
            <p className="z-10 absolute bottom-2 right-4 text-xl font-bold text-white">
              {resturants?.info?.rating?.value}
            </p>
            <div className="absolute bg-linear-to-t from-black h-8 bottom-0 left-0 right-0"></div>
          </div>
        </a>
      </div>
    </>
  );
}

{
  /*<div>
          <div>
            <div>{resturants.info.cuisines[0]}</div>
            <div>{resturants.info.costForTwo}</div>
          </div>

          <div>
            <div>{resturants.info.locationInfo.city.formattedAddress}</div>
            <div>{resturants.info.locationInfo.distanceString}</div>
          </div>

          <div>table booking</div>

          <div></div>
          <div></div>
          <div></div>
        </div>
  */
}
