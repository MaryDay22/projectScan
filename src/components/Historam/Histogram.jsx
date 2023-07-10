import css from "./Historgam.module.css";
import Arrow from "../../ui/Arrow/arrow";
import { HistogramResult } from "../../ui/HistogramResult/HistogramResult";
import { useForm } from "../../api/hooks/useForm";

const Historgam = () => {
  const data = JSON.parse(sessionStorage.getItem(process.env.REACT_APP_LS_KEY_HISTOGRAMS));
  const totalDocuments = data.data[0];
  const riskFactors = data.data[1];

  const renderData = totalDocuments.data.map((el, i) => (
    <HistogramResult
      key={i}
      period={new Date(el.date).toLocaleDateString("ru-RU")}
      all={el.value}
      risk={riskFactors.data[i].value}
    />
  ));

  return (
    <div className={css.wrapper}>
      <Arrow />
      <ul className={css.table}>
        <li className={css.example}>
          <div>Период</div>
          <div>Всего</div>
          <div>Риски</div>
        </li>
        {renderData}
      </ul>
      <Arrow direction={"right"} />
    </div>
  );
};
export default Historgam;
