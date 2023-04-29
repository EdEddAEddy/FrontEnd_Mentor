const btnSubmit = document.getElementById('btnSubmit');
const circles = document.querySelectorAll('.circle');
const textSelect = document.getElementById('textSelect')


//em cada elemento dentro do circles ira aplicar o addEventListener 'click'
for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    circle.addEventListener('click', () => {
        //quando houver o click em algum dos circle ira aplicar "selected" no qual foi selecionado e entrada no for para desmarcar "selected" de algum outro que tenha.
        for (let i = 0; i < circles.length; i++) {
            const circle = circles[i];
            circle.classList.remove('selected'); 
        }
        circle.classList.add('selected');
        //ira deixar o texto dinamico com base no circle que selecionei
        textSelect.innerHTML = `You selected ${[i]} out of ${5}`
    })
}

btnSubmit.addEventListener('click', () => {
    //caso não tenha algum elemento "selected" no meu html, logo nenhum valor foi escolhido
    //ira retorna um alert se for falso e alterar a main para none e feedback para flex para ocultar uma e mostrar outra.
    if (document.querySelector('.selected')) {
        const mainSection = document.getElementById("mainSection");
        const feedbackSection = document.getElementById("feedbackSection");
        mainSection.style.display = "none";
        feedbackSection.style.display = "flex";
    } else {
        alert('Por Favor, selecione uma opção de avaliação antes de enviar o feedback.')
    }
    
})
