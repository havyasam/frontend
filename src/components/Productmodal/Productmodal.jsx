import axios from 'axios'
import React, { useEffect,useState } from 'react'
import './Productmodal.css'

export const Productmodal = ({onClose}) => {
    const [productid, setProductid] = useState('');
    const [productname, setProductname] = useState('');
    const [price, setProductprice] = useState('');
    const [color, setProductcolor] = useState('');
    const [size, setProductsize] = useState('');
    const [quantity, setProductquantity] = useState('');
    const [brand, setProductbrand] = useState('');
    const [store,setProductstore]=useState('')
    const [category, setProductcategory] = useState('');
    const [availability, setProductavailable] = useState('');

    useEffect(() => {
        axios.get('/api/v1/products')
            .then(response => {
                setProductid(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/v1/products', { product_name: productname, price:price,color:color,size:size,quantity:quantity,brand:brand,category:category,store:store,availability:availability })
            .then(res => console.log(res))
            .catch(er => console.log(er));
    };
    
  return (
    <div className='brandmain'>
        <div className='productback'></div>
        <div className='productmodalmain'>
            <div><button onClick={onClose} className='brandmodalbutton' >x</button></div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">product_no : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductid(e.target.value)} />
                </div>
                <br />
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" placeholder='Enter brand name' onChange={e=>setProductname(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">price : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductprice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">quantity : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductquantity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">color : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductcolor(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">size : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductsize(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">brand : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductbrand(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">category : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductcategory(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">store : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductstore(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">availability : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setProductavailable(e.target.value)} />
                </div>
                
                <br />

                
                <br />
                <button type="submit"className='updatebtn'>Update</button>

            </form>
        </div>
    </div>
  )
}
export default Productmodal
