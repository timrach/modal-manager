import React, { useContext, useState } from "react";
import {ModalContext} from '../lib/modal-context';
import BModal from '../modals/b-modal';
import Modal from '../lib/modal';

export default function AModal() {
  
  const {dispatch} = useContext(ModalContext);
  const [counter, setCounter] = useState(0);

  const closeModal = ()=> dispatch({ type: "HIDE_MODAL", key: "A" })
  const openModalB = () => dispatch({ type: 'SHOW_MODAL', modal: <BModal key="B"/> })

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