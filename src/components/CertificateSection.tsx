import CertificateCard from "./CertificateCard";
import FoundationImg from "../assets/Foundation.png";
import AssociateJava8 from "../assets/AssociateJava8.png";
import ProJava8 from "../assets/Oracle Certified Professional, Java SE 8 Programmer.png";

export const certificates = [
  {
    id: 1,
    title: " Oracle Certified Professional, Java SE 8 Programmer II (1Z0-809)",
    issuer: "Oracle",
    date: "03 October 2025",
    imageUrl: ProJava8,
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=182D7A4055B77F89E3693DB3C00DF238B1A1D5BABCA54CF38326B6803CEC2BDD",
  },
  {
    id: 2,
    title: "Oracle Certified Associate, Java SE 8 Programmer I (1Z0-808)",
    issuer: "Oracle",
    date: "29 October 2025",
    imageUrl: AssociateJava8,
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8041AD0DBDB3188AA5CE4DFA42576786512851B7956FC4F7DA1BAC1BDA8F4195",
  },
  {
    id: 3,
    title: "Oracle Certified Foundations Associate, Java",
    issuer: "Oracle",
    date: "30 January 2025",
    imageUrl: FoundationImg,
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5F1A70F55036A785A0BB6FF937811D55D56F98195CE91748CF286D50856E682F",
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
