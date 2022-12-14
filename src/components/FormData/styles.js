import styled from 'styled-components';

import { baseTheme } from '../../theme';

export const ToastSelect = styled.select`
    width: 100%;
    display: block; 
    font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
    font-family: sans-serif; 
    font-weight: 700; 
    color: ${({ theme }) => theme.colors.darkChocolate};
    cursor: pointer; 
    line-height: 1.3; 
    padding: .6em 1.4em .5em .8em; 
    box-sizing: border-box; 
    margin: 0; 
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.lightGrey};
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04); 
    border-radius: .5em;
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.colors.defaultWhite}; 
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); 
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%; 
    .select-css::-ms-expand { display: none; } 
    .select-css:hover { border-color: #888; } 
    .select-css:focus { 
                        border-color: #aaa; 
                        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
                        box-shadow: 0 0 0 3px -moz-mac-focusring; 
                        color: ${({ theme }) => theme.colors.darkGrey}; 
                        outline: none; 
                        } 
    .select-css option { font-weight:normal; } 
    *[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css { 
    background-position: left .7em top 50%, 0 0; 
    padding: .6em .8em .5em 1.4em; 
`;
export const TitleWrapper = styled.div`
  margin-top: 10px;
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.lightSlateGray};
    border-radius: ${({ theme }) => (theme.sizes.borderRadius = 6)}px;
    outline-color: ${({ theme }) => theme.colors.sienna};
    font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  }
`;
export const DescriptionWrapper = styled.div`
  margin-top: ${baseTheme.spaces[2]}px;
  input {
    width: 100%;
    padding: ${baseTheme.spaces[2]}px;
    box-sizing: border-box;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.lightSlateGray};
    border-radius: ${({ theme }) => (theme.sizes.borderRadius = 6)}px;
    outline-color: ${({ theme }) => theme.colors.sienna};
    font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  }
`;

export const ToastDurationWrapper = styled.div`
  width: 100%;
  margin-top: ${baseTheme.spaces[4]}px;
  display: flex;
  justify-content: center;
  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked + label {
    background-color: ${({ theme }) => theme.colors.forestGreen};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.defaultWhite};
  }
  label {
    width: 100%;
    display: inline-block;
    cursor: pointer;
    padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[3]}px;
    line-height: 34px;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.lightGrey};
    border-right: none;
    user-select: none;
  }
  label:nth-of-type(1) {
    border-radius: 6px 0 0 6px;
  }
  label:last-child {
    border-radius: 0 6px 6px 0;
    border-right: 2px solid #999;
  }
  label:hover {
    color: ${({ theme }) => theme.colors.defaultWhite};
    background-color: ${({ theme }) => theme.colors.grayishBlue};
  }
  label:active {
    background-color: ${({ theme }) => theme.colors.defaultBlack};
  }
`;

export const ToastPositionWrapper = styled(ToastDurationWrapper)``;
export const ToastGapWrapper = styled(ToastDurationWrapper)``;

export const ToastAnimationWrapper = styled(ToastDurationWrapper)``;
