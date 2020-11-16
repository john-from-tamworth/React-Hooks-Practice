import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end Javascript framwork',
  },
  {
    title: 'What is love?',
    content: 'baby dont hurt me, dont hurt me, no more',
  },
  {
    title: 'Pizza or Chinese',
    content: 'nah',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
