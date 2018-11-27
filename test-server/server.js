const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.static(
    'dist',
    { extensions: [ 'html' ] },
));


app.listen(PORT, () => {
   console.log(`Listen to PORT: ${PORT}`);
});
