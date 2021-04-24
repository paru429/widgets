import React from 'react';
import { Form, Field } from 'react-final-form';
import './FormWidget.scss';

const FormWidget = () => {
  const validate = formValues => {
    const errors = {};
  
    if (!formValues.title) {
      errors.title = 'You must enter a title';
    }
  
    if (!formValues.description) {
      errors.description = 'You must enter a description';
    }
  
    return errors;
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="field-input__error">
          <div className="field-input__error-message__header">{error}</div>
        </div>
      );
    }
  }

  const renderInput = ({ input, label, meta }) => {
    const className = `field-input ${meta.error && meta.touched ? 'field-input__error' : ''}`;
    return (
      <div className={className}>
        <label className='field-input__label' htmlFor={`${input.name}_id`}>{label}</label>
        <input className='field-input__box' id={`${input.name}_id`} {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  }

  return (
    <Form validate={validate} onSubmit={onSubmit} initialValues={{title: '', description: ''}}>
        {(formProps) => (<form
        onSubmit={formProps.handleSubmit}
        className="form"
        >
        <Field name="title" component={renderInput} label="Enter Title" value={formProps.values.title} />
        <Field
          name="description"
          component={renderInput}
          label="Enter Description"
          value={formProps.values.description}
        />
        <button className="form__submit">Submit</button>
      </form>)}
    </Form>
  );
}

export default FormWidget;