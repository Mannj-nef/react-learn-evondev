import React from "react";
import { CarData } from "../../helpers/helpers";
import CarItem from "./CarItem";
import "./CarStyle.css";

const CarList = () => {
  return (
    <div className="car-list">
      {CarData.map((item) => (
        <CarItem key={item.id} cars={item}></CarItem>
      ))}
    </div>
  );
};

export default CarList;
