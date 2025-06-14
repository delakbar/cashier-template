import React from 'react';

const menuItems = [
  'Paket',
  'Pesanan Baru',
  'Open Bill',
  'Riwayat Penjualan',
  'Biaya',
  'Pelanggan',
  'Laporan',
];

const Navbar = ({ activeMenu, setActiveMenu }) => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Salon Kasir</h2>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`menu-item ${activeMenu === item ? 'active' : ''}`}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
