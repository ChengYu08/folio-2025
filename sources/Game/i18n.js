import { dict } from '../data/translations.js'

// Locale resolution — synchronous, at module load. Runs before Game is
// constructed, so data files can import `locale` at eval time. Mirrors the
// Intl-based country detection in InputFlag.js but reads navigator.language
// directly for language (not country).
const forced = import.meta.env.VITE_FORCE_LOCALE
const raw = forced || (typeof navigator !== 'undefined' ? navigator.language : 'en')
const lang = raw.toLowerCase().split('-')[0]

export const locale = lang === 'zh' ? 'zh' : 'en'
export const isZh = locale === 'zh'

// CJK fallback appended to canvas/stylus font stacks so Chinese glyphs render
// consistently instead of tofu. English glyphs still come from the primary
// font first.
export const CJK_FONT = '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'

// Flat dotted-key lookup. Falls back to English when a key is missing in the
// active locale (so partially-translated dictionaries never blank out).
export function t(key)
{
    const table = isZh ? dict.zh : dict.en
    return table[key] ?? dict.en[key] ?? key
}

// Apply translations to DOM nodes marked with data-i18n / data-i18n-html /
// data-i18n-placeholder. Called once at startup, before Game construction,
// so the first frame already shows the resolved language.
//
// Source language (en) is a no-op: English copy already lives in the HTML, so
// we leave it untouched to guarantee zero regression. dict.en only serves as
// the fallback for keys missing from dict.zh.
export function translateDOM(scope = document)
{
    document.documentElement.lang = isZh ? 'zh-CN' : 'en'

    if(!isZh)
        return

    for(const node of scope.querySelectorAll('[data-i18n]'))
        node.textContent = t(node.dataset.i18n)

    for(const node of scope.querySelectorAll('[data-i18n-html]'))
        node.innerHTML = t(node.dataset.i18nHtml)

    for(const node of scope.querySelectorAll('[data-i18n-placeholder]'))
        node.setAttribute('placeholder', t(node.dataset.i18nPlaceholder))

    for(const node of scope.querySelectorAll('[data-i18n-content]'))
        node.setAttribute('content', t(node.dataset.i18nContent))
}
