async function login(email, password) {
    try {
        // In a real application, this would make an API call
        // For demo purposes, we'll just simulate a successful login
        if (email && password) {
            return true;
        }
        return false;
    } catch (error) {
        reportError(error);
        return false;
    }
}
