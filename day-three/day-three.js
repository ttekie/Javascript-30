const inputs = document.querySelectorAll('.controls input');
const html = document.querySelector('html');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    html.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));