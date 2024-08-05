export const scrollToTop = () => {
    const duration = 1000; // Duration of the scroll in milliseconds
    const start = window.pageYOffset;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeInOutQuad = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      
      window.scrollTo(0, start - start * easeInOutQuad);
      
      if (elapsedTime < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };