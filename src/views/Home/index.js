import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Whats from "../../components/Whats";

const Home = () => {

    return(
        <main className="w-full h-screen">
            <Header />
            <Body />
            <Whats />
            <Footer />
        </main>
    )
};

export default Home;