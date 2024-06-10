export const classNames = (...classes: any[]) =>
  classes.filter(Boolean).join(" ");

export const createLinkOfText = (href: string, text: string) =>
  `<a href="${href}" class="font font-bold text-indigo-600 hover:text-indigo-700 no-underline hover:underline">${text}</a>`;
