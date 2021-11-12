import React from 'react';
import { useHistory } from 'react-router';
import "./OrderConfirm.css"

const OrderConfirm = () => {

    const history = useHistory();

    const backToHome = () => {
        history.push("/home")
    }

    return (
        <div className="confirm-Order">
            <h1>Congratulation Your Order Has Been Confirmed</h1>
            <button onClick={backToHome} className="Button">Back To Home</button>
            <br />
            <img src="https://cdn.dribbble.com/users/5804730/screenshots/14516978/media/b0978897e159ccefcd7f6e25e6c4b4ca.gif" alt="" />
            
        </div>
    );
};

export default OrderConfirm;