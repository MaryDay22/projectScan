import { isDisabled } from '@testing-library/user-event/dist/utils';
import css from './Button.module.css'
const Button = ({ text, children, path, className, handler, disable }) => {
    const rootClassName = !disable? [css.button, className]:[css.button, className, css.disabl];
    return (
        <button  disabled={disable} onClick={handler} className={rootClassName.join(" ")}>{text}</button>
     );
}

export default Button;
