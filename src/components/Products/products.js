
export const assetImage = src => `/products/${src}`

export const products = [
    {   id: 1,
        title: 'GraphqlAPI',
        image: 'GraphqlAPI.png',
        info: {
            title: 'Custom requests to blockchain database',
            advantages: ['Small teams','Enterprise' ],
            image: 'GraphImg.png',
        }
    },
    {
        id: 2,
        title: '@liteserver_bot',
        image: '@liteserver_bot.png',
        info: {
            title: 'Stable private liteclient with rate limits',
            advantages: ['Small teams','Enterprise' ],
            image: 'liteserver.png',
        }
    },
    {
        id: 3,
        title: '@dtonforum',
        image: '@dtonforum.png',
        info: {
            title: 'Custom analytics and dashboards for projects',
            advantages: ['Enterprise' ],
            image: 'forum.png',
        }
    },
    {
        id: 4,
        title: 'Disintar.io',
        image: 'Disintario.png',
        info: {
            title: 'TON NFT mint, custom smart contracts, integrations',
            advantages: ['Enterprise'],
            image: 'disintar.png',
        }
    },
    {
        id: 5,
        title: 'Opensource libs',
        image: 'Opensource.png',
        info: {
            libs: [
                {title: 'tonpy', link: '', stars: '17', color: '#FF95C7', href: 'https://github.com/disintar/tonpy'},
                {title: 'tontvmpreply', link: '', stars: '17', color: '#9BFBF1', href: 'https://github.com/disintar/TonTVMReplay'},
                {title: 'toncli', link: '', stars: '134', color: '#CEC2FF', href: 'https://github.com/disintar/toncli'},
                {title: 'ton-k8s', link: '', stars: '23', color: '#6BF090', href: 'https://github.com/disintar/ton-k8s'},
            ]
        }
    }


]



