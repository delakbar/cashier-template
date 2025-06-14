// src/Components/Biaya.js
import React from 'react';
import '../css/Biaya.css';

const dataBiaya = [
  {
    id: 1,
    tanggal: '2025-06-14',
    nama: 'Pembelian Shampoo',
    kategori: 'Perlengkapan',
    jumlah: 120000,
  },
  {
    id: 2,
    tanggal: '2025-06-13',
    nama: 'Gaji Freelance',
    kategori: 'Operasional',
    jumlah: 300000,
  },
  {
    id: 3,
    tanggal: '2025-06-12',
    nama: 'Beli Sikat Rambut',
    kategori: 'Peralatan',
    jumlah: 55000,
  },
  {
    id: 4,
    tanggal: '2025-06-10',
    nama: 'Biaya Listrik',
    kategori: 'Tagihan',
    jumlah: 450000,
  },
];

const Biaya = () => {
  return (
    <div className="biaya-container">
      <h1>Biaya</h1>
      <p>Daftar pengeluaran salon:</p>

      <div className="biaya-table">
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Nama Biaya</th>
              <th>Kategori</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {dataBiaya.map((item) => (
              <tr key={item.id}>
                <td>{item.tanggal}</td>
                <td>{item.nama}</td>
                <td>{item.kategori}</td>
                <td>Rp{item.jumlah.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Biaya;
