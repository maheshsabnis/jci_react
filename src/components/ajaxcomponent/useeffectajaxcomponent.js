import {useEffect, useState} from 'react';
import axios from 'axios';
import DataGridComponent from '../reusablecomponents/datagridcomponent';
import SelectComponent from '../reusablecomponents/selectcomponent';
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
    const categories = ['ECT', 'ECL', 'FSN', 
'FOD'];
const manufacturers = ['TATA', 'Bajaj', 'HP', 'Philipse'];
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


    const clear=()=>{
        setProduct({
            ProductRowId:0,
            ProductId:'',
            ProductName:'',
            CategoryName:'',
            Manufacturer:'',
            Description:'',
            BasePrice:0
        });
    };

    const save=()=>{
        axios.post("https://productapiserv.azurewebsites.net/api/ProductsAPI", product, {
            headers:{
                "Content-Type":"application/json"
            }
        })
             .then((resp)=>{
                // resp: is the received product object
                console.log(`The product added successfully ${JSON.stringify(resp.data)}`);
                // mutated the products by adding the nelwy added products in it
                setProducts([...products,resp.data]);
             })
             .catch((error)=>{
                console.log(`Error Occurred ${error.message}`);
             });   
    };


    return(
        <div className='container'>
            <div className='container'>
                <div className='form-group'>
                    <label>Product Id</label>
                    <input type="text" className='form-control'
                      value={product.ProductId}
                       onChange={(evt)=>setProduct({...product, ProductId:evt.target.value})}/>
                </div>
                <div className='form-group'>
                    <label>Product Name</label>
                    <input type="text" className='form-control'
                    value={product.ProductName}
                    onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}
                    />
                </div>
                <div className='form-group'>
                    <label>Category Name</label>
                     <SelectComponent dataSource={categories}
                      bindableProperty={product.CategoryName}
                      selectedValue={(val)=>setProduct({...product, CategoryName:val})}></SelectComponent>
                </div>
                <div className='form-group'>
                    <label>Manufacturer</label>
                    <SelectComponent dataSource={manufacturers}
                    bindableProperty={product.Manufacturer}
                    selectedValue={(val)=>setProduct({...product, Manufacturer:val})}
                    ></SelectComponent>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea type="text" className='form-control'
                     value={product.Description}
                     onChange={(evt)=>setProduct({...product, Description:evt.target.value})}/>
                </div>
                <div className='form-group'>
                    <label>Base Price</label>
                    <input type="text" className='form-control'
                     value={product.BasePrice}
                     onChange={(evt)=>setProduct({...product, BasePrice:parseInt(evt.target.value)})}/>
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary'
                     onClick={clear}>New</button>
                    <button className='btn btn-success'
                     onClick={save}
                    >Save</button>
                </div>
            </div>
            <DataGridComponent dataSource={products}></DataGridComponent>
        </div>
    );

};

export default UseEffectAjaxComponent;