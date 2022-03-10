import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';

function DrinksByIngredient() {
  const CONST_12 = 12;
  const [ingredients, setIngredients] = useState([]);
  const [isloading, setIsLoading] = useState([true]);

  const getDrinkIngredients = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    const drinkIngredients = data.drinks;
    const twelveDrinkIngredients = drinkIngredients.splice(0, CONST_12);
    setIngredients(twelveDrinkIngredients);
    setIsLoading(false);
  };

  // const getDrinkImg = async () => {
  //   const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkName}`);
  //   const data = await response.json();
  //   const drinkImg = data.drinks;
  // };

  useEffect(() => {
    getDrinkIngredients();
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      {!isloading && ingredients.map(({ strIngredient1 }, index) => (
        <IngredientCard
          key={ strIngredient1 }
          index={ index }
          image={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
          name={ strIngredient1 }
        />
      ))}
      <Footer />
    </div>
  );
}

export default DrinksByIngredient;
