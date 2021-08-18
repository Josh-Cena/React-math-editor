import React, { useState, createContext } from 'react';
const EditorContext = createContext({
    inputValue: '',
    setInputValue: () => {
        // Empty default state
    },
});
export { EditorContext };
export default function EditorProvider({ children }) {
    const [inputValue, setInputValue] = useState('');
    const value = { inputValue, setInputValue };
    return (React.createElement(EditorContext.Provider, { value: value }, children));
}
