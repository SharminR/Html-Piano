
  function playAccidentalNote(){

    console.log("Accidental note should be playing now.");
    var note = this.classList[1];

    console.log(note);
    const audio = document.getElementById("sound-"+note);

    audio.currentTime = 0;
    audio.play();

    if(note === "A2") note = "A";
    if(note === "B2") note = "B";
    document.getElementById("current_note").innerHTML = note;

    this.classList.add('playing');
    var playingKey = this;
    setTimeout(function(){playingKey.classList.remove('playing')}, 500);  
  }




  function playNaturalNote(){
	  console.log("Natural note should be playing now.");
    var note = this.classList[1]; //Each div class piano keys has two classes: white or black (saved in classList[0]),
                                  //and the key's note (saved in classList[1]. This will look at the second class at [1].
    console.log(note);
    const audio = document.getElementById("sound-"+note);

    /*If you try to call an audio element that is already playing, it won't do anything.
    Therefore here we rewind the audio element to the start.*/
    audio.currentTime = 0;
    audio.play();

    if(note === "A2") note = "A";
    if(note === "B2") note = "B";
    document.getElementById("current_note").innerHTML = note;

    /*Animations for when a piano key is pressed. Will change the corresponding piano key's css class to .playing
    After 0.5 seconds, this class is removed and piano key returns to normal position*/
    this.classList.add('playing');
    var playingKey = this;
    setTimeout(function(){playingKey.classList.remove('playing')}, 500);

  }

  //Gets all the white key elements (as an array) from the document and adds event listeners to them
  var whitekeys = document.getElementsByClassName("piano-white");
  for (var i = 0; i < whitekeys.length; i++) {
      whitekeys[i].addEventListener('click', playNaturalNote, false);
  }

  var blackkeys = document.getElementsByClassName("piano-black-raised"); //Same for black keys
  for (var i = 0; i < blackkeys.length; i++) {
      blackkeys[i].addEventListener('click', playAccidentalNote, false);
  }
