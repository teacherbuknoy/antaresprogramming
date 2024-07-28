

class ColorScheme {
  static LIGHT = 'light'
  static DARK = 'dark'
  static SYSTEM = 'system'
  static COLOR_SCHEME_KEY = 'antares-color-scheme'
  static #modes = [this.LIGHT, this.DARK, this.SYSTEM]
  static #watcher = window.matchMedia("(prefers-color-scheme: dark)")

  /**
   * @description Applies a color scheme to the entire page
   * @author Francis Rubio
   * @static
   * @param {'system'|'light'|'dark'} [scheme='system']
   * @memberof ColorScheme
   */
  static applyColorScheme(scheme = 'system') {
    const modes = [this.LIGHT, this.DARK, this.SYSTEM]
    const providedScheme = scheme.toLowerCase()
    if (!modes.includes(providedScheme)) {
      throw Error(`${scheme} is not a valid color scheme.`)
    }

    document.body.classList.remove('light', 'dark', 'system')
    document.body.classList.add(providedScheme)

    localStorage.setItem(this.COLOR_SCHEME_KEY, providedScheme)
  }

  /**
   * @description Gets the current color scheme
   * @author Francis Rubio
   * @static
   * @memberof ColorScheme
   * @returns {'system'|'light'|'dark'}
   */
  static getCurrent() {
    const storedScheme = localStorage.getItem(this.COLOR_SCHEME_KEY)
    if (!this.#modes.includes(storedScheme)) {
      return this.SYSTEM
    }

    return storedScheme
  }

  /**
   * @description Adds an event listener
   * @author Francis Rubio
   * @static
   * @param {'change'|'dark'|'light'|'system'} key
   * @param {Function} handler
   * @memberof ColorScheme
   */
  static addEventListener(key, handler) {
    this.#watcher.addEventListener('change', e => {
      if (key === 'change')
        return handler(e)

      const isDark = e.matches
      const currentScheme = this.getCurrent()
      const noPreference = currentScheme === this.SYSTEM

      /* User has set a custom color scheme for this site */
      if (!noPreference)
        return

      if (key === 'system') {
        return handler(e)
      }

      const handleDark = isDark && key === 'dark'
      const handleLight = !isDark && key === 'light'
      if (handleDark || handleLight) {
        return handler(e)
      }
    })
  }
}

export default ColorScheme