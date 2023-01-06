export const validationMessages = {
  required: "To pole jest wymagane!",
  passwordMatch: "Hasła muszą być takie same!",
  passwordPattern:
    "Hasło powinno zawierać min. 8 znaków, małą i dużą literę, cyfrę oraz znak specjalny (@$!%*?&)",
  numbersOnly: "To pole może zawierać jedynie cyfry!",
  wrongEmail: "Błędny adres email",
};

export const validationPatterns = {
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  onlyNumbers: /^\d+$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

export const passwordValidator = {
  value: validationPatterns.password,
  message: validationMessages.passwordPattern,
};

export const onlyNumbersValidator = {
  value: validationPatterns.onlyNumbers,
  message: validationMessages.numbersOnly,
};

export const emailValidator = {
  value: validationPatterns.email,
  message: validationMessages.wrongEmail,
};

export const minLengthValidator = (minLength: number) => ({
  value: minLength,
  message: `To pole musi zawierać min. ${minLength} znaków!`,
});

export const maxLengthValidator = (maxLength: number) => ({
  value: maxLength,
  message: `To pole może zawierać max. ${maxLength} znaków!`,
});

export const minValueValidator = (value: string, minValue: number) => {
  if (value === "") return undefined;
  return minValue > +value
    ? `Minimalna wartość dla tego pola to ${minValue}!`
    : undefined;
};

export const maxValueValidator = (value: string, maxValue: number) => {
  if (value === "") return undefined;
  return maxValue < +value
    ? `Maksymalna wartość dla tego pola to ${maxValue}!`
    : undefined;
};

export const checkIfEmpty = (value: string) =>
  !!value.trim() || validationMessages.required;

export const checkIfMultiselectEmpty = (value: any[]) =>
  value.length > 0 || validationMessages.required;

export const checkPasswordMatch = (value: string, passwordToMatch: string) =>
  value === passwordToMatch ? undefined : validationMessages.passwordMatch;
