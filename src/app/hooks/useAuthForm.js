import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { emailPattern } from "../utils/func";

const useAuthForm = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      navigate("/welcome");
    },
    [navigate]
  );

  const handleInputChange = useCallback((event) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));

    let error = "";
    if (value === "") error = "Field is required";
    else {
      switch (name) {
        case "email":
          if (!emailPattern.test(value)) error = "Invalid email";
          break;
        case "password":
          if (value.length < 4)
            error = "Password should be at least 4 characters.";
          break;
        default:
          break;
      }
    }
    setErrors((errors) => ({ ...errors, [name]: error }));
  }, []);

  useEffect(() => {
    let isValid = false;
    if (errors["email"] === "" && errors["password"] === "") isValid = true;

    setIsFormValid(isValid);
  }, [errors]);

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
    isFormValid,
  };
};

export default useAuthForm;