
const renderAlbums = (value) => {
    return(
        <div key={value.id} className={'card'}>
            <h4>{value.title} </h4>
        </div>
    )
}
export default renderAlbums;