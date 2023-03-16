const users = [
    {
        userId: 1,
        userName: "camilo",
        attributes: [
            "nice",
            "cute"
        ]
    },
    {
        userId: 2,
        userName: "valen",
        attributes: [
            "nice",
            "cute"
        ]
    },
    {
        userId: 3,
        userName: "oscar",
        attributes: [
            "nice",
            "cute"
        ]
    }
];

const newUsers = users.flatMap(users => users.attributes);
console.log(newUsers);

// ----------------------------------------------------------

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1 ,15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "cita 1",
        },
        {
            startDate: new Date(2021, 1, 1 ,17),
            endDate: new Date(2021, 1, 1, 18),
            title: "cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1 ,12),
            endDate: new Date(2021, 1, 1, 16, 31),
            title: "cita 1",
        },
        {
            startDate: new Date(2021, 1, 1 ,18),
            endDate: new Date(2021, 1, 1, 19),
            title: "cita 2",
        },
    ],
};

const newCalendars = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});

console.log(newCalendars);