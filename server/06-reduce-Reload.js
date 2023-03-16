const items = [1, 3, 2, 3, 3 ,1, 10];

const newItem = items.reduce((obj, item) => {
    if (!obj[item]) {
       obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(newItem);

const data = [
   {
    name: "camilo",
    level: "medium"
   },
   {
    name: "valentina",
    level: "hight"
   },
   {
    name: "daniel",
    level: "low"
   },
   {
    name: "oscar",
    level: "medium"
   },
   {
    name: "sofia",
    level: "hight"
   },
   {
    name: "santiago",
    level: "low"
   },

];

const newData = data.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
       obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(newData);