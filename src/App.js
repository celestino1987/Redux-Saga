
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getApi } from './redux-saga/Accions';

import './App.css';

function App() {
 const dispatch = useDispatch()
 useEffect(() => {
  
   dispatch(getApi())
   
 }, [dispatch])

  const state = useSelector((state) => state.reducerApi.posts)

  console.log(state)



  return (
    <>
    <div>
      <h1>Petición de una api con redux-saga</h1>
    {
      state.map((title)=>(
        <h4 key={title.id}> {title.title} </h4>

      ))

    }

    </div>
    </>
     

  )
}

export default App;
