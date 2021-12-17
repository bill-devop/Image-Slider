(function() {
    const pictures = [
        {
            name: 'air',
            type: 'jfif'
        },
        {
            name:'earth-icon-one',
            type: 'jfif'
        },
        {
            name: 'earth-icon-two',
            type: 'png'
        },
        {
            name: 'earth-icon-three',
            type: 'jfif'
        },
        {
            name: 'land',
            type: 'jpg'
        },
        {
            name: 'sea',
            type: 'jfif'
        }
    ];


    const buttons = document.querySelectorAll('.btn');
    const imageDiv = document.querySelector('.img-container');
    let counter = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('btn-left')) {
                counter --;
                if (counter < 0) {
                    counter = pictures.length - 1;
                }
                imageDiv.style.backgroundImage = `url(
                    'images/${pictures[counter].name}.${pictures[counter].type}'
                )`;
            }
            if (button.classList.contains('btn-right')) {
                counter ++;
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                imageDiv.style.backgroundImage = `url(
                    'images/${pictures[counter].name}.${pictures[counter].type}'
                )`;
            }
        })
    })
})();
