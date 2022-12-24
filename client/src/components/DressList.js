import React from "react";
import DressItem from "./DressItem";
import DressData from "./DressData";

function DressList() {
  return (
    <div>
      {DressData.map((dressItemList, index) => {
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
