import { BiTargetLock } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import { FaChevronCircleRight } from "react-icons/fa";

function Goals() {
  return (
    <div className="right-sidemenu">
      <div className="goals">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <BiTargetLock className="icon-rightbar" />
            <p>Goals</p>
            <a href="" className="arrow-rightbar" id="goals">
              <FaChevronCircleRight />
            </a>
          </li>
        </ul>
      </div>
      <div className="popular-dishes">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <FaHamburger className="icon-rightbar" />
            <p>Popular Dishes</p>
            <a href="" className="arrow-rightbar" id="dishes">
              <FaChevronCircleRight />
            </a>
          </li>
        </ul>
      </div>
      <div className="meuns">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <BiSolidDish className="icon-rightbar"/>
            <p>Menus</p>
            <a href="" className="arrow-rightbar" id="menu">
              <FaChevronCircleRight />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Goals;
