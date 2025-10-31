Place your local font files here so `next/font/local` can load them.

Expected filenames used by `layout.tsx` in this project:

- GeistVF.woff
- GeistMonoVF.woff

Notes:

- Put the `.woff` files directly in this folder (`app/fonts`).
- The `src` path in `layout.tsx` is relative to that file and points to `./fonts/GeistVF.woff` and `./fonts/GeistMonoVF.woff`.
- After adding the files, restart the dev server so Next picks up the new local font files.

If you prefer to store fonts in `public/fonts`, change the `src` paths in `layout.tsx` to point to the correct relative path (for example `../../public/fonts/GeistVF.woff`) and update imports accordingly.
