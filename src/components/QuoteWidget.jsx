// src/components/QuoteWidget.jsx
import { useState, useEffect } from 'react';
import { CloudDone, FormatQuote } from '@mui/icons-material';

const quotes = [
  { text: '"The advance of technology is based on making it fit in so that you don\'t even notice it."', author: '— Bill Gates' },
  { text: '"Any sufficiently advanced technology is indistinguishable from magic."', author: '— Arthur C. Clarke' },
  { text: '"Complexity is your enemy. Any fool can make something complicated. It is hard to keep things simple."', author: '— Richard Branson' },
  { text: '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."', author: '— Bill Gates' },
  { text: '"The function of good software is to make the complex appear to be simple."', author: '— Grady Booch' }
];

const QuoteWidget = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setOpacity(1);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[220px]">
      <div className="p-8 bg-secondary-fixed/5 flex flex-col justify-center items-center text-center border-r border-white/5">
        <CloudDone className="text-secondary-fixed text-6xl mb-4" />
        <div className="space-y-1">
          <h4 className="font-headline-md text-secondary">24°C</h4>
          <p className="font-label-mono text-label-mono text-on-surface-variant">Cloudy • Nouakchott</p>
        </div>
      </div>
      <div className="p-8 flex flex-col justify-center italic text-on-surface">
        <FormatQuote className="text-secondary-fixed/40 text-4xl mb-2" />
        <p className="font-body-md text-lg leading-relaxed mb-4 transition-opacity duration-500" style={{ opacity }}>
          {quotes[currentQuote].text}
        </p>
        <p className="font-label-mono text-label-mono text-secondary-fixed text-sm not-italic transition-opacity duration-500" style={{ opacity }}>
          {quotes[currentQuote].author}
        </p>
      </div>
    </div>
  );
};

export default QuoteWidget;