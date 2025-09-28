import Routes from "./routes/AppRoutes";
import { NotificationProvider } from "./components/context/NotificationProvider";

function App() {
  return (
    <NotificationProvider>
      <Routes />
    </NotificationProvider>
  );
}

export default App;
