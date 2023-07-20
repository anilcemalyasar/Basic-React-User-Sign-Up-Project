import Cart from "../UI/Cart"
import classes from "./UsersList.module.css"

const UsersList = props => {

    return (
        <Cart className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        Full Name: {user.firstName + " " + user.lastName} - Age: ({user.age} Years Old) - Username : {user.name}
                    </li>
                ))}
            </ul>
        </Cart>
    )

}

export default UsersList;