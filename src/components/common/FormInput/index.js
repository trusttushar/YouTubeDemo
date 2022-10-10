import React from "react";

function index(props) {
  let inputElement = null;
  switch (props.FormElement.input.type) {
    case "text":
    case "email":
    case "password":
      inputElement = (
        <input
          type={props.FormElement.input.type}
          className={props.FormElement.input.className}
          value={props.FormElement.input.value}
          placeholder={props.FormElement.input.placeholder}
          onChange={(e) => props.handleInputChange(e, props.FormElement.id)}
        />
      );
      break;
    case "file":
      inputElement = (
      <input
      type={props.FormElement.input.type}
      className={props.FormElement.input.className}
      placeholder={props.FormElement.input.placeholder}
      onChange={(e) => props.handleInputChange(e, props.FormElement.id)}
      />)
        break;
    case "textArea":
      inputElement = (
        <textarea
          className={props.FormElement.input.className}
          placeholder={props.FormElement.input.placeholder}
          onChange={(e) => props.handleInputChange(e, props.FormElement.id)}
        >
          {props.FormElement.input.value}
        </textarea>
      );
      break;
    case "select":
      inputElement = (
        <select
          className={props.FormElement.input.className}
          onChange={(e) => props.handleInputChange(e, props.FormElement.id)}
        >
          <option value="">{props.FormElement.input.placeholder}</option>
          {props.FormElement.options.map((value, i) => {
            return (
              <option key={i} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = null;
  }
  return (
    <React.Fragment>
      {props.FormElement.input.label ? (
        <label className="col-form-label">
          {props.FormElement.input.label}
        </label>
      ) : (
        ""
      )}
      {inputElement}
      {props.FormElement.input.error ? (
        <label id="" className="error" for="validation-email">
          {" "}
          {props.FormElement.input.error}
        </label>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default index;
