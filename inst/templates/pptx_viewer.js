        import { PptxScrollViewer } from "/assets/pptx.mjs";
        
        async function init() {
            const container = document.getElementById("pptx-scroll");
            const pptx = new PptxScrollViewer(container);
        
            const res = await fetch("./workbook.pptx");
            const blob = await res.blob();
            const fileUrl = URL.createObjectURL(blob);
        
            await pptx.load(fileUrl);
            URL.revokeObjectURL(fileUrl);
        }
        
        init().catch(console.error);
