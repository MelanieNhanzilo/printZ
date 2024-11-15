import { getPageCount } from "./pdf";

function getImagePageCount(file: File): Promise<number> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      // A4 dimensions in pixels at 300 DPI
      const A4_WIDTH = 2480;  // 210mm at 300 DPI
      const A4_HEIGHT = 3508; // 297mm at 300 DPI
      
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        
        // Calculate how many A4 pages would be needed
        const pagesNeeded = Math.ceil(height / A4_HEIGHT);
        
        resolve(pagesNeeded);
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      // Create object URL for the file
      img.src = URL.createObjectURL(file);
    });
  }
  
  // Combined function for different file types
  async function calculatePages(file: File): Promise<{ pages: number; error?: string }> {
    try {
      switch (file.type) {
        case 'application/pdf':
          const pdfPages = await getPageCount(file);
          return { pages: pdfPages };
          
        case 'image/jpeg':
        case 'image/png':
        case 'image/gif':
          const imagePages = await getImagePageCount(file);
          return { pages: imagePages };
          
        default:
          return { 
            pages: 0, 
            error: 'Tipo de arquivo não suportado para cálculo de páginas' 
          };
      }
    } catch (error) {
      return { 
        pages: 0, 
        error: 'Erro ao calcular número de páginas' 
      };
    }
  }
  
  // Usage example:
  const handleFileSelection = async (file: File) => {
    try {
      const result = await calculatePages(file);
      
      if (result.error) {
        console.error(result.error);
        return;
      }
      
      console.log(`Este arquivo necessitará de ${result.pages} página(s) A4 para impressão`);
      
      // Calculate price based on page count
      const pricePerPage = 0.50; // Example: R$ 0.50 per page
      const totalPrice = result.pages * pricePerPage;
      
      console.log(`Preço estimado: R$ ${totalPrice.toFixed(2)}`);
      
    } catch (error) {
      console.error('Erro ao processar arquivo:', error);
    }
  };
