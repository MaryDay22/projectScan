import css from "./search.module.css";
import rocketman from "./assets/rocketman.png";
import document from "./assets/Document.png";
import folder from "./assets/Folders.png";
import Button from "../../ui/Button/Button";
import Checkbox from "../../ui/Checkbox/checkbox";
import { params } from "./data/formParams";
import { useForm } from "../../api/hooks/useForm";
import { useContext } from "react";
import { TokenContext } from "../../app/global/providers/TokenProvider";

const Search = () => {
  const { token } = useContext(TokenContext);
  const { handleSubmit, handleChange, responseData } = useForm();
  console.log(responseData);

  return (
    <section className={css.search}>
      <h2>
        Найдите необходимые <br /> данные в пару кликов.
      </h2>
      <p className={css.rules}>Задайте параметры поиска. </p>
      <p className={css.rules}>Чем больше заполните, тем точнее поиск</p>
      <form onSubmit={handleSubmit} className={css.search_form}>
        <div className={css.inputs}>
          <label htmlFor="INN" className={css.labels}>
            ИНН компании *
          </label>
          <input
            id="INN"
            type="number"
            name="inn"
            placeholder="10 цифр"
            min={"1000000000"}
            max={"9999999999"}
            defaultValue="7710137066"
            required
            className={css.input}
            onChange={handleChange}
          ></input>
          <label htmlFor="tone" className={css.labels}>
            Тональность
          </label>
          <select
            name="tonality"
            defaultValue="any"
            onChange={handleChange}
            className={css.input}
          >
            <option value="any">Любая</option>
            <option value="any">ляминор</option>
            <option value="any">лямажор</option>
          </select>
          <label htmlFor="docs" className={css.labels}>
            Количество документов в выдаче *
          </label>
          <input
            id="docs"
            type="number"
            name="limit"
            placeholder="От 1 до 1000"
            min={"1"}
            max={"1000"}
            defaultValue="1000"
            onChange={handleChange}
            required
            className={css.input}
          ></input>
          <div className={css.date}>
            <label htmlFor="date" className={css.labels}>
              Диапазон поиска *
            </label>
            <br />
            <input
              id="date"
              type="date"
              name="startDate"
              placeholder="Дата начала"
              required
              onChange={handleChange}
              className={css.date_input}
            ></input>
            <input
              id="date_end"
              type="date"
              name="endDate"
              onChange={handleChange}
              placeholder="Дата конца"
              required
              className={css.date_input}
            ></input>
          </div>
        </div>
        <div className={css.checkboxes}>
          {params.map((el) => (
            <Checkbox
              name={el.name}
              handler={handleChange}
              key={el.id}
              text={el.text}
              id={el.id}
            ></Checkbox>
          ))}
          <div className={css.search_button}>
            <Button isDisabled={!token ? true : false} text={"Поиск"}></Button>
          </div>
          <span>* Обязательные к заполнению поля</span>
        </div>
      </form>

      <div className={css.image_block}>
        <img src={folder} className={css.folder} />
        <img src={document} className={css.document} />
        <img src={rocketman} alt="young Ilon Mask" className={css.Ilon} />
      </div>
    </section>
  );
};
export default Search;
