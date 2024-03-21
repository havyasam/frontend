import { mergeBreakpointsInOrder } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Orderedit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)
    const [order, setOrder] = useState({ id:id });

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('/api/v1/orders/'+id);
    //         const { cust_name } = response.data[0];
    //         console.log(cust_name)
    //         setOrder({ ...order, cust_name: cust_name });
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    useEffect(() => {
    
       axios.get('/api/v1/orders/'+id)
       
       .then(response=>{
        console.log("Response data:", response);
        const { cust_name, cust_address,phone,product,quantity ,amount} = response.data[0];
        
        setOrder({ ...order, cust_name: cust_name, cust_address: cust_address,phone:phone,product:product,quantity:quantity,amount:amount });
       })
       .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const submitOrder = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/v1/orders/`+id,order);
            console.log('Success');
            navigate("/orders");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='brandmain'>
            <div className='brndback'></div>
            <div className='brandmodalmain'>
                <h1>Edit Order</h1>
                <form  onSubmit={submitOrder}>
                    <br />
                    <div>
                        <label htmlFor="storeName">cust_name: </label>
                        <input type="text" placeholder='Enter order name' name='orderName' value={order.cust_name} onChange={e => setOrder({ ...order, cust_name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="storeName">cust_address: </label>
                        <input type="text" placeholder='Enter order name' name='orderName' value={order.cust_address} onChange={e => setOrder({ ...order, cust_address: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="storeName">phone: </label>
                        <input type="text" placeholder='Enter order name' name='orderName' value={order.phone} onChange={e => setOrder({ ...order, phone: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="storeName">product: </label>
                        <input type="text" placeholder='Enter order name' name='orderName' value={order.product} onChange={e => setOrder({ ...order, product: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="storeName">quantity: </label>
                        <input type="text" placeholder='Enter order name' name='orderName' value={order.quantity} onChange={e => setOrder({ ...order, quantity: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="storeName">amount: </label>
                        <input type="text" placeholder='Enter order name' name='orderName' value={order.amount} onChange={e => setOrder({ ...order, amount: e.target.value })} />
                    </div>
                    
                    <br />
                    <button type="submit" className='updatebtn'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Orderedit;
