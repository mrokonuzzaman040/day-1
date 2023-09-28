import React from 'react';
import { Link } from 'react-router-dom';
import {getAuth} from 'firebase/auth'
import app from '../../auth/firebase.init';

const Login = () => {
    const auth = getAuth(app)
    return (
        <div>
            <button className='btn'>Google Login</button>
        </div>
    );
};

export default Login;