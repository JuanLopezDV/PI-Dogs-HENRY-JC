import React from "react";
import dogPuppy from "../../assets/images/puppy-dog.webp";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Wave } from "../../assets/svg/waves-lp.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/icon-menu.svg";
import { ReactComponent as FigureDog } from "../../assets/svg/figure-dog.svg";
import { Modal } from "../Modal";
import AboutMe from "../AboutMe";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState(false);

  const onClick = () => {
    navigate("/home");
  };

  const onModla = () => {
    setOpenModal(true);
  };

  return (
    <>
      <header className="hero">
        <nav className="nav container">
          <h2 className="nav-logo">
            {" "}
            <Logo className="nav-logo-svg" />
            Dogs API
          </h2>

          <ul className="nav-list">
            <li className="nav-item">
              <span onClick={onModla} className="nav-link">
                Acerca de
              </span>
            </li>
          </ul>
          <figure className="nav-menu">
            <MenuIcon className="menu-icon" fill="#853b46" />
          </figure>
        </nav>

        <section className="hero-main container">
          <div className="hero-texts">
            <h1 className="hero-title">¡Bienvenido a nuestra APP de perros!</h1>

            <p className="hero-description">
              Descubre un mundo lleno de razas caninas fascinantes y datos
              detallados sobre cada una de ellas.
            </p>

            <button className="btn-api-dogs" onClick={onClick}>
              INGRESAR
            </button>
          </div>

          <figure className="hero-picture">
            <FigureDog className="hero-bg-image" />
            <img src={dogPuppy} alt="beagle dog puppy" className="hero-image" />
          </figure>
        </section>
        <Wave className="hero-waves" fill="#853b46" />
      </header>

      {openModal && (
        <Modal>
          <AboutMe setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export { LandingPage };
