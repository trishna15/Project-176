$(document).ready(function() {
    // Array of words
    let words = [
        {"inputs":5,
        "catagory":"Fruits",
        "word":"Apple"
    },
    {"inputs":6,
        "catagory":"Electronics",
        "word":"Fridge"
    }
    {"inputs":3,
        "catagory":"Colour",
        "word":"Red"
    }
    {"inputs":10,
        "catagory":"Sports",
        "word":"Volleyball"
    }
    {"inputs":6,
        "catagory":"European Country",
        "word":"France"
    }
    ];
  
    // Game state variables
    var gameOver = false;
  
    // Function to fill the blanks
    function fillBlanks() {
      var correctGuess = false;
      var randomWord = words[Math.floor(Math.random() * words.length)];
      var blanks = "";
  
      for (var i = 0; i < randomWord.length; i++) {
        blanks += '<span class="fill_blanks"></span>';
      }
  
      $('#blanks').html(blanks);
      $('#hint').text('Category: Fruits'); 
  
      $('.clickable').click(function() {
        if (!correctGuess && !gameOver) {
          var selectedLetter = $(this).attr('id');
          var filledWord = "";
  
          for (var i = 0; i < randomWord.length; i++) {
            if (randomWord.charAt(i) === selectedLetter) {
              filledWord += selectedLetter;
            } else {
              filledWord += $('#blanks .fill_blanks').eq(i).text();
            }
          }
  
          if ($('#blanks').text() === filledWord) {
            $('#life').text(parseInt($('#life').text()) - 1);
          }
  
          $('#blanks').html(filledWord);
  
          if (randomWord === filledWord) {
            $('#result').text('You Win!');
            correctGuess = true;
            gameOver = true;
          }
        }
      });
    }
  
    fillBlanks();
  });
  