export const validateData = (email,password) =>{
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if (!isValidEmail) return "Email is Not Valid";
    if (!isValidPassword) return "Password is not Valid";

    return null;
}