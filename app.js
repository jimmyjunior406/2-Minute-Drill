$(() => {
  const computer = {
    computerPick: null,
  };

  const defensivePlays = [45, 50, 35];

  // Generate random computer value
  const computerPlay = () => {
    const randomIndex = Math.floor(Math.random() * defensivePlays.length);
    computer.currentPick = 20;//defensivePlays[randomIndex];
  };

  class Human {
    constructor(runStrength, shortAccuracy, longAccuracy, yardsGained, yardsToGo) {
      (this.runStrength = runStrength),
        (this.shortAccuracy = shortAccuracy),
        (this.longAccuracy = longAccuracy),
        (this.yardsGained = yardsGained),
        (this.yardsToGo = yardsToGo);
    }

    moveTheChains(yardsMoved) {
      if (this.yardsToGo <= yardsMoved) {
        //increment, decerement, end game
        this.yardsGained += this.yardsToGo;
        this.yardsToGo = 0;
        alert("You won the game!");
        // TODO End the game
      } else {
        this.yardsGained += yardsMoved;
        this.yardsToGo -= yardsMoved;
      }
    }

    runTheBall() {
      // Generate random computer value
      computerPlay();
      if (this.runStrength >= computer.currentPick) {
        this.moveTheChains(20);
        alert("run the ball");
      } else {
        alert("Fumble. Game over!");
        // Reset the screen - Do you want to play again?
      }
    }

    throwShort() {
      // Generate random computer value
      computerPlay();
      if (this.shortAccuracy >= computer.currentPick) {
        this.moveTheChains(25);
        alert("throw short");
      } else {
        alert("Interception. Game over!");
        // Reset the screen - Do you want to play again?
      }
    }

    throwDeep() {
      // Generate random computer value
      computerPlay();
      if (this.longAccuracy >= computer.currentPick) {
        this.moveTheChains(35);
        alert("Long pass");
      } else {
        alert("Interception. Game over!");
        // Reset the screen - Do you want to play again?
      }
    }
  }

  const $playGame = (event) => {
    event.preventDefault();

    
    
    $("#play").remove();
    $("#open-modal").remove();
    $("#title").remove();
    $("#subtitle").remove();

    const $runButton = $("<button>")
      .text("Run the Ball")
      .attr("id", "run")
      .addClass("button");
    $("form").append($runButton);

    const $shortButton = $("<button>")
      .text("Throw it Short")
      .attr("id", "short")
      .addClass("button");
    $("form").append($shortButton);

    const $longButton = $("<button>")
      .text("Throw it Deep")
      .attr("id", "deep")
      .addClass("button");
    $("form").append($longButton);

  $("#run").on("click", runBall);
  $("#short").on("click", throwShort);
  $("#deep").on("click", throwDeep);
  };

  const $openButton = $("#open-modal");
  const $modal = $("#modal");
  const $closeButton = $("#close-modal");

  const openModal = (event) => {
    $modal.css("display", "flex");
  };
  const closeModal = (event) => {
    $modal.css("display", "none");
  };

  const player = new Human(60, 55, 40, 0, 80);

  const runBall = () => {
    player.runTheBall();
  };
  const throwShort = () => {
    player.throwShort();
  };
  const throwDeep = () => {
    player.throwDeep();
  };

  $openButton.on("click", openModal);
  $closeButton.on("click", closeModal);

  $("#play").on("click", $playGame);
  
});
