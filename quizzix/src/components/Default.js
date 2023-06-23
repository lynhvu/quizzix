import logo from "../styles/logo-nobg.png";

function Default() {
  return (
    <div>
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
    </div>
  );
}

export default Default;
