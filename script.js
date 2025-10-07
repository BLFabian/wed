let activeCard = 'dateCard';
let activeLang = 'norLang';

const cards = document.querySelectorAll('.columnCard');
const langButtons = document.querySelectorAll('.toggleButton');
const confirmButton = document.getElementById('confirmButton');
const declineButton = document.getElementById('declineButton');

// --- Content ---
const content = {
  norLang: {
    dateCard: {
      firstText: "23.05.2026",
      secondText: "16:00",
      thirdText: "Frogner<br>Hovedgaard",
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
    buttons: {
      confirm: "Godta",
      decline: "Avslå",
    },
  },
  engLang: {
    dateCard: {
      firstText: "23 May 2026",
      secondText: "4:00 PM",
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
    buttons: {
      confirm: "Accept",
      decline: "Decline",
    },
  },
  korLang: {
    dateCard: {
      firstText: "2026년 5월 23일",
      secondText: "오후 4시",
      thirdText: "프로그네르<br>저택",
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
        "(그래도 원하신다면, 저희의 <i>주방 리모델링 기금</i>에 기부해 주세요)",
    },
    micCard: {
      firstText: "연설?",
      secondText: "토스트마스터에게 연락해주세요!",
      thirdText:
        "kathinkabl@gmail.com<br><i>또는</i> axelbl@gmail.com<br><i>또는</i> elias.bjornel@gmail.com<br>하지만 가장 좋은 것은<br>kathinkabl@gmail.com",
    },
    buttons: {
      confirm: "참석",
      decline: "불참",
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
    buttons: {
      confirm: "Accepter",
      decline: "Afslå",
    },
  },
};

// --- Helpers ---
function updateContainerClass() {
  const container = document.querySelector('.innerContainer');
  if (!container) return;

  container.classList.remove('dateContainer', 'foodContainer', 'giftContainer', 'micContainer');

  if (activeCard === 'dateCard') container.classList.add('dateContainer');
  if (activeCard === 'foodCard') container.classList.add('foodContainer');
  if (activeCard === 'giftCard') container.classList.add('giftContainer');
  if (activeCard === 'micCard') container.classList.add('micContainer');
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
  window.location.href = "mailto:bjoerne.larsen@gmail.com?subject=Confirmation";
});
confirmButton.addEventListener('touchstart', () => confirmButton.click(), { passive: true });

declineButton.addEventListener('click', () => {
  window.location.href = "mailto:bjoerne.larsen@gmail.com?subject=Disconfirmation";
});
declineButton.addEventListener('touchstart', () => declineButton.click(), { passive: true });

// --- Initial state ---
refreshUI();
