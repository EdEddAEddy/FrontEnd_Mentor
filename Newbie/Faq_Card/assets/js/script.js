const sections = document.querySelectorAll('.fullSection');

sections.forEach(section => {
    const h2 = section.querySelector('h2');
    const p = section.querySelector('p');
    const imgArrow = section.querySelector('.imgArrow');
    
    h2.addEventListener('click', () => {
        
        const isOpen = p.classList.contains('show');

        sections.forEach(s => {
            const pOther = s.querySelector('p');
            const imgArrowOther = s.querySelector('.imgArrow');
            const h2Other = s.querySelector('h2');

            if (s !== section && pOther.classList.contains('show')) {
                pOther.classList.remove('show');
                imgArrowOther.classList.remove('rotate');
                h2Other.classList.remove('selected');
            }
        });

        h2.classList.toggle('selected', !isOpen);
        p.classList.toggle('show', !isOpen);
        imgArrow.classList.toggle('rotate', !isOpen);
    });
});
