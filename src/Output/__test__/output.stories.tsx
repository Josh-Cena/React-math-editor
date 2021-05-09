import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Output from '../index';

const stories = storiesOf('Output', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Output />);
