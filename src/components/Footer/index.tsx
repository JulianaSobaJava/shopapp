import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas
            quaerat consequatur doloribus? Ea voluptate tenetur consequuntur
            autem maxime dignissimos voluptates! Fugiat et eaque dolores esse
            vitae quisquam repellat blanditiis.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas
            quaerat consequatur doloribus? Ea voluptate tenetur consequuntur
            autem maxime dignissimos voluptates! Fugiat et eaque dolores esse
            vitae quisquam repellat blanditiis.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">
            &#169; Copyright 2023. All rights reserved
          </span>
        </div>
        <div className="right">
          <img
            src="/image/payment.jpg"
            alt="Footer Payment Image"
            className="footer_img"
          />
        </div>
      </div>
    </div>
  );
}
