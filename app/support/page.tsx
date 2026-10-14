import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Support from "../components/Support";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Support | Peep",
  description:
    "Need help with your Peep account? Contact our support team for assistance with account access, privacy questions or other issues.",
};

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main>
        <Support />
      </main>
      <Footer />
    </>
  );
}
