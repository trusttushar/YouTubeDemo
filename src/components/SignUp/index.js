import React,{useState, useEffect} from 'react'
import FormInput from "../common/FormInput";
import { Validate } from "../common/Validation";
import { useMutation } from '@apollo/client';
import {SignUpMutation} from "../../graphQL/mutations"
const initialData = {
    form: {
    firstName: {
            type: "text",
            label: "First Name",
            placeholder: "First Name",
            value: "",
            error: "",
            className: "form-control",
            validations: {
              isRequired: { message: "This field is required" },
            },
      },
      lastName: {
        type: "text",
        label: "FLat Name",
        placeholder: "Last Name",
        value: "",
        error: "",
        className: "form-control",
        validations: {
          isRequired: { message: "This field is required" },
        },
  },
      email: {
        type: "email",
        label: "Email",
        placeholder: "Enter email",
        value: "",
        error: "",
        className: "form-control",
        validations: {
          isRequired: { message: "This field is required" },
          isEmail: { message: "Please enter a valid email" },
        },
      },
      password: {
        type: "password",
        label: "Password",
        placeholder: "Enter Password",
        value: "",
        error: "",
        className: "form-control",
        validations: {
          isRequired: { message: "This field is required" },
        },
      }
    },
    isValid: false,
  }

function index() {
  const [submitSignUpForm, { data, loading, error }] = useMutation(SignUpMutation);
  useEffect(()=>{
    if(data && data.SignUp && data.SignUp.token){
      sessionStorage.setItem("token", data.SignUp.token);
      window.location.href = "/";
    }
  },[data])
  const [signUpData, setSignUpData] = useState(initialData);

  const handleInputChange= (e,inputElement)=>{
    let form = {
      ...signUpData.form,
      [inputElement]: {
        ...signUpData.form[inputElement],
        value: e.target.value,
        error: "",
      },
    };
    setSignUpData({...signUpData, form: form });
  }
  const handleSubmit = ()=>{
    console.log("signUpData",signUpData)
    let isValid = true;
    let FormFlag = {
      ...signUpData.form,
    };
    for (let val in signUpData.form) {
      for (let key in signUpData.form[val].validations) {
        let err = Validate[key](
          signUpData.form[val].value,
          signUpData.form[val].validations[key]
        );
        if (!FormFlag[val].error) {
          FormFlag[val].error = err;
        }
        isValid = isValid && err ? false : isValid;
      }
    }
    setSignUpData({ form: FormFlag, isValid: isValid });
    if (isValid) {
      let formData = {};
      for (let key in signUpData.form) {
        formData[key] = signUpData.form[key].value;
      }
      submitSignUpForm({ variables: formData});
    }

  }
  const FormElements = [];
  for (let key in signUpData.form) {
    FormElements.push({
      id: key,
      input: signUpData.form[key]
    });
  }
 return (
        <div className="content">
          <div className="container">
            <div className="row align-items-stretch justify-content-center no-gutters">
              <div className="col-md-7">
                  <div className="form h-100 contact-wrap p-5">
                    <h3 className="text-center">
                      Sign Up
                    </h3>
                    <div className="row">
                      {FormElements.map((val) => {
                        return (
                          <div key={val.id} className="col-md-12 form-group mb-3">
                            <FormInput
                              FormElement={val}
                              handleInputChange={handleInputChange}
                            />
                          </div>
                        );
                      })}
                    </div>
                    {error && <label id="" className="error" for="validation-email">{error.message}</label>}
                    <div className="row justify-content-center">
                      <div className="col-md-5 form-group text-center">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-block btn-primary rounded-0 py-2 px-4"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );

}


export default index;