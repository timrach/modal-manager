import React, { useState, FunctionComponent } from 'react';
import BModal from './b-modal';
import { Modal, useModalActions } from '../lib';

type AModalProps = {
  id: string;
}

const AModal: FunctionComponent<AModalProps> = (props: AModalProps) => {
  const [counter, setCounter] = useState(0);
  const { showModal, hideModal } = useModalActions();

  const closeModal = (): void => hideModal(props.id);
  const openModalB = (): void => showModal(<BModal id="B" />);
  const increment = (): void => setCounter(counter + 1);
  const decrement = (): void => setCounter(counter - 1);
  return (
    <Modal id={props.id}>
      Hallo A
      <button onClick={closeModal}> Close </button>
      <button onClick={openModalB}> Open B </button>
      <br />
      <button onClick={decrement}> - </button>
      {counter}
      <button onClick={increment}> + </button>
    </Modal>
  );
};

export default AModal;
