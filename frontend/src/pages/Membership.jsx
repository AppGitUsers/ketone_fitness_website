import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MembershipHero from "../components/MembershipHero";
import MembershipPlans from "../components/MembershipPlans";
import PersonalTraining from "../components/PersonalTraining";
import Trainers from "../components/Trainers";
import CTASection from "../components/CTASection";
import SEO from "../components/SEO";

function Membership() {
  return (
    <>
      <SEO
        title="Gym Membership Plans | Ketone Fitness Hosur – Affordable Pricing"
        description="Explore flexible gym membership plans at Ketone Fitness Hosur. From 3-month to annual plans, personal training packages, and couple plans starting at ₹4,799."
        canonical="https://www.ketonefitness.com/membership"
      />
      <Navbar />
      <MembershipHero />
      <MembershipPlans />
      <PersonalTraining />
      <Trainers />
      <CTASection />
      <Footer />
    </>
  );
}

export default Membership;
