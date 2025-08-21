import { type ReactNode } from "react";
import { v4 } from "uuid";

import { type Car } from "./types";

import { CarCard, CardInfo, PageWrapper } from "./styles";


function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards: ReactNode = cars.map((car: Car) => {
    return (
      <CarCard key={v4()}>
        <CardInfo>Brand: {car.brand}</CardInfo>
        <CardInfo>Price: {car.price}</CardInfo>
        <CardInfo>Fuel Type: {car.isDiesel ? "Diesel" : "Petrol"}</CardInfo>
      </CarCard>
    );
  });

  return <PageWrapper>{carCards}</PageWrapper>;
}

export default Homework_06;