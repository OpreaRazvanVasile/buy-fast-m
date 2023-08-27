import { Fragment } from "react"
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "./crown.svg";
import './navigation.styles.scss'

const Navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    {<CrownLogo />}
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/singin'>SING IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation

