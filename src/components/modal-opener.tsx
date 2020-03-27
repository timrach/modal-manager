import React, { ReactElement } from 'react';
import AModal from '../modals/a-modal';
import { useModalActions } from '../lib';

const ModalOpener = (): ReactElement => {
  const { showModal } = useModalActions();
  const openModalA = (): void => showModal(<AModal id="A" />);

  return (
    <div>
      <button onClick={openModalA}> Open Modal A</button>
    </div>
  );
};

export default ModalOpener;
