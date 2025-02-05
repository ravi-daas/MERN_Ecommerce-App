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
        } else if (response.status === 201) {
            return data;
        }
        // return data;
    } catch (error) {
        console.error("Error in signup API:", error.message);
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: "include",
        });

        const data = await response.json();

        console.log(data);

        if (response.status === 401) {
            const errorData = await data; // Parse the error response
            const errorMap = {};
            errorData.errors.forEach((error) => {
                if (!errorMap[error.path]) {
                    errorMap[error.path] = error.msg;
                }
            });
            throw new Error(JSON.stringify(errorMap));
        } else if (response.status === 200) {
            return data;
        } else if (response.status === 500) {
            throw new Error(JSON.stringify({ general: 'Internal Server Error, Try again' }));
        }
    } catch (error) {
        console.error("Error in signup API:", error.message);
        throw error;
    }
};

const adminPage = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/admin/products`, {
            method: "GET",
            credentials: "include",
        });
        return response;
    } catch (error) {
        console.error("Error in signup API:", error.message);
        throw error;
    }
};

const logout = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/logout`, {
            method: "POST",
            credentials: "include",
        });
        return response;
    } catch (error) {
        console.error("Error in signup API:", error.message);
        throw error;
    }
}

export { signup, login, adminPage, logout };
