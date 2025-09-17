let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

window.addEventListener('DOMContentLoaded', onReload);

form.addEventListener('input', onInput);

function onInput(event) {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onReload(event) {
  if (localStorage.getItem('feedback-form-state') === null) {
    form.elements.email.value = '';
    form.elements.message.value = '';
  }

  if (localStorage.getItem('feedback-form-state') !== null) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill please all fields');
  }

  if (form.elements.email.value !== '' && form.elements.message.value !== '') {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData = {
      email: '',
      message: '',
    };
  }
}
