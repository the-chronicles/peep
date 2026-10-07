import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Terms from "../components/Terms";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Peep",
  description:
    "Review the Terms and Conditions governing your use of Peep, a payment and savings application by Peep Technologies Ltd.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Terms />
      </main>
      <Footer />
    </>
  );
}
