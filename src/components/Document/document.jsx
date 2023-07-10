import css from './document.module.css'

const Document = ({date, source, news, type, image, words, text}) => {
    return (
        <div className={css.document}>
            <div className={css.header}>
                <span>{date}</span>
                <a href="#">{source}</a>
            </div>
            <h4>{news}</h4>
            <div className={css.type}>{type}</div>
            <img src={image} alt="" />
            <p>{text}</p>
            <button className={css.but}>Читать в источнике</button>
            <span className={css.counter}>{words}</span>
        </div>
    )
}

export default Document;