import TodoItem from "./TodoItem";

const TodoItems = ({
    todoItems, onDeleteTodo
}) => {
    return (
        <>
            {todoItems.map((todoItem)=>
                <TodoItem
                    key={todoItem.todoName}
                    todoName={todoItem.todoName}
                    todoDate={todoItem.todoDate}
                    handleDeleteData={onDeleteTodo}
                    />
            )}
        </>
    )
}

export default TodoItems




    // import TodoItem from "./TodoItem"

    // const TodoItems = ({
    //    todoItems
    // })=> {
    //    return(
    //       <>
    //          {todoItems.map((todoItem)=>
    //             <todoItem Key)}

    //             </>)
    //             }

    //             export default TodoItems;