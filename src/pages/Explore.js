import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explore.css';

function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explore" />
      <div className="category">
        <button
          className="default-btn"
          type="button"
          data-testid="explore-foods"
          onClick={ () => (history.push('/explore/foods')) }
        >
          Explore Foods
        </button>
        <button
          className="default-btn"
          type="button"
          data-testid="explore-drinks"
          onClick={ () => (history.push('/explore/drinks')) }
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
