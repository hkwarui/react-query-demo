import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroPage } from "./components/RQSuperHeroes.page";
import { SuperHeroPage } from "./components/SuperHeroes.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools intialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
