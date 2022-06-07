import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

var wizards = ['Hermione', 'Neville', 'Gandalf'];

app.innerHTML =
  '<ul>' +
  wizards
    .map(function (wizard) {
      return '<li>' + wizard + '</li>';
    })
    .join('') +
  '</ul>';

// app.innerHTML = `
//   <h1>Hello Vite!</h1>

//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;
