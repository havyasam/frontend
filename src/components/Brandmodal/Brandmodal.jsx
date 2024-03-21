import axios from 'axios'
import React, { useEffect,useState } from 'react'
import './Brandmodal.css'

export const Brandmodal = ({onClose}) => {
    const [brandid, setBrandid] = useState('');
    const [brandname, setBrandname] = useState('');
    const [brandstatus, setBrandstatus] = useState('');

    useEffect(() => {
        axios.get('/api/v1/brands')
            .then(response => {
                setBrandid(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/v1/brands', { brandName: brandname, statusBrand: brandstatus })
            .then(res => console.log(res))
            .catch(er => console.log(er));
    };
    
  return (
    <div className='brandmain'>
        <div className='brndback'></div>
        <div className='brandmodalmain'>
            <div><button onClick={onClose} className='brandmodalbutton' >x</button></div>
            <h1>Add Brand</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Brand_id : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setBrandid(e.target.value)} />
                </div>
                <br />
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" placeholder='Enter brand name' onChange={e=>setBrandname(e.target.value)}/>
                </div>
                <br />

                <div>
                    <label htmlFor="">Status </label>
                    <select name="" id="" onChange={e=>setBrandstatus(e.target.value)}>
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
export default Brandmodal
