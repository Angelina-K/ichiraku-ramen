import React, { useState } from 'react';
import { utilService } from '../services/utilService';
import { ActionBtn } from './ActionBtn';

export const Form = ({ formType, submitTxt, onSubmit }) => {
  const fieldsForForm = utilService.getFormFields(formType);
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    name = name.toLowerCase();
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  return (
    <form className="form flex column">
      {fieldsForForm.map((field) => (
        <input
          onChange={handleChange}
          name={field.fieldName}
          required={field.isRequired}
          type={field.type}
          placeholder={field.fieldName}
          key={field.fieldName}
        />
      ))}
      <ActionBtn action={handleSubmit} btnTxt={submitTxt} />
      {/* <button className="action-btn checkout-btn submit">{submitTxt}</button> */}
    </form>
  );
};
