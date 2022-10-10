export const Validate = {
  isRequired: (value, data) => {
    if (value && value != "") return "";
    else return data.message;
  },
  isEmail: (value, data) => {
    var emailText = value;
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(emailText)) {
      return "";
    } else {
      return data.message;
    }
  },
};

export const isValid = (value, validations) => {
  let error = "";
  if (validations)
    validations.forEach((val) => {
      for (const property in val) {
        if (property != "message" && val[property] && error == "") {
          let flag = validation[property](value);
          error = flag ? "" : val.message;
        }
      }
    });
  return error;
};
