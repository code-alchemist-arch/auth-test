import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as EyeSvg } from "../../../assets/image/eye.svg"
import { ReactComponent as EyeLineSvg } from "../../../assets/image/eye-line.svg";

const ValidationInput = ({
  type,
  name,
  onChange,
  value,
  placeholder,
  isRequired
}) => {
  const [pwdHidden, setPwdHidden] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const onClickEye = useCallback(() => {
    const changedHidden = !pwdHidden;
    setPwdHidden(changedHidden);
    changedHidden ? setInputType("password") : setInputType("text");
  }, [pwdHidden]);

  useEffect(() => {
    if (type === "password") setIsPassword(true);
  }, [type]);

  return (
    <InputWrapper>
      <Input
        type={inputType}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={isRequired}
      />
      {isPassword && (
        <SvgWrapper onClick={onClickEye}>
          {
            pwdHidden ? <EyeSvg /> : <EyeLineSvg />
          }
        </SvgWrapper>
      )}
    </InputWrapper>
  );
};

export default ValidationInput;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 5px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  font-size: 16px;
  padding: 5px 10px;
`;

const SvgWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 5px;
`;