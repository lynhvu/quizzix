import Default from "./Default";
import "../styles/splash/styles.css";
import {Link} from "react-router-dom";

function Difficulty() {
  return (
    <div className="container bg">
      <div className="text-center" id="splash-content">
        <Default text="Choose a difficult level"></Default>

        {/* buttons */}
        <div class="d-grid gap-2 d-flex justify-content-center">
          <Link to="/numquestion">
          <button class="lv-btn">
            <span>easy</span>
          </button>
          <button class="lv-btn">
            <span>Medium</span>
          </button>
          <button class="lv-btn">
            <span>Hard</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Difficulty;
