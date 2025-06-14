import React, { useState } from 'react';
import '../css/RiwayatPenjualan.css';

const dummyData = [
  {
    id: '00001#25.06.2025',
    total: 195000,
    time: '10:45',
    method: 'QRIS - Mandiri',
    customer: 'Rohmawati',
    createdBy: 'Admin',
    date: 'Hari Ini'
  },
  {
    id: '00002#25.06.2025',
    total: 250000,
    time: '11:30',
    method: 'QRIS - BCA',
    customer: 'Ayu',
    createdBy: 'Admin',
    date: 'Hari Ini'
  },
  {
    id: '00003#25.06.2025',
    total: 275000,
    time: '12:10',
    method: 'Tunai',
    customer: '-',
    createdBy: 'Admin',
    date: 'Hari Ini'
  },
];

const RiwayatPenjualan = () => {
  const [selected, setSelected] = useState(dummyData[0]);

  return (
    <div className="riwayat-container">
      <aside className="riwayat-sidebar">
        <div className="riwayat-search">
          <input type="text" placeholder="Cari Penjualan..." />
        </div>
        <div className="riwayat-list">
          {dummyData.map((trx) => (
            <div
              key={trx.id}
              className={`riwayat-item ${selected.id === trx.id ? 'active' : ''}`}
              onClick={() => setSelected(trx)}
            >
              <div className="riwayat-item-title">{trx.id}</div>
              <div className="riwayat-item-info">Total Rp{trx.total.toLocaleString()}</div>
              <div className="riwayat-item-info">{trx.time}</div>
            </div>
          ))}
        </div>
      </aside>

      <main className="riwayat-detail">
        {selected && (
          <div className="riwayat-detail-box">
            <div className="riwayat-header">
              <h2>Informasi Penjualan</h2>
              <div className="riwayat-actions">
                <button className="btn-retur">Retur</button>
                <button className="btn-share">Bagikan Struk</button>
                <button className="btn-struk">Cetak Struk</button>
              </div>
            </div>

            <div className="riwayat-section">
              <div className="riwayat-section-title">Detail Penjualan</div>
              <div className="riwayat-row">
                <span>Nomor:</span>
                <span>{selected.id}</span>
              </div>
              <div className="riwayat-row">
                <span>Tanggal:</span>
                <span>{selected.date}, {selected.time}</span>
              </div>
              <div className="riwayat-row">
                <span>Metode:</span>
                <span>{selected.method}</span>
              </div>
              <div className="riwayat-row">
                <span>Pelanggan:</span>
                <span>{selected.customer}</span>
              </div>
              <div className="riwayat-row">
                <span>Dibuat oleh:</span>
                <span>{selected.createdBy}</span>
              </div>

              <div className="riwayat-total">
                <span>Total Bayar</span>
                <span>Rp{selected.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default RiwayatPenjualan;