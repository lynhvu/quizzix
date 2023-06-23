import Default from "./Default";
import "../styles/splash/styles.css";

function Difficulty() {
  return (
    <div className="container bg">
      <div className="text-center" id="splash-content">
        <Default></Default>

        {/* instruction */}
        <div className="mx-auto">
          <p className="lead mb-4 white-text">Choose a difficult level</p>
        </div>

        {/* buttons */}
        <div class="d-grid gap-2 d-flex justify-content-center">
          <button class="lv-btn">
            <span>easy</span>
          </button>
          <button class="lv-btn">
            <span>Medium</span>
          </button>
          <button class="lv-btn">
            <span>Hard</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Difficulty;
