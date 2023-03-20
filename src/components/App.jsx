import React, { Component } from 'react';
import TodoList from 'components/TodoList/TodoList';
import initialTodos from 'components/TodoList/todos.json';
import TodoEditor from 'components/TodoEditor/TodoEditor';
import Container from 'components/Container/Container';
import Filter from './Filter';
import Modal from './Modal/Modal';

import { nanoid } from 'nanoid'


export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };


  
  
  addTodo = text => {
    console.log(text);

    const todo = {
      id: nanoid(),
      text,
      completed: false,
      // model.id = nanoid() 
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => { 
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId) 
    }))
  };
  

  ToggelComplete = todoId => { 
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Нашли нужную туду');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    }));
  };


  changeFilter = e => {
    
    // console.log(e);
    this.setState({ filter: e.currentTarget.value });
  }


  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalaziedFilter = filter.toLowerCase();
    return todos.filter(todo => todo.text.toLowerCase().includes(normalaziedFilter),);
  }








////схранение в локал сторедж

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    console.log(prevState);
    console.log(this.state);

    if (this.state !== prevState) {
      console.log('Обновилось поле тудус');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
}

  
  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    console.log(todos);

    const parselTodos = JSON.parse(todos);
    console.log(parselTodos);

    if (parselTodos) {
      this.setState({ todos: parselTodos });
    }

  }














toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }))
  }



  render() {
    const {  filter,showModal } = this.state;


    // const totalTodoCount = todos.length;

    // const completedTodoCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,
    // );
    

    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/* TODO: вынести в отдельный компонент */}

        {/* <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div> */}
        <button type='button' onClick={this.toggleModal}>Open Modal</button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
          <p>YANOCHKA THE BEST</p>
          <button type='button' onClick={this.toggleModal}>Close Modal</button>
          </Modal>
          )}
        

        {/* <TodoEditor onSubmit={this.addTodo} />

        
        <Filter value={ filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          
          onDeleteTodo={this.deleteTodo} */}
          {/* // onToggleCompleted={this.toggleCompleted} */}
        {/* /> */}
      </Container>
  );
}
}
  
  

export default App