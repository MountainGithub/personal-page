function copyText(container) {
  const text = container.querySelector('.copy').innerText;

  navigator.clipboard.writeText(text).then(() => {
    container.classList.add('show-tooltip');

    setTimeout(() => {
      container.classList.remove('show-tooltip');
    }, 400);
  }).catch(err => {
    console.error('Cant copy: ', err);
  });
}