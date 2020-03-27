import React, { FunctionComponent } from 'react';
import { Modal, useModalActions } from '../lib';
import { ModalProps } from '../lib/types';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '8px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#eee',
  },
};


interface ConfirmationDialogProps extends ModalProps{
    message: string;
    onConfirm?: Function;
    onCancel?: Function;
}

const ConfirmationDialog: FunctionComponent<ConfirmationDialogProps> = (props) => {
  const { hideModal } = useModalActions();

  const confirm = (): void => {
    if (props.onConfirm) props.onConfirm();
    hideModal(props.id);
  };
  const cancel = (): void => {
    if (props.onCancel) props.onCancel();
    hideModal(props.id);
  };

  return (
    <Modal id={props.id} style={modalStyle}>
      {props.message}
      <br />
      <button onClick={confirm}> Ok </button>
      <button onClick={cancel}> Cancel </button>
      <br />
    </Modal>
  );
};

export default ConfirmationDialog;
