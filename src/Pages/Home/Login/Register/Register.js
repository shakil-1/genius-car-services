import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigatLogin = () => {
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }

    const handelRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-form'>
            <h1 className='text-center text-primary'>Register</h1>
            <form onSubmit={handelRegister}>
                <input type="text" name='name' placeholder='Your Name' />

                <input type="email" name="email" placeholder='Your Email' id="" required />

                <input type="password" name="password" id="" placeholder='enter your password' required />

                <input type="submit" value="Register" />
            </form>
            <p>Alrady have an account? <Link to="/login" className='text-danger  text-decoration-none' onClick={navigatLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;