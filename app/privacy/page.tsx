import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Peep",
  description:
    "Learn how Peep Technologies Ltd protects, processes, and manages your personal data and privacy under the Nigeria Data Protection Act (NDPA) 2023.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <Privacy />
      </main>
      <Footer />
    </>
  );
}
