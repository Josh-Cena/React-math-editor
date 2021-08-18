import React, { useContext } from 'react';
import { EditorContext } from '../EditorProvider';

export default function Input(): JSX.Element {
  const { setInputValue } = useContext(EditorContext);
  return <input onChange={(e) => setInputValue(e.target.value)} />;
}
