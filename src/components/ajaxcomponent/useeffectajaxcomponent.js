import {useEffect, useState} from 'react';
import axios from 'axios';
import DataGridComponent from '../reusablecomponents/datagridcomponent';
const UseEffectAjaxComponent=()=>{
    const [product, setProduct]  = useState({
        ProductRowId:0,
        ProductId:'',
        ProductName:'',
        CategoryName:'',
        Manufacturer:'',
        Description:'',
        BasePrice:0
    });
    const [products, setProducts] =  useState([]);

    useEffect(()=>{
        // Post Render Execution
        axios.get("https://productapiserv.azurewebsites.net/api/ProductsAPI")
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
            <div className='container'>
                <div className='form-group'>
                    <label>Product Id</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Product Name</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Category Name</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Manufacturer</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Base Price</label>
                    <input type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary'>New</button>
                    <button className='btn btn-success'>Save</button>
                </div>
            </div>
            <DataGridComponent dataSource={products}></DataGridComponent>
        </div>
    );

};

export default UseEffectAjaxComponent;