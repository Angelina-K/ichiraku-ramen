import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function ToAssembleDish() {
  return (
    <section className="dish-preview flex">
      <Link to={'/assembleDish'}>
        <div className="info flex">
          <div className="img-container">
            <img src="https://res.cloudinary.com/dmxsqwvwv/image/upload/v1643702176/ramen-shop/kisspng-ramen-japanese-cuisine-soup-chinese-cuisine-bowl-vector-japanese-noodles-5a8c3f8f33d175.7286532915191407512123_lyltbe.png" />
          </div>
          <div>
            <h3>Create your own ramen bowl</h3>
            <span className="price">10</span>
          </div>
        </div>
      </Link>
    </section>
  );
}
