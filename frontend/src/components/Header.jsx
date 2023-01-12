import logo from "../assets/logo.png";
import user from "../assets/connexion.png";

function Header() {
  return (
    <section className="header">
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

export default Header;
