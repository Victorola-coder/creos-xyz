import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

const Root = () => {
  const { pathname } = useLocation();

  const noLayoutRoutes = ['/login', '/register'];

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
      {/* <Navbar /> */}
      <ScrollRestoration />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '*',
        element: 'Not found',
      },
      {
        index: true,
        element: 'Creos',
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    // scroll();
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color='255, 160, 233'
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
              color: '255, 255, 255',
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
