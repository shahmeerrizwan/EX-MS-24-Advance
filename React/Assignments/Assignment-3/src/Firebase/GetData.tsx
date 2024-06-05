import React, { useEffect, useState } from 'react'
import { GetData, db } from './firebaseMethod'
import { ref, remove } from 'firebase/database';


export default function Data() {

const [data,setData]=useState<any>([])

useEffect(()=>{
    const fetchData = async()=>{
        try{
            const res:any = await   GetData('data')
            setData([...res])
        }catch(error){
            console.error("Error Fetching Data :",error)
        }
    };
    fetchData()
},[])

const get = async () => {
    try {
        const res = await GetData('data');
        console.log(res);
        return res;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
useEffect(() => {
    get()
}, [])


function deleteData (){
    console.log("Data Deleted");
    remove(ref(db, 'data'))
}



  return (
    <>
    <h1>Data Come's From Data Base</h1>
   <ol>
   {data.map((data:any,i:any) => {
          return <div key={i}><li > {data}</li>
    <button onClick={deleteData}>Clear Data From Data Base</button></div>
        })}
    </ol>   
    </>
  )
}
