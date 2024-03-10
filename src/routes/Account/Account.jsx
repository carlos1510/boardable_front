import * as React from "react";
import { Form, useNavigation, useOutletContext } from "react-router-dom";
import styles from "./styles.module.css";
import { editUser, getUser } from "../../services/users";

const initialValues = {
    id: 0,
    username: "",
    name: "",
    email: "",
    password: ""
}

function Account(){
    const [formData, setFormData] = React.useState(initialValues);
    const navigation = useNavigation();
    const error = useOutletContext();
    const [isMethod, setIsMethod] = React.useState("PATCH");

    function handleChange(event){
        console.log(event.target);
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    React.useEffect(() => {
        if(navigation.state === "idle" && !error){
            const userLoader = async () => {
                const user = await getUser();
                const initialValuesNew = {
                    id: user.id,
                    username: user.username,
                    name: "",
                    email: "",
                    password: ""
                }

                setFormData(initialValuesNew);
            };
            userLoader();
        }
    }, [navigation.state, error]);

    async function confirmUpdateUser(){
        try{
            const result = await editUser(null, formData);
            const initialValuesNew = {
                id: result.id,
                username: result.username,
                name: "",
                email: "",
                password: ""
            }

            setFormData(initialValuesNew);
        }catch(error){}
    }

    const handleUpdate = () => {
        
        confirmUpdateUser();
        console.log('Datos actualizados:', formData);
    }

    const handleDelete = () => {
        console.log('Datos eliminados:', formData);
    }

    return (
        <div className={styles.container_account}>
            <h1 className={styles.title_account}>My Account</h1>
            <div className={styles.content_account}>
                <form>
                    <input type="hidden" name="color" value={formData.id} />
                    <div>
                        <label>
                            Username
                            <input type="text" 
                                name="username" 
                                className={styles.formControl} 
                                value={formData.username} 
                                onChange={handleChange}
                                readOnly 
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Name
                            <input 
                                type="text" 
                                name="name" 
                                className={styles.formControl} 
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email
                            <input 
                                type="text" 
                                name="email" 
                                className={styles.formControl} 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password
                            <input 
                                type="password" 
                                name="password" 
                                className={styles.formControl} 
                                value={formData.password} 
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button type="button" className={styles["button-primary"]} onClick={handleUpdate} >
                        Update
                    </button>
                    <button type="button" className={styles["button-danger"]} onClick={handleDelete} >
                        Delete my account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Account;