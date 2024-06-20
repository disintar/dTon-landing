
export const assetImage = src => `/products/${src}`

export const products = [
    {   id: 1,
        title: 'GraphqlAPI',
        image: 'GraphqlAPI.webp',
        info: {
            title: 'Custom requests to blockchain database',
            advantages: ['Small teams','Enterprise' ],
            image: 'GraphIMG.webp',
            href: 'https://dton.io/graphql',
        }
    },
    {
        id: 2,
        title: '@liteserver_bot',
        image: '@liteserver_bot.webp',
        info: {
            title: 'Stable private liteclient with rate limits',
            advantages: ['Small teams','Enterprise' ],
            image: 'liteserver.webp',
            href: 'https://t.me/liteserver_bot',
        }
    },
    {
        id: 3,
        iconStyle: {borderRadius: 5},
        title: '@dtonforum',
        image: '@dtonforum.webp',
        info: {
            title: 'Custom analytics and dashboards for projects',
            advantages: ['Enterprise' ],
            image: 'forum.webp',
            href: 'https://t.me/dtonforum',
        }
    },
    {
        id: 4,
        title: 'Disintar.io',
        iconStyle: {borderRadius: 5, border: '1px solid #5AC8FA'},
        image: 'Disintario.webp',
        info: {
            title: 'TON NFT mint, custom smart contracts, integrations',
            advantages: ['Enterprise'],
            image: 'disintar.webp',
            href: 'https://disintar.io',
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



