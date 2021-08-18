import React from 'react';
import { EditorContext } from '../EditorProvider';
export default function Output() {
    return (React.createElement(EditorContext.Consumer, null, (value) => React.createElement("div", null, value)));
}
