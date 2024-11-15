import { getPageCount } from "./pdf";

interface PrintSettings {
    dpi: number;
    margins: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    orientation: 'portrait' | 'landscape';
  }
  
  const DEFAULT_PRINT_SETTINGS: PrintSettings = {
    dpi: 300,
    margins: {
      top: 25.4,    // 1 inch in mm
      right: 25.4,
      bottom: 25.4,
      left: 25.4
    },
    orientation: 'portrait'
  };
  
  function getA4Dimensions(settings: PrintSettings) {
    const A4_WIDTH_MM = 210;  // A4 width in mm
    const A4_HEIGHT_MM = 297; // A4 height in mm
    
    // Convert mm to pixels at given DPI
    const mmToPixels = (mm: number) => Math.round((mm * settings.dpi) / 25.4);
    
    const printableWidth = mmToPixels(A4_WIDTH_MM - settings.margins.left - settings.margins.right);
    const printableHeight = mmToPixels(A4_HEIGHT_MM - settings.margins.top - settings.margins.bottom);
    
    return settings.orientation === 'portrait'
      ? { width: printableWidth, height: printableHeight }
      : { width: printableHeight, height: printableWidth };
  }
  
export  async function calculatePrintPages(
    file: File, 
    settings: PrintSettings = DEFAULT_PRINT_SETTINGS
  ): Promise<{ pages: number; error?: string }> {
    const dimensions = getA4Dimensions(settings);
    
    try {
      switch (file.type) {
        case 'application/pdf':
          return { pages: await getPageCount(file) };
          
        case 'image/jpeg':
        case 'image/png':
        case 'image/gif': {
          const img = await createImageBitmap(file);
          
          // Calculate scaling to fit width while maintaining aspect ratio
          const scale = dimensions.width / img.width;
          const scaledHeight = img.height * scale;
          
          // Calculate pages needed
          const pages = Math.ceil(scaledHeight / dimensions.height);
          
          return { pages };
        }
        
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