import React from "react";

function RestaruarntCards({ info }) {
  const IMAGE_BASE_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-2xl">
      <img
        className="w-full h-[150px] rounded-xl"
        src={IMAGE_BASE_URL + info.cloudinaryImageId}
        alt={info.name}
      />
      <h1 className="font-bold text-lg mt-2">{info.name}</h1>
      <span className="font-bold">{info.avgRating} stars</span>
      <span className="mx-3">{info.sla?.slaString}</span>
      <p>{info.cuisines?.join(", ")}</p>
      <p>{info.locality}</p>
    </div>
  );
}

export default RestaruarntCards;
