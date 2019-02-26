import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'


const TextInputGroup =({
    label,
    name,
    value, 
    placeholder,
    type,
    onChange,
    error

    // OR And we could have just said (props) and then calls them out
    // by props.type or props.value
}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} 
        name ={name}
        //the classnames() will take in first the class we 
        //want to apply by default AND the second is going to
        // have the class name we want and the condition it
        //depends on
        className= {classnames('form-control form-control-lg', {
            'is-invalid': error
        })}
        // className=" is-invalid form-control 
        // form-control-lg"
        placeholder={placeholder}
        value={value}
        // onChange ={this.onNameChange}
        onChange ={onChange}

        />
        {error && <div className="invalid-feedback">{error}
        </div>}
        
    </div>
  );
};

TextInputGroup.propTypes ={
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text',
}

export default TextInputGroup;