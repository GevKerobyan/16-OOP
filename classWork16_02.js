// -------------------- SHIRITORI -------------------- \\ 

// First character of next word must match last character of previous word.
// The word must not have already been said.

class Shiritori {
  constructor() {
    this.words = [],
      this.game_over = false
  }

  play(wordString) {
    if (this.words.length === 0) {
      this.words.push(wordString)
      return this.words;

    } else if (!this.words.includes(wordString) && wordString.slice(0, 1) === this.words[this.words.length - 1].slice(-1)) {
      this.words.push(wordString);
      return this.words;

    } else {
      this.game_over = true
      return `Game Over`;
    }
  }

  restart() {
    if (this.game_over) {
      this.game_over = false;
      this.words = [];
      return `Game started`
    }
  }
}

const game1 = new Shiritori();

game1.play("mango");
game1.play("orange");
game1.play("flephant");

console.log (game1)

// ------------------------------ DONE ------------------------------ \\