const input = document.querySelector('.start_input');
const button = document.querySelector('.start_button');
const form = document.querySelector('.start-form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
      button.removeAttribute('disabled');
      return;
    }
  
    button.setAttribute('disabled', '');
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
  }
  
  input.addEventListener('input', validateInput);
  form.addEventListener('submit', handleSubmit);