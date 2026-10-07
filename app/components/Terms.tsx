"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface TermSection {
  id: string;
  title: string;
  badge?: string;
  content: React.ReactNode;
}

export default function Terms() {
  // Allow toggling multiple or single accordion items. Default first item open.
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const TERMS_SECTIONS: TermSection[] = [
    {
      id: "overview",
      title: "Agreement Overview & Regulatory Disclosures",
      badge: "Core Agreement",
      content: (
        <div className="space-y-4">
          <p>
            Please read these Terms and Conditions carefully. They are an
            agreement between You (a <strong>“User”</strong> or{" "}
            <strong>“You”</strong>) and <strong>Peep Technologies Ltd</strong>,
            its successors, affiliates, and assignees (<strong>“Peep”</strong>,{" "}
            <strong>“We”</strong>, <strong>“Our”</strong> or{" "}
            <strong>“Us”</strong>) and define the terms upon which You may use
            Peep’s App (the <strong>“App”</strong>) to make payment transactions
            and use savings features (the <strong>“Service”</strong>) whether as
            a guest, registered User or on the authorisation of a registered
            User.
          </p>

          <div className="rounded-2xl border-l-4 border-[#660033] bg-[#FFDF4C]/25 p-4 text-xs leading-relaxed md:text-sm">
            <p className="font-bold text-[#660033]">
              Regulatory & Banking Partner Notice:
            </p>
            <p className="mt-1 text-[#660033]/90">
              Peep is a payment and savings application of Peep Technologies
              Ltd, offered in partnership with{" "}
              <strong>Nomba Financial Services</strong>. Banking services are
              provided by <strong>Nombank MFB</strong>. Deposits are{" "}
              <strong>NDIC-insured</strong>. The platform is licensed by the{" "}
              <strong>Central Bank of Nigeria (CBN)</strong>.
            </p>
          </div>

          <p>
            Before accessing or using the Service, You must read and agree to
            these Terms by selecting and clicking on <em>[“Continue”]</em>,{" "}
            <em>[“I Accept”]</em>, or any similar electronic indication of
            acceptance which We provide to You. By doing so, You accept these
            Terms and Peep’s Acceptable Use Policy which is incorporated by
            reference into these Terms. In the event of a conflict between these
            Terms and any terms incorporated by reference into these Terms, the
            incorporated terms shall prevail.
          </p>

          <p>
            We may modify these Terms without prior notice to You, provided that
            We reserve the right to notify You of any changes to the existing
            Terms or the addition of new terms by posting an updated version of
            these Terms on the App or delivering notice to You electronically.
            Your continued use of the Service in such instances will constitute
            Your acceptance of the updated Terms.
          </p>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "1. Eligibility",
      badge: "Requirements",
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-[#660033]">
            1. In order to access or use the Service, You must:
          </p>
          <ul className="space-y-2.5">
            {[
              "1. Accept and agree to these Terms and any additional terms incorporated by reference into these Terms, and review Our Privacy Policy;",
              "2. Be at least Eighteen (18) years old, with legal capacity to accept these Terms and enter into transactions with third parties; if You are a business or corporate organization, be a duly registered/incorporated entity;",
              "3. Provide accurate information for KYC. Nigerians in the diaspora use the Service under the same eligibility and verification standards as users resident in Nigeria;",
              "4. Ensure all information You shall provide to Us is true, accurate, current and complete including information submitted as part of the onboarding/know-your-customer process;",
              "5. Take steps to maintain and promptly update Your registration data to keep it true, accurate, current and complete;",
              "6. Not use the Service for any purpose and in any way that is illegal, contrary to Applicable Law or prohibited by these Terms or any terms incorporated by reference; and",
              "7. Have obtained all licenses, permissions, agreements, and other consents required to carry on Your business or to be bound by these Terms.",
            ].map((text, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 rounded-xl bg-[#660033]/5 p-3 text-xs md:text-sm"
              >
                <span className="font-bold text-[#660033]">•</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <p>
            <strong>2. Minor Notice:</strong> If You are a parent or guardian
            and become aware that Your child or ward has provided Us with any
            information without Your consent, please contact Us immediately at{" "}
            <a
              href="mailto:peep@mypeepapp.com"
              className="font-bold text-[#660033] underline"
            >
              peep@mypeepapp.com
            </a>
            .
          </p>

          <p>
            <strong>3. Additional KYC:</strong> Peep will also require You to
            complete additional know-your-customer verifications before You may
            complete the registration of an Account.
          </p>

          <p>
            <strong>4. Account Disabling:</strong> Subject to the Suspension and
            Termination clause, Peep has the right to disable any Account and or
            password at any time, if in Peep’s reasonable discretion, You have
            failed to comply with any of the provisions of these Terms, any
            terms incorporated by reference into this Agreement, or any
            Applicable Law.
          </p>

          <div className="rounded-xl border border-[#660033]/15 bg-[#FFDF4C]/20 p-4 text-xs md:text-sm">
            <p className="font-bold text-[#660033]">
              5. Account Security Responsibility:
            </p>
            <p className="mt-1 text-[#660033]/85">
              You are responsible for maintaining adequate security of Your
              Account login credentials and if You know or suspect that any
              unauthorised person has access to Your Account login details, You
              should immediately notify Us at{" "}
              <a
                href="mailto:peep@mypeepapp.com"
                className="font-bold text-[#660033] underline"
              >
                peep@mypeepapp.com
              </a>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "service",
      title: "2. The Service",
      badge: "P2P & Savings",
      content: (
        <div className="space-y-4">
          <p>
            1. The Peep App is a payment and savings application designed to
            simplify transfers and help users build daily savings discipline. It
            enables Users to receive and send money, set and track savings goals
            (<em>“Grow as you earn. Grow as you spend”</em>), and use a
            lifestyle-powered growth track that keeps users consistent so they
            can scale with their day-to-day activities. A User may access any of
            the following activities via the App (including such features as may
            be incorporated from time to time):
          </p>

          <div className="space-y-3">
            <div className="rounded-xl bg-[#660033]/5 p-4">
              <h4 className="font-bold text-[#660033]">
                1. Peer-to-Peer Transfers Services (“P2P” Services):
              </h4>
              <p className="mt-1 text-xs text-[#660033]/80 md:text-sm">
                Users can send and receive money from individuals and
                businesses. Users may choose a unique Username which serves as
                their account ID. Payments can be made to beneficiaries using
                the beneficiary’s unique username. As a User initiating a
                transfer of funds, the P2P Services enables You to send funds to
                a recipient by selecting the recipient (by username or other
                supported identifier) and the amount You wish to transfer (a
                “Payment Instruction”).
              </p>
            </div>

            <div className="rounded-xl bg-[#660033]/5 p-4">
              <h4 className="font-bold text-[#660033]">
                2. Savings & Growth Features:
              </h4>
              <p className="mt-1 text-xs text-[#660033]/80 md:text-sm">
                Users can create savings goals, contribute daily or on a
                schedule, track progress, and use lifestyle-powered growth tools
                designed to reinforce daily savings discipline.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#660033] p-4 text-white">
            <p className="font-bold text-[#FFDF4C]">
              Wallet & Funding Architecture:
            </p>
            <p className="mt-1 text-xs text-white/90 md:text-sm">
              Funds are held in wallet accounts provided through our partnership
              with <strong>Nombank MFB / Nomba Financial Services</strong>.
              Users do not link external payment cards or external bank accounts
              as funding methods on the App; funding and transfers operate
              through the Peep wallet and supported in-app mechanisms.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "account-registration",
      title: "3. Account Registration & Third-Party Providers",
      badge: "Onboarding & Partners",
      content: (
        <div className="space-y-4">
          <p>
            <strong>1. Account Creation:</strong> In order to use the Service,
            You will need to register an account (<strong>“Account”</strong>) on
            the Application by providing Peep with certain information,
            including but not limited to Your name, email address, phone number,
            Bank Verification Number (<strong>“BVN”</strong>) or National
            Identity Number (<strong>“NIN”</strong>), and such other information
            as we may request from time to time (collectively,{" "}
            <strong>“User Information”</strong>). You may also choose a unique
            Username which will be Your account ID and can be used by others to
            send You payments.
          </p>

          <p>
            <strong>2. Accuracy & Ownership:</strong> You represent and warrant
            that You own the email address or mobile phone number You register
            with, and all information entered or collected in the course of
            creating Your account and any information You subsequently add or
            update from Your settings is true, accurate, current and complete,
            and You agree not to misrepresent Your identity or Your User
            Information.
          </p>

          <p>
            <strong>3. Corporate Authority:</strong> If You are a business or
            corporate entity, You represent that the individual who opens an
            account on Your behalf is fully and legally authorized to do so on
            Your behalf.
          </p>

          <p>
            <strong>4. Device Requirements:</strong> You will need a mobile
            phone (iOS or Android enabled) and internet connection to use the
            App.
          </p>

          <p>
            <strong>5. Profile Rules:</strong> Upon registration, You will have
            a profile with other User Information. You agree not to use the
            profile feature to intentionally or unintentionally mislead or
            defraud or to directly or indirectly engage in fraudulent, illegal
            and or unauthorised activities. Also, You shall not upload or
            authorise any information on Your profile on the App that will
            amount to illegal, obscene, indecent, defamatory, libellous,
            deceptive, misleading, or otherwise objectionable information or
            content.
          </p>

          <div className="rounded-xl bg-[#FFDF4C]/20 p-4 text-xs text-[#660033] md:text-sm">
            <p className="font-bold">
              6. Collaboration with Licensed Financial Institutions:
            </p>
            <p className="mt-1">
              We will in collaboration with the Third Party Providers
              (particularly licensed Financial Institutions such as Nombank
              MFB), facilitate the provision of financial services such as
              creation of a wallet account, and the facilitation of electronic
              payments, to and from the wallet account provided by our Third
              Party Providers who are duly licensed by the Central Bank of
              Nigeria to provide each relevant Service.
            </p>
            <ul className="mt-2 space-y-1.5 pl-2">
              <li>
                • The wallet and savings account products or services accessible
                through Peep are offered and delivered exclusively by duly
                licensed third-party financial institutions that are authorised
                to operate under applicable Nigerian laws and regulations.
              </li>
              <li>
                • We reserve the right to add, remove, or modify the use of a
                Third Party Provider available on Peep at any time without prior
                notice to You.
              </li>
              <li>
                • Through our Application Programming Interface (API) and in-app
                tools, we will make available to you digital tools (such as
                dashboards, interfaces, and alerts) that support and enhance
                your interaction with the provided Services, including savings
                progress tracking.
              </li>
            </ul>
          </div>

          <p>
            <strong>7. Verification Authorisation:</strong> In order to provide
            the Services to You and to comply with Applicable Law, You authorize
            Us to obtain, verify, and record information directly or indirectly
            (through a third-party) that helps Us verify Your identity and other
            information You provide (valid ID, proof of address, etc.).
          </p>

          <p>
            <strong>8. Limited Power of Attorney:</strong> By using the App and
            providing User Information to Us, You authorize Us to obtain,
            directly or indirectly (through our third-party service providers)
            and without any time limit or fee, information about You from other
            third-party websites and databases as necessary to provide the
            Services. For this purpose, You grant Us and Our third-party service
            providers a limited power of attorney, appointing Us and our
            third-party service providers as Your true and lawful
            attorney-in-fact and agent.
          </p>

          <p>
            <strong>9. Taxes:</strong> You will be responsible for paying,
            withholding, filing, and reporting all taxes, duties, and other
            governmental assessments associated with Your activity in connection
            with the Service.
          </p>

          <p>
            <strong>10. Agency:</strong> When We or Our third-party service
            providers access and retrieve information from such third-party
            websites, We and our third-party service providers are acting as
            Your agent, and not the agent of the third party.
          </p>

          <p>
            <strong>11. Third-Party Data:</strong> We are not obliged to review
            information obtained from third-party websites and databases for any
            purpose. As between Us and Our third-party service providers, We own
            Your confidential User Information.
          </p>

          <p>
            <strong>12. Debit Authorisation:</strong> By accepting these Terms,
            each time You initiate a transfer to a recipient via the transfer
            Services, You authorize Us and the applicable bank or financial
            institution to debit the specified amount along with applicable
            charges from Your Peep wallet.
          </p>

          <p>
            <strong>13. Provision Authority:</strong> Your use of the Services
            means that You authorise Us to take all actions required for Your
            access to and/or our provision of the transfer and savings Services.
          </p>

          <p>
            <strong>14. Third-Party Access Liability:</strong> Granting
            permission to any third party to access your Peep account in any way
            does not relieve you of any of your responsibilities under this
            agreement. You are liable to us for the actions that you authorize
            the third parties to carry out.
          </p>
        </div>
      ),
    },
    {
      id: "ai-agents",
      title: "3.1 Connected Third-Party AI Agents",
      badge: "AI Features",
      content: (
        <div className="space-y-3">
          <p>
            • We may permit You to connect certain approved artificial
            intelligence-enabled third-party service providers (
            <strong>“Approved AI Agents”</strong>) to Your Peep Account.
          </p>
          <p>
            • Where You authorise an Approved AI Agent to connect to Your Peep
            Account, You permit such Approved AI Agent to access certain
            information relating to Your Peep Account and to initiate certain
            actions or transactions on Your behalf strictly within the scope of
            permissions granted by You during the connection process.
          </p>
          <p>
            • Any transaction, payment instruction, transfer instruction,
            account access request, or other action initiated through an active
            authorised connection with an Approved AI Agent shall be deemed
            authorised by You and validly initiated by You, provided such action
            was initiated within the scope of permissions granted by You through
            the connection process.
          </p>
          <p>
            • We may impose separate transaction limits, cumulative transaction
            limits, transaction frequency restrictions, behavioural monitoring
            controls, fraud prevention measures, additional authentication
            requirements, or other security restrictions on any transaction
            initiated by an Approved AI Agent.
          </p>
          <p>
            • We reserve the right to suspend, restrict, delay, reject, or
            terminate any transaction or activity initiated by an Approved AI
            Agent where we reasonably suspect fraud, the transaction exceeds
            risk thresholds, we are required by law, or continued access creates
            security, compliance, legal or operational risk.
          </p>
          <p>
            • Additional terms governing Your connection to an Approved AI Agent
            may be presented to You at the time of authorisation and shall form
            part of these Terms.
          </p>
          <div className="rounded-xl border border-[#660033]/15 bg-[#660033]/5 p-3 text-xs md:text-sm">
            <strong>Definition:</strong> <em>“Approved AI Agent”</em> means any
            artificial intelligence-enabled software, assistant, autonomous
            system, application, bot, agent, or third-party service provider
            approved by Peep Technologies Ltd to connect to and interact with
            Your Peep Account.
          </div>
        </div>
      ),
    },
    {
      id: "prohibited-uses",
      title: "3.2 Prohibited Uses & Transaction Controls",
      badge: "Compliance",
      content: (
        <div className="space-y-4">
          <p>
            <strong>Payment Refusal & Rejection:</strong> We may refuse to make
            a payment, or reject an incoming one if We suspect: it breaches Our
            legal or regulatory obligations; it’s outside Our risk appetite; We
            suspect You’re a victim of fraud; Your instructions are unclear; We
            suspect criminal activity on Your account; or it goes over any
            payment limit implemented by You, Us or required under Applicable
            Law.
          </p>

          <p>
            <strong>Limitation on Valid Transactions:</strong> You agree that
            Peep shall not be liable for any transfer or activities validly made
            via the use of this App. It is Your responsibility to protect Your
            User Information, credentials and personal information as contained
            in Your device from third parties.
          </p>

          <p>
            <strong>Fees:</strong> We may charge a fee to make use of the Peep
            Services subject to the fees applicable to such transaction that can
            be found on the Fees page or disclosed in-app. The applicable fees
            will be disclosed to you each time you initiate a transaction.
          </p>

          <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 text-xs text-red-950 md:text-sm">
            <p className="font-bold">
              Prohibited Uses List (Representative, Not Exhaustive):
            </p>
            <ul className="mt-2 space-y-1.5 pl-2">
              <li>
                1. Any activity which violates, or assists in the violation of
                any law, statute, regulation, or sanctions in Nigeria or other
                applicable jurisdictions.
              </li>
              <li>
                2. Any activity which defrauds Peep, or other Users of this App,
                any Users of any third-party applications or payment services,
                or provides any false, inaccurate or misleading information to
                Peep.
              </li>
              <li>
                3. Payments related to cryptocurrency; this includes
                transactions including non-fungible tokens (NFTs) unless to the
                extent permitted under Applicable Law.
              </li>
              <li>
                4. Any activity that involves money laundering, terrorist
                financing, or other financial crime.
              </li>
              <li>
                5. Any use that undermines the daily savings discipline features
                for fraudulent or abusive purposes.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "4. Data Security, Privacy & Protection",
      badge: "NDPA 2023",
      content: (
        <div className="space-y-4">
          <p>
            <strong>1. NDPA Compliance:</strong> Peep processes personal data in
            accordance with applicable Data Protection Law, including the{" "}
            <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and Nigeria
            Data Protection Act General Application and Implementation Directive
            (NDP Act GAID).
          </p>

          <p>
            <strong>2. Privacy Policy:</strong> Peep’s Privacy Policy, which can
            be accessed at{" "}
            <a
              href="https://mypeepapp.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#660033] underline"
            >
              https://mypeepapp.com/privacy
            </a>{" "}
            provides additional information regarding our processing activities.
          </p>

          <p>
            <strong>3. Device Confidentiality:</strong> You agree not to permit
            any other individual or entity to utilize Your User Information or
            mobile device to access the App. You are solely responsible for
            maintaining the confidentiality and security of Your Username,
            password, and other User Information.
          </p>

          <div className="rounded-2xl border-2 border-[#FFDF4C] bg-[#FFDF4C]/25 p-4 text-xs text-[#660033] md:text-sm">
            <p className="font-black">🔒 Critical Security Alert:</p>
            <p className="mt-1 font-medium">
              Please be aware that{" "}
              <strong>
                we will never request Your complete PIN, OTP/token codes,
                passwords, BVN, or any sensitive financial information
              </strong>{" "}
              through phone calls, text messages, WhatsApp, or emails. If You
              suspect or detect any unauthorized access, promptly notify Us at{" "}
              <a
                href="mailto:peep@mypeepapp.com"
                className="font-bold underline"
              >
                peep@mypeepapp.com
              </a>
              .
            </p>
          </div>

          <p>
            <strong>5. Confidential Information:</strong> Each Party will take
            all reasonable precautions to protect Confidential Information of
            the other party. Disclosure to third parties is limited to
            Affiliates, Payment Method Providers and service providers under
            appropriate confidentiality obligations, or where required by law.
          </p>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "5. Content & Intellectual Property",
      badge: "IP Rights",
      content: (
        <div className="space-y-4">
          <p>
            <strong>1. Uploaded Content Standards:</strong> If You upload any
            Content onto the App – such Content must comply with the following
            rules: it must not be obscene, abusive, offensive or racist; it must
            not harass or bully another person; it must be true and honest; it
            must not be defamatory or unlawful; it must not infringe the rights
            or privacy of anyone else; it must not contain someone else’s
            personal details or confidential information; it must not promote or
            condone terrorism, violence or illegal behaviour; and it must not
            otherwise bring Peep or its service partners into disrepute.
          </p>

          <p>
            <strong>2. Third-Party Content:</strong> Peep does not control any
            third-party content, sites, or applications, and We are not
            responsible or liable for the availability, accuracy, completeness,
            or reliability of third-party content.
          </p>

          <p>
            <strong>3. Proprietary Ownership:</strong> Peep and its licensors
            own all rights to the Application and the Services. You may not
            modify, reverse engineer, create derivative works from, or
            disassemble any part of the App or Service.
          </p>

          <p>
            <strong>4. User License:</strong> Peep grants You a fully paid-up,
            worldwide, non-exclusive, non-transferable, royalty-free, revocable
            licence to use the Service, provided that You comply with these
            Terms and any Applicable Law.
          </p>

          <p>
            <strong>5. License to Peep:</strong> You hereby grant Peep a
            perpetual, irrevocable, sub-licensable, worldwide, royalty-free
            transferable licence to use Content You upload for the purposes of
            providing and promoting the Service.
          </p>

          <p>
            <strong>6. Feedback:</strong> Any Feedback You provide relating to
            the Application or Service shall be exclusively owned by Peep.
          </p>
        </div>
      ),
    },
    {
      id: "termination",
      title: "6. Suspension, Restriction and Termination",
      badge: "Account Closure",
      content: (
        <div className="space-y-4">
          <div className="rounded-xl bg-[#660033]/5 p-3.5">
            <h4 className="font-bold text-[#660033]">
              1. Termination by a User
            </h4>
            <p className="mt-1 text-xs text-[#660033]/85 md:text-sm">
              You may terminate these Terms by withdrawing Your funds from the
              App and deleting Your account on the App. However, if Your Account
              is in dispute or under investigation of any kind or in the event
              You owe any fees, You will not be able to make a cancellation
              until such dispute/fees owed have been resolved.
            </p>
          </div>

          <div className="rounded-xl bg-[#660033]/5 p-3.5">
            <h4 className="font-bold text-[#660033]">
              2. Restriction, Suspension, and Termination by Peep
            </h4>
            <p className="mt-1 text-xs text-[#660033]/85 md:text-sm">
              Peep may terminate these Terms by closing and permanently
              disabling Your Account. Without limiting other rights, Peep may
              (subject to any limits under Applicable Law) issue a warning,
              remove Content, restrict or suspend Your right to use the Service,
              block access, institute legal proceedings, or disclose information
              to law enforcement/regulatory authorities as reasonably necessary.
            </p>
          </div>

          <div className="rounded-xl bg-[#660033]/5 p-3.5">
            <h4 className="font-bold text-[#660033]">
              3. Consequences of Termination
            </h4>
            <p className="mt-1 text-xs text-[#660033]/85 md:text-sm">
              On termination: Your Account will be deleted along with all data
              (subject to any Applicable Law which mandates retention); Your
              access to the Service will be revoked; and the licence granted
              under the Intellectual Property clause will cease. On termination
              of Your Account by Us, You will be prohibited from creating any
              further Account(s). Provisions intended to survive termination
              will remain in full force and effect.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "disclaimer",
      title: "7. Disclaimer",
      badge: "Warranties",
      content: (
        <div className="space-y-3 text-xs leading-relaxed font-medium text-[#660033]/90 uppercase md:text-sm">
          <p>
            WE TRY TO KEEP THE APP AVAILABLE AT ALL TIMES, BUG-FREE AND SAFE,
            HOWEVER, YOU USE IT AT YOUR OWN RISK.
          </p>
          <p>
            THE APP IS PROVIDED “AS IS” WITHOUT ANY EXPRESS, IMPLIED AND/OR
            STATUTORY WARRANTIES (INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED OR
            STATUTORY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, OR NON-INFRINGEMENT). PEEP MAKES NO WARRANTY THAT THE APP
            AND THE SERVICE WILL MEET YOUR REQUIREMENTS OR THAT THE APP WILL BE
            UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. NO ADVICE OR
            INFORMATION OBTAINED BY YOU THROUGH THE APP OR FROM PEEP SHALL
            CREATE ANY WARRANTY.
          </p>
        </div>
      ),
    },
    {
      id: "liability",
      title: "8. Limitations of Liability",
      badge: "Liability",
      content: (
        <div className="space-y-3 text-xs leading-relaxed font-medium text-[#660033]/90 uppercase md:text-sm">
          <p>
            IN NO EVENT WILL PEEP OR ITS AFFILIATES BE LIABLE FOR (A) ANY
            INDIRECT, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OR
            (B) ANY DAMAGES WHATSOEVER IN EXCESS OF THE AMOUNT OF THE
            TRANSACTION OR THE ACTUAL AMOUNT OF DIRECT DAMAGES, WHICHEVER IS
            LESSER, ARISING OUT OF OR IN CONNECTION WITH PEEP’S SERVICES,
            HOWEVER ARISING, INCLUDING NEGLIGENCE, WHETHER BASED ON WARRANTY,
            CONTRACT, TORT, STATUTE, OR ANY OTHER LEGAL THEORY UNLESS AND TO THE
            EXTENT PROHIBITED BY LAW.
          </p>
          <p>
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES
            OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN DAMAGES.
            ACCORDINGLY, SOME OF THE ABOVE DISCLAIMERS AND LIMITATIONS MAY NOT
            APPLY TO YOU. TO THE EXTENT ANY PEEP PARTY MAY NOT DISCLAIM ANY
            IMPLIED WARRANTY OR LIMIT ITS LIABILITIES, THE SCOPE AND DURATION OF
            SUCH WARRANTY AND THE EXTENT OF LIABILITY SHALL BE THE MINIMUM
            PERMITTED UNDER APPLICABLE LAW.
          </p>
        </div>
      ),
    },
    {
      id: "miscellaneous",
      title: "9. Miscellaneous & Governing Law",
      badge: "Jurisdiction",
      content: (
        <div className="space-y-3">
          <p>
            <strong>1. Updates to Terms:</strong> We may update these Terms from
            time to time. We will post such changes on our website and/or App.
            Your continued use of the Service will constitute Your consent to
            the revised Terms. If You do not agree, You may delete Your account.
            Contact:{" "}
            <a
              href="mailto:peep@mypeepapp.com"
              className="font-bold text-[#660033] underline"
            >
              peep@mypeepapp.com
            </a>
            .
          </p>
          <p>
            <strong>2. Indemnification:</strong> At Our request, You agree to
            defend, indemnify, and hold Peep harmless from and against any and
            all claims, suits, liabilities, damages, losses, fines, penalties,
            costs, and expenses arising from or related to Your use of the
            Service, violation of these Terms, Applicable Law, any third-party
            rights, Your fraud, negligence or wilful misconduct.
          </p>
          <p>
            <strong>3. No Waiver:</strong> The failure of either party to
            exercise any right under these Terms will not be deemed a waiver of
            any further rights.
          </p>
          <p>
            <strong>4. Severability:</strong> If any provision is determined to
            be unlawful, void or unenforceable, it shall be severed but shall
            not affect the validity and enforceability of the remaining
            provisions.
          </p>
          <p>
            <strong>5. Assignment:</strong> You cannot assign or transfer Your
            rights under these Terms without our prior written permission. Peep
            may assign its rights to any affiliate or third party with
            reasonable notice.
          </p>
          <p>
            <strong>6. Force Majeure:</strong> We shall not be liable for any
            delay or failure to perform as a result of any cause beyond our
            reasonable control (force majeure), including acts of God, epidemic,
            pandemic, war, strike, telecommunications or network failures, or
            equipment/software failure.
          </p>
          <p>
            <strong>7. Entire Agreement:</strong> These Terms together with all
            documents incorporated by reference constitute the entire agreement
            between You and Us and supersede all previous agreements relating to
            its subject matter.
          </p>
          <div className="rounded-xl bg-[#660033] p-4 text-white">
            <h4 className="font-bold text-[#FFDF4C]">
              8. Governing Law & Jurisdiction:
            </h4>
            <p className="mt-1 text-xs text-white/90 md:text-sm">
              These Terms and any dispute arising out of or in connection with
              them shall be governed by and construed in accordance with the
              laws of the <strong>Federal Republic of Nigeria</strong>. The
              courts of Nigeria shall have exclusive jurisdiction.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "definitions",
      title: "10. Key Definitions",
      badge: "Glossary",
      content: (
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              term: "Applicable Law",
              desc: "All applicable laws, statutes, regulations, directives, guidelines and codes of practice in Nigeria and any other jurisdiction that applies to the Service.",
            },
            {
              term: "Personal Data",
              desc: "Any information relating to an identified or identifiable natural person.",
            },
            {
              term: "Prohibited Uses",
              desc: "Any business activities prohibited by any Applicable Law or which an organization is not licensed to undertake.",
            },
            {
              term: "Third-Party Providers",
              desc: "Licensed financial institutions (including Nombank MFB / Nomba Financial Services), identity providers (including Mono and Dojah), or any third-party supplier that we collaborate with to provide the Services.",
            },
            {
              term: "Wallet Account",
              desc: "A bank or virtual account created on Peep in collaboration with licensed third-party financial institutions who are eligible to hold funds, through which you can initiate transactions, receive funds, and participate in savings features on Peep.",
            },
            {
              term: "Username",
              desc: "The unique identifier chosen by a User that can be used to receive payments from other Users on the Platform.",
            },
          ].map((def) => (
            <div
              key={def.term}
              className="rounded-xl border border-[#660033]/10 bg-[#FFDF4C]/10 p-3.5"
            >
              <h4 className="text-sm font-bold text-[#660033]">{def.term}</h4>
              <p className="mt-1 text-xs leading-relaxed text-[#660033]/80">
                {def.desc}
              </p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#FFDF4C]/20 py-14 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header matching Faqs.tsx style */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#660033] px-4 py-1 text-xs font-semibold text-[#FFDF4C]">
            <span>Legal & Regulatory</span>
            <span>•</span>
            <span>Updated 7 Oct 2026</span>
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#660033] uppercase md:text-6xl">
            Terms &amp; Conditions
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#660033]/80 md:text-base">
            Please read these terms and conditions carefully. They govern your
            use of the Peep payment and savings application.
          </p>
        </motion.div>

        {/* Accordion List structured exactly like Faqs.tsx */}
        <div className="mt-10 space-y-4">
          {TERMS_SECTIONS.map((item, i) => {
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

        {/* Regulatory & Contact Footer Card */}
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
              href="mailto:peep@mypeepapp.com"
              className="rounded-lg bg-[#FFDF4C] px-5 py-2.5 text-[#660033] transition hover:opacity-90"
            >
              Contact: peep@mypeepapp.com
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
