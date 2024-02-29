import BoardForm from "../../components/BoardForm/BoardForm";
import styles from "./styles.module.css";

function Boards() {
    return (
        <div className={styles.container}>
            <div className={styles.content_board}>
                <div className={styles.board_head}>
                    <h2>My Boards</h2>
                    <div>
                        <label htmlFor="cmbSortBy">Sort by</label>
                        <select id="cmbSortBy" className={styles.element_select}>
                            <option value="1">Created date</option>
                        </select>
                    </div>
                </div>
                <div className={styles.board_body}>
                    <BoardForm />
                    
                </div>
                
            </div>
        </div>
    );
}

export default Boards;