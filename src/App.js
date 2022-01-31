import './App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { update } from './actions'
import { loadState, saveState } from './utils'
import throttle from 'lodash/throttle'
import reducers from './reducers'
import NewTimer from './components/NewTimer'
import ListTimers from './components/ListTimers'

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>TMRZ</h1>
        <NewTimer />
        <ListTimers />
      </Provider>
    </div>
  );
}

export default App
