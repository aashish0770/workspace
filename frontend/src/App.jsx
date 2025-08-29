import VisaCard from "./Components/VisaCard"
import MasterCard from "./Components/MasterCard"
function App() {

  return (
    <>
      <div>
         <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
          <div className="grid grid-cols-3 gap-6">
          <VisaCard />
          <MasterCard/>
          </div>
    </div>
      </div>
    </>
  )
}

export default App
