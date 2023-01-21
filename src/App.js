import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContextProvider } from "./hooks/AuthContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const theme = createTheme({});

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<>Loading...</>}>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </Suspense>
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
