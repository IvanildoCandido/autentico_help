import {ticketAPI} from './ticketAPI';
import {Ticket} from './types';

async function getList(): Promise<Ticket[]> {
  const ticketList = await ticketAPI.getList();
  return ticketList;
}

export const ticketService = {
  getList,
};
