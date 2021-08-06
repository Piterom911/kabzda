import React, {useState} from "react";

export default {
    title: 'React Memo Demonstration',
}

const Counter = (props: { counter: number }) => {
    console.log('Counter Render')
    return <h2>{props.counter}</h2>
}

const Users = (props: {users: Array<string>}) => {
    console.log('User Render')
    return (
        <ul>
            {props.users.map( u => <li key={u}>{u}</li>)}
        </ul>
    )
}

const UsersMemo = React.memo(Users)

export const ReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Roman', 'Dimych', 'Valera'])

    const addOne = () => setCounter(counter + 1)

    const addNewUser = () => {
        setUsers([...users, 'Margo №' + new Date().getMilliseconds()])
    }

    return (
        <div>
            <button onClick={addOne}>Add One to the Counter</button>
            <Counter counter={counter} />
            <br/>
            <br/>
            <button onClick={addNewUser}>Add another user</button>
            <UsersMemo users={users} />
        </div>
    )
}