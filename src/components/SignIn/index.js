import React,{useState, useEffect} from 'react'
import FormInput from "../common/FormInput";
import { Validate } from "../common/Validation";
import { useMutation } from '@apollo/client';
import {SignInMutation} from "../../graphQL/mutations"
const initialData = {
    form: {
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
  const [submitSignInForm, { data, loading, error }] = useMutation(SignInMutation);
  console.log("ooo",data)
  useEffect(()=>{
    if(data && data.Signin && data.Signin.token){
      sessionStorage.setItem("token", data.Signin.token);
      window.location.href = "/";
    }
  },[data])
  const [signInData, setSignInData] = useState(initialData);

  const handleInputChange= (e,inputElement)=>{
    let form = {
      ...signInData.form,
      [inputElement]: {
        ...signInData.form[inputElement],
        value: e.target.value,
        error: "",
      },
    };
    setSignInData({...signInData, form: form });
  }
  const handleSubmit = ()=>{
    console.log("signInData",signInData)
    let isValid = true;
    let FormFlag = {
      ...signInData.form,
    };
    for (let val in signInData.form) {
      for (let key in signInData.form[val].validations) {
        let err = Validate[key](
          signInData.form[val].value,
          signInData.form[val].validations[key]
        );
        if (!FormFlag[val].error) {
          FormFlag[val].error = err;
        }
        isValid = isValid && err ? false : isValid;
      }
    }
    setSignInData({ form: FormFlag, isValid: isValid });
    if (isValid) {
      let formData = {};
      for (let key in signInData.form) {
        formData[key] = signInData.form[key].value;
      }
      console.log("hvjjh")
      submitSignInForm({ variables: formData});
    }

  }
  const FormElements = [];
  for (let key in signInData.form) {
    FormElements.push({
      id: key,
      input: signInData.form[key]
    });
  }
 return (
        <div className="content">
          <div className="container">
            <div className="row align-items-stretch justify-content-center no-gutters">
              <div className="col-md-7">
                  <div className="form h-100 contact-wrap p-5">
                    <h3 className="text-center">
                      Sign In
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
                          Sign In
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