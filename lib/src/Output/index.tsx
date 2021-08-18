import React from 'react';
import { EditorContext } from '../EditorProvider';

export default function Output(): JSX.Element {
  return (
    <EditorContext.Consumer>
      {(value) => <div>{value}</div>}
    </EditorContext.Consumer>
  );
}
