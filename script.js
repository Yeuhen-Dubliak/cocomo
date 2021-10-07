let arrayOrganicId = document.getElementById("organic");
let arraySemidetachId = document.getElementById("semidetach");
let arrayEmbeddedId = document.getElementById("embedded");
const arrayOrganic = ["2.4", "1.05", "2.5", "0.38"];
const arraySemidetach = ["3", "1.12", "2.5", "0.35"];
const arrayEmbedded = ["3.6", "1.2", "2.5", "0.32"];

let firstArr;
let secArr;
let thirdArr;
let fourthArr;

function changeArr() {
  const iD = document.getElementById("type").value;
  if (iD == "Organic") {
    firstArr = arrayOrganic[0];
    secArr = arrayOrganic[1];
    thirdArr = arrayOrganic[2];
    fourthArr = arrayOrganic[3];
    return firstArr, secArr, thirdArr, fourthArr;
  } else if (iD == "Semidetach") {
    firstArr = arraySemidetach[0];
    secArr = arraySemidetach[1];
    thirdArr = arraySemidetach[2];
    fourthArr = arraySemidetach[3];
    return firstArr, secArr, thirdArr, fourthArr;
  } else if (iD == "Embedded") {
    firstArr = arrayEmbedded[0];
    secArr = arrayEmbedded[1];
    thirdArr = arrayEmbedded[2];
    fourthArr = arrayEmbedded[3];
    return firstArr, secArr, thirdArr, arrayFour;
  }
  fourthArr;
  return firstArr, secArr, thirdArr, fourthArr;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", function result() {
  const size = document.getElementById("input").value;

  const pm = firstArr * Math.pow(size, secArr);
  const tm = thirdArr * Math.pow(pm, fourthArr);
  const ss = pm / tm;

  parseInt((document.getElementById("PM").innerHTML = pm.toFixed(0)));
  parseInt((document.getElementById("TM").innerHTML = tm.toFixed(0)));
  parseInt((document.getElementById("SS").innerHTML = ss.toFixed(0)));
});
