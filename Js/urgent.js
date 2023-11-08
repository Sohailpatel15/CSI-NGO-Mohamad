function captureWebpageAsPDF() {

    html2canvas(document.body).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const imgWidth = 210; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        doc.save('webpage.pdf');
    });
}       