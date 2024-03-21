import { mergeBreakpointsInOrder } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Storeedit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const status = new URLSearchParams(location.search).get('status');
    const { id ,store_name} = useParams();
    
    const [store, setStore] = useState({ id: id, store_name: '',status:'' });

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/stores/'+id);
            const { store_name,status } = response.data[0];
            console.log(store_name)
            setStore({ ...store, store_name: store_name,status:status });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // fetchData();
        setStore({id,store_name,status})
    }, [id]);

    const submitStore = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/v1/stores/`+id,store);
            console.log('Success');
            navigate("/stores");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='brandmain'>
            <div className='brndback'></div>
            <div className='brandmodalmain'>
                <h1>Edit Store</h1>
                <form onSubmit={submitStore}>
                    <br />
                    <div>
                        <label htmlFor="storeName">Name: </label>
                        <input type="text" placeholder='Enter store name' name='storeName' value={store.store_name} onChange={e => setStore({ ...store, store_name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="storeName">status: </label>
                        <input type="text" placeholder='Enter store name' name='storeName' value={store.status} onChange={e => setStore({ ...store, status: e.target.value })} />
                    </div>
                    <br />
                    <button type="submit" className='updatebtn'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Storeedit;
