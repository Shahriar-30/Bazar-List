import { createContext, useContext, useEffect, useState } from "react";
import { getDatabase, push, ref, set, onValue, remove, update } from "firebase/database";
import { FireBaseApp } from "../../FireBase"; /*This is the app of firebase */

const FireBaseContext = createContext(null);
const db = getDatabase(FireBaseApp);

export let useDatabase = () => {
    return useContext(FireBaseContext);
};

export const FireBaseContextProvider = (props) => {
    let [value, setValue] = useState([]);

    const writeUserData = async (name, prize) => {
        await set(push(ref(db, 'users/')), {
            title: name,
            prize: prize
        });
        fetchDataAndUpdateState();
    };

    const del = (id) => {
        remove(ref(db, 'users/' + id));
        fetchDataAndUpdateState();
    };

    const updateData = (id, newData) => {
        update(ref(db, `users/${id}`), newData);
        fetchDataAndUpdateState();
    };

    const fetchDataAndUpdateState = () => {
        const dbRef = ref(db, 'users/');
        let arr = [];

        onValue(dbRef, (snapshot) => {
            snapshot.forEach((e) => {
                let item = e.val();
                arr.push({ ...item, id: e.key });
            });
            setValue(arr);
        });
    };

    useEffect(() => {
        fetchDataAndUpdateState();
    }, []); // Run this effect only once when the component mounts

    return (
        <FireBaseContext.Provider value={{ writeUserData, del, updateData, value }}>
            {props.children}
        </FireBaseContext.Provider>
    );
};
