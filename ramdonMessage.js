messageDB = {
    message1 : "Act as if what you do makes a difference. It does. William James",
    message2 : "Never bend your head. Always hold it high. Look the world straight in the eye. Helen Keller",
    message3 : "What you get by achieving your goals is not as important as what you become by achieving your goals. Zig Ziglar",
    message4 : "Believe you can and you're halfway there. Theodore Roosevelt",
    message5 : "When you have a dream, you've got to grab it and never let go. Carol Burnett",
    message6 : "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. Jimmy Dean",
    message7 : "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. William James",
    message8 : "Life is like riding a bicycle. To keep your balance, you must keep moving. Albert Einstein",
    message9 : "You are never too old to set another goal or to dream a new dream. C.S. Lewis",
    message10: "You do not find the happy life. You make it. Camilla Eyring Kimball"
}

const randNumb = Math.floor(Math.random() * Object.keys(messageDB).length);
// console.log(Object.keys(messageDB)[randNumb]);
console.log(messageDB[Object.keys(messageDB)[randNumb]]);
