import React from 'react';

import months from '../mock-data/months';

import '../assets/styles/todo-card.css';

const todoCard = ({todo: {date, title, description}}) => {
  const todoDate = typeof date === 'string' ? new Date(date) : date;
  return(
  <div className="todo-card">
    <div>
      <h2>{todoDate.getDay()}</h2>
      <p>{months[todoDate.getMonth()]}, {todoDate.getYear() + 1900}</p>
    </div>
    <div className="todo-description">
      <h2>{title}</h2>
      <p>{description.substring(0, 50)}</p>
    </div>
  </div>
);}

export default todoCard;