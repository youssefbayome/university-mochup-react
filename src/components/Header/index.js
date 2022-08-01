import { React, useState } from 'react';
import './header.style.scss';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiFillLinkedin } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import Logo from '../../assets/Images/Logo.jpg';
const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <header>
      <div className="social-bar">
        <p>follow us on :<FaFacebookF /> <FaTwitter /> <AiFillLinkedin /> </p>
      </div>
      <nav class="nav-bar">
        <div class="logo">
          <a href="#"><img src={Logo} /></a>
        </div>
        <div class="nav_menu" id="nav_menu">
          <button class="close_btn" id="close_btn">
            <GrClose />
            onClick={() => {
              setIsNavExpanded(!isNavExpanded)
            }}
          </button>

          <ul class="nav_menu_list">
            <li class="nav_menu_item">
              <a href="#">Home</a>
            </li>
            <li class="nav_menu_item">
              <select>
                <option>research & technologies</option>
              </select>
            </li>
            <li class="nav_menu_item">
              <select>
                <option>translation</option>
              </select>
            </li>
            <li class="nav_menu_item">
              <select>
                <option>people</option>
              </select>
            </li>
            <li class="nav_menu_item">
              <select>
                <option>news</option>
              </select>
            </li>
            <div class="search">
              <i class="fa fa-magnifying-glass"></i>
              search
            </div>
          </ul>
        </div>

        <button class="toggle_btn" id="toggle_btn">
          <HiOutlineMenuAlt1 style={{ color: "black" }} />
        </button>
      </nav>
      <div className="banner">
        <div className="banner-text">
          <h1>
            innovating today for a <br />
            <h1> better tomorrow</h1>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
