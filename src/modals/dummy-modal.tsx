import React, { FunctionComponent } from 'react';
import { Modal, useModalActions } from '../lib';
import { ModalProps } from '../lib/types';

interface MyModalProps extends ModalProps{
    message: string;
}

const MyModal: FunctionComponent<MyModalProps> = (props) => {
  const { hideModal } = useModalActions();

  const closeModal = (): void => {
    hideModal(props.id);
  };

  return (
    <Modal id={props.id}>
      {props.message}
      <button onClick={closeModal}> Ok </button>
    </Modal>
  );
};

export default MyModal;
