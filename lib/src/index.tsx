import React, { CSSProperties } from 'react';
import Input from './Input';
import Output from './Output';
import EditorProvider from './EditorProvider';

export { Output, Input, EditorProvider };

export interface Props {
  inputComp: string;
  outputComp: string;
  inputStyle: CSSProperties;
  outputStyle: CSSProperties;
  outputPosition: 'left' | 'right' | 'above' | 'below';
}

export default function MathEditor({
  inputComp = 'input',
  outputComp = 'div',
  inputStyle = {},
  outputStyle = {},
  outputPosition = 'below',
}: Props): JSX.Element {
  return (
    <EditorProvider>
      <Input as={inputComp} style={inputStyle} />
      <Output as={outputComp} style={outputStyle} />
    </EditorProvider>
  );
}
