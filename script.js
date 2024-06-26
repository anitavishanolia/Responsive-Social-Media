const menuitems = document.querySelectorAll('.menu-item');

const msgnotif = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messagesearch =  document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const thememodal = document.querySelector('.customize-theme');
const fontsizes = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');

const colorpalette = document.querySelectorAll('.choose-color span')
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



const changeActiveItem = () => {

    menuitems.forEach(item => {
        item.classList.remove('active')
    })
}

//notification
menuitems.forEach(item => {

    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')

        if (item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})


//messages
const searchMessage = () => {
    const val = messagesearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('.user-name').textContent.toLowerCase();
        if (name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else {
            chat.style.display = 'none';
        }
    })
}

messagesearch.addEventListener('keyup', searchMessage);

msgnotif.addEventListener('click', () => {

    messages.style.boxShadow = '0 0 1rem var(--color-primary)';

    msgnotif.querySelector('.notification-count').style.display = 'none';

    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000)
})
//customization

const openThemeModal = () => {

    thememodal.style.display = 'grid';
}

const closeThemeModal = (e) => {

    if (e.target.classList.contains('customize-theme')){

        thememodal.style.display = 'none';
    }
}
thememodal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

const removeSizeSelector = () => {
    fontsizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontsizes.forEach(size => {

    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if (size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-8rem');
        }
        else if (size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-18rem');
        }
        else if (size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-15rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {

    color.addEventListener('click', () => {
        let primaryhue;
        changeActiveColorClass();

        if (color.classList.contains('color-1')){
            primaryhue = 252;
        }
        else if (color.classList.contains('color-2')){
            primaryhue = 52;
        }
        else if (color.classList.contains('color-3')){
            primaryhue = 352;
        }
        else if (color.classList.contains('color-4')){
            primaryhue = 152;
        }
        else if (color.classList.contains('color-5')){
            primaryhue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryhue);
    })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {

    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');

    window.location.reload();
})


bg2.addEventListener('click', () => {

    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');

    changeBG();
})

bg3.addEventListener('click', () => {

    darkColorLightness = '95%';
    whiteColorLightness = '8%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');

    changeBG();
})