import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemPreview } from './MenuItemPreview';

export function MenuItemsList({ items }) {
  return (
    <section className="dish-list list-container">
      {items.map((item) => (
        <MenuItemPreview item={item} key={item.id} />
      ))}
      <Link to={'/assembleDish'}>Create your own bowl</Link>
    </section>
  );
}
