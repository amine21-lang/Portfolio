import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      
      setShowButton(scrollTop > 300);
      
      
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={isAtBottom ? scrollToTop : scrollToBottom}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#000957] to-[#4e2c54] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border-2 border-white/20"
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {isAtBottom ? (
        <ArrowUp size={24} className="animate-bounce" />
      ) : (
        <ArrowDown size={24} className="animate-bounce" />
      )}
    </button>
  );
};

export default ScrollButton;