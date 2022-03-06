const tooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltipDiv = document.createElement('div');

tooltip.forEach((el) => {
    el.addEventListener('click', function() {

        tooltipDiv.classList.add('tooltip');
        tooltipDiv.setAttribute(`style`, `left: ${el.getBoundingClientRect().left}px; top: ${el.getBoundingClientRect().top + 16}px`);
        tooltipDiv.classList.toggle('tooltip_active');
        tooltipDiv.innerText = `${el.title}`;
        el.insertAdjacentElement("afterend", tooltipDiv);

        event.preventDefault();
    })
})