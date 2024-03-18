import React, {useEffect, useState} from 'react';

import {Ticket, ticketService} from '@domain';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [ticketList, setTicketList] = useState<Ticket[]>([]);
  useEffect(() => {
    ticketService.getList().then(list => setTicketList(list));
  }, []);
  return (
    <Screen>
      {ticketList.map(ticket => (
        <Text>{ticket.title}</Text>
      ))}
    </Screen>
  );
}
