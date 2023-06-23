import logo from "../styles/logo-nobg.png";

function Default(props) {
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

      {/* text */}
      <div className="mx-auto">
          <p className="lead mb-4 white-text">
            {props.text}
          </p>
        </div>
    </div>
  );
}

export default Default;
