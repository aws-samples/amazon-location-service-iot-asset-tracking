type Message = {
  deviceId: string;
  eventType: 'UPDATE';
  trackerName: string;
  receivedTime: string;
  sampleTime: string;
  position: [number, number];
};

type PopupInfo = Pick<Message, 'position' | 'sampleTime'>;

export type { Message, PopupInfo };
