import logo from "../styles/logo-nobg.png";
import "../styles/splash/styles.css";

function Splash() {
  return (
    <div className="container bg">
      <div className="text-center" id="splash-content">
        {/* logo */}
        <img
          src={logo}
          alt="Quizzix logo"
          className="mb-4"
          width="150"
          height="150"
          id="logo"
        />

        {/* title */}
        <h1 className="display-5 fw-bold white-text">Quizzix</h1>

        {/* intro */}
        <div className="mx-auto">
          <p className="lead mb-4 white-text">
            Ignite your intellect and embrace the quizzing adventure!
          </p>
        </div>

        {/* search bar */}
        <div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="col-sm-12"
              id="input-form"
              placeholder="Enter a topic"
            />
          </div>
        </div>

        {/* buttons */}
        <div class="d-grid gap-2 d-flex justify-content-center">
          <button type="submit" className="btn-md px-4 button">
            <span class="text-container">
              <span class="text">Start</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Splash;
