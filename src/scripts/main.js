'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const animatedBlocks = document.querySelectorAll('.scroll-animated');
  const phoneInput = document.getElementById('phone');
  const phoneErrorTooltip = document.getElementById('phoneErrorTooltip');
  const form = document.getElementById('contactForm');
  const submitButton = document.getElementById('formSubmit');

  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 },
  );

  animatedBlocks.forEach((block) => observer.observe(block));

  // eslint-disable-next-line no-undef
  emailjs.init('IwFC2en5CgdtAoWUG');

  const validatePhone = () => {
    const phoneValue = phoneInput.value.trim();
    const phonePattern = /^[0-9]*$/;

    const isValid = phonePattern.test(phoneValue);

    phoneErrorTooltip.style.display = isValid ? 'none' : 'block';
    phoneInput.classList.toggle('fieldset__field--error', !isValid);

    return isValid;
  };

  const debounce = (func, delay) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  phoneInput.addEventListener('blur', validatePhone);
  phoneInput.addEventListener('input', debounce(validatePhone, 300));

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validatePhone()) {
      return;
    };

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = phoneInput.value.trim();

    if (name && email && phone) {
      const templateParams = {
        subject: `Message from ${name}.`,
        name,
        phone,
        email,
      };

      // eslint-disable-next-line no-undef
      emailjs.send('service_gncxp3g', 'template_getwrav', templateParams).then(
        () => {
          submitButton.textContent = 'DONE!';
          form.reset();
        },
        () => {
          document.getElementById('response').textContent
            = 'Failed to send message. Please try again.';
        },
      );
    }
  });
});
