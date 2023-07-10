import css from "./Slider.module.css";
import Arrow from "../../ui/Arrow/arrow";
const Slider = ({ children }) => {
  const slideItem = children;
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slideItem.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slideItem.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={css.slider_container}>
      <Arrow direction="left" onClick={prevSlide} />
      <div className={css.slider_item} key={slideItem[activeIndex].id}>
        <img src={slideItem[activeIndex].image} alt={slideItem[activeIndex].description} />
        <p>{slideItem[activeIndex].description}</p>
      </div>
      <Arrow direction="right" onClick={nextSlide} />
    </div>
  );
};


export default Slider;
