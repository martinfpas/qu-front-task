import { useEffect, useState } from 'react'
import './App.css'
import { JokeList } from './components/JokeList'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NewJoke } from './components/NewJoke';
import { UpdateJoke } from './components/UpdateJoke';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(`${process.env.APIHOST}/jokes/list`).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error()
    }).then(data => {
      setJokes(data.jokes);
    }).catch(error => {
      console.error(error);
    })
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <JokeList jokes={jokes} />
    },
    {
      path: '/joke',
      element: <NewJoke />
    },
    {
      path: '/joke/:id',
      element: <UpdateJoke jokes={jokes} />
    }
  ]);

  return (
    <RouterProvider router={router} />

  )
}

export default App
