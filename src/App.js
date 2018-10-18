import React, { Component } from 'react';
import TodoListTemplate from './component/TodoListTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';


class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList />
      </TodoListTemplate>
    );
  }
}

export default App;
