import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Input from '../index';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <Input />);
