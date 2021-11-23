import styled from 'styled-components';

const Section = ({ additionalCss, children }) => {
  return (
    <Wrapper
      additionalCss={additionalCss}
    >
      {children}
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.additionalCss &&
    props.additionalCss
  }
`;