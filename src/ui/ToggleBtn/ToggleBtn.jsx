import css from "./ToggleBtn.module.css";
const ToggleBtn = ({isLoginBtn, handler, text}) => {
  const rootClassName = isLoginBtn
    ? [css.button, css.active]
    : [css.button, css.unactive];
  return (
    <button
      className={rootClassName.join(" ")}
      onClick={() => (!isLoginBtn ? { handler } : null)} 
    >
{text}
    </button>
  );
};
export default ToggleBtn;
