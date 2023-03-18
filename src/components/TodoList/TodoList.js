import React from "react";
// // import className from 'classnames';
// // import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggelComplete }) => (
    <ul>
        {todos.map(({ id, text  }) => (
            <li
                key={id}
            >
               
                
                <p className="TodoList__text">{text}</p>
                <button
                    type="button"
                    // className="TodoList__btn"
                    onClick={() => onDeleteTodo(id)}
                >
                    Удалить
                </button>

            </li>
        ))}
    </ul>
)


 export default TodoList


// import React from 'react';
// import css from './TodoList.module.css';
// // import './TodoList.scss';

// const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
//     <ul className={css.TodoList}>
//         {todos.map(({ id, text, completed }) => (
//             <li
//                 key={id}
//         //         className={(css.TodoList__item, {
//         //             {css.TodoList__itemcompleted
//         //         }: completed,
//         // })}
//       >
//         <input
//           type="checkbox"
//             className={css.TodoList__checkbox}
//           checked={completed}
//           onChange={() => onToggleCompleted(id)}
//         />
//         <p className={css.TodoList__text}>{text}</p>
//         <button
//           type="button"
//             className={css.TodoList__btn}
//           onClick={() => onDeleteTodo(id)}
//         >
//           Удалить
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// export default TodoList;