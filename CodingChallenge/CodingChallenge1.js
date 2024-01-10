// LAB1.1: (SECTION 9: DATA STRUCTURES.MODERN OPERATORS AND STRINGS > CODING
// CHANLLENGE #1)
// Giả sử chúng ta có dữ liệu lấy được từ API bao gồm những trận đấu như phía
// dưới.Trong thử thách lần này, chúng ta sẽ làm việc với dữ liệu.Và đây là những
// nhiệm vụ cho bạn:
// 1. Tạo ra 1 mảng cầu thủ cho mỗi đội(variables 'players1' and 'players2')
// 2. Phần tử đầu tiên trong mảng là Thủ môn, các phần tử còn lại sẽ là các cầu thủ ở
// các vị trí khác.Ví dụ, Bayern Munich(team 1) bạn sẽ tạo 1 biến('gk') với tên của
// thủ môn, and one array('fieldPlayers') with all the remaining 10 field players
// 3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
// 4. Trong trận đấu, Bayern Munich(team 1) sử dụng 3 quyền thay người.Hãy tạo 1
// mảng mới('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào
//'Thiago', 'Coutinho' và 'Perisic'
// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu
// (gọi là'team1', 'draw' và 'team2')
// 6. Viết 1 hàm('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn(sử dụng toán tử
// spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
// 7. Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng.In ra đội chiến thắng đó mà
// không sử dụng if/else hoặc toán tử 3 ngôi.
// Dữ liệu test: Sử dụng players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.Sau
// đó chạy hàm từ game.scored

const game = {

    teamOne: 'Bayern Munich',
    teamTwo: 'Borrussia Dortmund',

    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ]
    ],

    score: '4.0',
    scored: [
        'Lewandowski',
        'Gnarby',
        'Lewandowski',
        'Humels'
    ],
    date: '7/1/2024',
    odds: {
        teamOne: 1.33,
        x: 3.25,
        teamTwo: 6.5,
    },


}

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2 GK
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5. 
const { odds: { teamOne, x: draw, teamTwo } } = game;
console.log(teamOne, draw, teamTwo);

//6.
const printGoals = function (...players) {
    
    console.log(players);
    console.log(`${players.length} goals were scored`);

}

// printGoals('Davies','Muller','Lewandowski','Kimich');
// printGoals('Davies','Muller');
printGoals(...game.scored);


//7.
teamOne > teamTwo && console.log('Team two is more likely to win');
teamOne < teamTwo && console.log('Team one is more likely to win');



    


