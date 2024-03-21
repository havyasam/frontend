
import { mergeBreakpointsInOrder } from '@mui/system'
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Brandedit.css'

const Brandedit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [brand, setBrand] = useState({ id:id,brand_name: '', status: '' });
    const submitBrand=async(e)=>{
        e.preventDefault()
        const response = await axios.put('http://localhost:8081/api/v1/brands/'+id,brand)
        if(response.error)
            console.log('error')
        else{
            console.log('Succcess')
            navigate("/brands")

        }
    }
    useEffect(() => {
        axios.get('/api/v1/brands/'+id)
            .then(response => {
                console.log("Response data:", response.data[0]);
                const { brand_name, status } = response.data[0];
                setBrand({ ...brand, brand_name: brand_name, status: status });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);
  return (
    <div className='brandmain'>
        <div className='brndback'></div>
        <div className='brandmodalmain'>
            <h1>Add Brand</h1>
            <form onSubmit={submitBrand}> 
                <br />
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" placeholder='Enter brand name' name='brandName' value={brand.brand_name} onChange={e=>setBrand({...brand,brand_name:e.target.value})}/>
                </div>
                <br />

                <div>
                    <label htmlFor="">Status </label>
                    <select name="statusEdit" id="" value={brand.status} onChange={e=>setBrand({...brand,status:e.target.value})}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <br />
                <button type="submit"className='updatebtn'>Update</button>

            </form>
        </div>
    </div>
  )
}
export default Brandedit

