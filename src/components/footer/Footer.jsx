import "./footer.scss";

import { Component } from "react";
import FootBom from "../../assets/images/fot-bot.jpg";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer__data container">
            <ul className="footer__item">
              <li className="footer__list__title">Shopping With Us</li>
              <li className="footer__list">Support</li>
              <li className="footer__list">Selles Calendar</li>
              <li className="footer__list">AliExpress</li>
            </ul>
            <ul className="footer__item">
              <li className="footer__list__title">COLLABORATE WITH US</li>
              <li className="footer__list">Sell on AliExpress</li>
              <li className="footer__list">Affiliate program</li>
              <li className="footer__list">Blog for sellers</li>
            </ul>
            <ul className="footer__item">
              <li className="footer__list__title">ABOUT COMPANY</li>
              <li className="footer__list">Press center</li>
              <li className="footer__list">AliTech</li>
              <li className="footer__list">Blog about company</li>
            </ul>
            <ul className="footer__item">
              <li className="footer__list__title">CONTACT US</li>
              <li className="footer__list">VK</li>
              <li className="footer__list">Одноклассники</li>
              <li className="footer__list">Telegram</li>
              <li className="footer__list">Dzen</li>
            </ul>
          </div>
          <div className="footer__bottom container">
            <h4>© AliExpress® 2019 – 2024</h4>
            <p>
              The information resource employs <br /> recommendation
              technologies
            </p>
            <div className="footer__bottom__links">
              <a href="">Privacy Policy</a>
              <a href="">User Agreements</a>
            </div>
            <div className="footer__bottom__img">
              <a href="">
                <img src={FootBom} alt="" />
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
