export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface MacroImage {
  name: string;
  url?: string;
  previewType?: "caja" | "factura" | "carta" | "impresora" | string;
}

export interface Macro {
  id: string;
  title: string;
  category: "arqueos" | "facturacion" | "carta-digital" | "configuracion" | string;
  categoryLabel: string;
  categoryColor?: string;
  text: string;
  image?: MacroImage;
  updatedAt: string;
  isFavorite: boolean;
}

export const categories: Category[] = [
  { id: "todas", name: "Todas las macros", icon: "LayoutGrid" },
  { id: "arqueos", name: "Arqueos", icon: "WalletCards" },
  { id: "facturacion", name: "Facturación", icon: "ReceiptText" },
  { id: "carta-digital", name: "Carta Digital", icon: "Smartphone" },
  { id: "configuracion", name: "Configuración", icon: "Settings" },
];

export const initialMacros: Macro[] = [
  {
    id: "macro-1",
    title: "Diferencia en el cierre de caja",
    category: "arqueos",
    categoryLabel: "ARQUEOS",
    categoryColor: "purple",
    text: "¡Hola! 👋 Entiendo que encontraste una diferencia al cerrar la caja. Para revisarlo, ingresá a Reportes → Movimientos de caja y compará los ingresos registrados con los medios de pago. Te dejo una guía visual para que puedas resolverlo paso a paso.",
    image: {
      name: "Movimientos de caja.png",
      url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      previewType: "caja",
    },
    updatedAt: "hace 2 días",
    isFavorite: true,
  },
  {
    id: "macro-2",
    title: "Cómo anular una factura electrónica",
    category: "facturacion",
    categoryLabel: "FACTURACIÓN",
    categoryColor: "blue",
    text: "¡Claro! 🧾 Las facturas electrónicas emitidas no se eliminan: se anulan generando una nota de crédito. Entrá a Facturación, buscá el comprobante y seleccioná 'Crear nota de crédito'. El sistema completará los datos automáticamente.",
    image: {
      name: "Detalle del comprobante.png",
      url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
      previewType: "factura",
    },
    updatedAt: "ayer",
    isFavorite: false,
  },
  {
    id: "macro-3",
    title: "Producto no visible en la Carta Digital",
    category: "carta-digital",
    categoryLabel: "CARTA DIGITAL",
    categoryColor: "emerald",
    text: "¡Vamos a revisarlo! 📱 Verificá que el producto esté activo, tenga precio y pertenezca a una categoría visible. Después, ingresá a Carta Digital → Configuración y pulsá 'Actualizar carta' para publicar los cambios.",
    image: {
      name: "Carta digital config.png",
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      previewType: "carta",
    },
    updatedAt: "hace 3 horas",
    isFavorite: false,
  },
  {
    id: "macro-4",
    title: "Configurar impresoras de comandas y tickets",
    category: "configuracion",
    categoryLabel: "CONFIGURACIÓN",
    categoryColor: "orange",
    text: "¡Hola! 🖨️ Para vincular tu impresora de comandas, dirígete a Configuración → Impresoras y seleccioná 'Nueva impresora'. Asegurate de tener encendido el servicio Fudo Print en tu computadora principal.",
    image: {
      name: "Configuracion impresoras.png",
      url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      previewType: "impresora",
    },
    updatedAt: "hace 5 días",
    isFavorite: true,
  },
  {
    id: "macro-5",
    title: "Apertura de turno y fondo inicial",
    category: "arqueos",
    categoryLabel: "ARQUEOS",
    categoryColor: "purple",
    text: "¡Hola! 💵 Al iniciar la jornada, ingresá a Turnos → Abrir turno y colocá el monto en efectivo con el que comenzás. Esto garantizará que el arqueo final coincida a la perfección.",
    image: {
      name: "Apertura de turno.png",
      previewType: "caja",
    },
    updatedAt: "hace 1 semana",
    isFavorite: false,
  },
  {
    id: "macro-6",
    title: "Puntos de venta AFIP y certificado digital",
    category: "facturacion",
    categoryLabel: "FACTURACIÓN",
    categoryColor: "blue",
    text: "¡Buenas! 🏛️ Si necesitás renovar el certificado digital o cambiar el punto de venta de AFIP, subí el archivo .crt en Configuración → Facturación electrónica y guardá las credenciales.",
    image: {
      name: "Certificado AFIP.png",
      previewType: "factura",
    },
    updatedAt: "hace 4 días",
    isFavorite: false,
  },
];
