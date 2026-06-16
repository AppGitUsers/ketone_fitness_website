import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MembershipHero from "../components/MembershipHero";
import MembershipPlans from "../components/MembershipPlans";
import PersonalTraining from "../components/PersonalTraining";
import Trainers from "../components/Trainers";
// import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";

function Membership() {
  return (
    <>
      <Navbar />

      <MembershipHero />
      <MembershipPlans />
      <PersonalTraining />
      <Trainers />
      {/* <FAQ /> */}
      <CTASection />

      <Footer />
    </>
  );
}

export default Membership;