import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="hidden md:block">
              <div className="bg-[#CBE4E8] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=700&fit=crop"
                  alt="Shopping cart with phone"
                  className="w-full h-auto object-cover mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="max-w-md mx-auto w-full">
              <h1 className="text-4xl font-medium mb-3">Log in to Exclusive</h1>
              <p className="text-muted-foreground mb-8">Enter your details below</p>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <input
                    type="text"
                    name="emailOrPhone"
                    placeholder="Email or Phone Number"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    aria-label="Email or phone"
                    autoComplete="username"
                    required
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    aria-label="Password"
                    autoComplete="current-password"
                    required
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-12 py-4 rounded font-medium hover:bg-primary/90 transition-colors bg-red-600"
                  >
                    Log In
                  </button>
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    Forgot Password?
                    </Link>
                </div>
              </form>

              <p className="text-center mt-8 text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-foreground font-medium underline underline-offset-4">
                    SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Login;
