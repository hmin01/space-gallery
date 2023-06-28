'use client'

// React hook
import { useCallback, useEffect } from 'react';

export default function Error({ err, reset }: any) {
  /** [Event handler] 초기화 */
  const onClick = useCallback(() => reset(), [reset]);
  /** [Event hook] 에러 출력 */
  useEffect(() => console.error('here', err), [err]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={onClick}>Try again</button>
    </div>
  );
}