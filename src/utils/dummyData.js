const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {id: 0, name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", title : "Experineced Python developer with AI", "skills": ["Python", "AI"],
        "minPrice": {
          "value": 50,
          "currency": "EUR",
          "contractType": "B2B"
        }, location : "Paris", amount : 100, date : moment().endOf('day')},
        {id: 1, name : "Ereena", avatar : "https://reqres.in/img/faces/2-image.jpg",         "title": "Fullstack web dev with Java & Angular",
        "skills": ["Java", "Angular"],
        "minPrice": {
          "value": 40,
          "currency": "EUR",
          "contractType": "B2B"
        } , location : "London", amount : 190, date : moment().add(-1, 'd').endOf('day')},
        {id: 2, name : "John", avatar : "https://reqres.in/img/faces/3-image.jpg",         "title": "Junior frontend developer",
        "skills": ["React.js", "HTML", "CSS"],
        "minPrice": {
          "value": 30,
          "currency": "EUR",
          "contractType": "B2B"
        } , location : "Canada", amount : 112, date : moment().add(-1, 'd').endOf('day')},

    ]
});
