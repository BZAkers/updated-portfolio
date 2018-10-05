document.addEventListener("DOMContentLoaded", function () {

    var goal = 0;
    var score = 0;

    var wins = 0;
    var loss = 0;

    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;

    // This function generates the goal number. //
    function generateGoal() {
        goal = Math.floor(Math.random() * 121);
        if (goal < 19) {
            console.log("Goal generated the number " + goal + ", regenerating for number over 18");
            generateGoal();
        } else {
            console.log("Goal number is " + goal + ".");
        }
    }

    // This function generates the values for the four crystals //
    function generateCrystals() {
        crystalOne = Math.floor(Math.random() * 12 + 1);
        console.log(crystalOne)

        crystalTwo = Math.floor(Math.random() * 12 + 1);
        console.log(crystalTwo)

        crystalThree = Math.floor(Math.random() * 12 + 1);
        console.log(crystalThree)

        crystalFour = Math.floor(Math.random() * 12 + 1);
        console.log(crystalFour)

        // Checking to make sure all crystals have different values and regenerating until they do. //
        if ((crystalOne == crystalTwo) || (crystalOne == crystalThree) || (crystalOne == crystalFour)) {
            console.log("Crystals must have different values, regenerating.");
            generateCrystals()
        } else if ((crystalTwo == crystalThree) || (crystalTwo == crystalFour)) {
            console.log("Crystals must have different values, regenerating.");
            generateCrystals()
        } else if ((crystalThree == crystalFour)) {
            console.log("Crystals must have different values, regenerating.");
            generateCrystals()
        } else {
            console.log("Crystal values created successfully");
        }
    }

    generateGoal();
    generateCrystals();

    document.getElementById("goal-number").innerHTML = "Random Number: " + goal;

    document.getElementById("crystal-one").addEventListener("click", clickedOne);
    document.getElementById("crystal-two").addEventListener("click", clickedTwo);
    document.getElementById("crystal-three").addEventListener("click", clickedThree);
    document.getElementById("crystal-four").addEventListener("click", clickedFour);

    // Click functions. //

    function clickedOne() {
        score += crystalOne;
        document.getElementById("player-score").innerHTML = "Your Score: " + score;
        if (score > goal) {
            addLoss();
        } else if (score == goal) {
            addWin();
        }
    }

    function clickedTwo() {
        score += crystalTwo;
        document.getElementById("player-score").innerHTML = "Your Score: " + score;
        if (score > goal) {
            addLoss();
        } else if (score == goal) {
            addWin();
        }
    }

    function clickedThree() {
        score += crystalThree;
        document.getElementById("player-score").innerHTML = "Your Score: " + score;
        if (score > goal) {
            addLoss();
        } else if (score == goal) {
            addWin();
        }
    }

    function clickedFour() {
        score += crystalFour;
        document.getElementById("player-score").innerHTML = "Your Score: " + score;
        if (score > goal) {
            addLoss();
        } else if (score == goal) {
            addWin();
        }
    }

    // Win, Loss, and Reset. //

    function addLoss() {
        console.log("Player lost, running lose function.")

        goal = 0;
        score = 0;
        document.getElementById("player-score").innerHTML = "Your Score: " + score;

        loss += 1;
        document.getElementById("lose").innerHTML = "Losses: " + loss;

        crystalOne = 0;
        crystalTwo = 0;
        crystalThree = 0;
        crystalFour = 0;

        generateGoal();
        document.getElementById("goal-number").innerHTML = "Random Number: " + goal;
        generateCrystals();
    }

    function addWin() {
        console.log("Player won, running win function.")

        goal = 0;
        score = 0;
        document.getElementById("player-score").innerHTML = "Your Score: " + score;

        wins += 1;
        document.getElementById("win").innerHTML = "Wins: " + wins;

        crystalOne = 0;
        crystalTwo = 0;
        crystalThree = 0;
        crystalFour = 0;

        generateGoal();
        document.getElementById("goal-number").innerHTML = "Random Number: " + goal;
        generateCrystals();
    }

});