import { initializeClipboardButton } from "./ui/ClipboardButton.js";
import { $, $$ } from "./utils/dom.js";
import { NotificationManager } from "./ui/NotificationManager.js";
import ColorScheme from "./ui/ColorScheme.js";

const container = $('[data-notification-container]')
const notifications = new NotificationManager(container)
const results = {
  success: {
    title: "Copied!",
    message: "Puwede mo nang i-paste ang link ng page na ito.",
    feathericon: 'check-circle',
    type: 'success'
  },
  error: {
    title: "Oops! Hindi ma-copy ang link ng page na ito.",
    message: "Kopyahin na lang ang URL mula sa browser mo. Sorry!",
    feathericon: 'alert-triangle',
    type: 'error'
  }
}

document.querySelectorAll('button[data-copy]')
  .forEach(button => initializeClipboardButton(button, {
    callback: () => notifications.showStatus(results.success),
    error: (e) => {
      console.error(e)
      notifications.showStatus(results.error)
    }
  }))

document.querySelectorAll('button[data-clipboard]')
  .forEach(button => initializeClipboardButton(button, {
    type: 'innertext',
    callback: () => notifications.showStatus(results.success),
    error: (e) => {
      console.error(e)
      notifications.showStatus({
        ...results.error,
        title: "Oops! Hindi ma-copy ang text na ito.",
        message: "Puwede mo pa ring i-copy ang text manually."
      })
    }
  }))


ColorScheme.applyColorScheme()
$$('button[data-colorscheme]')
  .forEach(button => {
    if (ColorScheme.isValid(button.dataset.colorscheme)) {
      button.addEventListener('click', e => {
        ColorScheme.applyColorScheme(button.dataset.colorscheme)
      })
    }
  })

/* CLOSE DIALOG BY CLICKING ITS BACKDROP */
document.body.addEventListener('click', e => {
  if (!e.target.matches('dialog'))
    return

  const dialog = e.target
  const rect = dialog.getBoundingClientRect()
  const isInDialog = (
    rect.top <= e.clientY
    &&
    e.clientY <= rect.top + rect.height
    &&
    rect.left <= e.clientX
    &&
    e.clientX <= rect.left + rect.width
  )

  if (!isInDialog) {
    dialog.close()
  }
})