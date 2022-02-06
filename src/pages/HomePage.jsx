import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ActionBtn } from '../components/ActionBtn';
import { ArrowsList } from '../components/ArrowsList';
import { utilService } from '../services/utilService';
// import{MenuItemsList} from '../components/MenuItemsList'
// import { useWindowDimensions } from '../hooks/useWindowDimensions';
export const HomePage = () => {
  const [menuItemsToShow, setMenuItemsToShow] = useState('ramen');

  const setMenuItems = (type) => {
    setMenuItemsToShow(type);
  };

  return (
    <main className="home-page full ">
      <div className="hero flex  ">
        <h1>HEADER</h1>
      </div>

      <section className="menu-suggestions flex column">
        <div className="menu-icons flex ">
          {utilService.getMenuIcons().map((item) => {
            return (
              <div
                onClick={() => setMenuItems(item.type)}
                key={item.imgUrl}
                className="menu-item pointer flex column">
                <div className="round-btn">
                  <img src={item.imgUrl} alt="" />
                </div>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <ActionBtn action="/menu" btnTxt="Full menu" />
      </section>
      <section className="menu-preview main-layout">
        <ArrowsList type={menuItemsToShow} />
      </section>
    </main>
  );
};
