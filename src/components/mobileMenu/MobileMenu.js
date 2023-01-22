import "./mobilemenu.css";
import classNames from "classnames";

export default function MobileMenu({ showMobileMenu }) {
  console.log(showMobileMenu);
  const modalContainer = classNames({
    container: true,
    "toggle-modal-visibility": showMobileMenu,
  });
  return (
    <div className={modalContainer}>
      <ul className="list-positioning">
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
