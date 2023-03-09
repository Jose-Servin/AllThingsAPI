console.log("Hello World");
const Book = {
    topic: "Python",
    content: {
        ch1: "Intro",
        ch2: "Variables",
        ch3: "Logic"
    }
};

let foo = Book?.content?.ch1;
console.log(foo)