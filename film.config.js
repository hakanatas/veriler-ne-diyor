/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "veriler-ne-diyor",
    "title": "Veriler Ne Diyor?",
    "titleEn": "What Does the Data Say?",
    "grade": 6,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.6.2.4",
    "outcome": "Tablolama programları kullanarak bulgulara ulaşabilme",
    "outcomeEn": "Reaching findings with spreadsheet programs",
    "duration": 125.1,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.5,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.5,
      "t1": 44.5,
      "name": "Analiz yöntemleri",
      "en": "Analysis methods",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 44.5,
      "t1": 74.5,
      "name": "İşle ve analiz et",
      "en": "Process and analyse",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 74.5,
      "t1": 91.9,
      "name": "Görselleştir",
      "en": "Visualise",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 91.9,
      "t1": 109,
      "name": "Zamanla değişim",
      "en": "Change over time",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 109,
      "t1": 125.1,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
