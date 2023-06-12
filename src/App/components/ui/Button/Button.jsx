import React from 'react';
import style from './Button.module.css';

/**
 * 
 * @param {Object} props 
 */
const Button=(props)=>{
    return (
        <button className={style.Button}>
            {undefined !== props.children ? props.children:props.text}
        </button>
    );
}

export default Button;