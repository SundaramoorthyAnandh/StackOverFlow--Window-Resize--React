import React, { useState, useEffect } from 'react';

const GetWidthWindow = () => {
  const [widthWindow, setWidthWindow] = useState(window.screen.width);

  useEffect(() => {
    console.log('In useEffect');
    let throttleResizeTimer = null;
    function handleResize() {
      clearTimeout(throttleResizeTimer);
      throttleResizeTimer = setTimeout(
        () => setWidthWindow(window.innerWidth),
        500
      );
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [widthWindow]);

  return <p>{JSON.stringify(widthWindow)}</p>;
};

export default GetWidthWindow;
