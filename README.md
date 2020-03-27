## Usage

Include the ModalContextProvider
```[javascript]
import React, { ReactElement } from 'react';
import ModalOpener from './components/modal-opener';
import { ModalContextProvider } from './lib';

export default function App(): ReactElement {
  return (
    <ModalContextProvider>
        {/* Components using Modals */}
        <ModalOpener/>
    </ModalContextProvider>
  );
}
```

Create a modal component
```[javascript]
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
```


Show the modal
```[javascript]
import React, { ReactElement } from 'react';
import MyModal from '../modals/mymodal';
import { useModalActions } from '../lib';

const ModalOpener = (): ReactElement => {
  const { showModal } = useModalActions();
  const openMyModal = (): void => showModal(<MyModal id="MyFirstModal" />);

  return (
    <div>
      <h1> Modal Opener </ h1>
      <button onClick={openMyModal}> Open My Modal </button>
    </div>
  );
};

export default ModalOpener;
}
```