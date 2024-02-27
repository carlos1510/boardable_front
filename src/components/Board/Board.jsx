import styles from "./styles.module.css";

function Board() {
    return (
        <div className={styles.container}>
            <div className={styles.content_board}>
                <div className={styles.board_head}>
                    <h2>My Boards</h2>
                    <div>
                        <label htmlFor="">Sort by</label>
                        <select className={styles.max_width_element}>
                            <option value="1">Created date</option>
                        </select>
                    </div>
                </div>
                <div className={styles.board_body}>
                    <div className={styles.board_task}>
                        <span>Board title</span>
                        <input type="text" />
                        <div>
                            <div></div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;