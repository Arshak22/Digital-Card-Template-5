import IntroSection from "./Components/IntroSection";
import Listings from "./Components/Listings";
import Testimonials from "./Components/Testimonials";
import BookAppointment from "./Components/BookAppointment";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <IntroSection />
      <Listings />
      <Testimonials />
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default App;
