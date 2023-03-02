import React, { useState, useEffect } from "react";
import axios from "axios";
// import './Users.css';
import { Table, Container } from "react-bootstrap";


function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}users/`)
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Container className="mt-4">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.type}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};


export default Users