import App             from '../component';
import chemistryUrl    from '../asset/chemistry.gif';
import thanksGivingUrl from '../asset/thanks-giving.gif';
import Color           from '../component/style/color';
import axios           from 'axios';

export const getProps = async () => {
    const someFetch = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                themeName: 'light',
                title:     '通慧林',
                section:   [
                    {
                        id:             'image-text-vertical',
                        componentType:  'image-text',
                        componentProps: {
                            title:   'We are building an ARK this Christmas!',
                            body:    'No, we don\'t mean a flood is coming. We just plan to put smiles on the faces of everyday people around us with our ARK (acts of random kindness).',
                            image:   {
                                title:       'image title',
                                url:         chemistryUrl,
                                description: 'this is description',
                                fileType:    '',
                                height:      '100%',
                                width:       'auto',
                            },
                            setting: {
                                vertical:             true,
                                fullWidth:            true,
                                imageBackgroundColor: Color.mantis,
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
                                    id:       'wechat',
                                    username: 'yanxsc',
                                    url:      'weichat.url',
                                },
                                {
                                    id:       'qq',
                                    username: '123456',
                                    url:      'qq.url',
                                },
                                {
                                    id:       'weibo',
                                    username: '123456',
                                    url:      'weibo.url',
                                },
                            ],
                        },
                    },
                    {
                        id:             'image-text',
                        componentType:  'image-text',
                        componentProps: {
                            title: 'So here’s the plan.',
                            body:  '<p class="subheading mb-md-0">' +
                                   'Our debut ARK project this December is to share happiness with as many people as we\n' +
                                   'can. We believe Happiness is only real when shared. It will take more than our team\n' +
                                   'to make this dream come true so we are calling on friends to <a href="#" class="scroll-to">Join\n' +
                                   'us.</a>' +
                                   '</p>',
                            image: {
                                title:       'image title',
                                url:         thanksGivingUrl,
                                description: 'this is description',
                                fileType:    '',
                            },
                        },
                    },
                    {
                        id:             'team',
                        componentType:  'team',
                        componentProps: {
                            title: 'Meet our team!',
                            desc:  '<p>A little spend can go a long way to put a smile on the faces of everyday Nigerians. What act of random kindness can you suggest?</p>',
                            team:  [
                                {
                                    username: 'cyan',
                                    name:     'Chi Yan',
                                    position: 'Developer',
                                },
                                {
                                    username:  'linda',
                                    name:      'Linda Li',
                                    thumbnail: 'https://picsum.photos/200/300',
                                    position:  'Teacher',
                                },
                                {
                                    username: 'cyan2',
                                    name:     'Chi Yan',
                                    position: 'Developer',
                                },
                                {
                                    username:  'linda2',
                                    name:      'Linda Li',
                                    thumbnail: 'error.url',
                                    position:  'Teacher',
                                },
                                {
                                    username: 'cyan3',
                                    name:     'Chi Yan',
                                    position: 'Developer',
                                },
                                {
                                    username:  'linda3',
                                    name:      'Linda Li',
                                    thumbnail: 'https://picsum.photos/50/50',
                                    position:  'Teacher',
                                },
                                {
                                    username: 'cyan4',
                                    name:     'Chi Yan',
                                    position: 'Developer',
                                },
                                {
                                    username:  'linda4',
                                    name:      'Linda Li',
                                    thumbnail: 'https://picsum.photos/300/200',
                                    position:  'Teacher',
                                },
                            ],
                        },
                    },
                    {
                        id:             'image-text-reverse',
                        componentType:  'image-text',
                        componentProps: {
                            title:   'And after Christmas?',
                            body:    '<p class="subheading mb-md-0">\n' +
                                     'We will be donating 5% of Cregital’s monthly revenue to a charitable cause. ARK\n' +
                                     'will be our own way to give back as part of your celebration. We will partner with\n' +
                                     'charitable organizations that are making a difference. <a href="mailto:ark@cregital.com?&amp;subject=Partnership Enquiry&amp;body=Hey%20Guys,%20I\'ll%20love%20to%20partner%20with%20the%20ARK%20project%20by...">Email\n' +
                                     'us.</a>\n' +
                                     '</p>',
                            image:   {
                                title:       'image title',
                                url:         'https://picsum.photos/300/200',
                                description: 'this is description',
                                fileType:    '',
                            },
                            setting: {
                                reverse: true,
                            },
                        },
                    },
                    {
                        id:             'contact-form',
                        componentType:  'contact-form',
                        componentProps: {
                            title:      'Ready to join us this Christmas?',
                            submitText: 'Yes! Let us do this!',
                        },
                    },
                    {
                        id:             'map',
                        componentType:  'map',
                        componentProps: {},
                    },
                ],
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
