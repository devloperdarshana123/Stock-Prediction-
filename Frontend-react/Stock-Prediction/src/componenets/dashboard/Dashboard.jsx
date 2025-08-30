import axios from 'axios';
import React , {useEffect} from 'react'
import axiosInstance from '../../axiosInstance';


function Dashboard() {
    useEffect(() => {
        const fetchProtectedData =  async() =>{
           
            try{
            const response = await axiosInstance.get('/protected-view/' )
            console.log('Successfully fetched protected data:', response.data);
            }catch (error) {
                console.error("Error fetching protected data:", error);

            }
        }
        fetchProtectedData();
    } , [])
  return (
    <>
    <div className='text-light container'>Dashboard</div>
    </>
  )
}

export default Dashboard