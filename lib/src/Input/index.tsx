import React, { useContext, ComponentProps } from 'react';
import { EditorContext } from '../EditorProvider';

export interface Props extends Record<string, unknown> {
  // TODO how to type this
  as: any;
}

export default function Input({
  as: Component = 'input',
  ...props
}: Props): JSX.Element {
  const { setInputValue } = useContext(EditorContext);
  return (
    <Component
      contentEditable
      onChange={(e: React.ChangeEvent<any>) => {
        setInputValue(e.target.value);
      }}
      {...props}
    />
  );
}
