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

    var Words = ["cat"];

    var CurrentLettersFound = [];
    var AlreadyChosenLetters = [];
    var CurrentLettersTrueFalse = [];
    var AlrChosenLettersTrueFalse = [];
    var ActualyLetterCheck = [];
    var word = null;
    var ActualLetterDivsFound = [];

    var ChosenKeepTrack = 0;
    var CurrentKeepTrack = 0;


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
        word = RandomWord;
        let wordLength = RandomWord.length;
        for (let i = 0; i < wordLength; i++){
            let NewDiv = document.createElement("div");
            NewDiv.classList.add("LPslot");
            letterPlacementsCont.appendChild(NewDiv);
            CurrentLettersFound.push(NewDiv);
            CurrentLettersTrueFalse.push(false);
            ActualyLetterCheck.push(false);
            
        };
        for (let i = 0; i <18; i++) {
            let thingy = document.createElement("div");
            thingy.classList.add("ACslot")
            alreadyChosenCont.appendChild(thingy);
            AlreadyChosenLetters.push(thingy);
            AlrChosenLettersTrueFalse.push(false)
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
    SlotToTarget = CurrentLettersFound[0];
    SlotToTarget.appendChild(currentTyping);

    var SlotToTarget = CurrentLettersFound[0];
    let ThingyToTarget = AlreadyChosenLetters[0];

    //-------------------------------------------------
    // Maybe My brain Wont Break as Much Doing this part
    //-------------------------------------------------

    function ResetGuessingLetter(){
        while (CurrentLettersFound.length > 0) {
            CurrentLettersFound[0].remove();
            CurrentLettersFound.splice(0,1);
            ActualLetterDivsFound.splice(0,1);
        }

        for (let i = 0; i<CurrentLettersTrueFalse.length; i++){
            CurrentLettersTrueFalse[i] = false;
        }
        
        for (let i = 0; i < word.length; i++){
            let NewDiv = document.createElement("div");
            NewDiv.classList.add("LPslot");
            letterPlacementsCont.appendChild(NewDiv);
            CurrentLettersFound.push(NewDiv);
            if (ActualyLetterCheck[i] !== false){
                let newH1 = document.createElement("h1");
                NewDiv.appendChild(newH1);
                newH1.textContent = ActualyLetterCheck[i];
                newH1.classList.add("text")
                CurrentLettersTrueFalse[i] = true;
                ActualLetterDivsFound.push(NewDiv);
            }
        };

        CurrentKeepTrack = 0;
        while (CurrentLettersTrueFalse[CurrentKeepTrack] !== false){
            CurrentKeepTrack++;
            SlotToTarget = CurrentLettersFound[CurrentKeepTrack];
            SlotToTarget.appendChild(currentTyping);
        }                    
        SlotToTarget = CurrentLettersFound[CurrentKeepTrack];
        SlotToTarget.appendChild(currentTyping);
        
    }

    function GuessedLetter(Guess){
        for (let i = 0; i <word.length; i++){
            if (word[i] === Guess){
                ActualyLetterCheck[i] = word[i];
                ResetGuessingLetter();
            }
        }
    }

    function GuessedWord(guess){
        ResetGuessingLetter();
    }



    //-------------------------------------------------
    // Maybe My brain Wont Break as Much Doing this part
    //-------------------------------------------------
    

    document.addEventListener("click", function(event){
        if (event.target == letterPlacementsCont){
            SlotToTarget = CurrentLettersFound[CurrentKeepTrack];
            SlotToTarget.appendChild(currentTyping);
            theOneTyping = false;
        }
        else if (event.target == alreadyChosen) {
            ThingyToTarget = AlreadyChosenLetters[ChosenKeepTrack];
            ThingyToTarget.appendChild(currentTyping);
            theOneTyping = true;
        };
    });

    var LastKey = null;
    document.addEventListener("keydown", function(event){
        let key = event.key;
        if (theOneTyping === false) {
            if (key === "Enter"){
                let Count = 0;
                let word = "";
                for (let i = 0; i < CurrentLettersTrueFalse.length; i++){
                    if (CurrentLettersTrueFalse[i] === true){
                        let h1 = CurrentLettersFound[i].querySelector("h1");
                        word += h1.textContent;
                        Count++;
                    }
                }

                if (Count === CurrentLettersTrueFalse.length){
                    
                    for (let i = 0; i<CurrentLettersFound.length; i++){
                        let h1 = CurrentLettersFound[i].querySelector("h1");
                        h1.remove();
                        CurrentKeepTrack = 0;
                        SlotToTarget = CurrentLettersFound[CurrentKeepTrack];
                        SlotToTarget.appendChild(currentTyping);
                        for (let i = 0; i<CurrentLettersTrueFalse.length;i++){
                            CurrentLettersTrueFalse[i] = false;
                        };
                    };
                    GuessedWord(word);
                };
            };

            if (key === "Backspace"){
                let BackSLot = CurrentLettersFound[CurrentKeepTrack - 1];
                let ImaBeHonestIdkWhatToCallThisVariable = false;
                if (CurrentLettersTrueFalse[CurrentLettersTrueFalse.length - 1] === true){
                    BackSLot = CurrentLettersFound[CurrentLettersFound.length - 1];
                    CurrentLettersTrueFalse[CurrentLettersTrueFalse.length -1] = false;
                    ImaBeHonestIdkWhatToCallThisVariable = true;
                }
                else {
                    CurrentLettersTrueFalse[CurrentKeepTrack - 1] = false;
                    if (CurrentKeepTrack !== 0){
                        CurrentKeepTrack--;
                        while (CurrentLettersTrueFalse[CurrentKeepTrack] !== false){
                            CurrentKeepTrack--;
                            SlotToTarget = CurrentLettersFound[CurrentKeepTrack];
                            SlotToTarget.appendChild(currentTyping);
                        } 
                    };
                };

                //---------------------------
                //This is the most headache endusing thing ever
                //---------------------------
                if (BackSLot === ActualLetterDivsFound[CurrentKeepTrack]){
                    alert('help') 
                }
                else {
                    if (BackSLot === ActualLetterDivsFound[CurrentKeepTrack - 1]){
                        alert('help')
                    }
                }
                //---------------------------
                //This is the most headache endusing thing ever
                //---------------------------
                
                let text = BackSLot.querySelector("h1");
                text.remove();
                SlotToTarget = CurrentLettersFound[CurrentKeepTrack];
                SlotToTarget.appendChild(currentTyping);
            }

            if (CurrentLettersTrueFalse[CurrentKeepTrack] === false) {
                const isLetter = /^[a-zA-Z]$/.test(event.key);
                if (!isLetter){
                    return;
                }
                let Text = document.createElement("h1");
                Text.textContent = key;
                Text.classList.add("text");
                SlotToTarget.appendChild(Text);
                CurrentLettersTrueFalse[CurrentKeepTrack] = true;

                SlotToTarget = CurrentLettersFound[CurrentKeepTrack];
                SlotToTarget.appendChild(currentTyping);
                if (CurrentKeepTrack !== CurrentLettersFound.length - 1) {
                    while (CurrentLettersTrueFalse[CurrentKeepTrack] !== false){
                        CurrentKeepTrack++;
                        SlotToTarget = CurrentLettersFound[CurrentKeepTrack];
                        SlotToTarget.appendChild(currentTyping);
                    } 
                }
            }
        }

        // there is so much stf happening my brain hurts frfr

        else if (theOneTyping === true) {
            if (AlrChosenLettersTrueFalse[ChosenKeepTrack] === false) {
                const isLetter = /^[a-zA-Z]$/.test(event.key);
                if (!isLetter){
                    return;
                };
                LastKey = key;
                let Text = document.createElement("h1");
                Text.textContent = key;
                Text.classList.add("text2");
                ThingyToTarget.appendChild(Text);
                AlrChosenLettersTrueFalse[ChosenKeepTrack] = true;
            }
            else if (key === "Backspace"){
                let h1 = ThingyToTarget.querySelector("h1");
                h1.remove();
                AlrChosenLettersTrueFalse[ChosenKeepTrack] = false;

            }
            else if (key === "Enter"){
                ChosenKeepTrack++;
                ThingyToTarget = AlreadyChosenLetters[ChosenKeepTrack];
                ThingyToTarget.appendChild(currentTyping);
                theOneTyping = true;

                GuessedLetter(LastKey);
            };

        };
    });
    
});