const button = document.querySelector('.menu-toggle');
const main = document.querySelector('#main-nav');
const links = document.querySelectorAll('.a');

button.addEventListener('click', e => {

 const isopen = main.classList.toggle('open');
 button.setAttribute("aria-expanded", isopen);
})

links.forEach(haha => {

    haha.addEventListener('click', () => {

        main.classList.remove('open');
        button.setAttribute("aria-expanded", false);
    })
})

  document.querySelectorAll(".open-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.modal).showModal();
    });
  });

   const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      document.body.classList.toggle("liwanag");
    });
