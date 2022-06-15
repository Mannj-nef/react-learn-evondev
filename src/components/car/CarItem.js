import React from "react";

const CarItem = ({ cars }) => {
  return (
    <div className="car-item">
      <div className="car-image">
        <img src={cars.image} alt={cars.title} />
      </div>
      <div className="car-footer">
        <img src={cars.avata} alt={cars.title} className="car-avata" />
        <div className="car-info">
          <h3 className="car-title">{cars.title || "No title"}</h3>
          <p className="car-author">{cars.author || "******"}</p>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
