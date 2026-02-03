const EmptyMessage = ({
    Todos
}) => {
    return (
        <>
            {Todos.length === 0 && (
                <h1 className="text-center text-success">
                    No Todo. <br /> Enjoy your Day. :){" "}
            </h1>
        )}
    </>
);
};

export default EmptyMessage;