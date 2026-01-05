
import {AllRoutes} from "./routes/AllRoutes.jsx";
import {Header, Footer} from "./components/index.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <AllRoutes />
      
      <Footer />

    </div>
  );
}

export default App;
