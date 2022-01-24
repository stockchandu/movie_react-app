import { navbarData } from "./navbardata";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import "./navbar.css";
import {
    popularMovieEndpoints
} from "../../utility";
export const Navbar = () => {
    const {
        home,
        tvshow,
        movie,
        newpopular,
        list,
        logo
    } = navbarData;


    return (
        <>
            <div className="navbar__parent">
                <div className="navbar__child-list">
                    <div><img src={logo} alt="netflix_logo" /></div>
                    <div>
                        <Link to="/">{home}</Link>
                    </div>
                    <div>{tvshow}</div>
                    <div>{movie}</div>
                    <div>
                        <Link to={popularMovieEndpoints}>{newpopular}</Link>
                        </div>
                    <div>{list}</div>
                </div>
                <div className="navbar__child-icon">
                    <div><SearchIcon /></div>
                    <div><CardGiftcardIcon /></div>
                    <div><NotificationsIcon /></div>
                    <div><AccountCircleIcon /></div>
                    <div><DensityMediumIcon /></div>
                </div>
            </div>

        </>
    )
}
