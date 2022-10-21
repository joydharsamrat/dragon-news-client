import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(authContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const navigate = useNavigate();


    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Email address is not verified. Please verify your email address.')
                }
            })
            .catch(err => {
                console.error(err);
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;