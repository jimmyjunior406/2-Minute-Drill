$(()=>{

    class Human {
      constructor (runStrength, shortAccuracy, longAccuracy) {
        this.runStrength = runStrength,
        this.shortAccuracy = shortAccuracy,
        this.longAccuracy = longAccuracy
      }
    
      runTheBall() {
        if (this.runStrength >= computer.currentPick) {
          yards += 20;
        } else {
          alert ("Fumble. Game over!");
        }
      }
    
      throwShort() {
        if (this.shortAccuracy >= computer.currentPick) {
          yards += 25;
        }else {
          alert ("Interception. Game over!");
        }
      }
    
      throwDeep(){
        if (this.longAccuracy >= computer.currentPick){
          yards += 35;
        } else {
          alert ("Interception. Game over!");
        }
      }
    }
    
    const player = new Human (60, 55, 40);
    
    const computer = {
      computerPick: null
    }
    
    const defensivePlays = [45, 50, 35];
    
    computerPlay = () => {
      const randomIndex = Math.floor(Math.random() * defensivePlays.length);
      computer.currentPick = defensivePlays[randomIndex];
    }
    
    const $playGame = (event) => {
       event.preventDefault();
       $('#play').remove();
       $("#open-modal").remove();
       $('#title').remove();
       $('#subtitle').remove();
    
       const $runButton = $('<button>').text("Run the Ball").attr('id', 'run').addClass('button');
        $('form').append($runButton);
    
        const $shortButton = $('<button>').text("Throw it Short").attr('id', 'short').addClass('button');
        $('form').append($shortButton)
    
        const $longButton = $('<button>').text("Throw it Deep").attr('id', 'deep').addClass('button');
        $('form').append($longButton)
    }
    
    
    
    
    
    
    
    const $openButton = $('#open-modal');
    const $modal = $('#modal');
    const $closeButton = $('#close-modal');
    
    const openModal = (event) => {
        $modal.css("display", "flex");
      }
    const closeModal = (event) => {
        $modal.css("display", "none");
      }
    
    $openButton.on('click', openModal);
    $closeButton.on('click', closeModal);
        
        
    
    $('#play').on('click', $playGame);
    // $('#run').on('click', runBall());
    // $('#short').on('click', throwShort());
    // $('#deep').on('click', throwDeep());
        
    });