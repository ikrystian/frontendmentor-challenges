import $ from 'jquery';

if ($('body')
  .hasClass('coming-soon-challenge')) {
  const submit = document.querySelector('.form__submit');
  const emailInput = document.querySelector('#email');
  const alertIcon = document.querySelector('.form__icon');

  const showErrors = () => {
    emailInput.classList.add('form__input--error');
    alertIcon.style.display = 'block';
    return false;
  };

  submit.addEventListener('click', () => {
    const isValid = $('#form')[0].checkValidity();
    return (!isValid) ? showErrors() : true;
  });
};
