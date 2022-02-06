import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { MenuItemPreview } from './MenuItemPreview';
import { loadMenuItems } from '../store/actions/menuItemsActions';
import ToAssembleDish from './ToAssmebleDish';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { updateCartItem } from '../store/actions/cartActions';
import { utilService } from '../services/utilService';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ArrowsList = ({ type }) => {
  const responsive = utilService.getResponsiveConfiguration();
  const { width } = useWindowDimensions();
  const { items } = useSelector((state) => state.menuItemsModule);
  const [itemsToShow, setItemsToShow] = useState(
    items.filter((item) => item.type === type)
  );
  const [deviceType, setDeviceType] = useState('desktop');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMenuItems());
    return () => {};
  }, []);

  useEffect(() => {
    const itemsByType = items.filter((item) => item.type === type);
    setItemsToShow(itemsByType);
    return () => {};
  }, [items]);

  useEffect(() => {
    let type;
    if (width <= 464) type = 'mobile';
    else if (width >= 464 && width <= 1024) type = 'tablet';
    else type = 'desktop';
    setDeviceType(type);
    return () => {};
  }, [width]);
  return (
    <div className="arrow-list ">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={'mobile'}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style">
        {type === 'ramen' && <ToAssembleDish />}
        {itemsToShow.map((item) => (
          <MenuItemPreview item={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
};
