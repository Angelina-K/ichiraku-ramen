import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { MenuItemsList } from '../components/MenuItemsList';
import { loadMenuItems } from '../store/actions/menuItemsActions';
import { HashLink as Link } from 'react-router-hash-link';
export const Menu = () => {
  const { items } = useSelector((state) => state.menuItemsModule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenuItems());
    // console.log();
    // console.log('menu dishes', dishes);

    return () => {};
  }, []);

  return (
    <main className="menu-page">
      <nav>
        <Link to="/menu#ramen">Ramen</Link>
        {/* <Link>Sushi</Link>
        <Link>Desserts</Link> */}
        <Link to="/menu#drinks">Drinks</Link>
      </nav>
      <h1 id="ramen">Ramen menu</h1>
      <MenuItemsList
        type={'ramen'}
        items={items.filter((item) => item.type === 'ramen')}
      />

      <h1 id="drinks">Drinks</h1>
      <MenuItemsList
        type={'drink'}
        items={items.filter((item) => item.type === 'drink')}
      />
    </main>
  );
};
