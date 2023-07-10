let counter=0;

storyContent = [
  {
    text:"You see yourself in a dark room what do you do?",
    choices: [
      { choice: "Search", index: 14 },
      { choice: "Leave", index: 1 },
    ]
  },
  {
    text: "You decide to find a door and leave the room and suddenly you hear a sound from behind you.",
    choices: [
      { choice: "Hide", index: 2 },
      { choice: "Run", index: 10 },
      { choice: "Stand your ground.", index: 11 },
    ]
  },
  {
    text: "You decide to Hide from the sound.",
    choices: [
      { choice: "Secret Door", index: 3 },
    ]
  },
  {
    text: "You find a staircase that goes deeper into the labyrinth. And as you go deeper you see Cult members.",
    choices: [
      { choice: "Run", index: 4 },
      { choice: "Confront The Cult Members", index: 5 }
    ]
  },
  {
    text: "You decide that running is the best option and the cult members notice you, They hunt you down an you were never seen again.",
    choices: [
      { choice: "Sad times", index: 9 },
    ]
  },
  {
    text: "You decide to confront the Cult members.",
    choices: [
      { choice: "SUPLEX", index: 6 },
    ]
  },
  {
    text: "You take down the guards and find the Cult leader, You suplex him and take him out.",
    choices: [
      { choice: "WWE Champion Belt", index: 7 },

    ]
  },
  {
    text: "You take your belt and wear it with pride, the fans cheer you on as the King Of The Ring!",
    choices: [
      { choice: "Freedom?", index: 8 },
      { choice: "Dave...", index: 9 }
    ]
  },
  {
    text: "You have achieved this feeling of bliss, you dont know how you got it but here you are in this magic wonderland...",
    choices: [
      { choice: "The End...", index: 21 },
    ]
  },
  {
    text: "Dave is an enigmatic figure, shrouded in an air of mystery that intrigues all who encounter him. There is a captivating aura surrounding him, as if he carries a multitude of untold stories and hidden depths within his being. His quiet demeanor and thoughtful introspection only add to the sense of intrigue that surrounds him. One cannot help but wonder about the experiences and adventures that have shaped Daves life. Behind his calm exterior lies a rich tapestry of memories, secrets, and knowledge, carefully guarded and selectively shared. It is as if he holds the keys to a treasure trove of wisdom, waiting for the right moment to unveil his profound insights and revelations. Daves mysterious nature extends to his interests and passions. He often immerses himself in eclectic pursuits that defy easy categorization. From obscure literary works to esoteric art forms, he embraces the unconventional and the lesser-known, always seeking to uncover hidden gems that lie beyond the mainstream. His unconventional tastes and unique perspectives make him a captivating companion for those who are fortunate enough to delve into the realms of his interests. Despite the air of mystery that surrounds him, Dave possesses an innate magnetism that draws people towards him. There is an undeniable allure in his presence, a combination of his quiet confidence, intriguing persona, and the unspoken promise of profound conversations and unexpected discoveries. People are naturally drawn to unravel the layers of his mystery, hoping to catch a glimpse of the extraordinary world that lies beneath. Daves mysterious nature also fuels speculation and curiosity among those who encounter him. Speculations abound about his past, his motivations, and the hidden meanings behind his actions. Some may interpret his enigmatic persona as a shield, protecting him from the vulnerabilities of the world. Others may view it as a deliberate choice to keep the intricacies of his inner self hidden from prying eyes. Whatever the reason, Daves mystery adds an element of fascination to his character, leaving an indelible impression on all who cross his path. In the end, Dave remains an enigma, a captivating presence whose true nature may forever elude complete understanding. And perhaps that is part of his allure to be a perpetual source of curiosity and fascination, leaving a lasting impression on those who encounter the enigmatic man named Dave.?",
    choices: [
    { choice: "...What???", index: 21 },
    ]
  },
  {
    text: "You decide to run and you keep running and the hallway never ends... eventually it catches up to you.",
    choices: [
      { choice: "Sad Times", index: 21 },
    ]
  },
  {
    text: "You decide to stand your ground and you hear the snarls of a vicious beast coming for you!",
    choices: [
      { choice: "Mama didnt raise no coward!", index: 12 },
      { choice: "Run", index: 13 }
    ]
  },
  {
    text: "You Stand your ground and a small little dog comes up to you and asks for pets. After this he brings you to an exit and you leave.",
    choices: [
      { choice: "How sweet", index: 21 },
    ]
  },
  {
    text: "You start to run and the beast runs faster, it was only a matter of time before it caught you...?",
    choices: [
      { choice: "Welp", index: 21 },
    ]
  },
  {
    text: "You decide to stay in the room and look around.",
    choices: [
      { choice: "Steal", index: 15 },
      { choice: "Fight", index: 16 },
      { choice: "Secret Door", index: 17 },
    ]
  },
  {
    text: "You think stealing is a good option right? So you go steal a brass latch you find ",
    choices: [
      { choice: "Fight", index: 16 },
      { choice: "Secret Door", index: 17 },
    ]
  },
  {
    text: "You decide to fight the lump.",
    choices: [
      { choice: "I didnt know it would fight back...", index: 21 },
    ]
  },
  {
    text: "You go through the secret door.",
    choices: [
      { choice: "Go back", index: 18 },
      { choice: "Left", index: 19 },
      { choice: "Right", index: 20 },
    ]
  },
  {
    text: "You go back.",
    choices: [
      { choice: "Secret Door", index: 17 },
    ],
  },

  {
    text: "You go left.",
    choices: [
      { choice: "Dave", index: 9 },
    ]
  },
  {
    text: "You go right and down the stairs.",
    choices: [
      { choice: "Run", index: 10},
      { choice: "Confront The Cult Members", index: 5},
    ]
  },
  {
    text: "This is the end!",
    choices: [
      { choice: "Play Again?", index: 0 },
    ]
  },
  {
    text: "You cant ESCAPE!",
    choices: [
      { choice: "Play Again?", index: 0 },
    ]
  },
];



  var currentStoryIndex = 0;

  function displayStory(index) {
    var storyContainer = document.getElementById("story-container");
    var storyText = document.getElementById("story-text");
    var choice1 = document.getElementById("choice-1");
    var choice2 = document.getElementById("choice-2");
    var choice3 = document.getElementById("choice-3");

    storyText.textContent = storyContent[index].text;

    if (storyContent[index].choices.length >= 1) {
      choice1.style.display = "block";
      choice1.textContent = storyContent[index].choices[0].choice;
      choice1.onclick = function() {
        var nextIndex = storyContent[index].choices[0].index;
        handleChoice(nextIndex);
      };
    } else {
      choice1.style.display = "none";
    }

    if (storyContent[index].choices.length >= 2) {
      choice2.style.display = "block";
      choice2.textContent = storyContent[index].choices[1].choice;
      choice2.onclick = function() {
        var nextIndex = storyContent[index].choices[1].index;
        handleChoice(nextIndex);
      };
    } else {
      choice2.style.display = "none";
    }
    if (storyContent[index].choices.length >= 3) {
      choice3.style.display = "block";
      choice3.textContent = storyContent[index].choices[2].choice;
      choice3.onclick = function() {
        var nextIndex = storyContent[index].choices[2].index;
        handleChoice(nextIndex);
      };
    } else {
      choice3.style.display = "none";
    }
  }

  function handleChoice(index) {
    if (index >= 0 && index < storyContent.length) {
      currentStoryIndex = index;
      displayStory(currentStoryIndex);
    } else {
      alert("Invalid story index: " + index);
    }
  }


var asciiArtElement = document.getElementById("ascii-art");


function updateAsciiArt(newArt) {
  asciiArtElement.textContent = newArt;
}


updateAsciiArt("[Initial ASCII art]");


var buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", function() {

  updateAsciiArt("[Updated ASCII art]");
});


  displayStory(currentStoryIndex);