let goLoading = 0;
let OpenheaderOnOff = true;

const body = document.querySelector('body');

const headerOnOff = document.querySelector('.on-off');
const On = document.querySelector('.on-off .on');
const Off = document.querySelector('.on-off .off');
const headerRunner = document.querySelector('.on-off .runner');


headerOnOff.addEventListener('click', () => {
    if (OpenheaderOnOff) {
        OpenheaderOnOff = false;

        body.classList.toggle('change');

        On.classList.toggle('open_on-off');
        Off.classList.toggle('open_on-off');
        headerRunner.classList.toggle('open_on-off');

        if (goLoading == 0) {

            goLoading = 1;
        }
        else {

            goLoading = 0;
        }
        setTimeout(() => {
            if (goLoading == 1) {
                setTimeout(() => {
                    if (goLoading == 1) {
                        setTimeout(() => {
                            if (goLoading == 1) {
                                changePage()
                            }
                        }, 700)
                    }
                }, 700)
            }
        }, 700)

        setTimeout(() => {
            OpenheaderOnOff = true;
        }, 1000)
    }
})

function changePage() {
    window.location.href = 'index.html'
}


//меню
const randomizer = document.querySelector('.menu-randomizer1');
const fortuneWheel = document.querySelector('.menu-fortuneWheel2');
const diceCube = document.querySelector('.menu-diceCube3');
const truthOrDare = document.querySelector('.menu-truthOrDare4');
const myProfile = document.querySelector('.menu-myProfile5');
randomizer.classList.add('focus');

const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const container5 = document.querySelector('.container5');

randomizer.addEventListener('click', () => {
    container1.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.add('focus');
    fortuneWheel.classList.remove('focus');
    diceCube.classList.remove('focus');
    truthOrDare.classList.remove('focus');
    myProfile.classList.remove('focus');
})
fortuneWheel.addEventListener('click', () => {
    container2.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.remove('focus');
    fortuneWheel.classList.add('focus');
    diceCube.classList.remove('focus');
    truthOrDare.classList.remove('focus');
    myProfile.classList.remove('focus');
})
diceCube.addEventListener('click', () => {
    container3.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.remove('focus');
    fortuneWheel.classList.remove('focus');
    diceCube.classList.add('focus');
    truthOrDare.classList.remove('focus');
    myProfile.classList.remove('focus');
})
truthOrDare.addEventListener('click', () => {
    container4.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.remove('focus');
    fortuneWheel.classList.remove('focus');
    diceCube.classList.remove('focus');
    truthOrDare.classList.add('focus');
    myProfile.classList.remove('focus');
})
myProfile.addEventListener('click', () => {
    container5.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.remove('focus');
    fortuneWheel.classList.remove('focus');
    diceCube.classList.remove('focus');
    truthOrDare.classList.remove('focus');
    myProfile.classList.add('focus');
})


const mainContainer = document.querySelector('main');
const containers = document.querySelectorAll('.container');
const menu = document.querySelectorAll('.menu div');

mainContainer.addEventListener('scroll', () => {
    const scrollTop = mainContainer.scrollTop;
    const containerHeight = 844; // Высота контейнера
    const currentIndex = Math.round(scrollTop / containerHeight);

    if (currentIndex >= 0 && currentIndex < containers.length) {
        // Здесь вы можете запустить определенную программу или функцию
        // console.log(`Открыт контейнер ${currentIndex + 1}`);
        // containers[currentIndex].classList.add('focus')


        switch (currentIndex + 1) {
            case 1:
                randomizer.classList.add('focus');
                fortuneWheel.classList.remove('focus');
                diceCube.classList.remove('focus');
                truthOrDare.classList.remove('focus');
                myProfile.classList.remove('focus');
                break;
            case 2:
                randomizer.classList.remove('focus');
                fortuneWheel.classList.add('focus');
                diceCube.classList.remove('focus');
                truthOrDare.classList.remove('focus');
                myProfile.classList.remove('focus');
                break;

            case 3:
                randomizer.classList.remove('focus');
                fortuneWheel.classList.remove('focus');
                diceCube.classList.add('focus');
                truthOrDare.classList.remove('focus');
                myProfile.classList.remove('focus');
                break;

            case 4:
                randomizer.classList.remove('focus');
                fortuneWheel.classList.remove('focus');
                diceCube.classList.remove('focus');
                truthOrDare.classList.add('focus');
                myProfile.classList.remove('focus');
                break;

            case 5:
                randomizer.classList.remove('focus');
                fortuneWheel.classList.remove('focus');
                diceCube.classList.remove('focus');
                truthOrDare.classList.remove('focus');
                myProfile.classList.add('focus');
                break;
        }
    }
});


//container1
const container1Input = document.querySelectorAll('.container1 input');

container1Input.forEach(element => {
    element.addEventListener('blur', () => {
        container1.scrollIntoView({ behavior: 'smooth' })
    })
});



const randomNumber = document.querySelector('.container1 .random-number');
const generateButton = document.querySelector('.container1 .generate-button');
const minRange = document.querySelector('.container1 .min-range input');
const maxRange = document.querySelector('.container1 .max-range input');

generateButton.addEventListener('click', () => {
    if (minRange.value == '') {
        minRange.value = '0';
    }
    if (maxRange.value == '') {
        maxRange.value = '0';
    }

    let min = Number(minRange.value);
    let max = Number(maxRange.value);
    if (min > maxRange.value) {
        let sup = max;
        max = min;
        min = sup;
    }
    randomNumber.innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
})

function validateInput(input) {
    // Удаляем все символы, кроме цифр и знака минус
    let value = input.value.replace(/[^0-9-]/g, '');

    // Проверка на наличие более одного знака минус
    if ((value.match(/-/g) || []).length > 1) {
        value = value.replace(/-/, ''); // Убираем первый знак минус, если их несколько
    }

    // Если есть знак минус, он должен быть только в начале
    if (value.indexOf('-') > 0) {
        value = value.replace(/-/, ''); // Убираем минус, если он не в начале
    }

    // Ограничение длины для чисел
    const maxLength = 9;
    if (value.startsWith('-')) {
        value = '-' + value.replace(/-/g, ''); // Сохраняем минус
        value = value.slice(0, maxLength + 1); // +1 для знака минус
    } else {
        value = value.slice(0, maxLength);
    }

    input.value = value;
}



const dot = document.querySelectorAll('.container1 .additional-settings .dot');
const container1Runner = document.querySelector('.container1 .additional-settings .runner');
dot.forEach(element => {
    element.addEventListener('click', () => {
        const elementRect = element.getBoundingClientRect().x;
        container1Runner.style.left = elementRect - 74 + 'px';
    })
});






// const menu = document.querySelector('.menu');
// const burger = document.querySelector('.burger');

// burger.addEventListener('click', () => {
//     burger.classList.toggle('active');
//     // menu.classList.toggle('active');
// });



// аватар телеграма
const avatarTelegram = document.querySelector('.avatarTelegram img');
// window.onload = () => {
avatarTelegram.src = localStorage.getItem('avatarTelegram');
// }

if (localStorage.length = 0) {
    getUserProfilePhoto();
    avatarTelegram.src = localStorage.getItem('avatarTelegram');
}