import { useEffect, useState } from "react";
import BazarTotal from "./bazarTotal/BazarTotal";
import BazarForm from "./bazarForm/BazarForm";
import BazarUpdate from "./bazarUpdate/BazarUpdate";
import { Item } from "./item/Item";
import "./bazar.css"

function Bazar() {
    let [doing, setDo] = useState(false);
    let [id, setId] = useState("");

    let a = (w) => {
        setDo(w);
    }
    useEffect(() => {
        a();
    }, [])

    let updateGet = (a) => {
        setDo(a);
    }

    let getId = (e) => {
        setId(e);
    }

    return (
        <>
            <div className="container">
                <div className="box">

                    <div className="heading">
                        <h1>Bazar List</h1>
                    </div>

                    <div className="form">
                        {
                            doing ? <BazarUpdate info={updateGet} id={id} /> : <BazarForm />
                        }
                    </div>

                    <div className="item_all">

                        <ul className='item_box'>
                            {
                                doing ? "" : <Item info={a} cod={getId} />
                            }
                        </ul>



                    </div>

                    <div className="footer">
                        {
                            doing ? "" : <BazarTotal />
                        }
                    </div>

                </div>
            </div>
        </>
    );

}

export default Bazar