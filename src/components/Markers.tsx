import { useState, memo } from 'react';
import { Marker, Popup } from 'react-map-gl/maplibre';
import Pin from './Pin.js';
import type { Message, PopupInfo } from '#types';

const Markers = ({ messages }: { messages: Message[] }) => {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>();
  if (messages.length === 0) return null;

  return (
    <>
      {popupInfo && (
        <Popup
          latitude={popupInfo.position[1]}
          longitude={popupInfo.position[0]}
          anchor="right"
          offset={[-20, -20] as [number, number]}
          onClose={() => setPopupInfo(null)}
          closeOnClick={false}
        >
          <div>
            <p>
              <b>Time:</b> {popupInfo.sampleTime}
            </p>
            <p>
              <b>Lat:</b> {popupInfo.position[1]}
            </p>
            <p>
              <b>Lon:</b> {popupInfo.position[0]}
            </p>
          </div>
        </Popup>
      )}
      {messages.map(({ position, sampleTime }, index) => (
        <Marker
          key={`marker-${position[0]}-${position[1]}-${index}`}
          longitude={position[0]}
          latitude={position[1]}
          color="blue"
          onClick={(e) => {
            console.log('click', e);
            e.originalEvent.stopPropagation();
            setPopupInfo({ position, sampleTime });
          }}
        >
          <Pin />
        </Marker>
      ))}
    </>
  );
};

export default memo(Markers);
