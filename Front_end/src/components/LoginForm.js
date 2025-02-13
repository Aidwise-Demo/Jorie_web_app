import React, { useState } from "react";
import "../styles/login.css";

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Mock login function (replace with real API call)
    const login = async (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "sharath.suram@aidwise.ai" && password === "Sharath@45") {
                    resolve(true);
                } else {
                    reject(new Error("Invalid email or password"));
                }
            }, 1000);
        });
    };
    // const login = async (email, password) => {
    //     try {
    //         const response = await fetch("http://localhost:5000/login", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ email, password }),
    //         });
    
    //         if (!response.ok) {
    //             throw new Error("Invalid email or password");
    //         }
    
    //         const data = await response.json();
    //         localStorage.setItem("crmToken", data.token); // Store CRM token for future API calls
    //         return true;
    //     } catch (error) {
    //         throw new Error(error.message);
    //     }
    // };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const success = await login(email, password);
            if (success) {
                onLogin();
            }
        } catch (error) {
            setError(error.message);
        }
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError('');
    
    //     try {
    //         const success = await login(email, password);
    //         if (success) {
    //             window.location.href = "/dashboard"; // Redirect on success
    //         }
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // };
    

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-info">
                    <div className="login-info-content">
                        <h1>Welcome to Jorie</h1>
                        <img src="https://i.ibb.co/5xh5xYkb/65eba45832b2446f99809ae9-Nov-1163-2.png" alt="Description of image" width="300" height="300">
                        </img>
                        {/* <p>Your Partner in Ensuring Uninterrupted <br>Healthcare Operations</p>
                         */}
                         <p>Your Partner in Ensuring Uninterrupted <br /> Healthcare Operations</p>
                        <ul className="feature-list">
                            <li><i className="fas fa-chart-line"></i> Advanced analytics for healthcare operations</li>
                            <li><i className="fas fa-user-md"></i> Comprehensive patient management</li>
                            <li><i className="fas fa-hospital"></i> Streamlined clinical workflows</li>
                            <li><i className="fas fa-shield-alt"></i> Secure and compliant platform</li>
                        </ul>
                    </div>
                </div>

                <div className="login-form-container">
                    <div className="login-card">
                        <div className="login-header">
                            <div className="logo-container">
                                <img 
                                    src="https://app.trickle.so/storage/public/images/usr_0c129b7d60008001/0dd06bf3-7b58-4e62-b8f0-4b1c42d45fd9.png" 
                                    alt="Jorie Logo"
                                />
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-center">Sign in to your account</h2>
                            <p className="text-gray-600 text-sm text-center mb-8">
                                Enter your credentials to access the platform
                            </p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="login-form">
                            {error && <p className="error-message">{error}</p>}
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="login-button">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
