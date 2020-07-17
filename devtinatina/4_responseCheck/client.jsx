const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordRelay = require('./responseCheck');

const Hot = hot(WordRelay); // hoc

ReactDom.render(<Hot />, document.querySelector('#root'));
