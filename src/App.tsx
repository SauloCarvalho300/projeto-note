import { Toaster } from "sonner"

import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Toaster
        richColors 
        closeButton
        position='top-right'
      />
      <Home />
    </div>

  )
}


export default App
