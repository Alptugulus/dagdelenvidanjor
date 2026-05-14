/**
 * Google Ads dönüşüm sinyali gönderir ve ardından hedef URL'ye yönlendirir.
 * Sinyal 2 saniye içinde gönderilemezse yine de yönlendirme yapılır (event_timeout).
 */
export function gtagSendEvent(url: string, method: "phone" | "whatsapp") {
  if (!window.gtag) return;

  const callback = () => {
    if (typeof url === "string") {
      window.location.href = url;
    }
  };

  window.gtag("event", "conversion_event_contact", {
    event_callback: callback,
    event_timeout: 2000,
    event_label: method,
  });
}

/**
 * Telefon / WhatsApp linklerinde onClick handler olarak kullanılır.
 * `e.preventDefault()` ile varsayılan navigasyonu durdurur,
 * gtag sinyali gönderildikten sonra URL'ye yönlendirir.
 */
export function trackConversion(
  e: React.MouseEvent<HTMLAnchorElement>,
  method: "phone" | "whatsapp",
) {
  if (!window.gtag) return;
  e.preventDefault();

  const url = e.currentTarget.href;
  gtagSendEvent(url, method);
}
