'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const animatedBlocks = document.querySelectorAll('.scroll-animated');

  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  animatedBlocks.forEach((animatedBlock) => {
    observer.observe(animatedBlock);
  });
});

// Initialize EmailJS
(function() {
  // eslint-disable-next-line no-undef
  emailjs.init('S3W8-r6Y4OYu5e_ur');
})();

const form = document.getElementById('contactForm');
const submitButton = document.getElementById('formSubmit');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const templateParams = {
    subject: `Message from ${name}.`,
    name: name,
    phone: phone,
    email: email,
  };

  if ((name, email, phone)) {
    // eslint-disable-next-line no-undef
    emailjs.send('service_gwgn85o', 'template_s02jv1d', templateParams).then(
      function(response) {
        submitButton.textContent = 'DONE!';

        document.getElementById('contactForm').reset();
      },
      function() {
        document.getElementById('response').innerHTML
          = 'Failed to send message. Please try again.';
      },
    );
  }
});
