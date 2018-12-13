import App from '../component';
import axios from 'axios';

const generateData = async () => {
    const firstPost = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return {
        component:      App,
        componentProps: { title: 'Hello', name: 'me' },
        firstPost,
    };
};

// module.exports = generateData();
module.exports = {
    component:      App,
    componentProps: { title: 'Hello', name: 'me' },
};
