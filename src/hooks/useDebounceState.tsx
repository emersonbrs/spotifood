import { useState, useEffect } from 'react';

function useDebounceState(value: string, timeout: number) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
}

export default useDebounceState;
