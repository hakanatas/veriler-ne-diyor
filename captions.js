/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.6, tr: "Veriler hazır. Cevap nerede saklı?", en: "The data is ready. Where is the answer hiding?",
      note: "Karo bir ay boyunca harcamalarını topladı ve düzenledi. Sorusu şuydu: En çok neye para harcadım? Cevap bu verilerde saklı." },
    { scene: 1, start: 8.4, end: 14.2, tr: "Verileri konuşturalım!", en: "Let's make the data talk!",
      note: "Verileri işleyerek, analiz ederek ve grafiğe dökerek bulgulara ulaşacağız." },
    { scene: 2, start: 17, end: 22.7, tr: "Toplam: hepsi birlikte ne kadar?", en: "Total: how much altogether?",
      note: "Toplam, bütün harcamaların birlikte ne kadar ettiğini gösterir." },
    { scene: 2, start: 23.5, end: 29.2, tr: "Ortalama: kategori başına pay", en: "Average: the share per category",
      note: "Ortalama, toplamın kategori sayısına bölünmesidir. Bir kategoriye ortalama ne kadar harcadığımızı gösterir." },
    { scene: 2, start: 30, end: 35.6, tr: "Sıralama: en çoktan en aza", en: "Sorting: from most to least",
      note: "Sıralama verileri en çoktan en aza dizer. \"En çok\" sorusunu cevaplamak için çok uygun." },
    { scene: 2, start: 36.5, end: 43.1, tr: "Soruya uygun yöntemi seç", en: "Choose the method that fits the question",
      note: "Filtre, belirli değerleri seçmemizi sağlar. Sorumuz \"en çok\" dediği için sıralama ve grafik en uygun yöntemler." },
    { scene: 3, start: 46, end: 52.6, tr: "Toplam: =TOPLA(B2:B6)", en: "Total: =SUM(B2:B6)",
      note: "Toplamı formülle buluruz: eşittir TOPLA, parantez içinde B2 iki nokta B6. İki nokta, \"B2'den B6'ya kadar\" demektir. Toplam 250 lira." },
    { scene: 3, start: 53.5, end: 59.1, tr: "Ortalama: =ORTALAMA(B2:B6)", en: "Average: =AVERAGE(B2:B6)",
      note: "Ortalamayı da formülle buluruz: kategori başına ortalama 50 lira." },
    { scene: 3, start: 60, end: 65.6, tr: "Sırala: en çok harcanan en üstte", en: "Sort: the biggest spend on top",
      note: "Verileri çoktan aza sıralarız. En üstte atıştırmalık var: 85 lira!" },
    { scene: 3, start: 66.4, end: 73.1, tr: "Filtre: 50 lira ve üstü", en: "Filter: 50 lira or more",
      note: "Filtre ile yalnızca 50 lira ve üstü harcamaları görürüz: atıştırmalık ve ulaşım. Bulgu: en çok atıştırmalığa harcıyorum." },
    { scene: 4, start: 75.9, end: 82.6, tr: "Sütun grafik karşılaştırmayı gösterir", en: "A bar chart shows comparison",
      note: "Verileri sütun grafiğe dökeriz. Sütunların boyunu karşılaştırmak çok kolay: en uzun sütun atıştırmalık." },
    { scene: 4, start: 83.4, end: 90.5, tr: "Daire grafik bütünün parçalarını gösterir", en: "A pie chart shows parts of a whole",
      note: "Daire grafik ise bütünün parçalarını gösterir. Harçlığımızın yüzde 34'ü, yani üçte birinden fazlası atıştırmalığa gidiyor!" },
    { scene: 5, start: 93.3, end: 100.1, tr: "Çizgi grafik zamanla değişimi gösterir", en: "A line chart shows change over time",
      note: "Karo bulgusunu görünce atıştırmalığı azaltmaya karar verdi. Çizgi grafik, harcamanın haftadan haftaya nasıl değiştiğini gösterir." },
    { scene: 5, start: 101, end: 107.7, tr: "Bulgu: harcama her hafta azalıyor!", en: "Finding: spending drops every week!",
      note: "Çizgi aşağı iniyor: atıştırmalık harcaması her hafta azalmış. Veriler Karo'ya doğru kararı verdirdi!" },
    { scene: 6, start: 110.4, end: 117.2, tr: "Aklında kalsın: veriler doğru soruya cevap verir", en: "Remember: data answers the right question",
      note: "Aklında kalsın: veriyi işle, analiz et ve uygun grafikle göster. Bulgular doğru kararlar vermeni sağlar." },
    { scene: 6, start: 118, end: 123.8, tr: "Veriyle karar ver!", en: "Decide with data!",
      note: "Tahmin etme, veriyle karar ver!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
