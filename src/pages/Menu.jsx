import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MenuItemsList } from '../components/MenuItemsList';
import { loadMenuItems } from '../store/actions/menuItemsActions';
import { HashLink as Link } from 'react-router-hash-link';
import { utilService } from '../services/utilService';

export const Menu = () => {
  const { items } = useSelector((state) => state.menuItemsModule);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(loadMenuItems());

    return () => {};
  }, []);

  return (
    <section className="menu-page full">
      <nav>
        {utilService.getMenuIcons().map((item) => {
          return (
            <div>
              <Link
                key={item.imgUrl}
                to={'/menu#' + item.type}
                title={item.type}
                className="round-btn">
                <img src={item.imgUrl} alt="" />
              </Link>
              <h4>{item.description}</h4>
            </div>
          );
        })}
      </nav>
      <main className="main-layout">
        <h1 id="ramen">Ramen</h1>
        <MenuItemsList
          type={'ramen'}
          items={items.filter((item) => item.type === 'ramen')}
        />
        <h1 id="sushi">Sushi</h1>
        <MenuItemsList
          type={'sushi'}
          items={items.filter((item) => item.type === 'sushi')}
        />

        <h1 id="drink">Drinks</h1>
        <MenuItemsList
          type={'drink'}
          items={items.filter((item) => item.type === 'drink')}
        />
      </main>
    </section>
  );
};
