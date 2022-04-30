import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='dark:bg-slate-900 min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/coins/:id' element={<CoinPage />} />
      </Routes>
    </div>
  );
};

export default App;