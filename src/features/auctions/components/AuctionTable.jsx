import React from 'react';
import '../styles/AuctionTable.css';
import { FaRegHeart } from "react-icons/fa";

const AuctionTable = ({ items, onFavorite, favoritedItems }) => {
  return (
    <table className="auction-table">
      <thead>
        <tr>
          <th>Items</th>
          <th>Current Bid</th>
          <th>Time Left</th>
          <th>Bid Now</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className="item-cell">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </td>
            <td>${item.currentBidPrice}</td>
            <td>{item.timeLeft}</td>
            <td>
              <button
                className={`fav-btn ${favoritedItems.includes(item.id) ? 'disabled' : ''} auction-btn`}
                onClick={() => onFavorite(item)}
                disabled={favoritedItems.includes(item.id)}
              >
                <FaRegHeart style={{ color: favoritedItems.includes(item.id) ? 'red' : 'black' }} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuctionTable;
