import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Productmodal from '../../components/Productmodal/Productmodal';
export const Products = () => {
  const navigate = useNavigate();
  const [brandmodal,setproductmodal]=useState(false)
  const { id } = useParams();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/products')
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete=(product_no)=>{
    axios.delete('/api/v1/products/'+product_no)
      .then(response => {
        window.location.reload(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className='home'>
    <Sidebar/>
    <div className='container1'><Navbar/>
    <h1 className='manage'>Manage <span>Products</span></h1>
    {brandmodal&&<Productmodal onClose={()=>setproductmodal(false)}/>}
    <button onClick={()=>setproductmodal(true)} className="brandbutton">Add Button</button>
    <div className='brandmain'>
      <h3>Manage Products</h3>
     
      <table border='2'>
        <tr>
          <th>product_no</th>
          <th>product_name</th>
          <th>price</th>
          <th>quantity</th>
          <th>color</th>
          <th>size</th>
          <th>brand</th>
          <th>category</th>
          <th>store</th>
          <th>availability</th>
          
          
          
          <th colspan='2'>Action</th>
        </tr>
        
        {products.map(product => (
                <tr key={product.product_no}>
                  <td>{product.product_no}</td>
                  <td>{product.product_name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.color}</td>
                  <td>{product.size}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.store}</td>
                  <td>{product.availability}</td>
                 
                  <td><Link to={`/productedit/${product.product_no}/${product.product_name}`}  ><button className='edit'>edit</button></Link></td>
                  <td><button className='delete' onClick={()=>handleDelete(product.product_no)}>delete</button></td>
                </tr>
              ))}
      </table>
    </div>
    </div>
  </div>
  )
}
export default Products
