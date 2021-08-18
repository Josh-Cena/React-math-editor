import React, { ReactNode, useState, createContext } from 'react';

export interface Props {
  children: ReactNode;
}

export interface IEditorContext {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const EditorContext = createContext<IEditorContext>({
  inputValue: '',
  setInputValue: () => {
    // Empty default state
  },
});
export { EditorContext };

export default function EditorProvider({ children }: Props): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const value = { inputValue, setInputValue };
  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
}
