import { Component } from "react";
import { createPortal } from "react-dom";



const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
    componentDidMount() {
        console.log(' modal componentDidMount');


        window.addEventListener('keydown', this.handelClickdown);
           
    }
    

    componentWillUnmount() {
        console.log(' modal componentWillUnmount');

         window.removeEventListener('keydown', this.handelClickdown);
    }



    handelBackdrop = e => {
        console.log('нажали на фон');

        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }


    handelClickdown = e => {
        if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
    }


    render() {
        return createPortal (
            <div onClick={this.handelBackdrop}
                style={{
                
                    position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }} >
                <div style={{
                    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minHeight: '300px',
 
  width: '600px',
  padding: '12px',
  backgroundColor:' #fff',
  borderRadius: '3px',
  boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2)',
                   }}
                >
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        )
    }

}