import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.tittle}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                    </ul>
                </div>

                {/* <div className="form-check mx-3">
                    <input className="form-check-input" type="radio" onClick={props.toggleclick} name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="exampleRadios1">greenish mode</label>
                </div>

                <div className="form-check mx-3">
                    <input className="form-check-input" type="radio" onClick={props.toggleclick} name="exampleRadios" id="exampleRadios2" value="option1" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="exampleRadios2">blackish mode</label>
                </div>

                <div className="form-check mx-3">
                    <input className="form-check-input" type="radio" onClick={props.toggleclick} name="exampleRadios" id="exampleRadios3" value="option1" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="exampleRadios3">redish mode</label>
                </div>


                <div className="form-check mx-3">
                    <input className="form-check-input" type="radio" onClick={props.toggleclick} name="exampleRadios" id="exampleRadios4" value="option1" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="exampleRadios4">redish mode</label>
                </div> */}



                <div className="form-check form-switch mx-2">
                    <input className="form-check-input" type="checkbox" onClick={props.toggleclick} role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">bluish Mode</label>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;

Navbar.propTypes = {
    tittle: PropTypes.string
}

Navbar.defaultProps = {
    tittle: "kuntal"
}