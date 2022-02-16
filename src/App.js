import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/Layout";
import Planets from "./components/Planets";
import People from "./components/People";
import theme from "./themes/main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<Planets />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/people" element={<People />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
