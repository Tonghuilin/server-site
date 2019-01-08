import App           from '../component';
import bannerLandUrl from '../asset/banner-land.png';
import treeUrl       from '../asset/tree.gif';
import axios         from 'axios';

export const getProps = async () => {
    const someFetch = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                themeName: 'light',
                title:     '通慧林',
                logo:      {},
                section:   [
                    {
                        id:             'image-text-banner',
                        componentType:  'image-text',
                        componentProps: {
                            title:   '欢迎大家来到通慧林英语！',
                            body:    'No, we don\'t mean a flood is coming. We just plan to put smiles on the faces of everyday people around us with our ARK (acts of random kindness).',
                            image:   {
                                title:       'image title',
                                url:         bannerLandUrl,
                                description: 'this is description',
                                fileType:    '',
                                height:      '100%',
                                width:       'auto',
                            },
                            setting: {
                                isBanner: true,
                            },
                        },
                    },
                    {
                        id:             'section-social',
                        componentType:  'social',
                        componentProps: {
                            title: '扫一扫',
                            items: [
                                {
                                    id:       'wechat',
                                    label:    '微信',
                                    username: 'yanxsc',
                                    url:      'weichat.url',
                                },
                                {
                                    id:       'qq',
                                    label:    'QQ',
                                    username: '123456',
                                    url:      'qq.url',
                                },
                            ],
                        },
                    },
                    {
                        id:             'home-course',
                        componentType:  'home-course',
                        componentProps: {
                            title:  'So here’s the plan.',
                            body:   '<p class="subheading mb-md-0">' +
                                    'Our debut ARK project this December is to share happiness with as many people as we\n' +
                                    'can. We believe Happiness is only real when shared. It will take more than our team\n' +
                                    'to make this dream come true so we are calling on friends to <a href="#" class="scroll-to">Join\n' +
                                    'us.</a>' +
                                    '</p>',
                            course: [
                                {
                                    name: 'Grade 1-2',
                                    desc: 'Our debut ARK project this December is to share happiness with as ' +
                                          'many people as we can. We believe Happiness is only real when shared',
                                },
                                {
                                    name: 'Grade 3-4',
                                    desc: 'Our debut ARK project this December is to share happiness with as ' +
                                          'many people as we can. We believe Happiness is only real when shared',
                                },
                                {
                                    name: 'Grade 5-6',
                                    desc: 'Our debut ARK project this December is to share happiness with as ' +
                                          'many people as we can. We believe Happiness is only real when shared',
                                },
                                {
                                    name: 'Grade 7-9',
                                    desc: 'Our debut ARK project this December is to share happiness with as ' +
                                          'many people as we can. We believe Happiness is only real when shared',
                                },
                            ],
                        },
                    },
                    {
                        id:             'image-text',
                        componentType:  'image-text',
                        componentProps: {
                            title: '在通慧林...',
                            body:  '<p class="subheading mb-md-0">' +
                                   'Our debut ARK project this December is to share happiness with as many people as we\n' +
                                   'can. We believe Happiness is only real when shared. It will take more than our team\n' +
                                   'to make this dream come true so we are calling on friends to <a href="#" class="scroll-to">Join\n' +
                                   'us.</a>' +
                                   '</p>',
                            image: {
                                title:       'image title',
                                url:         treeUrl,
                                description: 'this is description',
                                fileType:    '',
                            },
                        },
                    },
                    {
                        id:             'team',
                        componentType:  'team',
                        componentProps: {
                            title: '通慧林的团队',
                            desc:  '<p>A little spend can go a long way to put a smile on the faces of everyday Nigerians. What act of random kindness can you suggest?</p>',
                            team:  [
                                {
                                    username:    'cyan',
                                    name:        'Chi Yan',
                                    position:    'Developer',
                                    description: 'This is a description',
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
                        id:             'home-contact-us',
                        componentType:  'home-contact-us',
                        componentProps: {
                            title:  '怎么联系通慧林？',
                            description: '点击文字可以复制信息。',
                            places: [
                                {
                                    lat:     34.262833,
                                    lng:     117.192957,
                                    name:    '通慧林本部',
                                    phone:   '81238123',
                                    mobile:  '13712341234',
                                    address: '中山路1号',
                                }, {
                                    lat:     34.270004,
                                    lng:     117.203117,
                                    name:    '通慧林分校',
                                    phone:   '81238123',
                                    mobile:  '13712341234',
                                    address: '淮海路1号',
                                },
                            ],
                            socials: [
                                {
                                    id:       'wechat',
                                    label:    '微信',
                                    username: 'yanxsc',
                                    url:      'weichat.url',
                                },
                                {
                                    id:       'qq',
                                    label:    'QQ',
                                    username: '123456',
                                    url:      'qq.url',
                                },
                            ],
                        },
                    },
                    {
                        id:             'map',
                        componentType:  'map',
                        componentProps: {
                            title:         '怎么去通慧林？',
                            fromTitle:     '点击或者搜索想从哪里去',
                            toTitle:       '选择校区',
                            noPlanMessage: '找不到方案，可能是距离太短啦。',
                            ourPlaces:     [
                                {
                                    lat:     34.262833,
                                    lng:     117.192957,
                                    name:    '通慧林本部',
                                    phone:   '81238123',
                                    mobile:  '13712341234',
                                    address: '中山路1号',
                                }, {
                                    lat:     34.270004,
                                    lng:     117.203117,
                                    name:    '通慧林分校',
                                    phone:   '81238123',
                                    mobile:  '13712341234',
                                    address: '淮海路1号',
                                },
                            ],
                            hotPlaces:     [
                                {
                                    lat:   34.266896,
                                    lng:   117.197617,
                                    title: '青年路小学',
                                },
                                {
                                    lng:   117.19309,
                                    lat:   34.263192,
                                    title: '徐师一附小',
                                },
                                {
                                    lng:   117.198538,
                                    lat:   34.259151,
                                    title: '解放路小学',
                                },
                                {
                                    lng:   117.200608,
                                    lat:   34.26733,
                                    title: '公园巷小学',
                                },
                                {
                                    lng:   117.190894,
                                    lat:   34.270292,
                                    title: '少华街小学',
                                },
                                {
                                    lng:   117.203345,
                                    lat:   34.272172,
                                    title: '大马路小学',
                                },
                                {
                                    lng:   117.270816,
                                    lat:   34.256175,
                                    title: '云兴小学',
                                },
                                {
                                    lng:   117.158992,
                                    lat:   34.25768,
                                    title: '星光小学',
                                },
                                {
                                    lng:   117.200888,
                                    lat:   34.280971,
                                    title: '鼓楼小学',
                                },
                            ],
                        },
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
