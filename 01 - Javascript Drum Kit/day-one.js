$(function() {
   
    // this function listens to keydown event
    function playSounds(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // this will stop the function from running if there is no audio
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    // this function listens to transitionend event
    function removeTransition(e) {
        if(e.propertyName !== 'transform') {
            return;
        }
        this.classList.remove('playing');
    }

    let keys = document.querySelectorAll('.key');

    keys.forEach(key => {
       key.addEventListener('transitionend', removeTransition);
    });

    window.addEventListener('keydown', playSounds);
    
});