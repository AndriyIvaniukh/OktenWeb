
const renderComments = (value) => {
    return(
        <div key={value.id} className={'cardComment'}>
            <h3>{value.name} </h3>
            <h4>{value.email}</h4>
            <p>{value.body}</p><br/>
        </div>
    )
}
export default renderComments;