import styled from 'styled-components';

import media from 'common/media';

import { theme } from './layout/Header.styles';

const { height } = theme;
const bg = '#e0dddd';
const bgFail = '#ffc5c5';
const fcFail = '#c33a3a';

const color = '#9b9b9b';
const darkColor = '#2a2a2a';

export const Wrapper = styled.div`
  flex-grow: 1;
`;

export const InputWrapper = styled.div`
  display: flex;

  max-width: 260px;
  position: relative;

  :before {
    content: '';
    border-right: ${height}px solid ${({ noMatch }) => (noMatch ? bgFail : bg)};
    border-top: ${height}px solid transparent;
  }

  ${media.lessThan('mobile')`
    max-width: 360px;

    :before {
      display: none;
    }
  `}
`;

export const Input = styled.input`
  height: ${height}px;

  display: block;
  border: none;
  width: 100%;
  background: ${({ noMatch }) => (noMatch ? bgFail : bg)};
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;

  padding-left: 8px;

  color: ${({ noMatch }) => (noMatch ? fcFail : 'inherit')};
  font-size: 1em;
  font-weight: 300;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${color};
  }

  ${media.lessThan('mobile')`
    border-radius: 100px;
    padding-left: 19px;
  `}
`;

export const IconButtons = styled.div`
  position: absolute;
  right: 17px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;

  /* each button */
  > * {
    cursor: pointer;
    user-select: none;
    color: ${color};
    font-size: 18px;

    :hover {
      color: ${darkColor};
    }

    :active {
      transform: translateY(1px);
    }
  }
`;
