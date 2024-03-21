import { mergeBreakpointsInOrder } from '@mui/system'
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Productedit.css'


const Productedit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({ id:id});
    const submitProduct=async(e)=>{
        e.preventDefault()
        const response = await axios.put('http://localhost:8081/api/v1/products/'+id,product)
        if(response.error)
            console.log('error')
        else{
            console.log('Succcess')
            navigate("/products")

        }
    }
    useEffect(() => {
        axios.get('/api/v1/products/'+id)
            .then(response => {
                console.log("Response data:", response.data[0]);
                const { product_name, price,quantity,color,size,brand,category,store,availability} = response.data[0];
                setProduct({ ...product, product_name: product_name, price:price,quantity:quantity,color:color,size:size,brand:brand,category:category,store:store,availability:availability});
                console.log(product_name)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);
  return (
    <div className='brandmain'>
        <div className='producteditback'></div>
        <div className='producteditmain'>
            <h1>Add Brand</h1>
            <form onSubmit={submitProduct}> 
                <br />
                <div>
                    <label htmlFor="">Product_name : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.product_name} onChange={e=>setProduct({...product,product_name:e.target.value})}/>
                </div>
              
                <div>
                    <label htmlFor="">Store : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.store} onChange={e=>setProduct({...product,store:e.target.value})}/>
                </div>
            
                <div>
                    <label htmlFor="">price : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.price} onChange={e=>setProduct({...product,price:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">quantity : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.quantity} onChange={e=>setProduct({...product,quantity:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">color : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.color} onChange={e=>setProduct({...product,color:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">size : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.size} onChange={e=>setProduct({...product,size:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">brand : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.brand} onChange={e=>setProduct({...product,brand:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">category : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.category} onChange={e=>setProduct({...product,category:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">Quantity : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.quantity} onChange={e=>setProduct({...product,quantity:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">Availability : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={product.availability} onChange={e=>setProduct({...product,availability:e.target.value})}/>
                </div>

               

               
                <br />
                <button type="submit"className='updatebtn'>Update</button>

            </form>
        </div>
    </div>
  )
}
export default Productedit

