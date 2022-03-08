const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));
//const tooltipDiv = document.createElement('div');

tooltips.forEach((el) => {
    const tooltipDiv = document.createElement('div');
    tooltipDiv.innerText = `${el.title}`;
    el.addEventListener("click", (e) => {
        e.preventDefault();
        tooltipDiv.classList.add("tooltip");
        tooltipDiv.setAttribute(`style`, `left: ${el.getBoundingClientRect().left}px; top: ${el.getBoundingClientRect().top + 16}px`);
        //tooltipDiv.innerText = `${el.title}`;
        el.insertAdjacentElement('beforeBegin', tooltipDiv);
        const tooltipActive = Array.from(document.querySelectorAll(".tooltip_active"));
        const findElem = tooltipActive.find(tooltipDiv => tooltipDiv.classList.contains("tooltip_active"));
        console.log(findElem);
        if (findElem === undefined) {
            tooltipDiv.classList.add("tooltip_active");
        } else {
            if (findElem !== tooltipDiv) {
                tooltipDiv.classList.add("tooltip_active");
            }
            findElem.classList.remove("tooltip_active");
        }
    })
})