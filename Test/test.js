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

    let testOn = false;
    let CanAnswer = false;
    let answer = 0;
    let Choice = null;

    let Correct = 0;
    let Incorrect = 0;


    const stf = {
        0: ["How many states are in the United States?", "50", "51", "52", "54"],
        1: ["How many continents are there?", "7", "6", "8", "9"],
        2: ["What is the largest ocean on Earth?", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    };
    let alreadChosen = []

    function PickQuestion() {
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


    But1.addEventListener("click", function(){
        if (CanAnswer) {
            PickQuestion();
        };
    });
    But2.addEventListener("click", function(){
        if (CanAnswer) {
            PickQuestion();
        };
    });
    But3.addEventListener("click", function(){
        if (CanAnswer) {
            PickQuestion();
        };
    });
    But4.addEventListener("click", function(){
        if (CanAnswer) {
            PickQuestion();
        };
    });
});