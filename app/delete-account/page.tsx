import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import DeleteAccount from "../components/DeleteAccount";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Account Deletion | Peep",
  description:
    "Learn how to request deletion of your Peep account, associated personal data, and payment information in compliance with our Privacy Policy and NDPA 2023.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main>
        <DeleteAccount />
      </main>
      <Footer />
    </>
  );
}
