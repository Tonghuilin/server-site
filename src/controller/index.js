const index = require('./page-index');

module.exports = {
    menu: [
        { name: 'Home', href: '/' },
        { name: 'Contact us', href: '/contact-us' },
    ],
    index,
    contactUs: {
        title: 'Contact us',
    },
};
