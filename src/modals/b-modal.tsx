import React, { FunctionComponent } from 'react';
import Modal from 'react-modal';
import { useModalActions } from '../lib';
import { ModalProps } from '../lib/types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const BModal: FunctionComponent<ModalProps> = (props) => {
  const { hideModal } = useModalActions();

  const closeModal = (): void => hideModal(props.id);

  return (
    <Modal
      style={customStyles}
      isOpen
      ariaHideApp={false}
    >
      Hallo B
      <button onClick={closeModal}> Close </button>
    </Modal>
  );
};

export default BModal;
