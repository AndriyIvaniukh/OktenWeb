
const renderPhotos = (value) => {
    return(
        <div key={value.id} className={'cardPhoto'}>
            <h4>{value.title} </h4>
            <img src={value.url} title={"Photo"}/>
        </div>
    )
}
export default renderPhotos;