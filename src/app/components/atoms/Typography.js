import styled from "styled-components";

export const Label = styled.label`
  font-size: ${({ size }) => size ?? 16}px;
  color: ${({ color }) => color ?? "#181515"};
  font-weight: ${({ weight }) => weight ?? "normal"};
  line-height: ${({ lineHeight }) => lineHeight ?? "normal"};
  ${props =>
    props.additionalCss &&
    props.additionalCss
  }
`;

export const Paragraph = styled.p`
  font-size: ${({ size }) => size ?? 16}px;
  color: ${({ color }) => color ?? "#181515"};
  font-weight: ${({ weight }) => weight ?? "normal"};
  line-height: ${({ lineHeight }) => lineHeight ?? "normal"};
  ${props =>
    props.additionalCss &&
    props.additionalCss
  }
`;

export const Span = styled.span`
  font-size: ${({ size }) => size ?? 14}px;
  color: ${({ color }) => color ?? "#8d8d8d"};
  font-weight: ${({ weight }) => weight ?? "500"};
  line-height: ${({ lineHeight }) => lineHeight ?? "normal"};
  ${props =>
    props.additionalCss &&
    props.additionalCss
  }
`;

export const Title = styled.h3`
  font-size: ${({ size }) => size ?? 16}px;
  color: ${({ color }) => color ?? "#444"};
  font-weight: ${({ weight }) => weight ?? "bold"};
  line-height: ${({ lineHeight }) => lineHeight ?? "normal"};
  margin: 0;
  ${props =>
    props.additionalCss &&
    props.additionalCss
  }
`;

export const Sup = styled.sup`
  font-size: ${({ size }) => size ?? 10}px;
  color: ${({ color }) => color ?? "#d0021b"};
  font-weight: ${({ weight }) => weight ?? "bold"};
  line-height: ${({ lineHeight }) => lineHeight ?? "normal"};
`