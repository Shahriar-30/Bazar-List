import React, { useState } from 'react';
import { BiSolidError } from "react-icons/bi";
import { useDatabase } from '../../../context/Context';// Adjust the import path
import "./bazarForm.css"

function BazarForm() {
    const { writeUserData } = useDatabase();

    const [click, setClick] = useState(false);
    const [title, setTitle] = useState("");
    const [prize, setPrize] = useState("");
    const [error, setError] = useState("");

    const getTitle = (e) => {
        let value = e.target.value;
        setTitle(value);
    }

    const getPrize = (e) => {
        let value = e.target.value;
        setPrize(value);
    }

    const add = () => {
        if (title === "" && prize === "") {
            setError(<><BiSolidError /> Fields cannot be empty</>);
            setClick(true);
        } else if (title === "") {
            setError(<><BiSolidError /> Title cannot be empty</>);
            setClick(true);
        } else if (prize === "") {
            setError(<><BiSolidError /> Prize cannot be empty</>);
            setClick(true);
        } else if (isNaN(Number(prize))) {
            setError(<><BiSolidError /> Prize must be a valid number</>);
            setClick(true);
        } else {
            writeUserData(title, prize);
    
            setTitle("");
            setPrize("");
            setError("");
            setClick(false);
        }
    }

    return (
        <>
            <div className='bazar_form'>
                <input type="text" value={title} placeholder='Bazar Item' onChange={getTitle} />
                <input type="text" value={prize} placeholder='Prize BDT' onChange={getPrize} />
                <p className={`error ${click ? "error_click" : ""}`}>
                    {error}
                </p>
                <button onClick={add}>Add</button>
            </div>
        </>
    )
}

export default BazarForm;
