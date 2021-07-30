import React,{useState,useEffect} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AllNotes.css';

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

    const handleClick = async (e)=>{
        try {
            const {data} = await axios.delete(`http://localhost:4000/api/task/${e.target.value}`);
            toast.success(data.message);
            getAllNote();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="box-task">
            <ToastContainer 
                autoClose={2000}
            />
            <h1 className="h1">List to do</h1>
            <div className="div-Table">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1 }</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <button onClick={handleClick} value={item._id}>Delete</button>
                                        <button>Edit</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllNotes
