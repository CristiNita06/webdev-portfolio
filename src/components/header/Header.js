import "./header.css";
import { useState } from "react";
import MobileMenu from "../mobileMenu/MobileMenu";
import classNames from "classnames";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const _showMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const slice1 = classNames({
    slice: true,
    "slice-1-animation": showMobileMenu,
  });
  const slice2 = classNames({
    slice: true,
    "slice-2-animation": showMobileMenu,
  });
  const slice3 = classNames({
    slice: true,
    "slice-3-animation": showMobileMenu,
  });

  return (
    <div>
      {/*Mobile Header*/}
      <div className="mobileMenuContainer">
        <div className="hamburger-container" onClick={_showMobileMenu}>
          <div className={slice1}></div>
          <div className={slice2}></div>
          <div className={slice3}></div>
        </div>
      </div>
      <MobileMenu showMobileMenu={showMobileMenu} />

      {/*Desktop Header*/}
      <div className="desktopMenuContainer">
        <ul className="desktopListContainer">
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
