import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import user from "../assets/connexion.png";

function Header({ display }) {
  return (
    <section className={`${display} header`}>
      <button
        type="button"
        onClick={() => {
          window.history.back();
        }}
      >
        retour
      </button>
      <img src={logo} alt="logo" />
      <button type="button">
        <img src={user} alt="user" />
      </button>
    </section>
  );
}

Header.propTypes = {
  display: PropTypes.string.isRequired,
};
export default Header;
