import React,{useState, useEffect} from 'react'
import FormInput from "../common/FormInput";
import { Validate } from "../common/Validation";
import { useMutation } from '@apollo/client';
import axios from 'axios';
import {VideoAddMutation} from "../../graphQL/mutations"
const initialData = {
  form: {
    title: {
      type: "text",
      label: "title",
      placeholder: "Enter video title",
      value: "",
      error: "",
      className: "form-control",
      validations: {
        isRequired: { message: "This field is required" },
      },
    },
    thumbnail: {
      type: "file",
      label: "Thumb Nail",
      placeholder: "Add Thumb Nail",
      value: "",
      error: "",
      className: "form-control",
      validations: {
        isRequired: { message: "This field is required" },
      },
    },
    fileName: {
      type: "file",
      label: "Video",
      placeholder: "Upload video",
      value: "",
      error: "",
      className: "form-control",
      validations: {
        isRequired: { message: "This field is required" },
      },
    },
    discription: {
      type: "textArea",
      label: "Discription",
      placeholder: "Enter Discription",
      value: "",
      error: "",
      className: "form-control",
      validations: {
        isRequired: { message: "This field is required" },
      },
    },
  },
  isValid: false,
};

function index() {
  const [submitVideoAddForm, { data, loading, error }] = useMutation(VideoAddMutation);
  const [VideoAddData, setVideoAddData] = useState(initialData);

  useEffect(()=>{
    if(data && data.addVideo && data.addVideo.title){
      window.location.href = "/";
    }
  },[data])

  const handleInputChange= (e,inputElement)=>{
    let form = {
      ...VideoAddData.form,
      [inputElement]: {
        ...VideoAddData.form[inputElement],
        value: e.target.value,
        error: "",
      },
    };
    setVideoAddData({...VideoAddData, form: form });
  }
  const handleFileInputChange = (e,inputElement)=>{
    e.currentTarget.style.border = '2px solid red';

    const data = new FormData() 
    data.append('dataFile', e.target.files[0])
    let url = process.env.REACT_APP_API_BASE_URL + "/upload";

    axios.post(url, data, { // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
    let form = {
      ...VideoAddData.form,
      [inputElement]: {
        ...VideoAddData.form[inputElement],
        value: res.data.fileName,
        error: "",
      },
    };
    setVideoAddData({...VideoAddData, form: form });
        e.target.style.border = '2px solid green';
    })
  }
  const handleSubmit = ()=>{
    console.log("VideoAddData",VideoAddData)
    let isValid = true;
    let FormFlag = {
      ...VideoAddData.form,
    };
    for (let val in VideoAddData.form) {
      for (let key in VideoAddData.form[val].validations) {
        let err = Validate[key](
          VideoAddData.form[val].value,
          VideoAddData.form[val].validations[key]
        );
        if (!FormFlag[val].error) {
          FormFlag[val].error = err;
        }
        isValid = isValid && err ? false : isValid;
      }
    }
    setVideoAddData({ form: FormFlag, isValid: isValid });
    if (isValid) {
      let formData = {};
      for (let key in VideoAddData.form) {
        formData[key] = VideoAddData.form[key].value;
      }
      console.log("formData00000000000",formData)
      submitVideoAddForm({ variables: formData});

    }

  }
  const FormElements = [];
  for (let key in VideoAddData.form) {
    FormElements.push({
      id: key,
      input: VideoAddData.form[key]
    });
  }
  
 return (
        <div className="content">
          <div className="container">
            <div className="row align-items-stretch justify-content-center no-gutters">
              <div className="col-md-7">
                  <div className="form h-100 contact-wrap p-5">
                    <h3 className="text-center">
                    Add Video Details
                    </h3>
                    <div className="row">
                      {FormElements.map((val) => {
                        return (
                          <div key={val.id} className="col-md-12 form-group mb-3">
                            <FormInput
                              FormElement={val}
                              handleInputChange={val.input.type !== 'file' ? handleInputChange : handleFileInputChange}
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
                          Add
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
  