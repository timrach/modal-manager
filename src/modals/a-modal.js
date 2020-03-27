import React, { useState } from "react";
import { useModalActions } from '../lib/modal-context';
import BModal from '../modals/b-modal';
import Modal from '../lib/modal';

export default function AModal(props) {
  
  const [counter, setCounter] = useState(0);
  const [showModal, hideModal] = useModalActions();

  const closeModal = () => hideModal(props.id);
  const openModalB = () => showModal(<BModal id="B"/>);

  return (
    <Modal>
        Hallo A
      <button onClick={closeModal}> Close </button>  
      <button onClick={openModalB}> Open B </button>    
      <br/>
      <button onClick={()=> setCounter(counter - 1)}> - </button>  
      {counter}
      <button onClick={()=> setCounter(counter + 1)}> + </button>    
    </Modal>
  );
}