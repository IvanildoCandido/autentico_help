import {Ticket} from './types';

export const ticketListMock: Ticket[] = [
  {
    ticket_id: '1',

    title: 'Formatar computador sala de matrícula',
    description: 'O computador liga mais não dá vídeo',
    status: 'Aberto',
    comments: 'Faz três dias que não liga',
    user_id: '1',
    sector_id: '1',
  },
  {
    ticket_id: '2',

    title: 'Arrumar cameras',
    description: 'Cameras sem funcionar',
    status: 'Aberto',
    comments: 'Imagem tremendo',
    user_id: '2',
    sector_id: '2',
  },
];
