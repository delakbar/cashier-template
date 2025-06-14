// src/Components/Laporan.js
import React from 'react';
import '../css/Laporan.css';

const laporanData = [
  { id: 1, tanggal: '2025-06-14', nama: 'Rina', layanan: 'Potong + Creambath', total: 120000, pembayaran: 'QRIS' },
  { id: 2, tanggal: '2025-06-14', nama: 'Sinta', layanan: 'Facial + Totok Wajah', total: 135000, pembayaran: 'Tunai' },
  { id: 3, tanggal: '2025-06-14', nama: 'Desi', layanan: 'Hair Spa', total: 150000, pembayaran: 'Mandiri' },
];

const Laporan = () => {
  return (
    <div className="laporan-container">
      <div className="laporan-header">
        <h1>Laporan</h1>
        <select className="laporan-filter">
          <option>Hari Ini</option>
          <option>Mingguan</option>
          <option>Bulanan</option>
        </select>
      </div>

      <div className="laporan-summary">
        <div className="summary-card total">
          <h3>Total Transaksi</h3>
          <p>{laporanData.length}</p>
        </div>
        <div className="summary-card income">
          <h3>Total Pendapatan</h3>
          <p>Rp{laporanData.reduce((sum, d) => sum + d.total, 0).toLocaleString()}</p>
        </div>
        <div className="summary-card expense">
          <h3>Total Pengeluaran</h3>
          <p>Rp0</p>
        </div>
      </div>

      <div className="laporan-table">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>Jenis Layanan</th>
              <th>Total</th>
              <th>Pembayaran</th>
            </tr>
          </thead>
          <tbody>
            {laporanData.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.tanggal}</td>
                <td>{row.nama}</td>
                <td>{row.layanan}</td>
                <td>Rp{row.total.toLocaleString()}</td>
                <td>{row.pembayaran}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Laporan;
