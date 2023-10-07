// Utility function to query an element by href
export const queryElement = (href: string) => {
  // Check if href after the '#' starts with a number
  if (href.charAt(1).match(/[0-9]/)) {
    // Escape the number with double backslashes and then construct the selector
    const escapedHref = `${href.charAt(0)}\\${href.charAt(1)}${href.slice(2)}`;
    return document.querySelector(escapedHref);
  }
  return document.querySelector(href);
};
