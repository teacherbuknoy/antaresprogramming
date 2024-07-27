import { initializeClipboardButton } from "./ui/ClipboardButton.js";
import { $, $$ } from "./utils/dom.js";
import { NotificationManager } from "./ui/NotificationManager.js";

const container = $('[data-notification-container]')
const notifications = new NotificationManager(container)

document.querySelectorAll('button[data-copy]')
  .forEach(button => initializeClipboardButton(button, {
    callback: () => notifications.showStatus({
      title: "Copied!",
      message: "Puwede mo nang i-paste ang link ng page na ito.",
      feathericon: 'check-circle',
      type: 'success'
    }),
    error: () => notifications.showStatus({
      title: "Oops! Hindi ma-copy ang link ng page na ito.",
      message: "Kopyahin na lang ang URL mula sa browser mo. Sorry!",
      feathericon: 'alert-triangle',
      type: 'error'
    })
  }))