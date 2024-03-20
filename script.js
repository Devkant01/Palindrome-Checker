
const ibtn = document.querySelector('#text-input');
const cbtn = document.querySelector('#check-btn');
const result = document.querySelector('#For-result');
const rbtn = document.querySelector('#reset-btn');
const rtext = document.querySelector('#result');


function checkPalindrome(str) {
    let matcher = /[^a-zA-Z0-9]+/g;
    let result = str.replace(matcher, '').toLowerCase();
    let i = 0;
    let j = result.length - 1;

    while (i <= j) {
        if (result[i] != result[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}


console.log(checkPalindrome("My age is 0, 0 si ega ym."));

cbtn.addEventListener('click', () => {
    if (ibtn.value == '') {
        alert("Please input a value");
    }
    else {
        if (checkPalindrome(ibtn.value)) {
            result.style.display = 'block';
            rtext.innerHTML = `<p><span style="font-weight: 600; text-decoration: underline dotted white from-font">${ibtn.value}</span> is a palindrome</p>`;
            rtext.style.backgroundColor = '#26A96C';

        }
        else {
            result.style.display = 'block';
            rtext.innerHTML = `</p><span style="font-weight: 600; text-decoration: underline dotted white from-font">${ibtn.value}</span> is not a palindrome</p>`;
            rtext.style.backgroundColor = '#B24C63';

        }
    }
})

rbtn.addEventListener('click', () => {
    ibtn.value = '';
})