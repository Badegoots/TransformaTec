import React, {useState} from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import UsersTable from './UsersTable';

export default function Users() {

    const usersData = [
        {id:1, name:'Lucas', username:'Badégo', email:'garcezlucas.silva@gmail.com', age:27},
        {id:2, name:'Jose', username:'Josesss', email:'jose@gmail.com', age:80},
    ]

    const initForm = {id:null, name:'', username:'', email:'', age:null};

    const [users, setUsers] = useState(usersData);
    const [currentUser, setCurrentUser] = useState(initForm);
    const [editing, setEditing] = useState(false);

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user]);
    }

    const deleteUser = (id) => {
        setEditing(false);
        setUsers(users.filter(user => user.id !== id));
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    }

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({id: user.id, name: user.name, username: user.username, email: user.email, age: user.age});
    }

}