//   <div class="toolbar">
//       <div class="theme-switch__control">
//         <!-- Розмітка перемикача теми -->
//         <input
//           class="theme-switch__toggle"
//           type="checkbox"
//           name="theme"
//           id="theme-switch-toggle"
//           aria-label="Переключити між темною та світлою темою"
//         />
//         <label
//           aria-hidden="true"
//           class="theme-switch__track"
//           for="theme-switch-toggle"
//         ></label>
//         <div class="theme-switch__marker" aria-hidden="true"></div>
//       </div>
//     </div>

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
}

const input = document.querySelector('.theme-switch__toggle')
const body = document.querySelector('body')


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

const myTheme = localStorage.getItem('saveTheme');
if (myTheme) {
    body.classList.add(myTheme)
} else {
        body.classList.add(Theme.LIGHT)

}
if (myTheme === Theme.DARK) {
    input.checked = true;
} 