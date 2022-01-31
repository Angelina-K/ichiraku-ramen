import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MenuItemsList } from '../components/MenuItemsList';
import { loadMenuItems } from '../store/actions/menuItemsActions';

export const Menu = () => {
  const { items } = useSelector((state) => state.menuItemsModule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenuItems());
    // console.log('menu dishes', dishes);

    return () => {};
  }, []);

  return (
    <main className="menu-page">
      <MenuItemsList items={items} />
    </main>
  );
};
