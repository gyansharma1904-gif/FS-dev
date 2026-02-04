//to sort the todo in completed and uncompleted todos

import styles from "../TodoCSS.module.css";
const TodoSorter = ()=> {
    const showAll=()=>{
        
    }
    
    return (
        <div className={ styles.sorter }>
            <button
                className={styles.btnSort}
                onClick={()=>showAll()}>All</button>
            <button
                className={styles.btnSort}
                onClick={()=>sortCompleted()}>comlpeted</button>
            <button
                className={styles.btnSort}
                onClick={()=>sortUncompleted()}>uncomlpeted</button>

        </div>
    );
}

export default TodoSorter;