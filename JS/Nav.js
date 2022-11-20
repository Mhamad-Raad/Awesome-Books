document.querySelector('.open').addEventListener('click', () => {
  document.querySelector('.close').style.display = 'block';
  document.querySelector(".mobile-nav").style.display = "flex";
  document.querySelector('.open').style.display = 'none';
});

document.querySelector(".close").addEventListener('click', () => {
  document.querySelector(".close").style.display = "none";
  document.querySelector(".mobile-nav").style.display = "none";
  document.querySelector(".open").style.display = "block";
});


window.addEventListener('click', (e) => {
  if (e.target !== document.querySelector('.open')) {
    document.querySelector(".close").style.display = "none";
    document.querySelector(".mobile-nav").style.display = "none";
    document.querySelector(".open").style.display = "block";
  }
});
