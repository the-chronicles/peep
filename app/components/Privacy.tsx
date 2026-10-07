"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface PrivacySection {
  id: string;
  title: string;
  badge?: string;
  content: React.ReactNode;
}

export default function Privacy() {
  // Default first section open, accordion toggle behavior
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const PRIVACY_SECTIONS: PrivacySection[] = [
    {
      id: "intro",
      title: "1. Introduction",
      badge: "Core Notice",
      content: (
        <div className="space-y-4">
          <p>
            Peep is a product of <strong>Peep Technologies Ltd</strong>, offered
            in partnership with <strong>Nomba Financial Services</strong>.
            Banking services are provided by <strong>Nombank MFB</strong> (a
            licensed microfinance bank). Deposits are insured by the{" "}
            <strong>NDIC</strong> and the platform operates under licences
            issued by the <strong>Central Bank of Nigeria (CBN)</strong>.
          </p>

          <p>
            Peep is a payment and savings application that helps users grow as
            they earn and grow as they spend. It features a lifestyle-powered
            growth track that keeps users consistent so they can scale with
            their day-to-day activities. The core savings goal of the App is to
            help users build a daily savings discipline. Users can choose a
            unique username and make payments to beneficiaries using the
            beneficiary’s unique username. With Peep, users can save their
            payment information for secure, one-click, hassle-free transfers
            over time on subsequent payments. You maintain control over your
            account settings and can unlink your information at any time.
          </p>

          <div className="rounded-2xl border-l-4 border-[#660033] bg-[#FFDF4C]/25 p-4 text-xs leading-relaxed md:text-sm">
            <p className="font-bold text-[#660033]">
              Your Right to Information:
            </p>
            <p className="mt-1 text-[#660033]/90">
              This Privacy Policy (“Notice”) governs your use of Peep (“the
              Application”, “the App”, “the Product”, or “the Platform”). We
              provide this Notice because you have a right to know what
              information we collect, why we collect it, how it is protected and
              used, and the circumstances under which it may be disclosed.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "terms",
      title: "2. Terms of Use",
      badge: "Agreement",
      content: (
        <div className="space-y-3">
          <p>
            You are required to comply with our{" "}
            <Link href="/terms" className="font-bold text-[#660033] underline">
              Terms of Use
            </Link>{" "}
            when using the Product.
          </p>
        </div>
      ),
    },
    {
      id: "data-processed",
      title: "3. The Data That We Process",
      badge: "KYC & Tiers",
      content: (
        <div className="space-y-4">
          <p>
            Personal data is any information about an individual that can be
            used to identify that person, either directly or indirectly. For
            example, when using the App, we may request personal information to
            contact or identify you, and some information may be collected
            automatically to allow our Platform to function properly. We also
            collect personal data from third-party sources or through your use
            of our services.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#660033]/10">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-[#660033] text-white">
                <tr>
                  <th className="px-4 py-3 font-bold text-[#FFDF4C]">
                    Peep Tier
                  </th>
                  <th className="px-4 py-3 font-bold">Data Collected</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#660033]/10 bg-white text-[#660033]/90">
                <tr className="hover:bg-[#FFDF4C]/10">
                  <td className="px-4 py-3 font-bold text-[#660033]">Tier 1</td>
                  <td className="px-4 py-3">Bank Verification Number (BVN)</td>
                </tr>
                <tr className="hover:bg-[#FFDF4C]/10">
                  <td className="px-4 py-3 font-bold text-[#660033]">Tier 2</td>
                  <td className="px-4 py-3">
                    Selfie, National Identity Number (NIN)
                  </td>
                </tr>
                <tr className="hover:bg-[#FFDF4C]/10">
                  <td className="px-4 py-3 font-bold text-[#660033]">Tier 3</td>
                  <td className="px-4 py-3">
                    Physical address, Proof of address (for everyone)
                  </td>
                </tr>
                <tr className="bg-[#FFDF4C]/15 font-medium">
                  <td className="px-4 py-3 font-bold text-[#660033]">
                    All App Users
                  </td>
                  <td className="px-4 py-3 leading-relaxed">
                    Name, email address, phone number, date of birth, account
                    details (username and PIN), IP address, transaction data
                    (date, amount, parties, time of transaction), device
                    identifier, operating system (OS) version, analytics (user
                    behavior, feature usage, and product funnel progress),
                    savings goals and progress data.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl bg-[#660033]/5 p-4 text-xs md:text-sm">
            <h4 className="font-bold text-[#660033]">
              Nigerian Accounts (including diaspora Nigerians):
            </h4>
            <ul className="mt-2 space-y-1 pl-2">
              <li>• Bank Verification Number (BVN)</li>
              <li>• National Identification Number (NIN)</li>
              <li>
                • Residential / physical address and proof of address (as
                required by tier)
              </li>
            </ul>
            <p className="mt-3 text-xs text-[#660033]/80 italic">
              <strong>Note:</strong> Nigerians in the diaspora use Peep in the
              same way as users resident in Nigeria. Verification requirements
              are the same; we do not collect residence permits or treat
              diaspora users differently for identity verification purposes.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "permissions",
      title: "4. Permissions We Request",
      badge: "Device Access",
      content: (
        <div className="space-y-4">
          <p>
            To provide you with our services and enhance your experience, our
            app may request access to certain device features and information.
            Below, we explain why these permissions are needed:
          </p>

          <div className="grid gap-3">
            {[
              {
                perm: "Camera",
                desc: "We only access your camera when you need to take a selfie for verification, upload a photo for your profile, or scan a document. We will always ask for your permission before accessing the camera, and we will only use it for the feature you are using at that time.",
              },
              {
                perm: "Read Media (Images)",
                desc: "We request access to your photos and other images stored on your device. We only access your media when you want to upload a photo for verification or share an image within the app. We will always ask for your permission before accessing your media, and we will only use it for the feature you are using at that time.",
              },
              {
                perm: "Access Device ID",
                desc: "This helps us uniquely identify your device for security purposes and analyse app usage trends without identifying you personally.",
              },
              {
                perm: "Access WiFi and Network State",
                desc: "This allows us to determine if you have an internet connection to use the app’s features and optimise data usage.",
              },
              {
                perm: "Access Biometric (Fingerprint)",
                desc: "This allows you to securely and quickly log into your account and authorise transactions within the app. You can choose whether or not to use biometric authentication. When you choose to use this feature, your fingerprint or biometric data is securely stored on your device and is not accessed or stored by our app or servers.",
              },
              {
                perm: "Post Notifications",
                desc: "This allows us to send you important updates, alerts, and reminders directly to your device (including savings progress and goal reminders). You can manage these notifications in your device settings at any time.",
              },
              {
                perm: "Storage",
                desc: "We request permission to access your device storage simply to save your transaction receipts and savings statements.",
              },
            ].map((item) => (
              <div
                key={item.perm}
                className="rounded-xl border border-[#660033]/10 bg-white p-3.5 text-xs shadow-sm md:text-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FFDF4C] text-xs font-bold text-[#660033]">
                    ✓
                  </span>
                  <span className="font-bold text-[#660033]">{item.perm}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#660033]/80 md:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "selfie-verification",
      title: "5. Selfie Verification & Liveness Detection",
      badge: "TrueDepth & Liveness",
      content: (
        <div className="space-y-4">
          <p>
            To verify your identity, Peep uses your selfie to verify that you
            are who you say you are. This process is cross-checked against your
            Bank Verification Number (BVN), National Identification Number
            (NIN), and other means of identification, including previously taken
            selfies. This process helps verify that the account belongs to the
            rightful owner. We retain your selfie information securely to
            support ongoing verification and safeguard your account against
            unauthorised access.
          </p>

          <div className="rounded-2xl border border-[#660033]/15 bg-[#FFDF4C]/20 p-4">
            <h4 className="font-bold text-[#660033]">
              Use of Facial Recognition and Liveness Detection:
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-[#660033]/90 md:text-sm">
              Peep integrates a third-party tool to detect liveness, verifying
              that a user is real before proceeding with identity verification.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#660033]/90 md:text-sm">
              On iOS, the SDK uses Apple’s <strong>TrueDepth API</strong> to
              detect faces in real time. TrueDepth data is processed entirely on
              the device and is used only for real-time analysis during
              verification.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-[#660033]/90 md:text-sm">
              <li>
                • <strong>No Storage:</strong> TrueDepth data is never stored on
                the device or transmitted outside the device.
              </li>
              <li>
                • <strong>No Sharing:</strong> The data is not shared with third
                parties beyond the liveness verification process.
              </li>
              <li>
                • <strong>Limited Usage:</strong> Once the liveness check is
                completed, the SDK captures a standard facial image, but
                TrueDepth data is discarded immediately after processing.
              </li>
              <li>
                • <strong>No Personal Identification:</strong> TrueDepth data is
                not used for identification or authentication.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "lawful-bases",
      title: "6. Lawful Bases of Processing",
      badge: "Legal Framework",
      content: (
        <div className="space-y-3">
          <p>
            Peep processes your data under at least one of these lawful bases:
          </p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {[
              {
                title: "Legitimate Interest",
                desc: "Processing your data is necessary for our legitimate interests or the legitimate interests of a third party, provided your rights and interests do not override those interests.",
              },
              {
                title: "Consent",
                desc: "You have given explicit consent for us to process your data for a specific purpose.",
              },
              {
                title: "Contract",
                desc: "If processing your data is necessary for the performance of a contract with us, or we have asked you to take specific steps before entering that contract.",
              },
              {
                title: "Legal Obligation",
                desc: "If the processing of your data is necessary to comply with a legal requirement to which we are subject.",
              },
            ].map((basis) => (
              <div
                key={basis.title}
                className="rounded-xl border border-[#660033]/10 bg-[#660033]/5 p-3.5 text-xs md:text-sm"
              >
                <p className="font-bold text-[#660033]">{basis.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#660033]/80">
                  {basis.desc}
                </p>
              </div>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "purposes-matrix",
      title: "7. Purposes of Processing & Lawful Bases",
      badge: "Processing Matrix",
      content: (
        <div className="overflow-x-auto rounded-2xl border border-[#660033]/10">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-[#660033] text-white">
              <tr>
                <th className="px-4 py-3 font-bold text-[#FFDF4C]">
                  Purpose of Processing
                </th>
                <th className="px-4 py-3 font-bold">Lawful Bases</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#660033]/10 bg-white text-[#660033]/90">
              <tr className="hover:bg-[#FFDF4C]/10">
                <td className="px-4 py-3 leading-relaxed">
                  • To help us develop, improve, customise or restructure our
                  services, including through survey outreach.
                  <br />
                  • To enforce our Terms of Service and any terms and conditions
                  of any other agreements for our services.
                  <br />• Sending reminders and keeping you updated on the
                  actions you perform on your account (including savings goals
                  and daily discipline reminders).
                </td>
                <td className="px-4 py-3 font-semibold text-[#660033]">
                  Legitimate interest, contract
                </td>
              </tr>
              <tr className="hover:bg-[#FFDF4C]/10">
                <td className="px-4 py-3 leading-relaxed">
                  • To process biometric data for user authentication when you
                  opt-in.
                  <br />• To send you marketing or promotional messages.
                </td>
                <td className="px-4 py-3 font-semibold text-[#660033]">
                  Consent
                </td>
              </tr>
              <tr className="hover:bg-[#FFDF4C]/10">
                <td className="px-4 py-3 leading-relaxed">
                  • To collect statistical data and product analytics including
                  user behavior, feature usage, and product funnel progress for
                  internal use and to enhance user experience.
                  <br />
                  • To send you service-related messages.
                  <br />• To analyse Application usage, maintain and improve the
                  content and functionality of our Application.
                </td>
                <td className="px-4 py-3 font-semibold text-[#660033]">
                  Legitimate interest
                </td>
              </tr>
              <tr className="hover:bg-[#FFDF4C]/10">
                <td className="px-4 py-3 leading-relaxed">
                  • To secure our Application and prevent fraud.
                  <br />• For ID verification and payment authentication.
                </td>
                <td className="px-4 py-3 font-semibold text-[#660033]">
                  Legitimate interest, legal obligation
                </td>
              </tr>
              <tr className="hover:bg-[#FFDF4C]/10">
                <td className="px-4 py-3 leading-relaxed">
                  • To manage your account.
                  <br />• To provide services to you (payments, savings, growth
                  tracking).
                </td>
                <td className="px-4 py-3 font-semibold text-[#660033]">
                  Contract
                </td>
              </tr>
              <tr className="hover:bg-[#FFDF4C]/10">
                <td className="px-4 py-3 leading-relaxed">
                  • To send you important updates and information about the
                  service, and to provide customer support when you need help.
                  <br />
                  • To facilitate and manage transactions and savings
                  contributions.
                  <br />
                  • To enable a seamless and user-friendly payment and savings
                  experience.
                  <br />• To send you important updates and information when you
                  opt-in for any Referral or growth Program.
                </td>
                <td className="px-4 py-3 font-semibold text-[#660033]">
                  Contract, Legitimate interest
                </td>
              </tr>
              <tr className="hover:bg-[#FFDF4C]/10">
                <td className="px-4 py-3 leading-relaxed">
                  • To interact with regulatory authorities or other public
                  authorities concerning your use of our Platform.
                  <br />
                  • To fulfil our Know Your Customer (KYC) obligation.
                  <br />• To inform you of any changes to our terms of business,
                  services, or our Privacy Notice.
                </td>
                <td className="px-4 py-3 font-semibold text-[#660033]">
                  Legal obligation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: "rights",
      title: "8. Your Rights as a Data Subject",
      badge: "User Rights",
      content: (
        <div className="space-y-4">
          <p>
            The law vests you with certain rights as a data subject. They
            include the right to:
          </p>
          <ul className="space-y-2 text-xs md:text-sm">
            {[
              "Access personal data we hold about you by requesting a copy;",
              "Rectify such information where you believe it to be inaccurate;",
              "Restrict the processing of your data in certain circumstances;",
              "Object to the processing of your data where we intend to process such data for marketing purposes;",
              "Where feasible, receive a copy of the personal data you have provided to us, in a structured, commonly used, and machine-readable format, and transmit the information to another data controller;",
              "Request the erasure of your data;",
              "Withdraw your consent to processing your data – in some instances, this can be done by opting out of certain communications;",
              "Lodge a complaint with the data protection authority where you have reason to believe that we have violated this Privacy Notice.",
            ].map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 rounded-lg bg-[#660033]/5 p-2.5"
              >
                <span className="font-bold text-[#660033]">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-[#660033]/15 bg-[#FFDF4C]/25 p-4 text-xs md:text-sm">
            <h4 className="font-bold text-[#660033]">
              Standard Notice to Address Grievance (SNAG) Procedure:
            </h4>
            <p className="mt-1 leading-relaxed text-[#660033]/90">
              You may also seek resolution of your concerns through a formal
              grievance process established by the Nigeria Data Protection
              Commission known as the “Data Subjects’ Standard Notice to Address
              Grievance” (SNAG) procedure. To submit a SNAG, please fill out the
              form available in Schedule 9 of GAID on the NDPC’s website or send
              an email to{" "}
              <a
                href="mailto:dpo@mypeepapp.com"
                className="font-bold text-[#660033] underline"
              >
                dpo@mypeepapp.com
              </a>{" "}
              with ‘SNAG’ in the subject line, outlining the details of your
              grievance.
            </p>
          </div>

          <p className="text-xs md:text-sm">
            You may seek to exercise any of the above rights at any time by
            emailing us at{" "}
            <a
              href="mailto:dpo@mypeepapp.com"
              className="font-bold text-[#660033] underline"
            >
              dpo@mypeepapp.com
            </a>
            . For information on how to close your Peep account, please visit
            the Help Center on the App or website.
          </p>
        </div>
      ),
    },
    {
      id: "sharing",
      title: "9. Who Do We Share Your Data With?",
      badge: "Partners & Third Parties",
      content: (
        <div className="space-y-4">
          <p>
            The following service providers support us to ensure the smooth
            running of the Product:
          </p>

          <div className="grid gap-3">
            {[
              {
                partner: "Nombank MFB / Nomba Financial Services",
                role: "Banking & Wallets",
                desc: "We partner with Nomba Financial Services and Nombank MFB to provide banking and wallet services. Virtual or savings accounts allow users to hold funds in their Peep Wallets. Deposits are NDIC-insured. Read their privacy notices as published by Nomba/Nombank.",
              },
              {
                partner: "Mono and Dojah",
                role: "Identity Verification & KYC",
                desc: "We use Mono and Dojah for identity verification, KYC, document verification and related checks to prevent duplicate account creation and fraud, and to meet our legal obligations.",
              },
              {
                partner: "Open Router (Embedded Analytics Model)",
                role: "Product Analytics",
                desc: "We use an embedded analytics model via Open Router to understand how people use our app so we can make it better and more useful. This supports product analytics and usage insights.",
              },
              {
                partner: "In-House Crash Reporting (ClickHouse)",
                role: "Crash & Error Monitoring",
                desc: "Crash and error reporting is handled in-house using ClickHouse. This helps us find and fix problems when our app unexpectedly closes and provides monitoring for a stable user experience.",
              },
              {
                partner: "Payment & Infrastructure Partners",
                role: "Core Operations",
                desc: "We use various payment and infrastructure partners to process payments, identify customers to avoid duplicate accounts, and deliver core services.",
              },
              {
                partner: "Legal and Regulatory Authorities",
                role: "Regulatory Compliance",
                desc: "We may disclose personal data to these bodies if necessary to protect any person’s safety or to address fraud, security, or technical issues, or where required by law.",
              },
            ].map((p) => (
              <div
                key={p.partner}
                className="rounded-xl border border-[#660033]/10 bg-white p-3.5 text-xs shadow-sm md:text-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="font-bold text-[#660033]">{p.partner}</h4>
                  <span className="rounded-full bg-[#FFDF4C]/40 px-2 py-0.5 text-[11px] font-semibold text-[#660033]">
                    {p.role}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#660033]/80 md:text-sm">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "retention",
      title: "10. Retention of Your Data",
      badge: "Retention Policy",
      content: (
        <div className="space-y-4">
          <p>
            The data and any other information we collect from you will be
            stored for as long as necessary to fulfil the purposes described in
            this Notice. However, we will also retain data in line with
            applicable laws, as well as to resolve disputes, prevent fraud and
            abuse, and enforce our legal agreements and policies.
          </p>

          <p>
            We will delete your data related to marketing purposes once you
            unsubscribe from our marketing communications by following the steps
            in Section 13 of this Notice. The facial liveness data collected to
            authenticate Tier 2 accounts will be deleted{" "}
            <strong>five (5) years</strong> after the authentication is
            completed, in line with our retention periods and statutory
            obligations around KYC data.
          </p>

          <p className="rounded-xl bg-[#660033]/5 p-3 text-xs text-[#660033]/85 italic md:text-sm">
            Please note that any transaction and KYC data may be retained
            longer, notwithstanding your request to remove it, where there is a
            legal requirement to do so.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      title: "11. How We Protect Your Data",
      badge: "Security & 2FA",
      content: (
        <div className="space-y-4">
          <p>
            We use strong technical and organisational measures to safeguard
            your data from unauthorised access or accidental loss. We adhere to
            data protection laws and best practices, implementing security
            protocols such as encryption, firewalls, and physical access
            controls. Our employees only access your data when necessary and are
            contractually bound to maintain its confidentiality.
          </p>

          <div className="rounded-2xl border border-[#660033]/15 bg-[#FFDF4C]/20 p-4">
            <h4 className="font-bold text-[#660033]">
              Industry Standards & Two-Factor Authentication:
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-[#660033]/90 md:text-sm">
              We comply with applicable payment industry security standards to
              secure financial information and maintain high standards of
              information security (including practices aligned with ISO/IEC
              27001 and related frameworks where applicable). This includes
              regular security updates. We have also added two-factor
              authentication (2FA) for extra security. You will need to enter a
              one-time password (OTP) where required for sensitive actions.
            </p>
          </div>

          <p>
            If there is a data breach that could harm your rights and freedoms,
            we will notify you promptly and take all necessary steps to resolve
            the issue.
          </p>
        </div>
      ),
    },
    {
      id: "transfers",
      title: "12. International Data Transfers",
      badge: "Cross-Border",
      content: (
        <div className="space-y-3">
          <p>
            Our services involve using third-party servers in other countries
            (for example cloud infrastructure providers). This means your data
            may be transferred abroad. We ensure your data is processed and
            protected in accordance with this Notice and relevant laws,
            regardless of location.
          </p>
          <p>
            When transferring data outside Nigeria, we take extra steps to
            protect it and choose reliable third parties. Please contact us for
            more information about data transfers to third countries, including
            our transfer methods. Furthermore, we transfer data when we have a
            legal obligation to do so, need to establish or defend a legal claim
            or have a public interest obligation.
          </p>
        </div>
      ),
    },
    {
      id: "marketing",
      title: "13. Marketing and Communications",
      badge: "Preferences",
      content: (
        <div className="space-y-3">
          <p>
            We only send marketing communications to you with your consent. You
            may opt out of our marketing or object to further processing by
            clicking on the ‘unsubscribe’ button at the bottom of marketing
            emails or by adjusting preferences in the App. You can also
            unsubscribe from any newsletters we share with you at any time by
            clicking the ‘unsubscribe’ button.
          </p>
        </div>
      ),
    },
    {
      id: "complaints",
      title: "14. Complaints & DPO Contact",
      badge: "DPO",
      content: (
        <div className="space-y-3">
          <p>
            If you are concerned about an alleged breach of data protection law
            or any other regulation by us, you can contact the Data Protection
            Officer (DPO) at{" "}
            <a
              href="mailto:dpo@mypeepapp.com"
              className="font-bold text-[#660033] underline"
            >
              dpo@mypeepapp.com
            </a>
            . The DPO will investigate your complaint and provide information
            about how it is handled.
          </p>
          <p>
            If you are still unsatisfied with the resolution of your complaint,
            you may escalate this to your local Data Protection Authority (for
            Nigeria, the <strong>Nigeria Data Protection Commission</strong>).
          </p>
        </div>
      ),
    },
    {
      id: "changes",
      title: "15. Changes to this Notice",
      badge: "Revisions",
      content: (
        <div className="space-y-3">
          <p>
            We occasionally update our privacy notice. We will notify our users
            when we make a change, and they will know this by checking the last
            update date on this page whenever they visit.
          </p>
          <p>
            If you have any questions relating to this Notice or your rights
            under this Notice or are not satisfied with how we manage your data,
            kindly reach out to our Data Protection Officer at{" "}
            <a
              href="mailto:dpo@mypeepapp.com"
              className="font-bold text-[#660033] underline"
            >
              dpo@mypeepapp.com
            </a>
            .
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#FFDF4C]/20 py-14 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#660033] px-4 py-1 text-xs font-semibold text-[#FFDF4C]">
            <span>NDPA 2023 Compliant</span>
            <span>•</span>
            <span>Updated 7 Oct 2026</span>
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#660033] uppercase md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#660033]/80 md:text-base">
            Learn how Peep collects, uses, protects, and manages your personal
            data and privacy across all our services.
          </p>
        </motion.div>

        {/* Accordion List structured exactly like Faqs.tsx and Terms.tsx */}
        <div className="mt-10 space-y-4">
          {PRIVACY_SECTIONS.map((item, i) => {
            const isOpen = openIndices.includes(i);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.03 }}
                className="rounded-2xl border border-[#660033]/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                layout
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                    <span className="text-base font-semibold text-[#660033] md:text-lg">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="inline-block w-fit rounded-full bg-[#FFDF4C]/50 px-2.5 py-0.5 text-[11px] font-bold text-[#660033]">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                      "border border-[#660033]/15",
                      isOpen
                        ? "bg-[#FFDF4C] text-[#660033]"
                        : "bg-white text-[#660033]",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <span className="text-xl leading-none">
                      {isOpen ? "×" : "+"}
                    </span>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -6 }}
                        animate={{ y: 0 }}
                        exit={{ y: -6 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="border-t border-[#660033]/10 px-6 pt-5 pb-6 text-sm leading-relaxed text-[#660033]/85 md:text-base"
                      >
                        {item.content}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl bg-[#660033] p-6 text-center text-white md:p-8"
        >
          <p className="text-sm font-bold text-[#FFDF4C] md:text-base">
            Peep Technologies Limited
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-white/80 md:text-sm">
            Peep is a product of Peep Technologies Ltd, in partnership with
            Nomba Financial Services. Banking services are provided by Nombank
            MFB. Deposits are NDIC-insured. Licensed by the Central Bank of
            Nigeria (CBN).
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold md:text-sm">
            <a
              href="mailto:dpo@mypeepapp.com"
              className="rounded-lg bg-[#FFDF4C] px-5 py-2.5 text-[#660033] transition hover:opacity-90"
            >
              DPO: dpo@mypeepapp.com
            </a>
            <a
              href="mailto:peep@mypeepapp.com"
              className="rounded-lg bg-white/10 px-5 py-2.5 text-white transition hover:bg-white/20"
            >
              Support: peep@mypeepapp.com
            </a>
            <Link
              href="/"
              className="rounded-lg bg-white/10 px-5 py-2.5 text-white transition hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
