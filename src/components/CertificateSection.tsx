import CertificateCard from "./CertificateCard";
import FoundationImg from "../assets/foundation.png";
import AssociateJava8 from "../assets/AssociateJava8.png";

export const certificates = [
  // {
  //   id: 1,
  //   title: " Oracle Certified Professional, Java SE 8 Programmer II (1Z0-809)",
  //   issuer: "Oracle",
  //   date: "31 October 2025",
  //   imageUrl: "https://www.yourimageurl.com/1",
  //   credentialUrl:
  //     "/",
  // },
  {
    id: 2,
    title: "Oracle Certified Associate, Java SE 8 Programmer I (1Z0-808)",
    issuer: "Oracle",
    date: "29 October 2025",
    imageUrl: AssociateJava8,
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=51B1593AA2748788BA7C3DFFFA759D0FD4191FEA3D3E19A2C47E67C7F406EEB1",
  },
  {
    id: 3,
    title: "Oracle Certified Foundations Associate, Java",
    issuer: "Oracle",
    date: "30 January 2025",
    imageUrl: FoundationImg,
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=example2",
  },
];

const CertificationSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold text-white mb-12 text-center">
      My Certifications
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </div>
  </section>
);

export default CertificationSection;
