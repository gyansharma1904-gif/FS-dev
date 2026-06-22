import TodoItem from "./TodoItem";

const TodoItems = ({
    todoItems, onDeleteTodo,toggleTodo
}) => {
    return (
        <>
            {todoItems.map((todoItem)=>
                <TodoItem
                    key={todoItem.todoName}
                    todoName={todoItem.todoName}
                    todoDate={todoItem.todoDate}
                    completed={todoItem.completed}
                    handleDeleteData={onDeleteTodo}
                    toggleTodo={toggleTodo}
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