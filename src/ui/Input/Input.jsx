import css from './input.module.css'
const Input = ({text, type, purpose, handler, error}) => {
  return (
    <div className={css.block}>
      <label htmlFor={purpose} className={css.labels}>
        {text}
      </label>
      <input id={purpose} type={type} className={!error? css.inputs:css.err_input} onChange={(e) => {handler (e.target.value)}}/>
      <span className={css.err}>{error}</span>
    </div>
  );
};
export default Input;