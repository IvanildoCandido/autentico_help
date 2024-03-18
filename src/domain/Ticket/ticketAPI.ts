import {ticketListMock} from './ticketListMock';
import {Ticket} from './types';

async function getList(): Promise<Ticket[]> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return ticketListMock;
}
export const ticketAPI = {
  getList,
};
