const state = {
    platformList: [
        {
            label: '爱奇艺视频',
            value: 'iqiyi'
        },
        {
            label: '腾讯视频',
            value: 'qq'
        },
        {
            label: '优酷视频',
            value: 'youku'
        },
        {
            label: '芒果视频',
            value: 'mg'
        }
    ],
    videoUrls: {
        iqiyi: 'http://www.iqiyi.com/',
        qq: 'https://v.qq.com/',
        youku: 'http://www.youku.com/',
        mg: 'https://www.mgtv.com/'
    }
}
export default { state };