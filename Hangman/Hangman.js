document.addEventListener("DOMContentLoaded", function(){
    const letterPlacementsCont = document.getElementById("letterPlacements");
    const head = document.getElementById("head");
    const torso = document.getElementById("torso");
    const armR = document.getElementById("armR");
    const armL = document.getElementById("armL");
    const legR = document.getElementById("legR");
    const legL = document.getElementById("legL");

    const alreadyChosenCont = document.getElementById("alrCont");

    var Words = ["cat", "dog", "airplane", "understand", "tower", "computer"];


    function SetUpDoc(){
        let RandomWord = Words[Math.floor(Math.random() * Words.length)];
        let wordLength = RandomWord.length;
        for (let i = 0; i < wordLength; i++){
            let NewDiv = document.createElement("div");
            NewDiv.classList.add("LPslot");
            letterPlacementsCont.appendChild(NewDiv);
        }
    };

    SetUpDoc();
});