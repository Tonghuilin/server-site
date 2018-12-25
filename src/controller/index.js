import App   from '../component';
import axios from 'axios';

export const getProps = async () => {
    const someFetch = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme:   'light',
                title:   'Tong Hui Lin',
                section: [
                    {
                        id:             'section-one',
                        componentType:  'image-text',
                        componentProps: {
                            title:   'We are building an ARK this Christmas!',
                            body:    'section body <a href="www.google.com.au">Google</a>',
                            image:   {
                                title:       'image title',
                                url:         'https://placehold.it/300x200',
                                description: 'this is description',
                                fileType:    '',
                            },
                            setting: {
                                vertical: true,
                            },
                        },
                    },
                    {
                        id:             'section-social',
                        componentType:  'social',
                        componentProps: {
                            title: 'Share with friends',
                            items: [
                                {
                                    id:       'weichat',
                                    username: 'yanxsc',
                                    url:      'test.url',
                                },
                                {
                                    id:       'qq',
                                    username: '123456',
                                    url:      '123456.url',
                                },
                            ],
                        },
                    },
                    {
                        id:             'section-two',
                        componentType:  'image-text',
                        componentProps: {
                            title: 'section one',
                            body:  'section body <a href="www.google.com.au">Google</a>',
                            image: {
                                title:       'image title',
                                url:         'https://placehold.it/300x200',
                                description: 'this is description',
                                fileType:    '',
                            },
                        },
                    },
                    {
                        id:             'section-three',
                        componentType:  'image-text',
                        componentProps: {
                            title:   'section two',
                            body:    'section body <a href="www.google.com.au">Google</a>',
                            image:   {
                                title:       'image title',
                                url:         'https://placehold.it/300x200',
                                description: 'this is description',
                                fileType:    '',
                            },
                            setting: {
                                reverse: true,
                            },
                        },
                    },
                ],
                contact: {
                    title:      'Ready to join us this Christmas?',
                    submitText: 'Yes! Let us do this!',
                },
            });
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
