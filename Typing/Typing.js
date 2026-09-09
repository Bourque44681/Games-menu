document.addEventListener("DOMContentLoaded", function(){
    
    const TextDisplay = document.getElementById("textbox");
    const Words = document.getElementById("Words");
    const timeValue = document.getElementById("timeValue")

    const wpmVal = document.getElementById("wpmVal")
    const AccuracyVal = document.getElementById("AccuracyVal")
    const WordsTypedVal = document.getElementById("WordsTypedVal")
    const CahractersTypedVal = document.getElementById("CahractersTypedVal")
    const CharactersMisspelledVal = document.getElementById("CharactersMisspelledVal")

    var WordsTyped = 0;
    var CharactersTyped = 0;
    var CharactersMisspelled = 0;
    var WPM = 0;
    var Accuracy = 0;

    var WordsArray = ["apples","good", "yellow","purple", "berries", "screen", "understanding", "because", "light", "panda", "cat", "dog", "right", "left", "upside", "shore", "shoe", "bear", "table", "string", "addition", "contradicting"];

    let WordsList = []
    function UpdateDispaly() {
        var WordsList2 = WordsList.join("\u00A0");
        Words.textContent = WordsList2;
    };

    let Timer = null;
    let TimerStf = null;
    let TimerVal = 25;

    function StartTuner() {
            TimerStf = setInterval(() => {
            TimerVal--;
            timeValue.textContent = TimerVal;

            if (TimerVal === 0) {
                clearInterval(TimerStf);
            };
        }, 1000);
    };


    function CreateList(amount) {
        for (let i = 0; i < amount; i++) {
            const randomIndex = Math.floor(Math.random() * WordsArray.length);
            const randomWord = WordsArray[randomIndex];
            WordsList.push(randomWord);
        };
    };

    StartTuner();
    CreateList(60);
    UpdateDispaly();

    document.addEventListener("keydown", (event) => {
        let key = event.key;

        if (key === WordsList[0][0]) {
            WordsList[0] = WordsList[0].substring(1);
        }
        else if (event.code === "Enter") {
            clearInterval(TimerStf);
            StartTuner();
            TimerVal = 25;
            timeValue.textContent = TimerVal;
            WordsList = [];
            CreateList(60);
        };

        if (WordsList[0] === "") {
            if (key === " ") {
                WordsList.shift();
                CreateList(1);
            };
        };

        UpdateDispaly();
    });

});