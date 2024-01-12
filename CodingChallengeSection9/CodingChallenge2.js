// ================Lab1.2 Coding Challenge 2=============//


// LAB1.2: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS	AND	STRINGS	> CODING	
//     CHANLLENGE	#2)
//     1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví 
//     dụ: "Goal 1: Lewandowski")
//     2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã 
//     học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không 
//     nhớ)
//     3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//      Tỉ lệ thắng của Bayern Munich: 1.33
//      Tỉ lệ hòa of draw: 3.25
//      Tỉ lệ thắng của Borrussia Dortmund: 6.5
//     Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
//     thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau).
//     Chú ý: Lưu ý cách tỷ lệ cược và đối tượng trò chơi có tên thuộc tính giống nhau 
//     Thêm: Tạo ra 1 đối tướng là 'scorers', đối tượng này gồm các thuộc tính với key 
//     (tên thuộc tính) là tên cầu thủ đã ghi bàn, value (giá trị) là số bàn thắng đã ghi.
//     Ví dụ:
//     {
//     Gnarby:1,
//     Hummels:1,
//     Lewandowski: 2
//     }



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
    scorers: {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
    }


}

// ===========Thực hiện coding challenge2=========//



// 1. 
for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
}

//2.
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds)
    average += odd;
average /= odds.length;
console.log(average);

//3.
for (const [team, odds] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odds}`);
}




