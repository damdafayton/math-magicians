import { useState, useLayoutEffect } from 'react';

export default function Quote() {
  const [availableHeight, setavailableHeight] = useState(0);

  useLayoutEffect(() => {
    const navElement = document.querySelector('nav')
    const navHeight = navElement && navElement.scrollHeight;
    const doc = document.scrollingElement
    const docHeight = doc && doc.clientHeight;
    const available = docHeight - navHeight;
    if (available !== availableHeight) setavailableHeight(available);
  });

  return (
    <div className="d-flex flex-column justify-content-center" style={{ minHeight: `${availableHeight}px` }}>
      <blockquote>
        <p>
          All the records — anthropological and historical — show that counting and, ultimately,
          numeral systems as a device for counting form the inception of the mathematical element
          in all cultures,
        </p>
      </blockquote>
      <figcaption>-Raymond L. Wilder, 1968</figcaption>
    </div>
  );
}
