import styles from "../TodoCSS.module.css";

const EmptyMessage = ({
    todoItems
}) => {
    return (
        <div className={styles.message}>
            {todoItems.length === 0 && (
                <h1 className="text-center text-success">
                    No Todo. <br /> Enjoy your Day :){" "}
            </h1>
        )}
    </div>
);
};

export default EmptyMessage;