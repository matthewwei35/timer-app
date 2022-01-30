import logo from './logo.svg'
import './App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>TMRZ</h1>
      </Provider>
    </div>
  );
}

export default App
