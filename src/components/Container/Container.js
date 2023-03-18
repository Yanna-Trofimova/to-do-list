import React from 'react';
import css from './Container.module.css';



const Container = ({ children }) => <div className={css.Container}>{children}</div>;

export default Container;