import { copyLink, copyInnerText } from "../utils/clipboard.js"

/**
 * @description Initializes a button that copies text
 * @author Francis Rubio
 * @param {HTMLButtonElement|null} element
 */
function initializeClipboardButton(element, { callback = () => { }, error = () => { }, type = 'link' }) {
  let button = element

  if (element == null) {
    button = document.querySelector('button[data-copy]')
  }

  button.addEventListener('click', e => {
    const action = type === 'innertext'
      ? copyInnerText
      : copyLink
    
    try {
      action(element.dataset.clipboard)
        .then(() => callback())
        .catch(e => error({ error: e, type, nodeToCopy: element.dataset.clipboard }))
    } catch (e) {
      error({ error: e, type, nodeToCopy: element.dataset.clipboard })
    }
  })
}

export { initializeClipboardButton }