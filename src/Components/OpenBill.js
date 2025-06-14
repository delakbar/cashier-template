// src/Components/OpenBill.js
import React from 'react';
import '../css/OpenBill.css';

const openBills = [
  {
    id: 'INV001',
    namaPelanggan: 'Rina',
    layanan: 'Potong + Creambath',
    total: 150000,
    waktu: '10:35',
  },
  {
    id: 'INV002',
    namaPelanggan: 'Andi',
    layanan: 'Hair Spa',
    total: 180000,
    waktu: '11:00',
  },
  {
    id: 'INV003',
    namaPelanggan: 'Sinta',
    layanan: 'Potong + Smoothing',
    total: 300000,
    waktu: '11:45',
  },
];

const OpenBill = () => {
  return (
    <div className="openbill-container">
      <h1 className="openbill-title">Open Bill</h1>
      <div className="openbill-list">
        {openBills.map((bill, index) => (
          <div className="bill-card" key={index}>
            <div className="bill-header">
              <span className="bill-id">{bill.id}</span>
              <span className="bill-time">{bill.waktu}</span>
            </div>
            <div className="bill-body">
              <p><strong>Nama:</strong> {bill.namaPelanggan}</p>
              <p><strong>Layanan:</strong> {bill.layanan}</p>
              <p><strong>Total:</strong> Rp{bill.total.toLocaleString()}</p>
            </div>
            <div className="bill-actions">
              <button className="btn-bayar">Bayar</button>
              <button className="btn-hapus">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenBill;
