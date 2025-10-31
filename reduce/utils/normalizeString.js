export function normalizeString(string) {
  const dirtyString = String(string);

  const cleanString = dirtyString
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}
