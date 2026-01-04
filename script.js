let activeCard = 'dateCard';
let activeLang = 'norLang';
let buttonEffectDone = false;

const cards = document.querySelectorAll('.columnCard');
const langButtons = document.querySelectorAll('.toggleButton');
const confirmButton = document.getElementById('confirmButton');
const declineButton = document.getElementById('declineButton');
const appearingText = document.getElementById('behindText');

// --- Content ---
const content = {
  norLang: {
    dateCard: {
      firstText: "23.05.2026",
      secondText: "16:00",
      thirdText: "Frogner<br>Hovedgård",
    },
    foodCard: {
      firstText: "Allergier?",
      secondText: "Det fikser vi",
      thirdText: "(Men si i fra på forhånd)",
    },
    giftCard: {
      firstText: "Gaver?",
      secondText: "Det er hyggelig<br>nok om du kommer!",
      thirdText:
        "(Men hvis du absolutt vil gi noe, så tar vi gjerne i mot et innskudd i vårt <i>renovere-kjøkken-fond</i>)",
    },
    micCard: {
      firstText: "Taler?",
      secondText: "Ta kontakt med toastmaster!",
      thirdText:
        "kathinkabl@gmail.com<br><i>eller</i> axelbl@gmail.com<br><i>eller</i> elias.bjornel@gmail.com<br>men det er nok best med<br>kathinkabl@gmail.com",
    },
    suitCard: {
        firstText: "Dress code?",
        secondText: "Sommerlig bryllup",
        thirdText:
          "",
      },
    buttons: {
      confirm: "Godta",
      decline: "Avslå",
    },
    behindText: {
      appearingText:
        "Knappene, slik som giftemål, er hovedsakelig symbolske.<br>Send helst en bekreftelse hvor enn du ble kontaktet."
    },
  },
  engLang: {
    dateCard: {
      firstText: "23 May 2026",
      secondText: "4:30 PM",
      thirdText: "Frogner<br>Manor",
    },
    foodCard: {
      firstText: "Allergies?",
      secondText: "We’ll fix it!",
      thirdText: "(But please tell us in advance)",
    },
    giftCard: {
      firstText: "Gifts?",
      secondText: "Your presence is enough!",
      thirdText:
        "(But if you insist, we accept donations to our kitchen renovation fund!)",
    },
    micCard: {
      firstText: "Speeches?",
      secondText: "Contact the toastmaster!",
      thirdText:
        "kathinkabl@gmail.com<br><i>or</i> axelbl@gmail.com<br><i>or</i> elias.bjornel@gmail.com<br>but preferably<br>kathinkabl@gmail.com",
    },
    suitCard: {
        firstText: "Dress code?",
        secondText: "Summery wedding-y",
        thirdText:
          "",
      },
    buttons: {
      confirm: "Accept",
      decline: "Decline",
    },
    behindText: {
      appearingText:
        "The buttons, like marriage, are mostly symbolic.<br>Please send a confirmation wherever you were contacted."
    },
  },korLang: {
    dateCard: {
      firstText: "2026년 5월 23일",
      secondText: "오후 4시",
      thirdText: "프로그네르<br>저택<br>오슬로, 노르웨이",
    },
    foodCard: {
      firstText: "알레르기 있으신가요?",
      secondText: "저희가 해결할게요!",
      thirdText: "(미리 알려주시면 감사하겠습니다)",
    },
    giftCard: {
      firstText: "선물?",
      secondText: "와 주시는 것만으로 충분해요!",
      thirdText:
        "",
    },
    micCard: {
      firstText: "축사하실 의향 있으신가요?",
      secondText: "토스트마스터에게 연락해주세요!",
      thirdText:
        "kathinkabl@gmail.com<br><i>또는</i> axelbl@gmail.com<br><i>또는</i> elias.bjornel@gmail.com<br>하지만 아무래도<br>kathinkabl@gmail.com 이 가장 좋아요",
    },
    suitCard: {
        firstText: "드레스 코드?",
        secondText: "여름 결혼식",
        thirdText:
          "",
      },
    buttons: {
      confirm: "참석",
      decline: "불참",
    },
    behindText: {
      appearingText:
        "버튼을 수리중입니다.<br>연락받으신 곳으로 참석 여부를 알려주세요!"
    },
  },
 
  denLang: {
    dateCard: {
      firstText: "Tresogsnesogtyvende snes pluss to med halvfems",
      secondText: "Midtfirs",
      thirdText: "Frogner<br>Houvedgaard",
    },
    foodCard: {
      firstText: "Allergier?",
      secondText: "Det klarer vi!",
      thirdText: "(Men sig lige til på forhånd)",
    },
    giftCard: {
      firstText: "Gaver?",
      secondText: "Det er hyggeligt<br>nok, at du kommer!",
      thirdText:
        "(Men hvis du absolut vil give noget, tager vi gerne imod et bidrag til vores <i>renoveringskøkkenfond</i>)",
    },
    micCard: {
      firstText: "Taler?",
      secondText: "Kontakt toastmasteren!",
      thirdText:
        "kathinkabl@gmail.com<br><i>eller</i> axelbl@gmail.com<br><i>eller</i> elias.bjornel@gmail.com<br>men helst<br>kathinkabl@gmail.com",
    },
    suitCard: {
        firstText: "Dress code?",
        secondText: "Summerlig weddingy",
        thirdText:
          "",
      },
    buttons: {
      confirm: "Accepter",
      decline: "Afslå",
    },
    behindText: {
      appearingText:
        "Knapperne, såsom ægteskab, er mest symbolske.<br>Send venligst en bekræftelse dér, hvor du blev kontaktet."
    },
  },
};

// --- Helpers ---
function updateContainerClass() {
    const container = document.querySelector('.innerContainer');
    if (!container) return;
  
    // Reset previous state
    container.classList.remove('dateContainer', 'foodContainer', 'giftContainer', 'micContainer');
    container.classList.remove('korLang'); // remove language-specific class
    container.classList.remove('engLang'); // remove language-specific class
  
    // Card-specific container styles
    if (activeCard === 'dateCard') container.classList.add('dateContainer');
    if (activeCard === 'foodCard') container.classList.add('foodContainer');
    if (activeCard === 'giftCard') container.classList.add('giftContainer');
    if (activeCard === 'micCard') container.classList.add('micContainer');
    if (activeCard === 'suitCard') container.classList.add('suitContainer');
  
    if (activeLang === 'korLang') {
        container.classList.add('korLang');
      }
    if (activeLang === 'engLang') {
        container.classList.add('engLang');
      }
  }
  

function updateTexts() {
  const texts = content?.[activeLang]?.[activeCard];
  if (!texts) return;

  document.getElementById("firstText").innerHTML = texts.firstText;
  document.getElementById("secondText").innerHTML = texts.secondText;
  document.getElementById("thirdText").innerHTML = texts.thirdText;

  // Update button text
  const btns = content?.[activeLang]?.buttons;
  if (btns) {
    confirmButton.innerHTML = btns.confirm;
    declineButton.innerHTML = btns.decline;
  }

  // 🔄 Update behind text based on language
  const bt = content?.[activeLang]?.behindText?.appearingText;
  if (bt && appearingText) {
    appearingText.innerHTML = bt;
  }
}

function refreshUI() {
  updateContainerClass();
  updateTexts();
}

// --- Events: category cards ---
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('activeCard'));
    card.classList.add('activeCard');
    activeCard = card.id;
    console.log('Active card:', activeCard);
    refreshUI();
  });
  card.addEventListener('touchstart', () => card.click(), { passive: true });
});

// --- Events: language buttons ---
langButtons.forEach(langButton => {
  langButton.addEventListener('click', () => {
    langButtons.forEach(c => c.classList.remove('activeButton'));
    langButton.classList.add('activeButton');
    activeLang = langButton.id;
    console.log('Active language:', activeLang);
    refreshUI();
  });
  langButton.addEventListener('touchstart', () => langButton.click(), { passive: true });
});

// --- Events: confirm/decline buttons ---
confirmButton.addEventListener('click', () => {
  // ensure current language's behind text is set
  const bt = content?.[activeLang]?.behindText?.appearingText;
  if (bt && appearingText) appearingText.innerHTML = bt;

  confirmButton.classList.add('removeConfirm');
  declineButton.classList.add('removeDecline');
  appearingText.classList.add('appearingText');
});

declineButton.addEventListener('click', () => {
  const bt = content?.[activeLang]?.behindText?.appearingText;
  if (bt && appearingText) appearingText.innerHTML = bt;
  confirmButton.classList.add('removeConfirm');
  declineButton.classList.add('removeDecline');
  appearingText.classList.add('appearingText');
});

// --- Initial state ---
refreshUI();

function expandButton() {

};
