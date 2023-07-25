let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Evelyn Vazquez')
  .deleteChars(20)
  .typeString('Diseñadora Industrial')
  .pauseFor(300)
  .deleteChars(10)
  .start();

  const myModal = document.getElementById('modal-contactame');
  const myElement = document.getElementById('contactame');
  
  myModal.addEventListener('shown.bs.modal', () => {
      myElement.focus();
  });