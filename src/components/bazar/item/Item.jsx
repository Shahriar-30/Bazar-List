import React, { useState } from 'react';
import BazarUpdate from '../bazarUpdate/BazarUpdate';
import { useDatabase } from '../../../context/Context';
// import { IoMdDoneAll } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import "./item.css";




export function Item(props) {
  let [code, setCode] = useState();

  let [upDate, setUpDate] = useState(true);

  let { value } = useDatabase();
  let { del } = useDatabase();

  let reName = (id) => {
    props.info(upDate);
    props.cod(id);
    // props.
  }
  return (
    <>

      {value.map((e) => (
        <li className='item' key={e.id}>
          <MdDeleteForever className='bin' onClick={() => del(e.id)} />
          {e.title}
          <div className='bin_lst'>
            <span className='bin_prize'>
              ৳-{e.prize}
            </span>
            {/* <IoMdDoneAll className='bin_tik' /> */}
            <FaPencilAlt className='bin_rename' onClick={()=> reName(e.id)} />
          </div>
        </li>
      ))}

    </>
  )

}

