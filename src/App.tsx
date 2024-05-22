import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Route from './routes';

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Route />
    </QueryClientProvider>
  );
};

export default App;
