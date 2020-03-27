import React, { ReactElement } from 'react';
import { ModalContextProvider } from './lib';
import ModalOpener from './components/modal-opener';

export default function App(): ReactElement {
  return (
    <ModalContextProvider>
      <ModalOpener />
    </ModalContextProvider>
  );
}
