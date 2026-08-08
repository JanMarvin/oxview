        import { DocxScrollViewer } from "/assets/docx.mjs";
        
        async function init() {
            const container = document.getElementById("docx-scroll");
            const docx = new DocxScrollViewer(container);
        
            const res = await fetch("./workbook.docx");
            const blob = await res.blob();
            const fileUrl = URL.createObjectURL(blob);
        
            await docx.load(fileUrl);
            URL.revokeObjectURL(fileUrl);
        }
        
        init().catch(console.error);
