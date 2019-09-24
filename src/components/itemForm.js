import React from 'react'
import {  bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { updateFormData } from '../store/actions/actions'

class itemForm extends React.Component {
    state = {
        title: '',
        state: '',
        url: '',
        dateCreated: '',
        dateUpdated: '',
    }

    onChangeInput = (e, key) => {
        this.setState({
            [key] : e.target.value
        })
    }

    updateFormData = (e) => {
        e.preventDefault();

        const { title, state, url, dateCreated, dateUpdated } = this.state;

        this.props.updateFormData(
            {
                title,
                state,
                url,
                dateCreated,
                dateUpdated,
            }
        )
        //in redux
    }


    render(){
    
        return(
                <div>
                        <div>
                            <input 
                                type='text' 
                                value={this.state.title} 
                                placeholder='title'
                                onChange = {(event) =>{
                                    this.onChangeInput(event, "title")
                                }}
                            />
                        </div>
                        <div>
                            <input 
                                type='text' 
                                value={this.state.state} 
                                placeholder='state'
                                onChange = {(event)=>{
                                    this.onChangeInput(event, "state");
                                }}
                            />
                        </div>
                        <div>
                            <input
                                type='text' 
                                value={this.state.url} 
                                placeholder='url'
                                onChange = {(event)=>{
                                    this.onChangeInput(event, "url")
                                }}
                            />
                        </div>
                        <div>
                            <input 
                                type='text' 
                                value={this.state.dateCreated} 
                                placeholder='dateCreated'
                                onChange = {(event)=>{
                                    this.onChangeInput(event, "dateCreated")
                                }}
                            />
                        </div>
                        <div>
                            <input 
                                type='text' 
                                value={this.state.dateUpdated} 
                                placeholder='dateUpdated'
                                onChange = {(event)=>{
                                    this.onChangeInput(event, "dateUpdated")
                                }}
                            />
                        </div>
                        <button onClick={this.updateFormData}>Save</button>
                </div>  
        ) 
        
    }

}
const putStateToProps = (state) => {
    console.log(state);
    return{
        title: state.title,
        state: state.state,
        url: state.url,
        dateCreated: state.dateCreated,
        dateUpdated: state.dateUpdated
        
    };
}

const putActionsToProps = (dispatch) =>{
    return bindActionCreators(
    {
        updateFormData
    },
    dispatch
    )
}

export default connect(putStateToProps,putActionsToProps)(itemForm);