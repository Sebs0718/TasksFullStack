import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateNote() {

  const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");

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
    } catch (error) {
        console.log(error)
    };
  };

  return (
    <div>
        <ToastContainer 
            autoClose={2000}
        />
      <h1>Soy el componentepara crear las notas</h1>
      <input type="text" placeholder="Title" onChange={getValueInput} value={inputValue} />
      <textarea placeholder="Descripcion" onChange={getValueText}></textarea>
      <button onClick={getRamdonCat}>Generar</button>
      <button onClick={handleClick}>Crear</button>
    </div>
  );
}

export default CreateNote;