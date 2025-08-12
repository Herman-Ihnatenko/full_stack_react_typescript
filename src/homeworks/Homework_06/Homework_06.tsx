/*
Задание
Создайте компонент Homework_06

В нем нужно протипизировать следующий массив обьектов:

const cars = [ 
  { brand: "BMW", price: 20000, isDiesel: true }, 
  { brand: "Mercedes", price: 22000, isDiesel: false }, 
  { brand: "Porshe", price: 50000, isDiesel: true }, 
  { brand: "Nissan", price: 25000, isDiesel: false }, 
  { brand: "Audi", price: 50000, isDiesel: true } ];

Используя map JSX элементов, расположите данные из обьектов в карточках и покажите эти карточки на странице. Стили на ваше усмотрение
*/

import "./styles.css";

interface Car {
  brand: string;
  price: number;
  isDiesel: boolean;
}
const cars: Car[] = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 50000, isDiesel: true },
];

function Homework_06() {
  return (
    <div className="homework_06_page_wrapper">
      {cars.map((car, index) => (
        <div key={index} className="car_card">
          <h2>{car.brand}</h2>
          <p>Price: {car.price}</p>
          <p>Diesel: {car.isDiesel ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default Homework_06;
