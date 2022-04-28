import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetails from '../../../hooks/useServiceDetails';
import {useAuthState} from 'react-firebase-hooks/auth';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const {serviceId} =useParams();
    const [service] = useServiceDetails(serviceId);
  const handlePlaceOrder = event => {
    event.preventDefault();
    const order ={
        eamil: user.email,
        service: service.name,
        address: event.target.address.value,
        serviceId: serviceId,
        phone: event.target.phone.value
    }
    axios.post('http://localhost:5000/order', order)
    .then(response =>{
        const {data} = response;
        if (data.insertedId) {
            toast('Your order placed');
            console.log(data.insertedId);
            event.target.reset();
        }
    })
  }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-50 mb-2' value={user?.displayName}  type="text" name="" id="" placeholder='Full Name' disabled />
                <br /> 
                <input className='w-50 mb-2' value={user?.email} type="email" name="" id="" placeholder='E-mail' readOnly disabled/>
                <br />
                <input className='w-50 mb-2' value={service.name} type="text" name="" id="" placeholder='Service' readOnly  />
                <br />
                <input className='w-50 mb-2' value={user.address} type="text" name="address" id="" placeholder='Address' />
                <br />
                <input className='w-50 mb-2' value={user.phone} type="text" name="phone" id="" placeholder='phone'  />
                <br />
                <input className='btn btn-primary' type="submit" value="Pleceed Order" />
            </form>
              <ToastContainer />
        </div>
    );
};

export default Checkout;