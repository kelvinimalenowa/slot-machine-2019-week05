const minBet = 5
const maxBet = 50
let wallet = 100
document.getElementById('balance').innerText = wallet
const symbols = ["🍱", "🍜", "🧋", "🍙", "🍡"]

let betFiveButton = document.querySelector('#min-bet')
let betFiftyButton = document.querySelector('#max-bet')

function slotMachineFive(bet) {
    const slotsArray = document.querySelectorAll(".slot")
    console.log(slotsArray)

    console.log(bet)

    let resultMessage = document.querySelector('#result')

    console.log("working")
    if (wallet < bet) {
        resultMessage.innerText = "RELOAD WALLET!"
    } else {
        wallet -= bet
        let reel1 = symbols[Math.floor(Math.random() * symbols.length)]
        let reel2 = symbols[Math.floor(Math.random() * symbols.length)]
        let reel3 = symbols[Math.floor(Math.random() * symbols.length)]

        slotsArray[0].innerText = reel1
        slotsArray[1].innerText = reel2
        slotsArray[2].innerText = reel3

        if (reel1 == reel2 && reel2 == reel3) {
            let winnings = bet * 5
            wallet += winnings
            resultMessage.innerText = `YOU WIN $${winnings}! `
        } else {
            resultMessage.innerText = "TRY AGAIN"
        }
        document.querySelector('#balance').innerText = wallet
    }
}
betFiveButton.addEventListener('click', function () { slotMachineFive(minBet); });
betFiftyButton.addEventListener('click', function () { slotMachineFive(maxBet); });