import styled from "styled-components";


export const StyledInput = styled.div`
  .MuiFilledInput-root{
    color: ${({ theme }) => theme.textColorBase};
    background: ${({ theme }) => theme.backgroundBase};
    margin-bottom  :10px;
  }
  .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root{
    color: ${({ theme }) => theme.textColorBase} !important;
  }
  .css-o943dk-MuiFormLabel-root-MuiInputLabel-root {
    color: ${({ theme }) => theme.textColorBase};
}
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    background: ${({ theme }) => theme.backgroundBase};
  }
    `