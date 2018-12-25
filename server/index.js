const express       = require('express');
const { log, color } = require('../src/helper/logger');

const PORT = 3000;
const app  = express();

app.use(express.static(
    'dist',
    { extensions: ['html'] },
));

app.listen(PORT, () => {
    log('NODE_ENV:', color.highlight(process.env.NODE_ENV));
    log(`Listen to PORT: ${color.highlight(PORT)}`);
});
