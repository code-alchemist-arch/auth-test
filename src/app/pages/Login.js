import React from 'react'
import styled, { css } from 'styled-components';

import Section from '../components/atoms/Section';
import { Label, Paragraph, Sup } from '../components/atoms/Typography';
import ValidationInput from '../components/ValidationInput';
import useAuthForm from '../hooks/useAuthForm';

export default function Login() {
  const { inputs, errors, handleInputChange, handleSubmit, isFormValid } = useAuthForm();

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="email">
            Email
            <Sup>*</Sup>
          </Label>
          <ValidationInput
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email ? inputs.email : ""}
            placeholder="Please input email address"
            isRequired={true}
          />
          <Paragraph
            color="#eb0f0f" additionalCss={errorNotificationCss}
          >
            {errors.email ? errors.email : ""}
          </Paragraph>
        </FormRow>
        <FormRow>
          <Label htmlFor="password">
            Password
            <Sup>*</Sup>
          </Label>
          <ValidationInput
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password ? inputs.password : ""}
            placeholder="Please input password"
            isRequired={true}
          />
          <Paragraph
            color="#eb0f0f" additionalCss={errorNotificationCss}
          >
            {errors.password ? errors.password : ""}
          </Paragraph>
        </FormRow>
        <SubmitButton
          type="submit"
          value="Login"
          disabled={!isFormValid}
        />
      </Form>
    </Section>
  )
}

const Form = styled.form`
  width: 300px;
`;

const FormRow = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 25px;
`;

const SubmitButton = styled.input`
  margin-top: 40px;
  font-size: 16px;
  border-radius: 5px;
  padding: 5px 20px;
  border: none;
  background-color: #2327b2;
  color: #fff;
  &:disabled {
    background-color: grey;
  }
`;

const errorNotificationCss = css`
  position: absolute;
  top: 60px;
  right: 5px;
  margin: 0px;
`