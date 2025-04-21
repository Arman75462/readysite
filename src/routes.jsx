import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import PageNotFoundPage from "./pages/PageNotFoundPage.jsx";
import PagesLayout from "./layouts/PagesLayout.jsx";

const routes = [
  {
    path: "/",
    element: <PagesLayout />,
    errorElement: <PageNotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    path: "/thank-you",
    element: <ThankYouPage />,
  },
];

export default routes;
