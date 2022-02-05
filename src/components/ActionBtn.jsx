import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const ActionBtn = ({ action, btnTxt }) => {
  return (
    <div className="call-to-action-btn">
      <div className="empty-div"></div>
      {typeof action == 'string' ? (
        <Link className="btn" to={action}>
          {btnTxt}
        </Link>
      ) : (
        <button className="btn ">{btnTxt}</button>
      )}
    </div>
  );
};
