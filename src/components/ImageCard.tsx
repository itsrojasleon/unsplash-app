import React, { useEffect, useRef, useState } from 'react';
import { Image } from '../actions';

export const ImageCard = ({ urls, description }: Image): JSX.Element => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const node = imageRef.current;
    if (node) {
      node.addEventListener('load', setSpan);
    }
  }, []);

  const setSpan = () => {
    const node = imageRef.current;
    if (node) {
      const height = node.clientHeight;
      const spans = Math.ceil(height / 10);
      setSpans(spans);
    }
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={urls.thumb} alt={description} />
    </div>
  );
};
