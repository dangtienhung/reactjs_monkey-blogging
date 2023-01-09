import { AuthProvider } from './contexts/auth-context';
import RouterComponent from './routes';
import './index.scss';

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterComponent />
      </AuthProvider>
    </div>
  );
}

export default App;
