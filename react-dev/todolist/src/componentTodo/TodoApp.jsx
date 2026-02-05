import {
    useState,
    useContext,
} from "react";

// import TodoContext from "../store/TodoDataStore";
import EmptyMessage from "./EmptyMessage"; //line 50
import TodoCounter from "./TodoCounter";
import TodoSorter from "./TodoSorter";

import TodoInput from "./TodoInput";
import TodoItems from "./TodoItems";

export default function TodoApp() {
    const Todos = [
        //     {
        //     todoName: "Buy Chocolate",
        //     todoDate: "22-01-2026",
        // },
        //     {
        //         todoName: "Buy Milk",
        //         todoDate: "22-01-2026",
        //     },
    ];
    // useContext(TodoContext);
    // const [count,
    //     setCount] = useState(0);

    const [todoItems,
        setTodoItems] = useState(Todos);
    const [filter,
        setFilter] = useState("ALL");

    // function ADD TODO
    const handleNewData = (todoName,
        todoDate,
    ) => {
        setTodoItems([
            ...todoItems,
            {
                todoName,
                todoDate,
                completed: false

            }]);
        // setCount(count+1)
    };

    // Delete Todo
    const handleDeleteData = (todoName) => {
        const newData = todoItems.filter(
            (item) => item.todoName !== todoName
        );
        setTodoItems(newData);
        // setCount(count-1)
    };
    const filteredTodos = todoItems.filter((todo) => {
        if (filter === "COMPLETED") return todo.completed;
        if (filter === "UNCOMPLETED") return !todo.completed;
        return true; // ALL
    });

    const toggleTodo = (todoName) => {
        setTodoItems((prevTodos) =>
            prevTodos.map((todo) =>
                todo.todoName === todoName
                ? {
                    ...todo, completed: !todo.completed
                }: todo
            )
        );
    };

    //todoItems length
    const totalTodos = todoItems.length;

    const editTodo = (todoName)=> {}


    return (
        // <TodoContext.Provider value={TodoItems}></>
        <div className="container">
            <TodoCounter totalTodos={totalTodos} />
            {/*<h1>{count}</h1>*/}
            <TodoInput onNewTodo={handleNewData} />
            <TodoSorter filter={filter} setFilter={setFilter} />
            <TodoItems
                todoItems={filteredTodos}
                onDeleteTodo={handleDeleteData}
                toggleTodo={toggleTodo}
                />
            <EmptyMessage todoItems={todoItems} />


        </div>
    );
}


    // import TodoInput from "./TodoInput";
    // import TodoItems from "./TodoItems";
    // import {
    //    useState
    // } from "react";

    // export default function TodoApp() {
    //    let todoItemlist = [{
    //       todoName: "Complete Assessment of React today",
    //       todoDate: "22-01-2026",
    //    },
    //       {
    //          todoName: "Buy Chotolate",
    //          todoDate: "22-01-2026",
    //       },
    //       {
    //          todoName: "Buy Milk",
    //          todoDate: "22-01-2026",
    //       },
    //    ];

    //    const [TodoItem,
    //       setTodoItem] = useState(todoItemlist);

    //    // ADD TODO
    //    const handleNewData = (todoName, todoDate) => {
    //       setTodoItems([
    //          ...todoItems,
    //          {
    //             todoName: todoName, todoDate: todoDate
    //          },
    //       ]);
    //    };
    //    // const handelNewData = (todoName, todoDate)=> {
    //    //    setTodoItem([...TodoItems, {
    //    //       todoName: todoName, todoDate: todoDate
    //    //    }])
    //    // }
    //    const handleDeleteData = (delData)=> {
    //       //console.log(`delete Item : ${delData}.`);
    //       let newData = TodoItems.filter((item)=> item.todoName !== delData);
    //    }



    //    return (
    //       <div className="container">
    //          <TodoInput onNewTodo={handleNewData} />
    //          <TodoItems
    //             todoItems={todoItems}
    //             onDeleteTodo={handleDeleteData}
    //             />
    //       </div>
    //    );
    // }


    //    // import TodoInput from "./TodoInput"
    //    // import TodoItem1 from "./TodoItem1"
    //    // import TodoItem2 from "./TodoItem2"
    //    // import TodoItem3 from "./TodoItem3"
    //    // export default function TodoApp() {
    //    //    return(
    //    //       <div>
    //    //          <TodoInput />
    //    //          <TodoItem1 />
    //    //          <TodoItem2 />
    //    //          <TodoItem3 />
    //    //       </div>

    //    //    )
    //    // }