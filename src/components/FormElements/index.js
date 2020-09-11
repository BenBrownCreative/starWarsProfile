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
  border: 1px solid ${(p) => p.theme.color.grey};
  color: ${(p) => p.theme.color.darkBlue};
`;

export const PrimaryButton = styled.button`
  ${commonStyles};
  cursor: pointer;
  background: ${(p) => p.theme.color.secondary};
`;

export const TextInput = styled.input`
  ${commonStyles};
`;

export const Label = styled.label``;
