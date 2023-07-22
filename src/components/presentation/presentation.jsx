function Presentation({ data }) {
    console.log(data)
    return(
        <>
        <h1>{data.nombre}</h1>
        <h3>{data.role}</h3>
        <p>{data.description}</p>
        </>
    )
}

export default Presentation;