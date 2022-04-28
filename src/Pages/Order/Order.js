import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const Order = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        const getOrders = async() => {
        const email = user?.email;
        const url = `http://localhost:5000/order?email=${email}`;
        try {
            const {data} = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
        });
         setOrder(data)
        }
        catch (error) {
            console.log(error.message);
            if (error.response.status === 403 || error.response.status === 403) {
                signOut(auth);
                navigate('/login')
           ; }
        }
       
        }
        getOrders();
      
    },[user]);
    
    return (

        <div>
            <h2>Yours Order: {orders.length} </h2>
        </div>
    );
};

export default Order;