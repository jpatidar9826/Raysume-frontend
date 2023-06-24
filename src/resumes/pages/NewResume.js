/* Packages */
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/* CSS */
import "./NewResume.css";


/* Components */
import ResumeForm from "../components/ResumeFrom";
import Footer from "../../shared/components/Footer/Footer";



const NewResume = () => {

  const handleGeneratePdf = () => {
    const element = document.getElementsByClassName("sample")[0];
    const HTML_Width = element.offsetWidth;
    const HTML_Height = element.offsetHeight;
		const doc = new jsPDF('p', 'pt', [HTML_Width, HTML_Height]);

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(element, {
			async callback(doc) {
        const links = element.getElementsByTagName('a');
       for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const rect = link.getBoundingClientRect();

        // Convert the coordinates to PDF space
        const x = rect.left;
        const y = rect.top;
        const w = rect.width;
        const h = rect.height;

        // Add the link to the PDF
        doc.link(x, y, w, h, { url: link.href });
      }
				doc.save('document.pdf');
			},
		});
	};
  


    const CreatePDFfromHTML = () => {
    const element = document.getElementsByClassName("sample")[0];
    const HTML_Width = element.offsetWidth;
    const HTML_Height = element.offsetHeight;
    const top_left_margin = 10;
    const PDF_Width = HTML_Width;
    const PDF_Height = HTML_Height;
    const canvas_image_width = HTML_Width;
    const canvas_image_height = HTML_Height;
    const totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(element).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', 0, 0, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', 0,0,canvas_image_width,canvas_image_height);
        }
        pdf.save("ds.pdf");
        
    });
/*
    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      const links = element.getElementsByTagName('a');
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const rect = link.getBoundingClientRect();

        // Convert the coordinates to PDF space
        const x = rect.left;
        const y = rect.top;
        const w = rect.width;
        const h = rect.height;

        // Add the link to the PDF
        pdf.link(x, y, w, h, { url: link.href });
      }
     
    }); */

}



    return (
        /*<div className="preview-content-wrap">
        <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
            <div className="sample">

              <a href="https://www.overleaf.com/latex/templates/tagged/cv"><h1>My name is jayant</h1></a>

            </div>

        </div>*/
        <React.Fragment>
         <div className="preview-content-wrap">
              <ResumeForm></ResumeForm>
              
        </div>
          <Footer></Footer>
        </React.Fragment>
       
        
    );
};


export default NewResume;