import BoardForm from "../BoardForm/BoardForm";
import styles from "./styles.module.css";
import { useFetcher } from "react-router-dom";

function Board({ board }) {
    const fetcher = useFetcher();
    const isSubmitting = Boolean(fetcher.formMethod);
    return (
        <div className={styles.board} style={{ backgroundColor: board.color }}>
            <h2 className={styles.title}>{ board.name_title }</h2>
        </div>
    );
}

export default Board;