import axios from 'axios'
import React, { useEffect,useState } from 'react'
// import './Brandmodal.css'

export const Storemodal = ({onClose}) => {
    const [storeid, setStoreid] = useState('');
    const [storename, setStorename] = useState('');
    const [storestatus, setStorestatus] = useState('');

    useEffect(() => {
        axios.get('/api/v1/stores')
            .then(response => {
                setStoreid(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/v1/stores', { storeName: storename, statusStore: storestatus })
            .then(res => console.log(res))
            .catch(er => console.log(er));
    };
    
  return (
    <div className='brandmain'>
        <div className='brndback'></div>
        <div className='brandmodalmain'>
            <div><button onClick={onClose} className='brandmodalbutton' >x</button></div>
            <h1>Add Store</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Store_id : </label>
                    <input type="text" placeholder='Enter brand id' onChange={e=>setStoreid(e.target.value)} />
                </div>
                <br />
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" placeholder='Enter brand name' onChange={e=>setStorename(e.target.value)}/>
                </div>
                <br />

                <div>
                    <label htmlFor="">Status </label>
                    <select name="" id="" onChange={e=>setStorestatus(e.target.value)}>
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
export default Storemodal
