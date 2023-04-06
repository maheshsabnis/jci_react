import {useEffect, useState} from 'react';
import axios from 'axios';
import DataGridComponent from '../reusablecomponents/datagridcomponent';
const UseEffectAjaxComponent=()=>{

    const [products, setProducts] =  useState([]);

    useEffect(()=>{
        // Post Render Execution
        axios.get("https://localhost:7295/api/ProductsAPI")
          // Subscription
          // then() Success / fulfilled / resolve
        .then((respo)=>{
            setProducts(respo.data);
        })
        // Error() Failed / Reject
        .catch((error)=>{
            console.log(`Sorry Call Failed`);
        });

    },[]); // depednency Parameter


    return(
        <div className='container'>
            <DataGridComponent dataSource={products}></DataGridComponent>
        </div>
    );

};

export default UseEffectAjaxComponent;