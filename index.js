
let countDateTime = new Date("Jun 21,2024 12:00:08").getTime();

let x =setInterval(() => {
    let now = new Date().getTime();
    let difference= countDateTime - now;
let days = Math.floor(difference/(1000 *60*60*24));
let hours = Math.floor((difference % (1000 * 60 *60*24))/(1000*60*60));

let minute = Math.floor((difference % (1000 * 60 * 60))/(1000* 60))
let second = Math.floor((difference % (1000 * 60))/1000);

document.getElementById("timer").innerHTML = 
`${days} Days |  ${hours} h : ${minute} m : ${second} sec `;

if (difference < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "BirthDay Exipire"
}
});

console.log(x());
