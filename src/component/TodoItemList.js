import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        return (
            <div>
                <TodoItem text="첫번째 인자값" checked={false}/>
                <TodoItem text="두번째 인자값" checked={true}/>
            </div>
        );
    }
}

export default TodoItemList;