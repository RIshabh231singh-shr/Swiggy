import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/header.jsx";
import FoodOption from "./components/FoodOption.jsx";
import GroceryOption from "./components/GroceryOption.jsx";
import DineOptions from "./components/DineOption.jsx";

export default function App() {
  return (
    <>
      <Header></Header>
      <FoodOption></FoodOption>
      <GroceryOption></GroceryOption>
      <DineOptions></DineOptions>
    </>
  );
}
