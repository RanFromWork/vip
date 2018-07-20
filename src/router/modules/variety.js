const varietyRouter = [
    {
        path: '/variety',
        name: 'Variety',
        meta: {
            crumbs: [{ name: "综艺", path: "/variety" }]
        },
        component: (resolve) => require(['@views/variety/list'], resolve)
    }
]

export default varietyRouter;