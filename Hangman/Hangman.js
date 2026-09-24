document.addEventListener("DOMContentLoaded", function(){
    const letterPlacementsCont = document.getElementById("letterPlacements");
    const head = document.getElementById("head");
    const torso = document.getElementById("torso");
    const armR = document.getElementById("armR");
    const armL = document.getElementById("armL");
    const legR = document.getElementById("legR");
    const legL = document.getElementById("legL");

    const currentTyping = document.getElementById("CurrentTyping")

    const alreadyChosenCont = document.getElementById("alrCont");
    const alreadyChosen = document.getElementById("alreadyChosen")

    var Words = ["cat", "dog", "airplane", "tower", "computer"];

    var CurrentLettersFound = [];
    var AlreadyChosenLetters = [];

    let theOneTyping = false;

    function ResetStf(){
        head.style.visibility = "hidden";
        torso.style.visibility = "hidden";
        armR.style.visibility = "hidden";
        armL.style.visibility = "hidden";
        legR.style.visibility = "hidden";
        legL.style.visibility = "hidden";
    }

    function SetUpDoc(){
        let RandomWord = Words[Math.floor(Math.random() * Words.length)];
        let wordLength = RandomWord.length;
        for (let i = 0; i < wordLength; i++){
            let NewDiv = document.createElement("div");
            NewDiv.classList.add("LPslot");
            letterPlacementsCont.appendChild(NewDiv);
            CurrentLettersFound.push(NewDiv);
            
        };
        for (let i = 0; i <18; i++) {
            let thingy = document.createElement("div");
            thingy.classList.add("ACslot")
            alreadyChosenCont.appendChild(thingy);
            AlreadyChosenLetters.push(thingy);
        };
    };


    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    async function runForever() {
        while (true) {
            if (currentTyping.style.opacity === "1") {
                currentTyping.style.opacity = ".2";
            }
            else {
                currentTyping.style.opacity = "1";
            };
            await sleep(600);
        }
    }

    SetUpDoc();
    ResetStf();
    runForever();
    var SlotToTarget = CurrentLettersFound[0];
    let ThingyToTarget = AlreadyChosenLetters[0];

    document.addEventListener("click", function(event){
        if (event.target == letterPlacementsCont){
            SlotToTarget = CurrentLettersFound[0];
            SlotToTarget.appendChild(currentTyping);
            theOneTyping = false;
        }
        else if (event.target == alreadyChosen) {
            ThingyToTarget = AlreadyChosenLetters[0];
            ThingyToTarget.appendChild(currentTyping);
            theOneTyping = true;
        };
    });

    document.addEventListener("keydown", function(event){
        let key = event.key;
        if (theOneTyping === false) {
            let Text = document.createElement("h1");
            Text.textContent = key;
            Text.classList.add("text")
            SlotToTarget.appendChild(Text);
        }
    });
    
});