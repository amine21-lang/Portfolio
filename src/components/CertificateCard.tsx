type Certificate={
    id: number;
    title: string;
    imageUrl: string;
    issuer: string;
    date: string;
    credentialUrl: string;

}
const CertificateCard = ({ certificate }: { certificate: Certificate }) => (
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6 flex flex-col items-center max-w-md mx-auto">
    <img
      src={certificate.imageUrl}
      alt={certificate.title}
      className="w-full h-48 object-cover rounded-lg shadow-md mb-6"
    />
    <h3 className="text-2xl font-bold mb-3 text-white text-center">
      {certificate.title}
    </h3>
    <p className="text-gray-300 mb-4 text-center">ssued by: {certificate.issuer}</p>

    
        <p className="text-gray-300 mb-4 text-center">
            Date: {certificate.date}
        </p>
        <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#243c4b] rounded-lg hover:bg-[#2A4759] transition text-white font-semibold text-center"
        >
            View Credential
        </a>
    </div>
);
export default CertificateCard;
