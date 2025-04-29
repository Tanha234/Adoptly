// src/AuthPage.js
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../Firebase/firebase.init";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Signup-only
  const [phone, setPhone] = useState(""); // Signup-only
  const [address, setAddress] = useState(""); // Signup-only

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Update user profile with display name
        await updateProfile(userCredential.user, {
          displayName: name,
        });

        // For now, phone/address can be stored in DB later (e.g., Firestore)
        alert("Signup successful!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert(`Welcome, ${result.user.displayName}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Image */}
      <div className="hidden md:block">
        <img
          src="https://source.unsplash.com/800x800/?pet,dog,cat"
          alt="Adopt a pet"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 ">
        <div className="w-full max-w-md space-y-6 border p-5">
          <h2 className="text-3xl font-bold text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 border rounded-lg"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="text-center text-gray-500">or</div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
          >
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
