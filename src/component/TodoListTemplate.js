import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate =({form, children}) => {
    return (
        <main className='todo-list-template'>
            <div className='title'>
                Todo List
            </div>
            <div className='form-wrapper'>
                {form}
            </div>
            <div className='todos-wrapper'>
                {children}
            </div>
        </main>
    );
}

export default TodoListTemplate