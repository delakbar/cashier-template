import React from 'react';
import '../css/Paket.css';

const paketList = [
  {
    nama: 'Paket A',
    detail: 'Potong + Creambath',
    harga: 'Rp 75.000'
  },
  {
    nama: 'Paket B',
    detail: 'Cuci + Blow + Potong',
    harga: 'Rp 85.000'
  },
  {
    nama: 'Paket C',
    detail: 'Smoothing + Cuci + Potong',
    harga: 'Rp 150.000'
  },
  {
    nama: 'Paket D',
    detail: 'Hair Coloring + Vitamin',
    harga: 'Rp 200.000'
  }
];

const Paket = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Daftar Paket Salon</h1>
      <div className="paket-grid">
        {paketList.map((paket, index) => (
          <button key={index} className="paket-card">
            <h3>{paket.nama}</h3>
            <p>{paket.detail}</p>
            <strong>{paket.harga}</strong>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Paket;