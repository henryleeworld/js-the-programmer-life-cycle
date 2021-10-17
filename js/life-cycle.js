function 循環模式() {
    開發();
    用餐();
    玩樂();
    休息();
}

const code = document.querySelector('.code');
code.innerHTML = 循環模式.toString().
split(/\n/).
map(line => `<p>${line}</p>`).
join('');