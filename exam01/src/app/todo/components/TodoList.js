import React from 'react';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';
import { CiSquareRemove } from 'react-icons/ci';
import styled from 'styled-components';
const commonStyle = css`
  border: 0px
  height: 45px;

`;


const ButtonBox = styled.button`
  background: blue;
  border: 0;
  height: 45px;
  padding: 0 35px;
  color: #fff;
  font-sizw: 1.3rem

`;

const TodoList = ({ items, onToggle, onRemove }) => {
  return (
    <ul>
      {items &&
        items.length > 0 &&
        items.map(({ id, title, content, done }) => (
          <li key={id} onClick={() => onToggle(id)}>
            <div>
              {done ? <FaCheckSquare /> : <FaRegCheckSquare />}
              {title}
              <CiSquareRemove onClick={() => onRemove(id)} />
            </div>
            {content && <div>{content}</div>}
          </li>
        ))}
    </ul>
  );
};

export default TodoList;