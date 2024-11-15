import { PDFDocument } from 'pdf-lib';

export async function getPageCount(file: File): Promise<number> {
  try {
    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    
    // Load the PDF document
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    
    // Get the page count
    return pdfDoc.getPageCount();
  } catch (error) {
    console.error('Error getting page count:', error);
    throw error;
  }
}

// Usage example:
const handleFileUpload = async (file: File) => {
  if (file.type === 'application/pdf') {
    try {
      const pageCount = await getPageCount(file);
      console.log(`This PDF has ${pageCount} pages`);
    } catch (error) {
      console.error('Failed to get page count:', error);
    }
  }
};