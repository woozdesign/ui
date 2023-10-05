export const getErrorBasedOnValidity = (input: HTMLInputElement | HTMLTextAreaElement, errorMessage: string | undefined) => {
  if (errorMessage) return errorMessage;
  if (input.validity.valueMissing) return 'This field is required';
  if (input.validity.typeMismatch) return 'Invalid format';
  if (input.validity.patternMismatch) return 'Not valid input';
  if (input.validity.tooShort) return `Field should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
  return 'Invalid input';
};
