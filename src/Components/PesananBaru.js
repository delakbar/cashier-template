import React, { useState } from 'react';
import '../css/PesananBaru.css';

const paketList = [
  { id: 1, nama: 'Potong Rambut', detail: 'Potong + Cuci', harga: 30000 },
  { id: 2, nama: 'Creambath', detail: 'Cuci + Creambath', harga: 50000 },
  { id: 3, nama: 'Hair Spa', detail: 'Hair Spa + Pijat', harga: 65000 },
  { id: 4, nama: 'Paket Komplit', detail: 'Potong + Cuci + Spa', harga: 90000 },
];

const PesananBaru = () => {
  const [pelanggan, setPelanggan] = useState('');
  const [pesanan, setPesanan] = useState([]);

  const tambahPesanan = (paket) => {
    setPesanan([...pesanan, paket]);
  };

  const hapusItem = (index) => {
    const newPesanan = [...pesanan];
    newPesanan.splice(index, 1);
    setPesanan(newPesanan);
  };

  const totalHarga = pesanan.reduce((acc, item) => acc + item.harga, 0);

  return (
    <div className="pesanan-container">
      <h2>Pesanan Baru</h2>

      <div className="form-section">
        <label>Nama Pelanggan:</label>
        <input
          type="text"
          value={pelanggan}
          onChange={(e) => setPelanggan(e.target.value)}
          placeholder="Masukkan nama pelanggan"
        />
      </div>

      <div className="paket-list">
        <h3>Pilih Paket:</h3>
        <div className="paket-grid">
          {paketList.map((paket) => (
            <button key={paket.id} className="paket-card" onClick={() => tambahPesanan(paket)}>
              <h4>{paket.nama}</h4>
              <p>{paket.detail}</p>
              <strong>Rp{paket.harga.toLocaleString()}</strong>
            </button>
          ))}
        </div>
      </div>

      <div className="daftar-pesanan">
        <h3>Daftar Pesanan:</h3>
        {pesanan.length === 0 ? (
          <p>Belum ada pesanan.</p>
        ) : (
          <ul>
            {pesanan.map((item, index) => (
              <li key={index}>
                {item.nama} - Rp{item.harga.toLocaleString()}
                <button className="hapus-btn" onClick={() => hapusItem(index)}>Hapus</button>
              </li>
            ))}
          </ul>
        )}
        <div className="total-harga">
          <strong>Total: Rp{totalHarga.toLocaleString()}</strong>
        </div>

        <button className="simpan-btn" disabled={!pelanggan || pesanan.length === 0}>
          Simpan Pesanan
        </button>
      </div>
    </div>
  );
};

export default PesananBaru;
