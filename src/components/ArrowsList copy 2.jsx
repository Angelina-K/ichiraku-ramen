import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { MenuItemPreview } from './MenuItemPreview';
import { loadMenuItems } from '../store/actions/menuItemsActions';
import ToAssembleDish from './ToAssmebleDish';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { updateCartItem } from '../store/actions/cartActions';
export const ArrowsList = ({ type }) => {
  const { height, width } = useWindowDimensions();
  const { items } = useSelector((state) => state.menuItemsModule);
  const [numOfItems, setNumOfItems] = useState(1);
  const [startIdx, setStartIdx] = useState(0);
  const [itemsToShow, setItemsToShow] = useState([]);

  const itemsByType = items.filter((item) => item.type === type);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMenuItems());
    return () => {};
  }, []);

  useEffect(() => {
    console.log('called width change');
    const num = Math.floor(width / 400);
    setNumOfItems(num);
    const newItemsByType = [...itemsByType];
    newItemsByType.splice(num, itemsByType.length);
    setItemsToShow(newItemsByType);
    return () => {};
  }, [width]);

  const updateStartIdx = (num) => {
    if (startIdx + num >= 0) {
      console.log('update idx called', startIdx + num);
      const newStartIdx = startIdx + num;
      const newItemsByType = [...itemsByType];
      newItemsByType.splice(0, newStartIdx);
      newItemsByType.splice(numOfItems, itemsByType.length);
      setItemsToShow(newItemsByType);
      setStartIdx(newStartIdx);
    }
  };
  const fwd = () => {};
  //   console.log(items);
  return (
    <div className="arrow-list flex">
      <button onClick={() => updateStartIdx(-1)}>Previous</button>
      <section className="menu-items-container small-previews flex">
        {/* {type === 'ramen' && <ToAssembleDish />} */}
        {itemsToShow.map((item) => (
          <MenuItemPreview item={item} key={item.id} />
        ))}
      </section>
      <button onClick={() => updateStartIdx(1)}>Next</button>
    </div>
  );
};
