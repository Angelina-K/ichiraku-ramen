import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemPreview } from './MenuItemPreview';
import ToAssembleDish from './ToAssmebleDish';

export function MenuItemsList({ items, type }) {
  return (
    <section className="dish-list">
      {items.map((item) => (
        <MenuItemPreview item={item} key={item.id} />
      ))}
      {type && type === 'ramen' && <ToAssembleDish />}
    </section>
  );
}
