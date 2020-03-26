import React from "react";
import { ModalContextProvider } from "./lib/modal-context";
import ModalOpener from './components/modal-opener';

export default function App() {
  return (
    <ModalContextProvider>
      <ModalOpener/>  
    </ModalContextProvider>
  );
}