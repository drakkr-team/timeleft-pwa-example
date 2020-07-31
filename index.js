const images = ['dream1','dream2','dream3','dream4'];

function randomValueFromArray(array) {
  let randomNo =  Math.floor(Math.random() * array.length);
  return array[randomNo];
}

setInterval(function() {
  let randomChoice = randomValueFromArray(images);
  document.body.style.backgroundImage = `url('images/${randomChoice}.jpg')`;
}, 3500)

// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/timeleft-pwa-example.github.io/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'inline-block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our Drakkr button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted prompt');
        } else {
          console.log('User dismissed prompt');
        }
        deferredPrompt = null;
      });
  });
});
