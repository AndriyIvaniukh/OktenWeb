
const renderTodos = (value) => {
    return(
        <div key={value.id} className={'cardTodos'} >
            <h4>
                {value.title} - {value.id}
            </h4>
        </div>
    )
}
export default renderTodos;