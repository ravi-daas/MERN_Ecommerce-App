const API_BASE_URL = "http://localhost:5000";

// Function to send a POST request to the signup endpoint
const signup = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            const errorData = await data; // Parse the error response
            const errorMap = {};
            errorData.errors.forEach((error) => {
                if (!errorMap[error.path]) {
                    errorMap[error.path] = error.msg;
                }
            });
            throw new Error(JSON.stringify(errorMap));
        }
        return data;
    } catch (error) {
        console.error("Error in signup API:", error.message);
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error("Failed to sign up. Please try again.");
        }

        return await response.json();
    } catch (error) {
        console.error("Error in signup API:", error.message);
        throw error;
    }
};

export { signup, login };
;
