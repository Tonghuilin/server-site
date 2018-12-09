const index  = require('./page-index');
const config = require('../../config');

module.exports = {
    menu:      [
        { name: 'Home', href: '/' },
        { name: 'Contact us!', href: '/contact-us' },
        { name: 'Some other page'},
    ],
    index,
    contactUs: {
        title: 'Contact us',
    },
    config,
};
