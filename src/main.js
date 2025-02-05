import { initSlider } from "./part4";
initSlider();
import "./part3";
import "./part5";
import "./part6";

import {
  burger,
  sliderBlock1,
  items,
  prev,
  next,
  dots,
  lengthItems,
  activeBlock1,
  refreshInterval,
} from "./part1";
import { nextToggle } from "./part1";
import { prevToggle } from "./part1";
import { reloadSlider } from "./part1";
import { navbarClick } from "./part1";
burger.addEventListener("click", navbarClick);
dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    activeBlock1 = key;
    reloadSlider();
  });
});
prev.addEventListener("click", prevToggle);
next.addEventListener("click", nextToggle);

//import from part2
import { formPriceCalc } from "./part2";
import { contactCustName } from "./part2";
import { contactCustPhone } from "./part2";
import { contactCustEmail } from "./part2";
import { contactCustMsg } from "./part2";
import { btnCalcCargo } from "./part2";
import { validateName } from "./part2";
import { validateEmail } from "./part2";
import { validatePhone } from "./part2";
import { validateMsg } from "./part2";
import { formSubmittedMsg } from "./part2";

btnCalcCargo.addEventListener("click", (input) => {
  formPriceCalc.addEventListener("submit", (e) => {
    e.preventDefault();
    validateName(contactCustName);
    validatePhone(contactCustPhone);
    validateEmail(contactCustEmail);
    validateMsg(contactCustMsg);
    if (
      validateName(contactCustName) &&
      validatePhone(contactCustPhone) &&
      validateEmail(contactCustEmail) &&
      validateMsg(contactCustMsg)
    ) {
      formSubmittedMsg(input);
    }
  });
});

// import for volume calculator
import { formVol } from "./part2";
import { calcVolume } from "./part2";
import { buttonVol } from "./part2";

// formVol.addEventListener('submit', calcVolume);
buttonVol.addEventListener("click", calcVolume);
// import for currency exch cacl
import { buttonCurrencyCalc } from "./part2";
import { getCurrency } from "./part2";

buttonCurrencyCalc.addEventListener("click", getCurrency);
