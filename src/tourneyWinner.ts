export function tournamentWinner(competitions: string[][], results: number[]) {
    // Write your code here.
      let teamPoints: { [key: string]: number } = {};
      
      for (let i = 0; i < results.length; i++) {
          // [home, away]
  
          // 1 === home won
          if (results[i] === 1) {
              if (competitions[i][0] in teamPoints) {
                  teamPoints[ competitions[i][0] ] += 3;
              } else {
                  teamPoints[ competitions[i][0] ] = 3;
              }
          } else 
          // 0 === away won
          {
              if (competitions[i][1] in teamPoints) {
                  teamPoints[ competitions[i][1] ] += 3;
              } else {
                  teamPoints[ competitions[i][1] ] = 3;
              }
              
          }
      }
      
      let winner: [string, number] = ['', 0];
      
      for (let [team, points] of Object.entries(teamPoints)) {
  
          if (points > winner[1]) {
              winner = [team, points];
          }
      }
    return winner[0];
  }