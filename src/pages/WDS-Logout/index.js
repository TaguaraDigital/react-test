import React, { useState,  } from 'react';

import { useAuth } from '../../contexts/AuthContext';


const Logout = () => {

    const { logout } = useAuth();


    return (
    <Button> Login</Button>
    )
}

export default Login
