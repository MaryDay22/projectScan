import css from "./Card.module.css";
import Button from '../../ui/Button/Button'
const Card = ({image, price, oldprice, tariff, credit, current, className}) => {
  const rootClassName = [css.card_head, className]
  return (<div className={css.rate_item}>
    <div className={rootClassName.join(" ")} >
      <h3>{tariff}</h3>
      <img src={image} />
      <p>Для небольшого исследования</p>
    </div>
    {current && <div className={css.current}>Текущий тариф</div>}
    <div className={css.info_rate}>
      <span className={css.price}>{price}</span>
      <span className={css.old_price}>{oldprice}</span>
      <p>{credit}</p>
      <span className={css.list_header}>В тариф входит:</span>
      <ul className={css.list}>
        <li>Безлимитная история запросов</li>
        <li>Безопасная сделка</li>
        <li>Поддержка 24/7</li>
      </ul>
      <Button text={current?'Перейти в личный кабинет' :'Перейти'}
      action={'#'} />
    </div>
  </div>)
};
export default Card
