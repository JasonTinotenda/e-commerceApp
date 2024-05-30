import React,{useContext} from 'react';
import { StoreContext } from '../../context/StoreContext';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => {
          const description = typeof item.description === 'object' ? JSON.stringify(item.description) : item.description;
          const price = typeof item.price === 'object' ? JSON.stringify(item.price) : item.price;
          const image = typeof item.image === 'object' ? JSON.stringify(item.image) : item.image;

          return (
            <FoodItem
              key={index}
              id={item._id}
              description={description}
              price={price}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
