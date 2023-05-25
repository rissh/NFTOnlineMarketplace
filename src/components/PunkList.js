import React from "react";
import PunkCard from "./PunkCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punklist">
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <PunkCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
