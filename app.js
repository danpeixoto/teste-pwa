document.addEventListener('DOMContentLoaded', () => {
  let counter = parseInt(localStorage.getItem('counter')) || 0;
  document.getElementById('counter').textContent = counter;

  document.getElementById('incrementButton').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').textContent = counter;
    localStorage.setItem('counter', counter);
  });


});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch((error) => {
    console.log('Service Worker registration failed:', error);
  });
  console.log('entrei no if');
}
