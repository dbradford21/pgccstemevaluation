document.getElementById('evaluation-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const response = await fetch('/submit', {
      method: 'POST',
      body: formData
  });

  const jsonResponse = await response.json();
  if (response.ok) {
      alert('Form submitted successfully');
  } else {
      alert('Error submitting form: ' + jsonResponse.message);
  }
});

  