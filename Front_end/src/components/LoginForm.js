import React, { useState } from "react";
import "../styles/login.css";
import { signup, login, signInWithGoogle } from "../utils/auth";

function LoginForm({ onLogin }) {
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            let user;
            if (isSignup) {
                user = await signup(email, password);
            } else {
                user = await login(email, password);
            }
            if (user) {
                onLogin(user);
            }
        } catch (error) {
            setError(error.message);
            console.error("Authentication Error:", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setError("");
            const user = await signInWithGoogle();
            if (user) {
                onLogin(user);
            }
        } catch (error) {
            setError(error.message);
            console.error("Google Sign-In Error:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-info">
                    <div className="login-info-content">
                        <h1>Welcome to Jorie</h1>
                        <p>Your Partner in Ensuring Uninterrupted Healthcare Operations</p>
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
                            <h2 className="text-2xl font-bold mb-2 text-center">
                                {isSignup ? "Create an account" : "Sign in to your account"}
                            </h2>
                            <p className="text-gray-600 text-sm text-center mb-8">
                                {isSignup ? "Create your credentials to get started" : "Enter your credentials to access the platform"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="off"
                                />
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <button type="submit" className="auth-button login-button">
                                {isSignup ? "Sign Up" : "Sign In"}
                            </button>

                            <button 
                                type="button" 
                                className="auth-button signup-button" 
                                onClick={() => setIsSignup(!isSignup)}
                            >
                                {isSignup ? "Already have an account? Sign In" : "Need an account? Sign Up"}
                            </button>

                            <div className="divider">
                                <span>Or continue with</span>
                            </div>

                            <button type="button" className="auth-button google-button" onClick={handleGoogleSignIn}>
                                <img 
                                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                Sign in with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
