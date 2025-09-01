import VisaCard from "./Components/VisaCard";
import MasterCard from "./Components/MasterCard";
import Booklists from "./week3/book";
import TourList from "./week3/TourList";
import { tours } from "./week3/data";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <VisaCard />
        <MasterCard />
      </div>

      <div className="shadow-xl shadow-amber-200 rounded-2xl p-6">
        <Booklists />
      </div>
      <div className="rounded-2xl shadow-xl shadow-amber-200 p-6 mt-4">
        <TourList tours={tours} />
      </div>
    </div>
  );
}

export default App;
