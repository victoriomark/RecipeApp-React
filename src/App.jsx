import React from "react"
import Header from "./Components/Header"
import  Hero from "./Components/Hero"
import Content from "./Components/Content"
import {Routes,Route} from 'react-router-dom'
import MealList from "./Components/MealList"
import InfoRecipe from "./Components/InfoRecipe"
import { useState,useEffect } from "react"


function App() {
  const Base_Url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [meals, setMeals] = useState([]);
  const [text, setText] = useState("");
  // calling the api
  const fetchingData = async () => {
   
      const response = await fetch(Base_Url + text);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
  };

  useEffect(() => {
    fetchingData();
  }, [text]);
  
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={ <Hero/>} />
        <Route path="/" element={ <Content/>} />
        <Route path="/" element={ <Content/>} />
        <Route path="/MealList" element={ <MealList 
        Recipe={meals} Search={setText} 
        />} />
        <Route path="/InfoRecipe" element={<InfoRecipe 
          strInstructions={meals}
         />} />
      </Routes>
      
     
    </>
  )
}

export default App
