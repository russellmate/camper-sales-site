const menuBtn = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.mobile-nav');
const navRule = document.querySelector('.nav-rule');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuList.classList.add('open');
    navRule.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuOpen = true;
  } else { 
    menuBtn.classList.remove('open');
    menuList.classList.remove('open');
    navRule.classList.remove('open');
    document.body.style.overflow = 'scroll';
    menuOpen = false;
  }
});

const constraints = {
  name: {
      presence: { allowEmpty: false }
  },
  email: {
      presence: { allowEmpty: false },
      email: true
  },
  message: {
      presence: { allowEmpty: false }
  }
};

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (event) {
    const formValues = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value
    };

    const errors = validate(formValues, constraints);

    if (errors) {
      event.preventDefault();
      const errorMessage = Object
        .values(errors)
        .map(function (fieldValues) { return fieldValues.join(', '); })
        .join("\n");

      alert(errorMessage);
    }
  }, false);