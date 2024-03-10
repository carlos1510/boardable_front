import clsx from "clsx";
import styles from "./styles.module.css";
import { useRouteLoaderData } from "react-router-dom";
import Board from "../Board/Board";

function BoardList({ className }){
    const { boards } = useRouteLoaderData("app");

    //const containerClassNames = clsx(className, styles.container);

    if (boards.length === 0){
        return <p className={styles.empty}>No Boards</p>
    }

    return (
        <div className={styles.container}>
            {boards.map((board) => (
                <Board key={board.id} board={board} />
            ))}
        </div>
    );
}

export default BoardList;