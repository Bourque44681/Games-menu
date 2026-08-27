document.addEventListener("DOMContentLoaded", function(){
    const rockLink = "https://static.vecteezy.com/system/resources/previews/023/289/772/original/a-lifelike-rock-formation-inspired-by-nature-set-against-a-transparent-background-generative-ai-png.png";
    const paperLink = "https://static.vecteezy.com/system/resources/previews/018/742/946/original/white-ripped-piece-of-paper-isolated-on-transparent-background-file-png.png";
    const scissorsLink = "https://pngimg.com/d/scissors_PNG28.png";

    const showCase1 = document.getElementById("showCase1");
    const showCase2 = document.getElementById("showCase2");
    const chooseMenu = document.getElementById("chooseMenu");
    const rock = document.getElementById("rock")
    const paper = document.getElementById("paper")
    const sis = document.getElementById("sis")

    const GameOn = false;

    function ShowCase(link) {
        showCase1.src = link
    }


    document.addEventListener("click", function(element){
        const target = element.target
        
        if (target) {
            if (target == rock) {
                ShowCase(rockLink)
            }
        }
    })

})