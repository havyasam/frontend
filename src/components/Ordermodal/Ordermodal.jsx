import axios from 'axios'
import React, { useEffect,useState } from 'react'
import './Ordermodal.css'


export const Ordermodal = ({onClose}) => {
    const [custid, setOrderid] = useState('');
    const [custname, setOrdername] = useState('');
    const [address, setOrderaddress] = useState('');
    const [phone, setOrderphone] = useState('');
    const [product, setOrderproduct] = useState('');
    const [quantity, setOrderquantity] = useState('');
    const [amount, setOrderamount] = useState('');
    const [status,setOrderstatus]=useState('')
   

    useEffect(() => {
        axios.get('/api/v1/orders')
            .then(response => {
                setOrderid(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/v1/orders', { cust_name: custname, cust_address:address,phone:phone,product:product,quantity:quantity,amount:amount,status:status })
            .then(res => console.log(res))
            .catch(er => console.log(er));
    };
    
  return (
    <div className='brandmain'>
        <div className='orderback'></div>
        <div className='ordermodalmain'>
            <div><button onClick={onClose} className='brandmodalbutton' >x</button></div>
            <h1>Add Order</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">cust_id : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setOrderid(e.target.value)} />
                </div>
                
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" placeholder='Enter brand name' onChange={e=>setOrdername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">address : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setOrderaddress(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">quantity : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setOrderquantity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">phone : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setOrderphone(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">product : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setOrderproduct(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">amount : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setOrderamount(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">status : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setOrderstatus(e.target.value)} />
                </div>
                
                
                <br />

                
                <br />
                <button type="submit"className='updatebtn'>Update</button>

            </form>
        </div>
    </div>
  )
}
export default Ordermodal
