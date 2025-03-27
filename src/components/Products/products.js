
export const assetImage = src => `/products/${src}`

export const products = [
    {
        id: 1,
        iconStyle: {borderRadius: 5},
        title: 'Assets Portfolio',
        image: 'dassets.webp',
        info: {
            title: 'Manage all TON wallets and apps assets in one place',
            advantages: ['Enterprise' ],
            image: 'forum.webp',
            href: 'https://t.me/dassets_bot',
        }
    },
    {   id: 2,
        title: 'GraphQL API',
        image: 'GraphqlAPI.webp',
        info: {
            title: 'Custom requests to blockchain database',
            advantages: ['Small teams','Enterprise' ],
            image: 'GraphIMG.webp',
            href: 'https://dton.io/graphql',
        }
    },
    {
        id: 3,
        title: 'Lite Servers',
        image: '@liteserver_bot.webp',
        info: {
            title: 'Private LiteServers',
            advantages: ['Small teams','Enterprise'],
            image: 'liteserver.webp',
            href: 'https://t.me/dtontech_bot',
        }
    },
    {
        id: 4,
        iconStyle: {borderRadius: 5},
        title: 'Assets Rest API',
        image: '@dtonforum.webp',
        info: {
            title: 'Easy to use API for Net Worth and DeFi assets',
            advantages: ['Enterprise' ],
            image: 'forum.webp',
            href: 'https://docs.dton.io/about-assets',
        }
    },
    {
        id: 5,
        title: 'Opensource libs',
        image: 'Opensource.webp',
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



