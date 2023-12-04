import React from 'react';
import { useDatabase } from '../../../context/Context';
import "./BazarTotal.css";

function BazarTotal() {
    let {value} = useDatabase();

    const totalPrize = value.reduce((acc, prize) => {
        return acc + parseInt(prize.prize, 10);
    }, 0);

    return (
        <>
            <h1>Total Amount -</h1>
            <span className='total'>
            ৳-{totalPrize}
            </span>
        </>
    )
}

export default BazarTotal