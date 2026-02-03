import {
    FaAngellist
} from "react-icons/fa";

const AppName = ({
    appName
}) => {
    return (
        <div>
            <h1 className="text-left fw-bolder fs-1 mx-4 pt-4
                "><FaAngellist />{appName}</h1>
        </div>
    );
};

export default AppName;
