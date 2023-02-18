import reset from "./reset.module.css";
import CustomTheme from "./theme/CustomTheme";
import Router from "./pages/Router";

function App() {
  return (
    <CustomTheme className={reset}>
      <Router />
    </CustomTheme>
  );
}

export default App;
