import React, { useEffect, useState } from 'react';
import CardDoneAndFavoriteRecipes from '../components/CardDoneAndFavoriteRecipes';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  useEffect(() => {
    const LSdoneRecipes = localStorage.getItem(doneRecipes);
    setDoneRecipes(JSON.parse(LSdoneRecipes));
  }, []);

  const handleClickFilter = ({ target: { textContent } }) => {
    if (textContent === 'All') {
      const LSdoneRecipes = localStorage.getItem(doneRecipes);
      setDoneRecipes(JSON.parse(LSdoneRecipes));
    } else {
      const filter = doneRecipes.filter(({ type }) => type === textContent);
      setDoneRecipes(filter);
    }
  };

  return (
    <section>
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ handleClickFilter }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ handleClickFilter }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ handleClickFilter }
        >
          Drinks
        </button>
        {doneRecipes.map((recipe, index) => (
          <CardDoneAndFavoriteRecipes
            recipe={ recipe }
            index={ index }
            favorite={ false }
            key={ recipe.id }
          />))}
      </div>
    </section>
  );
}

export default DoneRecipes;
