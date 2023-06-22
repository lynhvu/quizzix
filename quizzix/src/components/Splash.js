import splashbg from '../styles/splash/splashbg.jpeg'
import logo from '../styles/logo-nobg.png'
import styles from '../styles/splash/styles.css'

function Splash() {
    return (
        <div className="container bg">
            <div className="text-center" id="splash-content">

                {/* logo */}
                <img src={logo} alt="Quizzix logo" width="100" height="100" id="logo"/>

                {/* title */}
                <h1 className="display-5 fw-bold white-text">Quizzix</h1>

                {/* intro */}
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 white-text">Ignite your intellect and embrace the quizzing adventure!</p>

                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>

                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;