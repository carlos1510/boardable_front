import * as React from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import styles from "./styles.module.css";

import { Form, useNavigation, useOutletContext } from "react-router-dom";

const initialValues = {
    name_title: "",
    color: "#E2E8F0",
};

function BoardForm(){
    const [formData, setFormData] = React.useState(initialValues);
    const navigation = useNavigation();
    const error = useOutletContext();
    const isSubmitting = Boolean(navigation.formMethod);

    function handleChange(event){
        console.log(event.target);
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    React.useEffect(() => {
        if(navigation.state === "idle" && !error){
            setFormData(initialValues);
        }
    }, [navigation.state, error]);

    return (
        <Form 
            method="POST"
            action="/"
            className={styles.form}
            style={{ backgroundColor: formData.color }}
        >
            <input type="hidden" name="color" value={formData.color} />
            <span>Board title</span>
            <input
                type="text"
                name="name_title"
                className={styles.formControl} 
                value={formData.name_title}
                onChange={handleChange}
                disabled={isSubmitting}
            />
            <div className={styles.footer}>
                <div className={styles["footer-color"]}>
                    <span className={styles["footer-color-text"]}>Color </span>
                    <ColorPicker name="color" onChange={handleChange} />
                </div>
                <button type="submit" className={styles.button} disabled={isSubmitting}>
                    {isSubmitting ? "In process..." : "Create"}
                </button>
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </Form>
    );
}

export default BoardForm;

