import "../styles/splash/styles.css";
import Default from "./Default";

function Splash() {
  return (
    <div className="container bg">
      <div className="text-center" id="splash-content">
        
        <Default></Default>

        {/* intro */}
        <div className="mx-auto">
          <p className="lead mb-4 white-text">
            Ignite your intellect and embrace the quizzing adventure!
          </p>
        </div>

        {/* search bar */}
        <div>
          <div className="mb-3">
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
              <span class="text">Next</span>
            </span>
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Splash;
