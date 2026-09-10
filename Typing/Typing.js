document.addEventListener("DOMContentLoaded", function () {
    const TextDisplay = document.getElementById("textbox");
    const Words = document.getElementById("Words");
    const timeValue = document.getElementById("timeValue");

    const wpmVal = document.getElementById("wpmVal");
    const AccuracyVal = document.getElementById("AccuracyVal");
    const WordsTypedVal = document.getElementById("WordsTypedVal");
    const CahractersTypedVal = document.getElementById("CahractersTypedVal");
    const TyposVal = document.getElementById("TyposVal");

    const showTypingLine = document.getElementById("showTypingLine");
    const resultBox = document.getElementById("resultBox");

    const easy = document.getElementById("easy");
    const medium = document.getElementById("medium");
    const hard = document.getElementById("hard");

    let WordsTyped = 0;
    let CharactersTyped = 0;
    let Typos = 0;
    let TotalCharactersTyped = 0;

    const Easy = ["cat", "dog", "apple", "house", "water", "book", "tree", "car", "phone", "school", "friend", "happy", "green", "blue", "light", "music", "game", "food", "door", "window", "table", "chair", "paper", "pencil", "sun", "rain", "cloud", "fire", "shoe", "shirt", "hand", "head", "face", "walk", "run", "jump", "play", "work", "home", "room", "good", "bad", "fast", "slow", "big", "small", "hot", "cold", "day", "night"];
    const Medium = ["because", "another", "between", "different", "important", "question", "answer", "example", "problem", "together", "morning", "evening", "outside", "country", "people", "building", "weather", "message", "practice", "typing", "keyboard", "computer", "picture", "language", "sentence", "mistake", "correct", "forward", "without", "around", "enough", "through", "always", "usually", "sometimes", "already", "actually", "probably", "remember", "believe", "special", "interesting", "possible", "experience", "future", "present", "reason", "understand"];
    const Hard = ["understanding", "contradicting", "necessary", "separate", "definitely", "embarrassment", "accommodate", "occasionally", "recommendation", "environment", "conscious", "conscience", "rhythm", "queue", "bureaucracy", "entrepreneur", "miscellaneous", "maintenance", "privilege", "guarantee", "restaurant", "questionnaire", "pronunciation", "architecture", "psychology", "philosophy", "phenomenon", "particularly", "approximately", "responsibility", "communication", "transformation", "circumstance", "consequence", "infrastructure", "implementation", "authentication", "configuration", "optimization", "algorithm", "accessibility", "documentation", "functionality", "incomprehensible", "misunderstanding", "unfortunately", "characteristic", "significant", "determination", "extraordinary"];

    let WordsArray = Easy;
    easy.style.border = "2px solid black";

    let WordsList = [];

    function UpdateDisplay() {
        Words.textContent = WordsList.join("\u00A0");
    }

    let TimerStf = null;
    let TimerVal = 25;
    let StartTime = null;

    function calculateTypingMetrics(totalChars, correctChars, seconds) {
        if (seconds <= 0) {
            return {
                wpm: 0,
                accuracy: 0
            };
        }

        const minutes = seconds / 60;
        const wpm = (correctChars / 5) / minutes;
        const accuracy = totalChars > 0
            ? (correctChars / totalChars) * 100
            : 0;

        return {
            wpm: Number(wpm.toFixed(2)),
            accuracy: Number(accuracy.toFixed(2))
        };
    }

    function ShowScoreResultStf() {
        const elapsedSeconds = Math.min(
            25,
            (performance.now() - StartTime) / 1000
        );

        const metrics = calculateTypingMetrics(
            TotalCharactersTyped,
            CharactersTyped,
            elapsedSeconds
        );

        wpmVal.textContent = Math.floor(metrics.wpm);
        AccuracyVal.textContent = metrics.accuracy + "%";
        WordsTypedVal.textContent = WordsTyped;
        CahractersTypedVal.textContent = CharactersTyped;
        TyposVal.textContent = Typos;
        resultBox.style.visibility = "visible";
    }

    let doStf = false;

    function StartTimer() {
        if (doStf) {
            return;
        }

        doStf = true;
        StartTime = performance.now();

        clearInterval(TimerStf);

        TimerStf = setInterval(() => {
            TimerVal--;
            timeValue.textContent = TimerVal;

            if (TimerVal <= 0) {
                clearInterval(TimerStf);
                TimerStf = null;
                ShowScoreResultStf();
            }
        }, 1000);
    }

    function ResetStf() {
        doStf = false;
        clearInterval(TimerStf);

        TimerStf = null;
        TimerVal = 25;
        StartTime = null;

        WordsTyped = 0;
        CharactersTyped = 0;
        Typos = 0;
        TotalCharactersTyped = 0;

        WordsList = [];

        timeValue.textContent = TimerVal;
        resultBox.style.visibility = "hidden";
        showTypingLine.style.backgroundColor = "rgb(0, 0, 0)";

        CreateList(60);
        UpdateDisplay();
    }

    document.addEventListener("click", function (event) {
        let item = event.target;

        if (item === easy) {
            WordsArray = Easy;
            easy.style.border = "2px solid black";
            medium.style.border = "none";
            hard.style.border = "none";
        } else if (item === medium) {
            WordsArray = Medium;
            easy.style.border = "none";
            medium.style.border = "2px solid black";
            hard.style.border = "none";
        } else if (item === hard) {
            WordsArray = Hard;
            easy.style.border = "none";
            medium.style.border = "none";
            hard.style.border = "2px solid black";
        } else {
            return;
        }

        ResetStf();
    });

    function CreateList(amount) {
        for (let i = 0; i < amount; i++) {
            const randomIndex = Math.floor(Math.random() * WordsArray.length);
            const randomWord = WordsArray[randomIndex];
            WordsList.push(randomWord);
        }
    }

    CreateList(60);
    UpdateDisplay();

    document.addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
            ResetStf();
            return;
        }

        StartTimer();

        if (TimerStf === null) {
            return;
        }

        const key = event.key;

        if (
            event.ctrlKey ||
            event.altKey ||
            event.metaKey ||
            event.key === "Shift"
        ) {
            return;
        }

        if (WordsList[0] === "") {
            if (key === " ") {
                WordsList.shift();
                WordsTyped++;
                CharactersTyped++;
                TotalCharactersTyped++;
                CreateList(1);
                showTypingLine.style.backgroundColor = "rgb(0, 0, 0)";
            } else {
                TotalCharactersTyped++;
                Typos++;
                showTypingLine.style.backgroundColor = "rgb(225, 0, 0)";
            }

            UpdateDisplay();
            return;
        }

        TotalCharactersTyped++;

        if (key === WordsList[0][0]) {
            WordsList[0] = WordsList[0].substring(1);
            CharactersTyped++;
            showTypingLine.style.backgroundColor = "rgb(0, 0, 0)";
        } else {
            Typos++;
            showTypingLine.style.backgroundColor = "rgb(225, 0, 0)";
        }

        UpdateDisplay();
    });
});