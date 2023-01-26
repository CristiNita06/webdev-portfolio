import "./mobilemenu.css";
import classNames from "classnames";
// import instagramLogo from "../../icons/icons-instagram.png";
import instagramLogo from "../../icons/instagram.svg";
import githubLogo from "../../icons/github.svg";
import linkedinLogo from "../../icons/linkedin.svg";
import emailLogo from "../../icons/email.svg";

export default function MobileMenu({ showMobileMenu, _showMobileMenu }) {
  // console.log(showMobileMenu);
  const modalContainer = classNames({
    container: true,
    "toggle-modal-visibility": showMobileMenu,
  });
  return (
    <div className={modalContainer}>
      <div className="letsconnect">LET'S CONNECT</div>
      <div className="contactThumbnailsContainer">
        <ul>
          <li onClick={_showMobileMenu}>
            <img src={githubLogo} alt="github logo" />
          </li>
          <li onClick={_showMobileMenu}>
            <img src={linkedinLogo} alt="linkedin logo" />
          </li>
          <li onClick={_showMobileMenu}>
            <img src={instagramLogo} alt="instagram logo" />
          </li>
          <li onClick={_showMobileMenu}>
            <img src={emailLogo} alt="email logo" />
          </li>
        </ul>
      </div>

      <div className="linksContainer">
        <ul>
          <li onClick={_showMobileMenu}>ABOUT</li>
          <li onClick={_showMobileMenu}>SERVICES</li>
          <li onClick={_showMobileMenu}>PORTOFLIO</li>
          <li onClick={_showMobileMenu}>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
