
const renderUsers = (value) => {
    return(
        <div className={'card'}>
            <h4>{value.username}</h4>
            <p>{value.name}</p>
            <p>{value.email}</p>
        </div>
    )
}
export default renderUsers;