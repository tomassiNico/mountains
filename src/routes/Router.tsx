import { FC } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import MountainsScreen from '../screens/MountainsScreen';
import MountainScreen from '../screens/mountains/MountainScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/mountains" replace />,
  },
  {
    path: "/mountains/:mountainId",
    element: <MountainScreen />,
  },
  {
    path: "/mountains",
    element: <MountainsScreen />,
  },
]);

const Router : FC = () => {
  return (<RouterProvider router={router} />)
}

export default Router;