
// Initialize i18next library
i18next.init({
    lng: localStorage.getItem("language") || "ar", // Set default language to Arabic or get from local storage
    resources: {
      // Load language resources
      en: {
        translation: {
          home: "Home",
          services: "Services",
          downloadapp: "Download App",
          about: "About",
          contact: "Contact Us",
          selectLanguage: "Select Language",
          english: "English",
          arabic: "Arabic",
          betools: "BTools",
          login: "Login",
          subscribe: "Subscribe",
          en: "AR",
          title_header : "We offer a range of services that will help facilitate your business needs",
          par_header : "Our goal is to satisfy the customer with the services we provide for the growth of their online business, in various aspects through the services provided by the application",
          btn_showVideo : "Show Video",
          btn_startNow : "Start Now"
        },
      },
      ar: {
        translation: {
          home: "الرئيسية",
          services: "الخدمات",
          downloadapp: "تحميل التطبيق",
          about: "معلومات عنا",
          contact: "تواصل معنا",
          selectLanguage: "اختر اللغة",
          english: "الإنجليزية",
          arabic: "العربية",
          betools: "بي تولز",
          login: "تسجيل",
          subscribe: "اشتراك",
          en: "EN",
          title_header : "نقدم مجموعة من الخدمات التى سوف تساعد في تسهيل احتياجاتك العملية",
          par_header : "هدفنا هو إرضاء العميل عن خدماتنا التي نقدمها لنمو أعماله على الانترنت، في مختلف النواحي من خلال الخدمات التي يوفرها التطبيق",
          btn_showVideo : "شاهد الفيديو",
          btn_startNow : "ابدأ الآن"
        },
      },
    },
  });
  
  // Change language function
  function changeLanguage(lang) {
    i18next.changeLanguage(lang);
    // Set text direction based on language
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    // Store language in local storage
    localStorage.setItem("language", lang);
  }
  
  // Initialize language selector
  const languageSelector = document.querySelector("select[data-i18n='selectLanguage']");
  languageSelector.value = i18next.language;
  languageSelector.addEventListener("change", (e) => {
    changeLanguage(e.target.value);
  });
  
  // Initialize translation
  i18next.on("languageChanged", () => {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = i18next.t(element.dataset.i18n);
    });
    // Set text direction based on language
    document.documentElement.dir = i18next.language === "ar" ? "rtl" : "ltr";
  });
  
  // Set initial language
  const language = localStorage.getItem("language") || "ar";
  changeLanguage(language);
  
  // Change language on language icon click
  const languageIcon = document.querySelector(".language");
  languageIcon.addEventListener("click", () => {
    changeLanguage(i18next.language === "ar" ? "en" : "ar");
  });
  // active class
  links = document.querySelectorAll(".links li a");
icon = document.querySelector("nav .mobile_menu");
menuBar = document.querySelector(".navbar_items .navigation");

links.forEach((e) => {
  e.addEventListener("click", function () {
    links.forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});
icon.addEventListener("click" , ()=>{

})
const toggleMenu = () => menuBar.classList.toggle("show_menu");

icon.addEventListener("click" , toggleMenu)
menuBar.addEventListener("click", toggleMenu)
const cardData = [
  {
    title: 'طباعة    ',
    text: 'أرسل طلبك مجاناً واحصل على أفضل عرض للطباعة في أسرع وقت',
    imgSrc: '../images/image 13.png',
  },
  {
    title: 'مناهج دراسية    ',
    text: 'توفر المناهج و المحاضرات المخصصة لطلاب المدارس و الجامعات ك نسخ برمجية أو مرفقة بطلب طباعة    ',
    imgSrc: '../images/image 14.png',
  },
  {
    title: 'تصوير فوتوغرافي    ',
    text: 'احجز مصورك الخاص لأحداثك الشخصية وقتما تشاء    ',
    imgSrc: '../images/image 15.png',
  },
  {
    title: 'تاجير كاميرات ',
    text: 'نوفر لك تأجير جميع أنواع الكاميرات وملحقاتها لجلسات التصوير الخاصة بك',
    imgSrc: '../images/image 16.png',
  },
  {
    title: 'مونتاج',
    text: 'قدم طلبك مجاناً واحصل على افضل عرض لخدمات المونتاج والدبلجة الاحترافية',
    imgSrc: '../images/image 17.png',
  },
  {
    title: 'تقارير الشركات    ',
    text: 'توفر لك خدمات تصميم الهوية الالكترونية و الخدمات المستندية المتعلقة بالهوية الالكترونية , بالإضافة  إلى خدمة إعداد التقارير',
    imgSrc: '../images/image 18.png',
  },
  {
    title: 'ترجمة',
    text: 'احصل على ترجمة معتمدة لجميع اللغات',
    imgSrc: '../images/image 12.png',
  },
  {
    title: 'هدايا    ',
    text: 'صمم هدية وقدمها لمن تريد في أسرع وقت ممكن',
    imgSrc: '../images/image 12 (1).png',
  },
];
const servicesContainer = document.querySelector('.card_services');
console.log(servicesContainer);
let servicesHTML = "";

for (let i = 0; i < cardData.length; i++) {
  servicesHTML += `
    <div class="sevc_card">
    <div class="text">
      <h3>${cardData[i].title}</h3>
      <p>${cardData[i].text}</p>
    </div>
    <div class="image">
      <img src="${cardData[i].imgSrc}" alt="image_services" />
    </div>
  </div>
  `;
}

servicesContainer.innerHTML = `
  <div class="d-flex flex-wrap justify-content-around">
    ${servicesHTML}
  </div>
`;


