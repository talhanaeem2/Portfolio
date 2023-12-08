import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/navbar'
import Home from './pages/home'
import store from './store/store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
