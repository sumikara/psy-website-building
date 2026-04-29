export const laboratuvarCategoryLabels = {
  beden_sinir_sistemi: 'Beden & Sinir Sistemi',
  sinirlar_iletisim: 'Sınırlar & İletişim',
  baglanma_laboratuvari: 'Bağlanma Laboratuvarı',
  kokler_golgeler: 'Kökler & Gölgeler',
  edebiyat_felsefe: 'Edebiyat & Felsefe'
} as const;

export function getLaboratuvarCategoryLabel(category: keyof typeof laboratuvarCategoryLabels) {
  return laboratuvarCategoryLabels[category];
}
