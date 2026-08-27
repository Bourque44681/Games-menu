document.addEventListener("DOMContentLoaded", function(){
    const rockLink = "https://static.vecteezy.com/system/resources/previews/023/289/772/original/a-lifelike-rock-formation-inspired-by-nature-set-against-a-transparent-background-generative-ai-png.png";
    const paperLink = "https://static.vecteezy.com/system/resources/previews/018/742/946/original/white-ripped-piece-of-paper-isolated-on-transparent-background-file-png.png";
    const scissorsLink = "https://static.vecteezy.com/system/resources/previews/048/059/122/large_2x/red-handled-scissors-isolated-on-transparent-background-free-png.png";

    const showCase1 = document.getElementById("showCase1");
    const showCase2 = document.getElementById("showCase2");
    const chooseMenu = document.getElementById("chooseMenu");
    const rock = document.getElementById("rock")
    const paper = document.getElementById("paper")
    const sis = document.getElementById("sis")

    const GameOn = false;

    function ShowCase(link) {
        const num = Math.floor((Math.random() * 3) + 1)
        const link2 = null;
        if (num == 1) {
            link2 = rockLink
        }
        else if (num == 2) {
            link2 = paperLink
        }
        else {
            link2 = scissorsLink
        }
        showCase1.src = link
        showCase2.src = link2
        chooseMenu.style.visibility = "hidden"

    }

    document.addEventListener("click", function(element){
        const target = element.target
        
        if (target) {
            if (target == rock) {
                ShowCase(rockLink)
            }
            else if (target == paper) {
                ShowCase(paperLink)
            }
            else {
                ShowCase(scissorsLink)
            }
        }
    })

})