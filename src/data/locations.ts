export const avrupaYakasiIlceleri = [
  "Arnavutköy", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", 
  "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beylikdüzü", "Beyoğlu", 
  "Büyükçekmece", "Çatalca", "Esenler", "Esenyurt", "Eyüpsultan", 
  "Fatih", "Gaziosmanpaşa", "Güngören", "Kâğıthane", "Küçükçekmece", 
  "Sarıyer", "Silivri", "Sultangazi", "Şişli", "Zeytinburnu"
];

export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/â/g, "a")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};
