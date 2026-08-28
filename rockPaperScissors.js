document.addEventListener("DOMContentLoaded", function(){
    const rockLink = "https://static.vecteezy.com/system/resources/previews/023/289/772/original/a-lifelike-rock-formation-inspired-by-nature-set-against-a-transparent-background-generative-ai-png.png";
    const paperLink = "https://static.vecteezy.com/system/resources/previews/018/742/946/original/white-ripped-piece-of-paper-isolated-on-transparent-background-file-png.png";
    const scissorsLink = "https://static.vecteezy.com/system/resources/previews/053/756/277/large_2x/realistic-red-handled-scissor-on-transparent-background-free-png.png";

    const showCase1 = document.getElementById("showCase1");
    const showCase2 = document.getElementById("showCase2");
    const chooseMenu = document.getElementById("chooseMenu");
    const rock = document.getElementById("rock")
    const paper = document.getElementById("paper")
    const sis = document.getElementById("sis")
    const youScoreValue = document.getElementById("youScoreValue")
    const computerScoreValue = document.getElementById("computerScoreValue")
    let youValue = 0
    let computerValue = 0

    const winCheck = {1:3, 2:1, 3: 2}

    youScoreValue.textContent = youValue
    computerScoreValue.textContent = computerValue

    let GameOn = false;
    function ResetStuffFr() {
        chooseMenu.style.opacity = 1
        showCase1.style.opacity = 0
        showCase2.style.opacity = 0
        setTimeout(function(){
            showCase1.src = ""
            showCase2.src = ""
            GameOn = false
        },300)
        

    }

    function ShowCase(link, choice) {
        const num = Math.floor((Math.random() * 3) + 1)
        let link2 = null;
        let choice2 = null;
        if (num == 1) {
            link2 = rockLink
            choice2 = 1
        }
        else if (num == 2) {
            link2 = paperLink
            chocie2 = 2
        }
        else {
            link2 = scissorsLink
            choice2 = 3
        }
        showCase1.src = link
        showCase2.src = link2
        showCase1.style.opacity = 1
        showCase2.style.opacity = 1
        chooseMenu.style.opacity = 0
        // Check who won
        if (choice == choice2) {

        }
        else if (winCheck[choice] == choice2) {
            youValue ++
        }

        else {
            computerValue ++
        }

        youScoreValue.textContent = youValue
        computerScoreValue.textContent = computerValue
        setTimeout(function() {
            ResetStuffFr()
        }, 2000);
    }

    document.addEventListener("click", function(element){
        if (GameOn) {return}
        GameOn = true
        const target = element.target
        
        if (target) {
            if (target == rock) {
                ShowCase(rockLink, 1)
            }
            else if (target == paper) {
                ShowCase(paperLink, 2)
            }
            else {
                ShowCase(scissorsLink, 3)
            }
        }
    })

})