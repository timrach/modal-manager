import React from 'react';
import ReactModal from 'react-modal';
import { useModalActions } from './modal-context';
import { ModalProps } from './types';

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const { hideModal } = useModalActions();
  const closeModal = (): void => hideModal(props.id);

  return (
    <ReactModal
      isOpen
      ariaHideApp={false}
      onRequestClose={closeModal}
    >
      {props.children}
    </ReactModal>
  );
};

export default Modal;
