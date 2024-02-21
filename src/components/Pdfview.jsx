// eslint-disable-next-line react/prop-types
function Pdfview({ PdfUrl }) {
    return (
      <>
        <iframe
          title="PDF Preview"
          src={PdfUrl}
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </>
    );
  }
  
  export default Pdfview;
  