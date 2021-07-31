import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import {Link, useHistory} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './CreateNote.css';

function CreateNote() {

  const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const history = useHistory();

  const getRamdonCat = async ()=>{
    try {
        const {data} = await axios.get('https://catfact.ninja/fact?max_length=140');
        const ramdon = data.fact;
        console.log(ramdon);
        setInputValue(ramdon);
    } catch (error) {
        console.log(error)
    }
  };


  const getValueInput = (e) => {
    setInputValue(e.target.value);
  };

  const getValueText = (e) => {
    setTextValue(e.target.value);
  };

  const handleClick = async () => {
    try {
        const obj = { title: inputValue, description: textValue };
        const { data } = await axios.post("http://localhost:4000/api/task", obj);
        console.log(data);
        toast.success(data.message);
        setInputValue('');
        setTextValue('');
        history.push('/');
    } catch (error) {
        console.log(error)
    };
  };

  return (
    <div className="container">
      <div className="card">
        <ToastContainer 
            autoClose={2000}
        />
        <h1 className='h1'>Create Task</h1>
        <div className="form-group mx-5 col-xs-10 col-sm-10 col-md-11 col-lg-11 mt-4 mb-2">
          <input type="text" placeholder="Title" onChange={getValueInput} value={inputValue} className="form-control mb-2" />
          <textarea placeholder="Description" onChange={getValueText} className="form-control description" value={textValue}></textarea>
        </div>
        <div className="input-group mx-5">
          <button onClick={getRamdonCat} className="btn btn-primary btn-sm mx-1"><i class="fas fa-cat"></i></button>
          <button onClick={handleClick} className="btn btn-success btn-sm mx-1" ><i class="far fa-save"></i></button>
          <button className="btn btn-danger mx-1"><Link to="/all-notes"><i class="far fa-window-close"></i></Link></button>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
