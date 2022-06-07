import './style.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;

var wizards = ['Hermione', 'Neville', 'Gandalf'];

const tickets = [
  {
    title: 'Nuvem shop Games',
    description: 'lorem ipsum dolor',
    offer: '50NUVEMSHOP',
  },
  {
    title: 'PS5 Digital Edition',
    description: 'lorem ipsum dolor',
    offer: '50%OFF',
  },
  {
    title: 'Nuvem shop Games',
    description: 'lorem ipsum dolor',
    offer: '50NUVEMSHOP',
  },
];

app.innerHTML =
  '<div class="cards-ticket">' +
  tickets
    .map(function (ticket) {
      return (
        '<div class="ticket"> ' +
        '<div class="header-ticket">' +
        ticket.title +
        '</div>' +
        '<div class="content-ticket">' +
        `<p>${ticket.description}</p>` +
        `<span class="offer">${ticket.offer}</span>` +
        `<button>Quero</button>` +
        '</div>' +
        '</div>'
      );
    })
    .join('') +
  '</div>';
