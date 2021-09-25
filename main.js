const messageArr = ["Good Luck!!!!",
                    "Have a Nice day.",
                    "Good Luck with your Coding.",
                    "Happy Coding!!!!!",
                    "Welcome to JavaScript!",
                    "Way to Being Full Stack Web Developer!",
                    "Wishing you Good Luck!",
                    "Welcome Web Developer!",
                    "Welcome to Web Development!!"];
const generateMessage = () => {
                 let generate = Math.floor(Math.random() * messageArr.length);
                alert(messageArr[generate]);
            }