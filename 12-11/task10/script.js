window.onload = function () {
    let tooltip = document.createElement('span');
    document.addEventListener ('mouseover', (e) => {
        if (e.target.getAttribute('data-tooltip')) {
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = e.target.getAttribute('data-tooltip');
            document.body.append(tooltip);
            let tooltipLeft = e.target.getBoundingClientRect().x;
            let tooltipTop;
            if (e.target.getBoundingClientRect().top >= tooltip.offsetHeight) {
                tooltipTop = e.target.getBoundingClientRect().top - tooltip.offsetHeight - 3;
            } 
            else {
                tooltipTop = e.target.getBoundingClientRect().top + e.target.offsetHeight + 3;
            }

            tooltip.style.left = `${tooltipLeft}px`;
            tooltip.style.top = `${tooltipTop}px`;
        }
    })
    document.addEventListener ('mouseout', (e) => {
        tooltip.remove();
    }
    )
}
