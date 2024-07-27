import { copyLink, copyInnerText } from "../utils/clipboard.js"

/**
 * @description Initializes a button that copies text
 * @author Francis Rubio
 * @param {HTMLButtonElement|null} element
 */
function initializeClipboardButton(element, { callback = () => { }, error = () => { } }) {
  let button = element

  if (element == null) {
    button = document.querySelector('button[data-copy]')
  }

  button.addEventListener('click', e => {
    copyLink()
      .then(() => callback())
      .catch(e => error(e))
  })
}

export { initializeClipboardButton }