const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Devtinatina = require('./NumberBaseball');

const Hot = hot(Devtinatina); // hoc

ReactDom.render(<Hot />, document.querySelector('#root'));
