import App from '../component';
// import noop from 'lodash/noop';
import axios from 'axios';

// const noop = () => { console.log('noop'); };

// process.send = process.send || noop;

export const getProps = async () => {
    const someFetch = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({ title: 'Hello', name: 'that' });
        }, 1000);
    });

    try {
        const data = await someFetch();
        return data;
    } catch (err) {
        console.log(err);
        return {};
    }
};

export const component = App;
