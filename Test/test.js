document.addEventListener("DOMContentLoaded", function(){
    const HomeScreen = document.getElementById("HomeScreen");
    const BeginTestButton = document.getElementById("beginTestButton");
    const TestTakingBackground = document.getElementById("testTakingBackground");
    
    const But1 = document.getElementById("but1");
    const But2 = document.getElementById("but2");
    const But3 = document.getElementById("but3");
    const But4 = document.getElementById("but4");
    const question = document.getElementById("question");
    const anserChoices = document.getElementById("anserChoices")

    const Results = document.getElementById("endTest")
    const CorVal = document.getElementById("CorrectScore")
    const IncVal = document.getElementById("IncorrectScore")
    const IQVal = document.getElementById("IQlevel")

    let testOn = false;
    let CanAnswer = false;
    let answer = 0;
    let Choice = null;

    let Correct = 0;
    let Incorrect = 0;
    let QuestionsAnswered = 0;


    const stf = {
        0:["How many states are in the United States?", "50", "51", "52", "54"],
        1:["How many continents are there?", "7", "6", "8", "9"],
        2:["What is the largest ocean on Earth?", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        3:["How many bones do sharks have?", "0", "140", "275", "137"],
        4:["What state has the most borders with other states?", "Missouri and Tennessee", "Tennessee", "Missouri", "Illinois"],
        5:["What is the closest  planet to the sun", "Mercury", "Earth", "Venus", "Mars"],
        6:["Who of the following was NOT and founding father:", "Abraham Lincoln", "Alexander Hamilton", "Thomas Stone", "George Washington"],
        7:["During World War II, who was the main leader during the D-Day invasion?", " Dwight D. Eisenhower", "George S. Patton", "Bernard Montgomery", "Teddy Roosevelt"],
        8:["What movie production company was the first to build a theme park?", "Walt Disney", "Universal Studios", "Hollywood", "Pixar"],
        9:["Which is a island located in the Caribbean?", "The Bahamas", "The Philippines", "Guam", "Puerto Rico"],
        10:["What is 2+2","4","22", "3", "2"],
        11:["What is the fastest substance on Earth?", "Photons", "Neutrinos", "Ultra-high-energy cosmic ray particles", "water"],
        12:["There are x people on a train, 14 got off, there are now 20, how many people where on the train?", "34", "32", "40", "30"],
        13:["What is the most popular sport in the world?", "Soccer", "Football", "Baseball", "Tennis"],
        14:["What is the most visited country on Earth?", "France", "United States", "Paris", "United Kingdom"],
        15:["After what event was the National Anthem written?", "British Bombardment of Fort McHenry", "Battle of the Marne", "Gallipoli Campaign", "Battle of Jutland"],
        16:["What are the first 7 digits of pi?", "3.141592", "3.141792", "3.141593", "3.141527"],
        17:["What is the most popular programming language in the United States?", "Python", "Java Script", "Java", "PHP"],
        18:["Which of the following is a 3 dimentional shape?", "sphere", "square", "rectangle", "circle"],
        19:["What is the most abundant metal in the world?", "Aluminum", "Iron", "Magnesium", "Calcium"],
        20:["What are there more of?", "Trees on Earth", "Stars in the Milkyway Galaxy", "People on Earth", "Michael Jacksons"],
        21:["What is Alaska's official state bird?", "Willow Ptarmigan", "moose", "Pengiun", "Snowy Owl"],
        22:["Who was the og Robber Barron?", "John D. Rocketfeller", "J.P. Morgan", "Vanderbilt", "Andrew Carnegie"],
        23:["What is the biggest state in the United States?", "Alaska", "Texas", "California", "Montana"],
        24:["What was the first animal to go to space?", "Fruit Flies", "Monkeys", "Dogs", "Mosquito"]
    };
    let alreadChosen = []

    function EndGame() {
        Results.style.visibility = "visible";
        TestTakingBackground.style.visibility = "hidden";
        anserChoices.style.visibility = "hidden";
        CorVal.textContent = Correct;
        IncVal.textContent = Incorrect;
        IQVal.textContent =  Math.floor((Correct/20)*100);
        let z = thingy -50/10;
        let iq = (z*15) + 15
        IQVal.textContent = iq;
    };

    function PickQuestion() {
        if (QuestionsAnswered === 20) {EndGame()};
        let len = Object.keys(stf).length;
        if (len === alreadChosen.length) {
                return;
            };
        let theThings = null;
        let number = null;

        while (theThings === null) {
            number = Math.floor(Math.random()  * len);

            if (alreadChosen.includes(number)) {
                continue;
            }
            else {
                theThings = stf[number];
            };
        };
        alreadChosen.push(number);
        question.textContent = theThings[0];
        theThings.splice(0,1);
        
        answer = theThings[0];
        theThings.sort(() => Math.random() - 0.5);
        
        for (let i = 0; i < theThings.length; i++) {
            let item = theThings[i];
            if (item === answer) {
                answer = i + 1;
            };
        };

        But1.textContent = theThings[0];
        But2.textContent = theThings[1];
        But3.textContent = theThings[2];
        But4.textContent = theThings[3];
        CanAnswer = true;
    };


    BeginTestButton.addEventListener("click", function(){
        TestTakingBackground.style.visibility = "visible";
        HomeScreen.style.visibility = "hidden";
        anserChoices.style.visibility = "visible"
        testOn = true;
        PickQuestion()
    });


    function check(num) {
        QuestionsAnswered++;
        if (num === answer) {
            Correct++;
        }
        else {
            Incorrect++;
        };
    };


    But1.addEventListener("click", function(){
        if (CanAnswer) {
            check(1)
            PickQuestion();
        };
    });
    But2.addEventListener("click", function(){
        if (CanAnswer) {
            check(2)
            PickQuestion();
        };
    });
    But3.addEventListener("click", function(){
        if (CanAnswer) {
            check(3)
            PickQuestion();
        };
    });
    But4.addEventListener("click", function(){
        if (CanAnswer) {
            check(4)
            PickQuestion();
        };
    });
});