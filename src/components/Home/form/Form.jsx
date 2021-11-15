import React from 'react'
import "./Form.styles.css"

const Form = ({handlerValue, handlerSubmit}) => {
    return (
        <form onSubmit={(e)=>handlerSubmit(e)} className="form-container">
            <input
                onChange={({target})=>handlerValue(target)}
                type="text" placeholder="Search.." name="search"  required={true}/>
            <button 
                
                type="submit"><i class="fa fa-search"></i></button>
        </form>
      
    )
}

export default Form
