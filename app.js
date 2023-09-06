const weapons = ['rock', 'scissors', 'paper'];
const weaponButtons = document.querySelectorAll('.weapon-btn');
const playerScoreElem = document.getElementById('playerScore');
const pcScoreElem = document.getElementById('pcScore');
const messageElem = document.getElementById('message');
const playerChoice = document.getElementById('playerChoice');
const pcChoice = document.getElementById('pcChoice');
const showRulesBtn = document.getElementById('showRulesBtn');
const modalWindow = document.getElementById('modalWindow');
const score = {
    player: 0,
    pc: 0
};

weaponButtons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const playerWeapon = e.target.dataset.weapon;
        const pcWeaponIdx = Math.floor(Math.random() * 3);
        const pcWeapon = weapons[pcWeaponIdx];
    
        playerChoice.dataset.weapon = playerWeapon;
        pcChoice.dataset.weapon = pcWeapon;
    
        let isPlayerWin;
        if(playerWeapon == pcWeapon) {
            isPlayerWin = null;
        } else if(playerWeapon == 'rock' && pcWeapon == 'scissors') {
            isPlayerWin = true;
        } else if(playerWeapon == 'scissors' && pcWeapon == 'paper') {
            isPlayerWin = true;
        } else if(playerWeapon == 'paper' && pcWeapon == 'rock') {
            isPlayerWin = true;
        } else {
            isPlayerWin = false;
        }
    
        let message;
        if(isPlayerWin === null) {
            message = 'It`s a tie!';
        } else if(!isPlayerWin) {
            message = 'You lose!';
            pcScoreElem.textContent = ++score.pc;
        } else if(isPlayerWin) {
            message = 'You win!';
            playerScoreElem.textContent = ++score.player;
        }
    
        messageElem.textContent = message;
    });
});

showRulesBtn.addEventListener('click', function() {
    modalWindow.style.display = 'block';
});

modalWindow.addEventListener('click', function(e) {
    if(e.target.classList.contains('modal') || e.target.classList.contains('close-modal-btn')) {
        modalWindow.style.display = 'none';
    }
});