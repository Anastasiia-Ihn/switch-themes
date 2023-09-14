const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
}

const input = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body')

const myTheme = localStorage.getItem('saveTheme');

input.addEventListener('change', changeTheme);

function changeTheme(e) {
    if (!e.currentTarget.checked) {
        body.classList.add(Theme.LIGHT)
        body.classList.remove(Theme.DARK);
        localStorage.setItem('saveTheme', Theme.LIGHT)

    } else {
        body.classList.add(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
       
        localStorage.setItem('saveTheme', Theme.DARK);

    }
}

if (myTheme) {
    body.classList.add(myTheme)
} else {
    body.classList.add(Theme.LIGHT);

}
if (myTheme === Theme.DARK) {
    input.checked = true;
} 