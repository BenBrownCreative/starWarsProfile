import styled, { css } from 'styled-components';

const commonStyles = css`
  white-space: pre-wrap;
  text-decoration: none;
  outline: none;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 3px;
  margin: 10px 0;
  width: 100%;
  border: none;
  color: #666;
`;

export const PrimaryButton = styled.button`
  ${commonStyles};
  background: ${(p) => p.theme.color.secondary};
`;

export const TextInput = styled.input`
  ${commonStyles};
`;

export const Label = styled.label``;
