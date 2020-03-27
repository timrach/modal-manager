import React from "react";
import { useModalActions } from '../lib/modal-context';
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
   

export default function BModal(props) {
  // eslint-disable-next-line no-unused-vars
  const [showModal, hideModal] = useModalActions();

  const closeModal = () => hideModal(props.id);

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