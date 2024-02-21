/* Should only contain letters (and possibly spaces/dashes if you want to allow compound names).
Should not be empty.*/
const nameRegex = /^[A-Za-zÆØÅæøå]+(?:[ -][A-Za-zÆØÅæøå]+)*$/;

/*Should be a valid email format and end with "@osloskolen.no".*/
const emailRegex = /^[a-zA-Z0-9._-]+@osloskolen\.no$/;

// Allows empty or up to 8 digits
const phoneRegex = /^\d{0,8}$/;

// Skal inneholde minst én bokstav og minst ett tall, men ingen spesialtegn.
const classRegex = /^[A-Za-z0-9]+$/;

// At least one number, one lowercase, one uppercase letter, and 8 or more characters
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const isValidName = (name: string) => {
  return nameRegex.test(name.trim()) && name.trim().length > 0;
};

export const isValidEmail = (email: string) => {
  return emailRegex.test(email.trim());
};

export const isValidPhone = (phone: string) => {
  return phoneRegex.test(phone.trim());
};

export const isValidClass = (className: string) => {
  return (
    classRegex.test(className.trim()) &&
    /[A-Za-z]/.test(className) &&
    /\d/.test(className)
  );
};

export const isValidPassword = (password: string) => {
  return passwordRegex.test(password.trim());
};
