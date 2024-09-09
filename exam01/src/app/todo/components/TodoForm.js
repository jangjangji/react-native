import React from 'react';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';
import MessageBox from '@/app/common/compoents/MessageBox';
import styles from '../todo.module.scss';
import classNames from 'classnames/bind';
const cs = classNames.bind(styles);
const TodoForm = ({ onSubmit, onChange, form, errors }) => {
  const active = true;

  return (

    <form autoComplete="off" onSubmit={onSubmit}>
      <dl className={styles.item}>
        <dt className='tit'>할일</dt>
        <dd>
          <input
            type="text"
            name="title"
            value={form?.title ?? ''}
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl>
        <dt>내용</dt>
        <dd>
          <textarea name="content" onChange={onChange}>
            {form?.content ?? ''}
          </textarea>
        </dd>
      </dl>
      <dl>
        <dt>완료여부</dt>
        <dd>
          <span>
            {form?.done ? <IoMdRadioButtonOn/> : <IoMdRadioButtonOff/>}
            완료
          </span>
          <span>
          {form?.done ? <IoMdRadioButtonOff/> : <IoMdRadioButtonOn/>}
            미완료
          </span>
        </dd>
      </dl>
      <button type="submit">할일 등록</button>
    </form>
  );
};

export default TodoForm;