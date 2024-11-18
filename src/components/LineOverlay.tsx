import type { Message } from '#types';
import { memo } from 'react';
import { Source, Layer, type LineLayer } from 'react-map-gl/maplibre';

const layerStyle: LineLayer = {
  id: 'linesLayer',
  type: 'line',
  source: 'my-data',
  layout: {
    'line-cap': 'round',
  },
  paint: {
    'line-color': 'purple',
    'line-width': 5,
  },
};

const LineOverlay = ({ messages }: { messages: Message[] }) => {
  if (messages.length === 0) return null;

  return (
    <Source
      key="source"
      id="my-data"
      type="geojson"
      data={{
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: messages.map(({ position }) => [
                position[0],
                position[1],
              ]),
            },
            properties: null,
          },
        ],
      }}
    >
      <Layer {...layerStyle} />
    </Source>
  );
};

export default memo(LineOverlay);
