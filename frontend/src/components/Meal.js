import React, {useState, useEffect} from "react";

export default function Meal({meal}) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=d81f147360e74ec18e1e6af42e739e72&includeNutrition=false`
        )
        .then((response) => response.json())
        //.then method handles the response returned by the fetch method 
        .then((data) => {
            setImageUrl(data.image);
        })
        .catch(() => {
            console.log("error");
            //.catch method handles the error
        })
    }, [meal.id])
    //this tells useEffect to trigger the image change anytime the meal id changes
        //if you don't include this, the api request will keep getting triggered

    return (
    <article>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe" />
        <ul className="instructions">
            <li>Prep time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
        </ul>

        <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
    );
}