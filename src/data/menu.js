let Menu = [
    {
        headName: 'عمومی',
        items: [{
                tagText: 'پیشخوان',
                link: '/'
            },
            {
                tagText: 'اطلاعات دانشجو',
                link: '/studentInformation'
            }
        ],
    },
    {
        headName: 'تنظیمات',
        items: [{
            tagText: 'تنظیمات',
            link: '/setting'
        }, ],
    },
    {
        headName: 'مدیریتی',
        items: [{
                tagText: 'امور مالی',
                link: '/Maali',
            },
            {
                tagText: 'مدیریت واحد های درسی',
                items: [{
                        tagText: 'انتخاب واحد',
                        link: '/chooseUnit',
                    },
                    {
                        tagText: 'حذف و اضافه',
                        link: '/addAndDeleteUnit',
                    },
                    {
                        tagText: 'برنامه هفتگی',
                        link: '/weeklySchedule',
                    },
                ]
            },
            {
                tagText: 'کارنامه',
                link: '/termLog'
            },
            {
                tagText: 'صندوق پیام',
                link: '/mailBox',
            }
        ]
    },
    {
        headName: 'درخواست ها و خدمات',

        items: [{
                tagText: 'پیش انتخاب واحد',
                link: '/preChooseUnit',
            },
            {
                tagText: 'سرویس سفارش غذا',
                link: '/rqOrderFood',
            },
            {
                tagText: 'سرویس درخواست گواهی',
                link: '/rqGovahi',
            },
            {
                tagText: 'درخواست اعتراض',
                link: '/rqEteraz',
            },
        ],
    },
];

export default Menu;