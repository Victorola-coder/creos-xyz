import { useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Footer, Navbar } from './components';
import Dashboard from './layouts/dashboard';
import {
  BrowseEvents,
  Community,
  Contact,
  CreateEvent,
  ErrorPage,
  EventDetails,
  Events,
  Home,
  Products,
  Team,
  Test,
  Waitlist,
  CreosToken
} from './pages';
import { Login, Register } from './pages/auth';
import DashboardContacts from './pages/dashboard/contact';
import DashboardCreateEvent from './pages/dashboard/create-event';
import DashboardEvents from './pages/dashboard/events';
const Root = () => {
  const { pathname } = useLocation();

  const noLayoutRoutes = [
    '/login',
    '/register',
    '/events/create',
    '/dashboard',
  ];

  const isNoLayout = noLayoutRoutes.some((link) => pathname.includes(link));

  if (isNoLayout) {
    return (
      <div>
        <ScrollRestoration />
        <Outlet />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: '/test',
        element: <Test />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/events',
        children: [
          {
            index: true,
            element: <Events />,
          },
          {
            path: 'details',
            element: <EventDetails />,
          },
          {
            path: 'browse',
            element: <BrowseEvents />,
          },
          {
            path: 'create',
            element: <CreateEvent />,
          },
        ],
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/waitlist',
        element: <Waitlist />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/creos-token',
        element: <CreosToken />,
      },
      {
        path: '/dashboard/events',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardEvents />,
          },
          {
            path: 'create-event',
            element: <DashboardCreateEvent />,
          },
        ],
      },
      {
        path: '/dashboard/contacts',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardContacts />,
          },
        ],
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color='0, 0, 0'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              color: '1, 43, 29',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />

      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
