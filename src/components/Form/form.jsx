import css from "./form.module.css";
import lock from "./assets/padlock.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import yandex from "./assets/yandex.png";
import Button from "../../ui/Button/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RouteLink from "../../ui/RouteLink/RouteLink";
import Input from "../../ui/Input/Input";
import ToggleBtn from "../../ui/ToggleBtn/ToggleBtn";
import {useToken} from './../../app/global/providers/TokenProvider/lib/useToken'
const Form = () => {
  const [formState, setFormState] = useState({login: '', password: ''});
  const [isLoginBtn, setIsLoginBtn] = useState(true);
  const navigate = useNavigate();
  const toggleLoginBtn = () => {
      setIsLoginBtn(!isLoginBtn);
  };
  const loginHandler = (login) => {
    setFormState({ ...formState, login: login });
  };
  const passwordHandler = (password) => {
    setFormState({ ...formState, password: password });
  };
  const { getToken, errorMsg } = useToken();
  const formSubmit = async (e) => {
    e.preventDefault();
    await getToken(formState, navigate, "/");
  };
  return (
    <form
      className={css.account_form}
      >
      <img src={lock} alt="lock" className={css.lock} />
      <div className={css.button_block}>
        <ToggleBtn handler={toggleLoginBtn} isLoginBtn={isLoginBtn} text='Войти' />
        <ToggleBtn handler={toggleLoginBtn} isLoginBtn={!isLoginBtn} text='Зарегистрироваться' />
      </div>
      <Input
        text="Логин или номер телефона:"
        type="login"
        purpose="login"
        handler={loginHandler}
        error={errorMsg}
      />
      <Input
        text="Пароль:"
        type="password"
        purpose="password"
        handler={passwordHandler}
      />
      <Button text={isLoginBtn ? "Войти" : "Зарегистрироваться"} handler={formSubmit}></Button>
      <RouteLink path="/register" className={css.reset}>
        Восстановить пароль
      </RouteLink>
      <p>Войти через:</p>
      <div className={css.socials}>
        <RouteLink path="https://www.google.ru/" target="_blank">
          <img src={google} alt="" />{" "}
        </RouteLink>
        <RouteLink path="https://www.facebook.com/" target="_blank">
          <img
            src={facebook}
            alt="Росфинмониторинг включил корпорацию Meta (признана в России экстремистской и запрещена) в перечень террористов и экстремистов."
          />{" "}
        </RouteLink>
        <RouteLink path="https://www.yandex.com/" target="_blank">
          <img src={yandex} alt="Найдётся всё!" />
        </RouteLink>
      </div>
    </form>
  );
};
export default Form;
