import React, { useEffect, useRef, useState } from 'react';

const ScrollableItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ height: '100px', backgroundColor: 'lightblue', margin: '20px 0' }}>
      {children}
    </div>
  );
};

const ObserverComponent: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    // 300 = height of scrolling div, 20 = padding, 100 = height of child we are testing
    setIsVisible(myRef.current!.scrollTop >= 300 + 100 + 20);
  };
  useEffect(() => {
    if (myRef.current) {
      myRef.current.addEventListener('scroll', handleScroll);
      return () => {
        if (myRef.current) {
          myRef.current.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, [myRef.current]);

  return (
    <div>
      <div style={{ padding: '20px', backgroundColor: isVisible ? 'lightgreen' : 'lightcoral' }}>
        {isVisible ? 'Child is visible!' : 'Scroll down to see the message'}
      </div>
      <div ref={myRef} style={{ height: '300px', overflowY: 'scroll', border: '1px solid gray' }}>
        <div style={{ height: '600px' }}>upper component</div>
        <ScrollableItem>Scroll into view</ScrollableItem>
      </div>
    </div>
  );
};

export default ObserverComponent;
