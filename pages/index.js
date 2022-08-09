import Navbar from "../components/Common/Navbar";
import Header from "../components/Homepage/Header";
import Quote from "../components/Homepage/Quote";
import Services from "../components/Homepage/Services/Services";
import Special from "../components/Homepage/Special/Special";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Special />
      <Quote/>
    </>
  );
}
