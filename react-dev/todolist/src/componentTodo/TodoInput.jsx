import {
    useState
} from 'react';

import {
    IoIosAdd
} from "react-icons/io";
import TodoSorter from "./TodoSorter";
import styles from "../TodoCSS.module.css";

const TodoInput = ({
    onNewTodo, handleNewData
}) => {

    const todoItem = [{},
    ];
    const [todoItems,
        setTodoItems] = useState(todoItem);
    const [name,
        setName] = useState("");
    const [date,
        setDate] = useState("");
    // const handleNameChange = (e) => {
    //     //if (e.key === 'Enter') {
    //     // cheack the key name
    //     setName (e.target.value);
    //     e.target.value = ""; // to clear input after enter
    //     //}
    // };
    // const handleDateChange = (e) => {
    //     setDate (e.target.value);
    // };

    const handleOnClick = () => {
        if (name.trim() === "") return;
        // console.log(`Task added:${name} at date ${date}`);
        onNewTodo(name, date);
        setName("");
        setDate(""); // clear input
    };
    //update the todos
    //<button onClick={handleClick}>

    return (
        <>
            <div className={styles.inputTodo}>
                <div style={ {}}>
                    <input type="text"
                    className={styles.textArea}
                    placeholder=" enter the task"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            </div>
            <div>
                <button className={styles.btnAdd}onClick={handleOnClick}><IoIosAdd /></button>
            </div>

        </div>
        <div className={styles.DateBox}>
            <input type="date"
            className="w-100 h-100 mx-2 px-1 border border-1 border-light rounded "
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
    </div>
    <TodoSorter/>
</>
);
};

export default TodoInput;