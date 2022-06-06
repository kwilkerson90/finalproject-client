import React, {useState} from "react";
import MealList from "./MealList";
import './serviceone.css';


function Service() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);
    function handleChange(e) {
        setCalories(e.target.value);
    }

    function getMealData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=d81f147360e74ec18e1e6af42e739e72&timeFrame=day&targetCalories=${calories}`
        )
        .then((response) => response.json())
        .then((data) => {
            setMealData(data);
            console.log(data);
        })
        .catch(() => {
            console.log("error");
        });
    }
    return (
    <div className="App">
        <section className="controls">
            <input 
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange} />
        </section>
        <button onClick={getMealData}>Get Your Unique Meal Plan!</button>
        {mealData && <MealList mealData={mealData} />}
    </div>
    );
}

export default Service;
