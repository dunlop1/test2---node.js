import React, { Component } from 'react';
import itemsData from '../data/item.json'


export default class Myitems extends Component {
    constructor(props){
        super(props);
        this.state = {
            myitems:[]
        }
    }

    render() {
        const myItems = this.state.myitems.map(myitem => (
            <div  key ={myitem.id}>
                <p>{myitem.title}</p>
                <p>{myitem.state}</p>
            </div>
        ))
        return (
            <>
            
            <div className='grid-container'>
                <div><p>Id</p></div>
                <div><p>tittle</p></div>
                <div><p>State</p></div>
                <div><p>Created</p></div>
                <div><p>Updated</p></div>
                <div><button className='delite-button' ><img className='plus' src={require('../images/plus.svg')} alt='' /></button></div>
            </div>
            <div className='grid-container'>{itemsData.map((itemDetail)=>{
                return <h1>{itemDetail.id}</h1>
            })}</div>
            </>  
            

        )
    }
}
