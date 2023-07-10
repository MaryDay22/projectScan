import css from "./LoginButton.module.css";
import RouteLink from "../../../ui/RouteLink/RouteLink";
const LoginButton = () => {
  return (
    <button className={css.login_button}>
      <RouteLink path="/login"> Войти </RouteLink>
    </button>
  );
};
export default LoginButton;
