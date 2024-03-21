
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Brands.css'
import Brandmodal from '../../components/Brandmodal/Brandmodal';
import { Link } from 'react-router-dom';

export const Brands = () => {
  const navigate = useNavigate();
  const [brandmodal,setbrandmodal]=useState(false)
  const { id } = useParams();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/brands')
      .then(response => {
        setBrands(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete=(brand_no)=>{
    axios.delete('/api/v1/brands/'+brand_no)
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
    <h1 className='manage'>Manage <span>Brands</span></h1>
    {brandmodal&&<Brandmodal onClose={()=>setbrandmodal(false)}/>}
    <button onClick={()=>setbrandmodal(true)} className="brandbutton">Add Button</button>
    <div className='brandmain'>
      <h3>Manage Brands</h3>
     
      <table border='2'>
        <tr>
          <th>Brand Id</th>
          <th>Name</th>
          <th>Status</th>
          <th colspan='2'>Action</th>
        </tr>
        
        {brands.map(brand => (
                <tr key={brand.brand_no}>
                  <td>{brand.brand_no}</td>
                  <td>{brand.brand_name}</td>
                  <td>{brand.status}</td>
                  <td><Link to={{ 
                    pathname:`/brandedit/${brand.brand_no}/${brand.brand_name}` ,
                    search:`?status=${brand.status}`
                    }} ><button className='edit'>edit</button></Link></td>
                  <td><button className='delete' onClick={()=>handleDelete(brand.brand_no)}>delete</button></td>
                </tr>
              ))}
      </table>
    </div>
    </div>
  </div>
  )
}
export default Brands
