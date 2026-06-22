//to sort the todo in completed and uncompleted todos

import styles from "../TodoCSS.module.css";
const TodoSorter = ({
    filter, setFilter
})=> {


    return (
        <div className={ styles.sorter }>
            <button
                className={`btn btn-sm ${
          filter === "ALL" ? "btn-primary" : "btn-outline-primary"
        }`}
                onClick={()=>setFilter("ALL")}>All</button>
            <button
                className={`btn btn-sm ${
                filter === "COMPLETED" ? "btn-primary": "btn-outline-primary"
                }`}
                onClick={()=>setFilter("COMPLETED")}>comlpeted</button>
            <button
                className={`btn btn-sm ${
                filter === "UNCOMPLETED" ? "btn-danger": "btn-outline-danger"
                }`}
                onClick={()=>setFilter("UNCOMPLETED")}>uncomlpeted</button>

        </div>
    );
}

export default TodoSorter;