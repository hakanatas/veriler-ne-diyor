/* ─────────────────────────────────────────────────────────────
   VERİLER NE DİYOR? — BTY.6.2.4 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'veriler-ne-diyor', title: 'Veriler Ne Diyor?', titleEn: 'What Does the Data Say?', code: 'BTY.6.2.4',
    outcomeEn: 'Reaching findings with spreadsheet programs',
    summary: 'Karo\'nun bir aylık harcama verileriyle "En çok neye para harcadım?" sorusunun cevabı aranır. Soruya uygun analiz yöntemleri (toplam, ortalama, sıralama, filtre) seçilir. Veriler =TOPLA ve =ORTALAMA formülleriyle işlenir; aralık için ":" kullanımı gösterilir. Veriler sıralanıp filtrelenerek analiz edilir. Son olarak veriler sütun, daire ve çizgi grafikle görselleştirilir ve hangi grafiğin ne zaman kullanılacağı açıklanır.',
    summaryEn: 'With a month of spending data, Karo picks suitable methods (sum, average, sort, filter), processes the data with SUM and AVERAGE formulas, analyses it by sorting and filtering, and visualises it with bar, pie and line charts.',
    blurb: 'Analiz yöntemi seçmek, formüllerle işlemek, sıralama ve filtre, sütun-daire-çizgi grafik.',
    posterAlt: 'Başlık ve Karo; çevresinde grafik, daire grafik, tablo ve büyüteç karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'chart', c: 'kobalt' }, { icon: 'pie', c: 'mercan' }, { icon: 'sheet', c: 'zumrut' }, { icon: 'search', c: 'turkuaz' }, { icon: 'money', c: 'safran' }, { icon: 'target', c: 'mercan' }, { icon: 'lightbulb', c: 'safran' }, { icon: 'dataset', c: 'mor' }],
      beats: [
        { tr: 'Veriler hazır. Cevap nerede saklı?', en: 'The data is ready. Where is the answer hiding?', extra: 1,
          note: 'Karo bir ay boyunca harcamalarını topladı ve düzenledi. Sorusu şuydu: En çok neye para harcadım? Cevap bu verilerde saklı.' },
        { tr: 'Verileri konuşturalım!', en: 'Let\'s make the data talk!',
          note: 'Verileri işleyerek, analiz ederek ve grafiğe dökerek bulgulara ulaşacağız.' },
      ] },
    { type: 'cards', name: 'Analiz yöntemleri', en: 'Analysis methods', desc: 'Soruya uygun analiz yöntemini seçmek.', out: 'a',
      cards: [
        { word: 'TOPLAM', def: 'Hepsi birlikte ne kadar?', icon: 'sheet', c: 'kobalt' },
        { word: 'ORTALAMA', def: 'Bir kategoriye düşen pay', icon: 'target', c: 'mor' },
        { word: 'SIRALAMA', def: 'En çoktan en aza dizmek', icon: 'chart', c: 'mercan' },
      ],
      result: { word: 'ANALİZ YÖNTEMİ', c: 'safran', chips: ['filtre', 'en büyük', 'grafik'], line: 'Sorumuz "en çok" diyor: sıralama ve grafik uygun' },
      beats: [
        { tr: 'Toplam: hepsi birlikte ne kadar?', en: 'Total: how much altogether?',
          note: 'Toplam, bütün harcamaların birlikte ne kadar ettiğini gösterir.' },
        { tr: 'Ortalama: kategori başına pay', en: 'Average: the share per category',
          note: 'Ortalama, toplamın kategori sayısına bölünmesidir. Bir kategoriye ortalama ne kadar harcadığımızı gösterir.' },
        { tr: 'Sıralama: en çoktan en aza', en: 'Sorting: from most to least',
          note: 'Sıralama verileri en çoktan en aza dizer. "En çok" sorusunu cevaplamak için çok uygun.' },
        { tr: 'Soruya uygun yöntemi seç', en: 'Choose the method that fits the question', extra: 1,
          note: 'Filtre, belirli değerleri seçmemizi sağlar. Sorumuz "en çok" dediği için sıralama ve grafik en uygun yöntemler.' },
      ] },
    { type: 'app', app: 'sheet', title: 'Tablolama', name: 'İşle ve analiz et', en: 'Process and analyse', desc: 'TOPLA ve ORTALAMA formülleri, sıralama ve filtre.', out: 'b, c',
      data: { preload: true, cols: ['Kategori', 'Harcama (TL)'], rows: [['Atıştırmalık', 85], ['Kırtasiye', 40], ['Ulaşım', 60], ['Oyun', 35], ['Kitap', 30]], sumF: '=TOPLA(B2:B6)', avgF: '=ORTALAMA(B2:B6)', filterMin: 50, filterLabel: '▼ 50 ve üstü' },
      tools: [{ id: 'formula', label: 'Toplam' }, { id: 'avg', label: 'Ortalama' }, { id: 'sort', label: 'Sırala' }, { id: 'filter', label: 'Filtre' }],
      beats: [
        { tr: 'Toplam: =TOPLA(B2:B6)', en: 'Total: =SUM(B2:B6)', tool: 'formula', hint: 'B2:B6 → B2\'den B6\'ya', extra: 1,
          note: 'Toplamı formülle buluruz: eşittir TOPLA, parantez içinde B2 iki nokta B6. İki nokta, "B2\'den B6\'ya kadar" demektir. Toplam 250 lira.' },
        { tr: 'Ortalama: =ORTALAMA(B2:B6)', en: 'Average: =AVERAGE(B2:B6)', tool: 'avg', hint: '250 ÷ 5 = 50',
          note: 'Ortalamayı da formülle buluruz: kategori başına ortalama 50 lira.' },
        { tr: 'Sırala: en çok harcanan en üstte', en: 'Sort: the biggest spend on top', tool: 'sort', hint: 'Çoktan aza',
          note: 'Verileri çoktan aza sıralarız. En üstte atıştırmalık var: 85 lira!' },
        { tr: 'Filtre: 50 lira ve üstü', en: 'Filter: 50 lira or more', tool: 'filter', hint: 'Yalnızca büyük harcamalar', extra: 1,
          note: 'Filtre ile yalnızca 50 lira ve üstü harcamaları görürüz: atıştırmalık ve ulaşım. Bulgu: en çok atıştırmalığa harcıyorum.' },
      ] },
    { type: 'app', app: 'sheet', title: 'Tablolama', name: 'Görselleştir', en: 'Visualise', desc: 'Sütun ve daire grafik.', out: 'ç',
      data: { preload: true, cols: ['Kategori', 'Harcama (TL)'], rows: [['Atıştırmalık', 85], ['Kırtasiye', 40], ['Ulaşım', 60], ['Oyun', 35], ['Kitap', 30]], chartTitle: 'Harcamalarım' },
      tools: [{ id: 'chart', label: 'Sütun grafik' }, { id: 'pie', label: 'Daire grafik' }],
      beats: [
        { tr: 'Sütun grafik karşılaştırmayı gösterir', en: 'A bar chart shows comparison', tool: 'chart', hint: 'En uzun sütun: atıştırmalık', extra: 1,
          note: 'Verileri sütun grafiğe dökeriz. Sütunların boyunu karşılaştırmak çok kolay: en uzun sütun atıştırmalık.' },
        { tr: 'Daire grafik bütünün parçalarını gösterir', en: 'A pie chart shows parts of a whole', tool: 'pie', hint: 'Harçlığın üçte biri atıştırmalığa', extra: 1,
          note: 'Daire grafik ise bütünün parçalarını gösterir. Harçlığımızın yüzde 34\'ü, yani üçte birinden fazlası atıştırmalığa gidiyor!' },
      ] },
    { type: 'app', app: 'sheet', title: 'Tablolama', name: 'Zamanla değişim', en: 'Change over time', desc: 'Çizgi grafik.', out: 'ç',
      data: { preload: true, cols: ['Hafta', 'Atıştırmalık (TL)'], rows: [['1. hafta', 30], ['2. hafta', 25], ['3. hafta', 18], ['4. hafta', 12]], chartTitle: 'Atıştırmalık harcaması' },
      tools: [{ id: 'line', label: 'Çizgi grafik' }],
      beats: [
        { tr: 'Çizgi grafik zamanla değişimi gösterir', en: 'A line chart shows change over time', tool: 'line', hint: 'Haftadan haftaya', extra: 1,
          note: 'Karo bulgusunu görünce atıştırmalığı azaltmaya karar verdi. Çizgi grafik, harcamanın haftadan haftaya nasıl değiştiğini gösterir.' },
        { tr: 'Bulgu: harcama her hafta azalıyor!', en: 'Finding: spending drops every week!', extra: 1,
          note: 'Çizgi aşağı iniyor: atıştırmalık harcaması her hafta azalmış. Veriler Karo\'ya doğru kararı verdirdi!', karo: { mood: 'proud', caret: 'ok' } },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'target', c: 'mercan', text: 'Soruya uygun analiz yöntemini seç' },
        { icon: 'sheet', c: 'zumrut', text: 'Formülle işle, sırala ve filtrele' },
        { icon: 'pie', c: 'kobalt', text: 'Sütun: karşılaştır, daire: parçalar, çizgi: zaman' },
      ],
      beats: [
        { tr: 'Aklında kalsın: veriler doğru soruya cevap verir', en: 'Remember: data answers the right question',
          note: 'Aklında kalsın: veriyi işle, analiz et ve uygun grafikle göster. Bulgular doğru kararlar vermeni sağlar.' },
        { tr: 'Veriyle karar ver!', en: 'Decide with data!',
          note: 'Tahmin etme, veriyle karar ver!' },
      ] },
  ],
});
