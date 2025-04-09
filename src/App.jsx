import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AuctionTable from './features/auctions/components/AuctionTable';
import FavoritesPanel from './features/auctions/components/FavoritesPanel';

function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favoritedIds, setFavoritedIds] = useState([]);

  useEffect(() => {
    fetch('/data/Items.json')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Error loading data:', err));
  }, []);

  const handleFavorite = item => {
    if (!favoritedIds.includes(item.id)) {
      setFavorites([...favorites, item]);
      setFavoritedIds([...favoritedIds, item.id]);
      toast.success(`${item.title} added to favorites!`);
    }
  };

  const handleRemove = id => {
    setFavorites(favorites.filter(item => item.id !== id));
    setFavoritedIds(favoritedIds.filter(favId => favId !== id));
  };

  return (
    <div className="container">
      <ToastContainer position="bottom-right" autoClose={2000} />
      <h1 className="section-title">Active Auctions</h1>
      <p className="section-description">Discover and bid on extraordinary items</p>
      <div className='auction-container'>
      <AuctionTable items={items} onFavorite={handleFavorite} favoritedItems={favoritedIds}/>
      <FavoritesPanel favorites={favorites} onRemove={handleRemove}/>
      </div>
    </div>
  );
}

export default App;
