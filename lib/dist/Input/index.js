import React, { useContext } from 'react';
import { EditorContext } from '../EditorProvider';
export default function Input() {
    const { setInputValue } = useContext(EditorContext);
    return React.createElement("input", { onChange: (e) => setInputValue(e.target.value) });
}
