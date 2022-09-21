import { useState, useEffect } from 'react';
import { HEADER_OPTIONS, ENDPOINT } from './constants';

const useRiskalyze = (): string => {
  const [url, setUrl] = useState<string>(null);
  useEffect(() => {
    fetch(ENDPOINT, HEADER_OPTIONS)
      .then((res) => res.json())
      .then((data) => setUrl(data?.workflow_url));
  }, []);
  return url;
};

export default useRiskalyze;
