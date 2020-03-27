import React, { useState, FunctionComponent } from 'react';
import { Modal, useModalActions } from '../lib';
import { ModalProps } from '../lib/types';
import ConfirmationDialog from './confirmation-dialog';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    width: '320px',
    height: '160px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    backgroundColor: '#222',
  },
};

const closeButtonStyle = {
  backgroundColor: 'red',
  width: '16px',
  height: '16px',
  cursor: 'pointer',
  marginBottom: '16px',
  borderRadius: '8px',
};

const AModal: FunctionComponent<ModalProps> = (props) => {
  const [counter, setCounter] = useState(0);
  const { showModal, hideModal } = useModalActions();

  const closeModal = (): void => hideModal(props.id);

  const askToConfirm = (): void => {
    const message = `Confirm that ${counter} is a good number.`;
    showModal(<ConfirmationDialog id="ConfirmA" message={message} />);
  };

  const increment = (): void => setCounter(counter + 1);
  const decrement = (): void => setCounter(counter - 1);

  return (
    <Modal
      id={props.id}
      style={modalStyle}
    >
      <div>
        <div style={closeButtonStyle} onClick={closeModal} />
        <br />
        Select a good number
        <button onClick={decrement}> - </button>
        {counter}
        <button onClick={increment}> + </button>
        <br />
        <button onClick={askToConfirm}> Confirm </button>
      </div>
    </Modal>
  );
};

export default AModal;
