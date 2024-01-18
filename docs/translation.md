# How to add a new translation?

Assume that we are adding a new translation for `new`.

1. Copy `app/locales/en.ts` to `app/locales/new.ts`.
2. Edit `new.ts`:
   - Change `const en: LocaleType = ` to `const new: PartialLocaleType`.
   - Change `export default en;` to `export default new;`.
3. Edit `app/locales/index.ts`:
   - Import `new` from `'./new.ts'`.
   - Add `new` to `ALL_LANGS`.
   - Add `'new': 'new lang'` to `ALL_LANG_OPTIONS`.
4. Translate the strings in `new.ts`.
5. Submit a pull request, and the author will merge it.
