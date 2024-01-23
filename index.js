const scriptURL = 'https://script.google.com/macros/s/AKfycbxWy0z3XDlk1DFgQegiEZhQ7UiW8C56I13IAGf5ceh6GAn_XH_FqEnA4HhgxRKN8Gy8tw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanl You For Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })  
      .catch(error => console.error('Error!', error.message))
  })