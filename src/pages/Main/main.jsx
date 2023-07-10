import css from "./main.module.css";
import Bobby from './ui/Bobby.png';
import Larry from './ui/Larry.png';
import Slider from "../../components/Slider/Slider";
import Button from "../../ui/Button/Button";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { slideItem } from "./assets/sliderItem";
import { pricing } from "./assets/pricing";
import  {TokenContext}  from '../../app/global/providers/TokenProvider/lib/TokenContext';
import { useContext } from "react";
const Main = () => {
  const {token} = useContext(TokenContext);
  return (
    <div className={css.main}>
      <section className={css.about_us}>
        <div className={css.about_containter}>
          <h1>сервис по поиску <br/>публикаций <br/>о компании <br/>по его ИНН</h1>
          <p>
            Комплексный анализ публикаций, получение данных <br/>в формате PDF на
            электронную почту.
          </p>
          <div className={css.but_container}>
          <Link to='search'> <Button disable={!token} text={'Запросить данные'}/> </Link>
          </div>
        </div>
        <img src={Bobby} alt="ненужная картинка" />
      </section>
      <section className={css.whywe}>
        <h2>Почему именно мы</h2>
        <Slider children={slideItem}/>
        <div className={css.larry}>
          <img src={Larry} alt="It's Larry" />
        </div>
      </section>
      <section className={css.rates}>
        <h2>Наши тарифы</h2>
        <div className={css.rate_block}>
          {pricing.map(e => <Card {...e} key={e.id}/>)} 
        </div> 
      </section>
    </div>
  );
};
export default Main;
