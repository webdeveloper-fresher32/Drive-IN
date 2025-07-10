import { useEffect, useRef } from 'react';

export const usePerformance = (componentName: string) => {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(Date.now());

  useEffect(() => {
    renderCount.current += 1;
    const currentTime = Date.now();
    const timeSinceLastRender = currentTime - lastRenderTime.current;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} - Render #${renderCount.current}, Time since last: ${timeSinceLastRender}ms`);
    }
    
    lastRenderTime.current = currentTime;
  });

  return {
    renderCount: renderCount.current,
  };
};
