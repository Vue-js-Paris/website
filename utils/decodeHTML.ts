export function decodeHTML(html: string): string {
  if (typeof window === "undefined") {
    return html;
  }

  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
}
