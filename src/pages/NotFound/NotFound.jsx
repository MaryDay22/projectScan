import css from './NotFound.module.css'
import RouteLink from "../../ui/RouteLink/RouteLink"
const NotFound = () => {
    return (<>
        <h1>Страница не найдена</h1>
        <RouteLink path='/' className={css.link}>Перейти на главную</RouteLink>
        </>
    )
}
export default NotFound