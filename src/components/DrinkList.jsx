import React from "react";

function DrinkList({ title, drinks }) {
  return (
    <div>
      <h3 className=" text-white text-[2.8rem] font-medium text-center">
        {title}
      </h3>
      {drinks.map((drink) => (
        <div className=" mb-8 mt-4">
          <div className=" flex items-center justify-between gap-6">
            <p className=" flex-1/2 text-[#DCCA87] text-[1rem] font-bold">
              {drink.name}
            </p>
            <hr className=" text-[#FAFAFA] w-24" />
            <p className=" text-white text-[1.4rem]">
              $<span>{drink.price}</span>
            </p>
          </div>
          <p className="sub-name text-[#AAAAAA] text-[0.8rem] text-start">
            {drink.subName}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DrinkList;
