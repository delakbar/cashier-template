// src/App.js

import React, { useState } from 'react';
import {
  Navbar,
  TopBar,
  Paket,
  PesananBaru,
  OpenBill,
  RiwayatPenjualan,
  Biaya,
  Pelanggan,
  Laporan
} from './Components/Components';

function App() {
  const [activeMenu, setActiveMenu] = useState('Paket');

  const renderContent = () => {
    switch (activeMenu) {
      case 'Paket':
        return <Paket />;
      case 'Pesanan Baru':
        return <PesananBaru />;
      case 'Open Bill':
        return <OpenBill />;
      case 'Riwayat Penjualan':
        return <RiwayatPenjualan />;
      case 'Biaya':
        return <Biaya />;
      case 'Pelanggan':
        return <Pelanggan />;
      case 'Laporan':
        return <Laporan />;
      default:
        return <Paket />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main-section">
        <TopBar />
        <main className="content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
