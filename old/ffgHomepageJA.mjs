
document.getElementById("north").addEventListener("click", revealNorth);
document.getElementById("central").addEventListener("click", revealCentral);
document.getElementById("south").addEventListener("click", revealSouth);
document.querySelector(".return-button").addEventListener("click", returnHome);
// document.querySelector(".ffg-initial-right-info") = originalList;


function revealNorth() {
  document.querySelector('.north-florida').classList.add('north-open')
  document.querySelector('.central-florida').classList.remove('central-open')
  document.querySelector('.south-florida').classList.remove('south-open')
  document.querySelector(".ffg-initial-right-info").style.display = "none";
}

function revealCentral() {
  document.querySelector('.north-florida').classList.remove('north-open')
  document.querySelector('.central-florida').classList.add('central-open')
  document.querySelector('.south-florida').classList.remove('south-open')

  document.querySelector(".ffg-initial-right-info").style.display = "none";
}

function revealSouth() {
  document.querySelector('.north-florida').classList.remove('north-open')
  document.querySelector('.central-florida').classList.remove('central-open')
  document.querySelector('.south-florida').classList.add('south-open')
  document.querySelector(".ffg-initial-right-info").style.display = "none";
}

function returnHome() {
  document.querySelector('.north-florida').classList.remove('north-open')
  document.querySelector('.central-florida').classList.remove('central-open')
  document.querySelector('.south-florida').classList.remove('south-open')

  document.querySelector(".ffg-initial-right-info").style.display = "block";

}