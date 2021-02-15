import React, { useState } from "react";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";
import { data } from "./collections.data";

const ShopPage = () => {
  const [collections, setCollections] = useState(data);


  return (

      <div className="shop-page">    
      {collections.map(({ id, ...otherCollectionProps }) => {
          return (
            <PreviewCollection key={id} {...otherCollectionProps} />
          )      
      })}
      </div>

  );
};

export default ShopPage;
