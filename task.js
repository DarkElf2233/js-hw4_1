
const toolTips = [...document.querySelectorAll('.has-tooltip')];

for (let tip of toolTips) {
    tip.addEventListener('click', (e) => {
        const tipActive = document.querySelector('.tooltip_active');
        if (tipActive) {
            tipActive.remove();
            if (tipActive.textContent === tip.getAttribute('title')) {
                e.preventDefault();
                return;
            }
        }
        const tipText = document.createElement('div');
        const coord = tip.getBoundingClientRect();
        tipText.className = 'tooltip tooltip_active';
        tipText.textContent = tip.getAttribute('title');
        tipText.style.left = (coord.left).toString() + 'px';
        tipText.style.top = (coord.top + 20).toString() + 'px';
        document.body.append(tipText);

        e.preventDefault();
    });
}
