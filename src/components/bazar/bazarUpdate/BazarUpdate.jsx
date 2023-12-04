import React, { useState, useEffect } from 'react';
import { BiSolidError } from "react-icons/bi";
import { useDatabase } from '../../../context/Context';
import "./bazarUpdate.css";

function BazarUpdate(props) {
    const { updateData } = useDatabase();

    const [upDate, setUpDate] = useState("");
    const [upPrize, setUpPrize] = useState("");
    const [doing, setDoing] = useState(true);
    const [id, setId] = useState("");
    const [click, setClick] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setId(props.id);
    }, [props.id]);

    const handleDateUpdate = (e) => {
        setUpDate(e.target.value);
    }

    const handlePrizeUpdate = (e) => {
        setUpPrize(e.target.value);
    }

    const handleClose = () => {
        setDoing(false);
    }

    props.info(doing);

    const handleUpdate = () => {
        if (isNaN(Number(upPrize))) {
            setError(<><BiSolidError /> Prize must be a valid number</>);
            setClick(true);
        }else if (upDate === "") {
            if (!upPrize) {
                setError(<><BiSolidError /> One field should contain a value</>);
                setClick(true);
                return;
            }
            updateData(id, { prize: upPrize });
            setUpDate("");
            setDoing(false);
        }   else {
            updateData(id, { title: upDate });
            if (upPrize) {
                updateData(id, { prize: upPrize });
            }
            setUpDate("");
            setDoing(false);
        }
    }

    return (
        <div className='update_box'>
            <input type="text" value={upDate} placeholder='upDate' onChange={handleDateUpdate} />
            <input type="text" value={upPrize} placeholder='Prize BDT' onChange={handlePrizeUpdate} />
            <p className={`error ${click ? "error_click" : ""}`}>
                {error}
            </p>
            <div className='update_btn'>
                <button onClick={handleUpdate}>upDate</button>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

export default BazarUpdate;
