document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
    const area = document.getElementById("gameSpot");
    const scoreValue = document.getElementById("scoreValue");
    const MissValue = document.getElementById("clickMIssValue");
    let score = 0;
    let miss = 0;
    MissValue.textContent = miss;
    scoreValue.textContent = score;
    
    function MoveBox() {
        const areaWidth = area.clientWidth;
        const areaHeight = area.clientHeight;
        const boxHeight = box.offsetHeight;
        const boxWidth = box.offsetWidth;
        const randomX = Math.floor(Math.random() * (areaWidth - boxWidth));
        const randomY = Math.floor(Math.random() * (areaHeight - boxHeight));
        box.style.left = `${randomX}px`;
        box.style.top = `${randomY}px`;
    }

    document.addEventListener("click", function(event){
        const target = event.target;

        if (target == box) {
            score++;
            scoreValue.textContent = score;
            MoveBox();
        }
        else{
            miss++;
            MissValue.textContent = miss;
        }
    })
    
});