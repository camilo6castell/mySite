function IconSocial({ data }) {

    return(
        <a href={data.link} className={data.animation} target="_blank" rel="noreferrer"><i className={data.icon} alt={data.name}></i></a>
    )
}
export default IconSocial;