import React,{useState,useEffect} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './AllNotes.css';

function AllNotes() {

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState();
    const [see, setSee] = useState(false);
    
    const getAllNote = async () =>{
        try {
            setSee(false);
            const {data} = await axios.get('http://localhost:4000/api/task');
            setNotes(data);
            toast.success('Loading Tasks');
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

    const handleComplete = async (e)=>{
        try {
            const obj = {status: true};
            const {data} = await axios.put(`http://localhost:4000/api/task/completed/${e.target.value}`, obj);
            toast.success(data.message);
            getAllNote();
        } catch (error) {
            console.log(error)
        }
    }

    const handelSeeAll = async ()=>{
        try {
            setSee(true);
            const {data} = await axios.get('http://localhost:4000/api/task/all');
            setNotes(data);
            toast.success('Loading Tasks');
        } catch (error) {
            console.log(error)
        }
    }

    const getValueSearch = (e)=>{
        setSearch(e.target.value);
        console.log(search);
        /* const filterTask = notes.filter(note => {
            console.log(note.description);
            note.description == search
        });
        console.log(filterTask) */
    }

    return (
        <div className="box-task">
            <ToastContainer 
                autoClose={2000}
            />
            <div className="container">
                <div className="card">
                    <h1 className="h1">List to do</h1>
                    <div className="container">
                        <div className="row">
                            <div className="input-group my-4">
                                <input type="text" className="form-control col-sm-12 col-md-6 col-lg-4" placeholder="Search" onChange={getValueSearch} ></input>
                                <button className="btn btn-primary  btn-sm mx-1" onClick={see ? getAllNote :handelSeeAll}>See All</button>
                                <button className="btn btn-success mx-1  btn-sm"><Link  to="/create-note">Add Task</Link></button>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Status</th>
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
                                            <td>{item.status ? 'Completed' : 'To Do'}</td>
                                            <td>
                                                <button onClick={handleClick} value={item._id} className="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                                                { !item.status && <button value={item._id} className="btn btn-primary btn-sm"><Link to={`/create-note/${item._id}`}><i class="far fa-edit"></i></Link></button>}
                                                { !item.status && <button value={item._id} onClick={handleComplete} className="btn btn-success btn-sm"><i class="far fa-check-square"></i></button>}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllNotes
