const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  
  event.preventDefault();

  const requiredFields = document.querySelectorAll(".form-row .required");
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    const input = field.parentElement.querySelector("input");

    if (!input.value) {
      alert(`Пожалуйста, заполните поле ${field.textContent}`);
      input.focus();
      return;
    }
  }

  const name = document.getElementById('name').value;
  const secondName = document.getElementById('secondName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const agree = document.getElementById('agree').checked;

  const body = JSON.stringify({
    "name": name,
    "secondName": secondName,
    "phone": phone,
    "email": email,
    "agree": agree
  });

  fetch('https://YuliyaPvl.space/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: YuliyaPvl'
    },
    body: body
  })

  .then((response) => {
    if (response.ok) {
      form.reset();
      alert("Данные отправлены успешно!");
    } else {
      alert("Произошла ошибка при отправке данных!");
    }
  })

  .catch((error) => {
    console.error("Ошибка при отправке данных:", error);
    alert("Произошла ошибка при отправке данных");
  });
});