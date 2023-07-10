import css from './checkbox.module.css'
const Checkbox = ({text, id}) => {
  return (
    <div>
      <div className={css.checkbox}>
        <input type="checkbox" id={id} name="scales" />
        <label for={id}>{text}</label>
      </div>
    </div>
  );
};

export default Checkbox;
