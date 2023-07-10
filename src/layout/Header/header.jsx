import { useContext, useEffect, useState } from "react";
import logo from "./assets/header-logo.png";
import logo2 from "../Footer/assets/footer-logo.png";
import MenuIcon from "./assets/MenuIcon/MenuIcon";
import CloseIcon from "./assets/CloseIcon/CloseIcon.jsx";
import LoginButton from "./LoginButton/LoginButton";
import Navigation from "./Navigation/navigation";
import RouteLink from "../../ui/RouteLink/RouteLink";
import  LimitsInfo  from "../../components/LimitsInfo/LimitsInfo";
import  UserProfile  from "../../components/UserProfile/UserProfile";
import userPhoto from "./assets/user/user.jpg"
import css from "./header.module.css";
import  {useToken} from "../../app/global/providers/TokenProvider/lib/useToken"
import  {TokenContext}  from '../../app/global/providers/TokenProvider/lib/TokenContext';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [eventFiltersInfo, setEventFiltersInfo] = useState(null);
  const {token} = useContext(TokenContext);
  
  useEffect(() => {
    const fetchUser = async () => {
      const req = await fetch(
        `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ACCOUNT_INFO_ENDPOINT}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const res = await req.json();
      setEventFiltersInfo(res.eventFiltersInfo);
    };
     if (token) {
      fetchUser();
    }
  }, [token]);

  const toggleMenu = () => {
    setOpen(!open);
  };

 const { logOut } = useToken();

  return (
    <header className={open ? css.mobile_header : css.header}>
      <RouteLink path="/">
        <img src={open ? logo2 : logo} alt="logo" />
      </RouteLink>
      <nav className={css.navigation}>
        <RouteLink path="/" className={css.nav_item}>
          Главная
        </RouteLink>
        <RouteLink path="/pricing" className={css.nav_item}>
          Тарифы
        </RouteLink>
        <RouteLink path="/faq" className={css.nav_item}>
          FAQ
        </RouteLink>
      </nav>
      <div className={css.profile}>
        <LimitsInfo className={!eventFiltersInfo ? css.spin : null} isLoading={!eventFiltersInfo} isAuth={token} {...eventFiltersInfo} />
        {token ? (
          <UserProfile
            logOut={logOut}
            image={userPhoto}
            name="Михаил К. "
            text="Выйти"
            open={open}
            className={css.hidden} 
          />
        ) : (
          <div className={css.login}>
            <RouteLink path="/register" className={css.register}>
              Зарегистрироваться
            </RouteLink>
            <div className={css.slash}></div>
            <LoginButton />
          </div>
        )}
      </div>
      <div className={css.mobile_nav}>
        <button type="button" onClick={toggleMenu}>
          {!open ? (
            <MenuIcon open={open} className={css.close} />
          ) : (
            <CloseIcon
              open={open}
              className={css.close}
              style={{ background: "#029491" }}
            />
          )}
        </button>
      </div>

      <Navigation open={open} token={token}/>
    </header>
  );
};
export default Header;
