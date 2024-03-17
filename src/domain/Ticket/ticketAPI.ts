import {ticketListMock} from './ticketListMock';
import {Ticket} from './types';

async function getList(): Promise<Ticket[]> {
  //TODO simular um delay na API
  return ticketListMock;
}
export const ticketAPI = {
  getList,
};
