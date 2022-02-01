import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemPreview } from './MenuItemPreview';

export function MenuItemsList({ items }) {
  return (
    <section className="dish-list">
      {items.map((item) => (
        <MenuItemPreview item={item} key={item.id} />
      ))}
      <section className="dish-preview list-item">
        <Link to={'/assembleDish'}>
          <div className="img-container">
            <img src="https://res.cloudinary.com/dmxsqwvwv/image/upload/v1643702176/ramen-shop/kisspng-ramen-japanese-cuisine-soup-chinese-cuisine-bowl-vector-japanese-noodles-5a8c3f8f33d175.7286532915191407512123_lyltbe.png" />
          </div>
          <h3>Create your own ramen bowl</h3>
          <p>10</p>
        </Link>
      </section>
    </section>
  );
}
