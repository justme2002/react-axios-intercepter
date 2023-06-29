import { get, removeToken } from "./services/bases/base-service"

const App = () => {

  const handleSetAccessToken = () => {
    localStorage.setItem("accessToken", Math.floor(Math.random() * 100000).toString())
  }

  const handleFetchDataWithInterceptor = async () => {
    await get();
  }

  return (
    <div>
      <button onClick={handleSetAccessToken}>Set accessToken</button>
      <button onClick={handleFetchDataWithInterceptor}>Get Data</button>
      <button onClick={removeToken}>remove token</button>
    </div>
  )
}

export default App