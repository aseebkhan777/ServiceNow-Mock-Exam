import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation, useNavigate } from "react-router-dom";

function Certificate({ name="Irfan Ahmad Wani",certName="HRSD" }) {
  const certificateRef = useRef(null);
  const { state } = useLocation(); // Get state passed from Home

  // Function to download the certificate as PDF
  const downloadPDF = () => {
    const certificate = certificateRef.current;
    html2canvas(certificate).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  let dateTime = new Date();
  let day = dateTime.getDay();
  let month = dateTime.getMonth();
  let year = dateTime.getFullYear();
  let issuedOn = `${day}-${month + 1}-${year}`; // Adding 1 to month to display correctly

  return (
    <>
    <div className="flex flex-col gap-2">
      <div
        ref={certificateRef}
        className="bg-[#032d42] p-6 grid grid-cols-5 w-[70vw] h-[80vh] gap-4"
      >
        <div className="bg-white col-span-4 p-4 rounded-md flex flex-col gap-10 py-10 px-10">
          <div>
            <h1 className="font-bold text-5xl">{name}</h1>
          </div>
          <div className="flex-1 flex justify-center flex-col">
            Successfully completed certification requirement for <br />
            <span className="font-bold">
              Eligibility Certification for ServiceNow-{certName}
            </span>
            <br />
            <span>Issued on <span className="font-bold underline">{issuedOn}</span></span>
          </div>
          <div className="w-full flex flex-col items-end justify-end pe-3">
            <div className="w-[250px] flex flex-col justify-center">
              <img
                src="/public/signature.png"
                alt="signature"
                className="w-full h-auto"
              />
              <hr className="border-2 border-gray-600 w-full" />
              <h1 className="font-extrabold">Shayan Beigh</h1>
              <h1 className="font-bold">
                <span className="font-extrabold">ICC Member,</span> EnableNow
                Technology Solutions Pvt. Ltd.
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-white flex flex-col">
          <div className="flex-1 text-3xl font-extrabold tracking-wider">
            enablen<span className="text-green-400">o</span>w
          </div>
          <div className="flex flex-col gap-0 uppercase tracking-wider">
            <span className="text-xl font-extrabold text-green-400">The</span>
            <span className="text-xl font-extrabold text-green-400">World</span>
            <span className="text-xl font-extrabold text-green-400">Works</span>
            <span className="text-xl font-extrabold text-green-400">With</span>
            <span className="text-xl font-extrabold text-green-400">
              enable<span className="text-white">now</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-4">
        <button
          onClick={downloadPDF}
          className="bg-[#032d42] text-white px-4 py-2 rounded-md"
        >
          Download as PDF
        </button>
      </div>
      </div>
    </>
  );
}

export default Certificate;
