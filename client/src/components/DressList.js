import React from "react";
import DressItem from "./DressItem";
import dressData from "./dressData";

function DressList() {
  return (
    <div>
      {dressData.map((dressItemList, index) => {
        return (
          <DressItem
            key={index}
            id={index}
            costPrice={dressItemList.costPrice}
            sellingPrice={dressItemList.sellingPrice}
            image={dressItemList.image}
            name={dressItemList.name}
          />
        );
      })}
    </div>
  );
}

export default DressList;
