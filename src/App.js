import React, { Component } from 'react';
import TodoListTemplate from './component/TodoListTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';

const initTodos=new Array(500).fill(0).map((item,idx)=>({id:idx,text:`${idx}`, checked:false}));
class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정
  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 구조', checked: true },
      { id: 2, text: '리액트 사용', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // input 초기화
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const copyTodos = [...todos];
    copyTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: copyTodos
    });
  }
  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleRemove, handleToggle } = this;
    return (
      <TodoListTemplate form={(<Form value={input} onChange={handleChange} onCreate={handleCreate} onKeyPress={handleKeyPress} />)}>
        <TodoItemList todos={initTodos} onRemove={handleRemove} onToggle={handleToggle} />
      </TodoListTemplate>
    );
  }
}

export default App;
