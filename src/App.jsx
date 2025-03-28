import { Suspense } from 'react'
import './App.css'
import Products from './components/Products/Products'

function App() {

  const productsPromise = fetch("../public/data.json").then(res=>res.json())

  

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Products productsPromise={productsPromise} />
      </Suspense>
    </>
  );
}

export default App
