//first div ke andar swiggy ka logo aur swiggy component + baki button honge
//second div me locatio order wagera
//

export default function Header() {
  return (
    <>
      <header className="bg-[#FF5200] font-serif">
        <div className="flex justify-between container mx-auto py-8">
          <img
            className="w-40 h-12"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          ></img>
          <div className="font-serif text-white text-base font-bold flex gap-15 items-center">
            <a target="blank" href="https://www.swiggy.com/corporate/">
              Swiggy Corporate
            </a>
            <a target="blank" href="https://partner.swiggy.com/login#/swiggy">
              Partner with us
            </a>
            <a className="border border-white py-3 px-4 rounded-2xl">
              Get the App
            </a>
            <a className="border border-black bg-black py-3 px-4 rounded-2xl">
              Sign in
            </a>
          </div>
        </div>
        <div className="pt-16  relative">
          <img
            className="h-110 w-60 absolute top-0 left-0"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          ></img>
          <img
            className="h-110 w-60 top-0 absolute right-0"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          />
          <div className="max-w-[40%] text-5xl text-white font-bold container mx-auto text-center">
            Order Food. Shop groceries. Swiggy it!
          </div>
          <div className="max-w-[60%] container mx-auto flex gap-5 mt-5 pb-5">
            <input
              className="bg-white w-[40%] text-base px-6 py-2 rounded-[13px]"
              placeholder="Enter you delivery location"
            ></input>
            <input
              className="bg-white w-[60%] text-base px-6 py-2 rounded-[13px]"
              placeholder="Search for resturants,items and more"
            ></input>
          </div>
        </div>
        <div className="max-w-[80%] container mx-auto flex">
          <a href="https://www.swiggy.com/restaurants">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
              alt=""
            />
          </a>
          <a
            target="blank"
            href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png"
              alt=""
            />
          </a>
        </div>
      </header>
    </>
  );
}
