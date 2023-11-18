import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import { Footer, Navbar } from './components';
import { useEffect } from 'react';
import {
  Home,
  Community,
  Contact,
  Events,
  Team,
  Waitlist,
  Products,
  ErrorPage,
  Test,
  BrowseEvents,
  EventDetails,
  CreateEvent,
} from './pages';
const Root = () => {
  const { pathname } = useLocation();

  const noLayoutRoutes = ['/login', '/register', '/events/create'];

  const isNoLayout = noLayoutRoutes.some((nlr) => nlr === pathname);

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
    </>
  );
}

export default App;
