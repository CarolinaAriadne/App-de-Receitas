import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoods() {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => (history.push('/explore/foods/ingredients')) }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => (history.push('/explore/foods/nationalities')) }
        >
          By Nationality
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick=""
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
