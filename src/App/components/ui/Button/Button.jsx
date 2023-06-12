import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types'
/**
 * 
 * @param {Object} props 
 */
const Button=(props)=>{
    return (
        <button type={props.type}
                className={`${style.Button} btn${undefined!==props.className? ' ' + props.className:''}`}
                onClick={(evt)=>{
                    if(undefined !== props.onClick && typeof props.onClick === 'function') {
                    props.onClick('click');
                    }
                }
            }>
            {props.children}
        </button>
    );
}

Button.propTypes={
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    bgColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.oneOf(['primary', 'error'])
}

Button.defaultProps={
    type:'button',
    onClick: ()=>{console.log('click');},
    bgColor: 'grey'
}

export default Button;