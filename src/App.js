import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
