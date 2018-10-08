function genPDF() {
	
	html2canvas(document.getElementById("downpdf"), {
	onrendered: function (canvas) {
		
		var img = canvas.toDataURL("http://laguaz.us/assets/images/logo-laguaznet.png");
		var doc = new jsPDF();
		doc.addImage(img, 'JPEG',20,20);
		dov.save('%category% - 
 %title%.pdf')
		
	}	
	});
}
