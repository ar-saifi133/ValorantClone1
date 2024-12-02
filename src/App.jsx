import Header from './component/header/Header'
import Home from './component/Home'
import Footer from './component/Footer'
import './App.css'

function App() {


  return (
    <>
      <header className='sticky w-full  overflow-auto top-0 z-10'>
        <Header ></Header>
      </header>
      <Home/>
      <footer>
        <Footer></Footer>
      </footer>
        
    </>
  )
}

export default App
