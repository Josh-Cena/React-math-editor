import React from 'react';
import { EditorContext } from '../EditorProvider';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/contrib/mhchem.js';

export interface Props {
  // TODO proper typing
  as?: any;
  inline?: boolean;
}

export default function Output({
  as: Component = 'div',
  inline = false,
}: Props): JSX.Element {
  const MathComp = inline ? InlineMath : BlockMath;
  return (
    <EditorContext.Consumer>
      {({ inputValue }) => (
        <Component>
          <MathComp>{inputValue}</MathComp>
        </Component>
      )}
    </EditorContext.Consumer>
  );
}
