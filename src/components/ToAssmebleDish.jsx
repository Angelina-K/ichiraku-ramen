import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { menuItemsService } from '../services/menuItemsService';
export default function ToAssembleDish() {
  const { imgUrl, price } = menuItemsService.getEmptyRamen();
  return (
    <section className="dish-preview flex">
      <Link to={'/assembleDish'}>
        <div className="info flex">
          <div className="img-container">
            <img src={imgUrl} />
          </div>
          <div>
            <h3>Create your own ramen bowl</h3>
            {/* <p>{description}</p> */}
            <span className="price">{price}</span>
          </div>
        </div>
      </Link>
    </section>
  );
}
