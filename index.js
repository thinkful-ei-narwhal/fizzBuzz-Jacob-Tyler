/* eslint-disable no-undef */
/* eslint-disable strict */

function main() {

  let userNumber = +document.getElementById('number-choice').value;
  console.log(userNumber);

  for (let i = 1; i <= userNumber; i++ ) {
    const printCount = [];
    if (i % 15 === 0) {
      printCount.push(`<div class="fizz-buzz-item fizzbuzz">
          <span>fizzbuzz</span>
        </div>`);
    } else if (i %  5 === 0) {
      printCount.push(`<div class="fizz-buzz-item buzz">
        <span>buzz</span>
      </div>`);
    } else if (i % 3 === 0) {
      printCount.push(`<div class="fizz-buzz-item fizz">
          <span>fizz</span>
        </div>`);
    } else {
      printCount.push(`<div class="fizz-buzz-item">
      <span>${i}</span>
      </div>`);
    }
    console.log(printCount);
    $('.js-results').append(printCount);

  }
}
  