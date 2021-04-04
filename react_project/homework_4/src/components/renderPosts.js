
const renderPosts = (value) => {
    return(
        <div key={value.id} className={'cardPosts'}>
            <h3>{value.title} </h3>
            <p>{value.body}</p><br/>
        </div>
    )
}
export default renderPosts;