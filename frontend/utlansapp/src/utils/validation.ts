/* Should only contain letters (and possibly spaces/dashes if you want to allow compound names).
Should not be empty.*/
const nameRegex = /^[A-Za-zÆØÅæøå]+(?:[ -][A-Za-zÆØÅæøå]+)*$/; 

/*Should be a valid email format and end with "@osloskolen.no".*/
const emailRegex = /^[a-zA-Z0-9._-]+@osloskolen\.no$/;

// Allows empty or up to 8 digits
const phoneRegex = /^\d{0,8}$/; 


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


export const isValidPassword = (password: string) => {
    return passwordRegex.test(password.trim());
};