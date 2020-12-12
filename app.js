$(() => {
  const computer = {
    computerPick: null,
  };
  const $body = $('body');
  const defensivePlays = [ 50, 60, 70, 80];
  
  const youWin = () => {
    $body.empty();
    const gameOverScreen = $('<h1>').addClass("game-over").text("YOU WIN.").appendTo($body);
    window().reload();
  }
  const youLose = () => {
        $body.empty();
        const gameOverScreen = $('<h1>').addClass("game-over").text("Intercepted...You Lose.").appendTo($body);
        window().reload()
  }
  // Generate random computer value
  const computerPlay = () => {
    const randomIndex = Math.floor(Math.random() * defensivePlays.length);
    computer.currentPick = defensivePlays[randomIndex];
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
        this.yardsGained += this.yardsToGo;
        this.yardsToGo = 0; 
        youWin();  
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
        openModal();
        $("#modal-textbox").empty();
        $("#modal-textbox").text("You gained 20 yards");

        } else  {
        openModal();
        $("#modal-textbox").empty();
        $("#modal-textbox").text("FUMBLE!! The other team recovered the ball. GAME OVER!");
        youLose();
      }
    }
    
    throwShort() {
      computerPlay();
      if (this.shortAccuracy >= computer.currentPick) {
        this.moveTheChains(25);
        openModal();
        $("#modal-textbox").empty();
        $("#modal-textbox").text("Pass complete. Nice Pass! You gained 25 yards");
        } else {
        openModal();
        $("#modal-textbox").empty();
        $("#modal-textbox").text("INTERCEPTION! Game Over!");
        youLose();
        
        // Reset the screen - Do you want to play again?
      }
    }

    throwDeep() {
      // Generate random computer value
      computerPlay();
      if (this.longAccuracy >= computer.currentPick) {
          openModal();
        $("#modal-textbox").empty();
        $("#modal-textbox").addClass("gameplay").text("Pass complete. Absolute BOMB! You gained 35 yards");
          this.moveTheChains(35);
      } else {
        openModal();
        $("#modal-textbox").empty();
        $("#modal-textbox").text("INTERCEPTION! Game Over!");
        youLose();
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
      .text("RUN THE BALL")
      .attr("id", "run")
      .addClass("button");
    $("form").append($runButton);

    const $shortButton = $("<button>")
      .text("THROW IT SHORT")
      .attr("id", "short")
      .addClass("button");
    $("form").append($shortButton);

    const $longButton = $("<button>")
      .text("THROW IT DEEP")
      .attr("id", "deep")
      .addClass("button");
    $("form").append($longButton);

    $("#run").on("click", () => {
        runBall();
        setTimeout(closeModal, 2000);
      });
    
      $("#short").on("click", () => {
        throwShort();
        setTimeout(closeModal, 2000);
      });
    
      $("#deep").on("click", () => {
        throwDeep();
        setTimeout(closeModal, 2000);
      });
    
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


  const player = new Human(80, 70, 60, 0, 80);
  
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
