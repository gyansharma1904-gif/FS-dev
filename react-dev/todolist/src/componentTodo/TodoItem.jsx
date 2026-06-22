import {
    AiTwotoneDelete
} from "react-icons/ai";
import {
    CiBookmarkCheck
} from "react-icons/ci";
import {
    useState
} from "react";
// react icons useage

import styles from "../TodoCSS.module.css";

const TodoItem = ({
    todoName, todoDate, completed, handleDeleteData, toggleTodo, editTodo
}) => {
    const myStyle = {
        color: "white",
        border: "1px dotted black",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        borderRadius: 5,
        fontFamily: "Sans-Serif"
    };

    const [clicked,
        setClicked] = useState(false);

    return (
        <div className={styles.TodoOutput}>

            <div style={ { marginLeft: "0px", width: "300px", paddingTop: "10px", lineHeight: 0.3, fontSize: 16, fontFamily: "Sans-Serif" }}>
                {/* inline css example
                    camelCased Property Names example (backgroundColor)*/}

                <p>
                    {todoName}
                    {/*Create a style object named myStyle:
                    sa an javaScript Object*/}
                </p>
                <small className="text-xs text-gray-500 dark:text-gray-400">
                    {todoDate}
                </small>
            </div>

            <div style={ { paddingTop: "6px" }}>
                <button
                    className={`btn btn-sm ${completed ? "btn-secondary": "btn-outline-success"
                    }`}
                    onClick={() => toggleTodo(todoName) }
                    >
                    <CiBookmarkCheck />
                </button>
                <button
                    className={styles.btnEdit}
                    onClick={()=>editTodo(todoName)}>edit</button>
                <button
                    className={styles.btnDel}
                    onClick={()=>handleDeleteData(todoName)}><AiTwotoneDelete /></button>
            </div>
        </div>
    );
};


export default TodoItem;




    // const TodoItem = ({
    //    TodoName, TodoDate
    // })=> {
    //    return(
    //       <>
    //          <div className="row mt-2 px-5 ">
    //             <div className="col-5">
    //                {TodoName}
    //             </div>
    //             <div className="col-5">
    //                {TodoDate}
    //             </div>
    //             <div className="col-2">
    //                <button className="btn bg-danger">delete</button>
    //             </div>
    //          </div>
    //       </>
    //    )
    // }
    // export default TodoItem;

    //    // const TodoItem1 = (
    //    //    {
    //    //       TodoName, TodoDate
    //    //    }
    //    // )=> {
    //    //    return(
    //    //       <>

    //    //       </>)
    //    // }