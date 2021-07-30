import React,{useState,useEffect} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AllNotes() {

    const [notes, setNotes] = useState();
    
    const getAllNote = async () =>{
        try {
            const {data} = await axios.get('http://localhost:4000/api/task');
            console.log(data)
            setNotes(data);
            toast.success('Loading notes');

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        getAllNote();
    },[]);

    console.log(notes);

    return (
        <div>
            <ToastContainer 
                autoClose={2000}
            />
            {/* {notes.map((item,index)=>{
                return(
                    <>
                        <h1>{item.title}</h1>
                        <h3>{item.description}</h3>
                    </>
                );
            })} */}
        </div>
    )
}

export default AllNotes
