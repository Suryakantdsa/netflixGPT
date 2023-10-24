import Body from './Component/Body'
import { Provider } from 'react-redux'
import appStore from './store/appStore'

function App() {

  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  )
}

export default App
