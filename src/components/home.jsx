import Navbar from "./homePage/Navbar";
import Header from "./homePage/Header";
import Content from "./homePage/Content";
import Footer from "./homePage/Footer";

function Home() {
  return (
    <div className="blogWeb">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
