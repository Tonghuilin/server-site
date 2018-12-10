const React         = require('react');
const { homeTitle } = require('./homeStyle');

const Home = ({ title, name }) => (<div className={homeTitle}>{title} {name}</div>);

module.exports = {
    Home,
};
