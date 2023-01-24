import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/store";
import AllChampion from './pages/AllChampion';
import SingleChampion from './pages/SingleChampion';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        {" "}
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/champion/:id",
        element: <SingleChampion />,
      },
      {
        path: "/",
        element: <AllChampion />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);