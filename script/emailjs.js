(function () {
  emailjs.init("q6hBcmLBa5OjorFCc");
})();

// lucide.createIcons()

let btn = document.getElementById("submit-btn");
const form = document.getElementById('contact-form')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  btn.innerHTML = `
    Sending <i data-lucide="send-horizontal" class="ct-icon"></i>
  `;
  lucide.createIcons()
  btn.disabled = true

  // these IDs from the previous steps
  emailjs.sendForm('portfolio_contact', 'template_v2yg7la', form)
    .then(() => {
      btn.innerHTML = `
      Send <i data-lucide="send" class="ct-icon"></i>
      `;
      lucide.createIcons()

      alert('Message sent successfully!');
      btn.disabled = false

      console.log('SUCCESS!');
      clearInput();
    }, (error) => {
      btn.innerHTML = `
        Send <i data-lucide="send" class="ct-icon"></i>
      `;
      lucide.createIcons()
      btn.disabled = false

      alert('OOPS! SOMETHING WENT WRONG...');
      console.log('FAILED...', error);
      // clearInput();
    });
});

const clearInput = () => {
  document.getElementById("contact-form").reset();
}