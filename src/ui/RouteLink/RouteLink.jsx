const RouteLink = ({title, path, children, className}) => {
    return <a title={title} href={path} className={className}>{children} </a> 
}
export default RouteLink