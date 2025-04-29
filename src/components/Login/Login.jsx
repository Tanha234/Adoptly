import { useState } from "react";
import pet from '../../images/pets-3715733_640-removebg-preview.png';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Signup-only
  const [phone, setPhone] = useState(""); // Signup-only
  const [address, setAddress] = useState(""); // Signup-only
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login logic
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/pets'); // Redirect to /pets after login
      } else {
        // Signup logic
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Update user profile with display name
        await updateProfile(userCredential.user, {
          displayName: name,
        });

        // For now, phone/address can be stored in DB later (e.g., Firestore)
        navigate('/pets'); // Redirect to /pets after signup
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/pets'); // Redirect to /pets after Google login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 md:px-44 sm:px-0 bg-accent">
      {/* Left Side - Image */}
      <div className="hidden md:block">
        <img
          src={pet}
          alt="Adopt a pet"
          className="w-full h-full -mt-24 "
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 ">
        <div className="w-full max-w-xl space-y-6 border p-5">
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
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="text-center text-gray-900">or</div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-orange-700 py-2 rounded-lg hover:bg-gray-100"
          >
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-900 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
