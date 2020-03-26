import React, { useContext } from "react";
import {ModalContext} from '../lib/modal-context';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
   

export default function BModal() {
  const {dispatch} = useContext(ModalContext);

  const closeModal = ()=>{
      dispatch({
        type: "HIDE_MODAL",
        key: "B"
      })
  }

  return (
    <Modal 
    style={customStyles}
    isOpen={true}
    ariaHideApp={false}>
        Hallo B
    <button onClick={closeModal}> Close </button>   
    </Modal>
  );
}