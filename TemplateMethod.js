// ### 13. Template Method Pattern
// Template Method الگوئی است که اسکلت یک الگوریتم را در یک متد پایه تعریف می‌کند، در حالی که پیاده‌سازی برخی مراحل به زیرکلاس‌ها محول می‌شود.


class Game {
    play() {
      this.initialize();
      this.startPlay();
      this.endPlay();
    }
  
    initialize() {}
    startPlay() {}
    endPlay() {}
  }
  
  class Cricket extends Game {
    initialize() {
      console.log('Cricket Game Initialized!');
    }
  
    startPlay() {
      console.log('Cricket Game Started!');
    }
  
    endPlay() {
      console.log('Cricket Game Finished!');
    }
  }
  
  class Football extends Game {
    initialize() {
      console.log('Football Game Initialized!');
    }
  
    startPlay() {
      console.log('Football Game Started!');
    }
  
    endPlay() {
      console.log('Football Game Finished!');
    }
  }
  
  const cricket = new Cricket();
  cricket.play();
  // Cricket Game Initialized!
  // Cricket Game Started!
  // Cricket Game Finished!
  
  const football = new Football();
  football.play();
  // Football Game Initialized!
  // Football Game Started!
  // Football Game Finished!
  
  