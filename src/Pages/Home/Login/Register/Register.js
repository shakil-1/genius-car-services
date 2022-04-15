import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../../../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if(loading || updating){
        return <Loading></Loading>
    }
    const navigatLogin = () => {
        navigate('/login')
    }
 

    const handelRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')


    }
    return (
        <div className='register-form'>
            <h1 className='text-center text-primary'>Register</h1>
            <form onSubmit={handelRegister}>
                <input type="text" name='name' placeholder='Your Name' />

                <input type="email" name="email" placeholder='Your Email' id="" required />

                <input type="password" name="password" id="" placeholder='enter your password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="trems" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="trems">Accept Genius Car Terms and Conditions</label>
                {/* <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="trems">Accept Genius Car Terms and Conditions</label> */}
                <input disabled={!agree} className='btn btn-primary w-50 mx-auto d-block mt-2' type="submit" value="Register" />
            </form>
            <p>Alrady have an account? <Link to="/login" className='text-primary  text-decoration-none' onClick={navigatLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;