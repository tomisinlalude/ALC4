let moveValue = document.getElementById('move-value');

document.getElementById('move-range').addEventListener('change', () => {
  moveValue.innerText = this.value;
}, false);