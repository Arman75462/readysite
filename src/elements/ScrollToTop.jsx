import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* This component ensures that the page scrolls to the top every time the route changes in the application. 
It listens for changes in the route using the `useLocation` hook from `react-router-dom`.
When the location (route) changes, the `useEffect` hook triggers and calls `window.scrollTo(0, 0)`,
which scrolls the window to the top-left corner (0, 0) of the page.
This behavior improves the user experience by preventing them from landing in the middle of the page
after navigating between pages, especially in a single-page application (SPA) where the page does not reload. 
The component does not render anything visually, so it simply returns `null`.
 */

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top on every route change
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
