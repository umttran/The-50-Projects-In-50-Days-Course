const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  // Create button element and add class named btn
  const btn = document.createElement('button')
  btn.classList.add('btn');

  // Add sound name on button
  btn.innerText = sound;

  // Play sound when sound button is clicked
  btn.addEventListener('click', () => {
    stopSound();

    document.getElementById(sound).play();
  })

  // Add the button to the div with id named buttons
  document.getElementById('buttons').appendChild(btn);
});

// Stop the active sound and reset the playing time if a different sound is played while a sound is playing
function stopSound() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  })
}

