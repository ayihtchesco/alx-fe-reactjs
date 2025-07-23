import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Tchesco" age="30" bio="Learning React with ALX!" />
      <Footer />
    </>
  );
}

export default App;
