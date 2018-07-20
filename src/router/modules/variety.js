const varietyRouter = [
    {
        path: '/variety',
        name: 'variety',
        meta: {
            activeMenu: 'variety',            
            crumbs: [{ name: "综艺", path: "/variety" }]
        },
        component: (resolve) => require(['@views/variety/list'], resolve)
    }
]

export default varietyRouter;