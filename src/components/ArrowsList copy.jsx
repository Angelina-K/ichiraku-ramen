import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { MenuItemPreview } from './MenuItemPreview';
import { loadMenuItems } from '../store/actions/menuItemsActions';
import ToAssembleDish from './ToAssmebleDish';
export const ArrowsList = ({ type }) => {
  const { height, width } = useWindowDimensions();
  const { items } = useSelector((state) => state.menuItemsModule);
  const [numOfItems, setNumOfItems] = useState(1);
  const [startIdx, setStartIdx] = useState(0);
  const itemsByType = items
    .filter((item) => item.type === type)
    .splice(startIdx, startIdx + numOfItems);
  const [itemsToShow, setItemsToShow] = useState(itemsByType);
  console.log('itemsByType', itemsByType);

  //   const itemsToShow = itemsByType.splice(startIdx, startIdx + numOfItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMenuItems());
    console.log(startIdx, 'startIdx');
    console.log('itemsToShow', itemsToShow);
    return () => {};
  }, []);

  useEffect(() => {
    const num = Math.floor(width / 400);
    setNumOfItems(num);

    return () => {};
  }, [width]);

  const forw = () => {
    console.log(startIdx, 'startIdx');
    console.log('itemsToShow', itemsToShow);
    setStartIdx(startIdx + 1);
    setItemsToShow(itemsByType.splice(startIdx, startIdx + numOfItems));
    console.log(startIdx, 'startIdx');
    console.log('itemsToShow', itemsToShow);
  };
  //   console.log(items);
  return (
    <div className="arrow-list flex">
      <button>back</button>
      <section className="menu-items-container small-previews flex">
        {type === 'ramen' && <ToAssembleDish />}
        {itemsToShow.map((item) => (
          <MenuItemPreview item={item} key={item.id} />
        ))}
      </section>
      <button onClick={forw}>forw</button>
    </div>
  );
};
