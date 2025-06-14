// src/Components/Pelanggan.js
import React from 'react';
import '../css/Pelanggan.css';

const pelangganList = [
  { nama: 'Rina Andriani', telp: '081234567890', kunjungan: 12 },
  { nama: 'Dewi Lestari', telp: '082233445566', kunjungan: 7 },
  { nama: 'Nina Kusuma', telp: '085512345678', kunjungan: 5 },
  { nama: 'Sinta Rahayu', telp: '081398765432', kunjungan: 3 },
];

const Pelanggan = () => {
  return (
    <div className="pelanggan-container">
      <h1 className="pelanggan-title">Data Pelanggan</h1>

      <div className="pelanggan-list">
        {pelangganList.map((p, i) => (
          <div key={i} className="pelanggan-card">
            <h3>{p.nama}</h3>
            <p><strong>No. Telp:</strong> {p.telp}</p>
            <p><strong>Jumlah Kunjungan:</strong> {p.kunjungan}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pelanggan;
