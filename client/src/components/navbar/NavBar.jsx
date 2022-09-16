import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";
export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
        <div className="navLeft"></div>
        <div className="navCenter">
            <ul className="navCenterItem">
            <li className="navCenterItemList">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navCenterItemList">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="navCenterItemList">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="navCenterItemList">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navCenterItemList" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
            </ul>
        </div>
        <div className="navRight">
        {user ? (
            <img className="topImg" src={PF+user.profilePic} alt="" />
        ) : (
          <ul className="navCenterItem">
            <li className="navCenterItemList">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navCenterItemList">
              <Link className="link" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        )}
            <i className="navSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
