import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import EquipmentsPage from "./pages/EquipmentsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import CoachingPage from "./pages/CoachingPage.jsx";
import PagesLayout from "./layouts/PagesLayout.jsx";

const routes = [
  {
    path: "/",
    element: <PagesLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "équipements", element: <EquipmentsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "coaching", element: <CoachingPage /> },
    ],
  },
];

export default routes;
