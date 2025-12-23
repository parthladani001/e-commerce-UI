import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up:", formData);
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
              <h1 className="text-4xl font-medium mb-3">Create an account</h1>
              <p className="text-muted-foreground mb-8">Enter your details below</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="emailOrPhone"
                    placeholder="Email or Phone Number"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
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
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white text-primary-foreground py-4 rounded font-medium hover:bg-primary/90 transition-colors hover:opacity-60"
                >
                  Create Account
                </button>

                <button
                  type="button"
                  className="w-full border border-border py-4 rounded font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-3"
                >
                  Sign up with Google
                </button>
              </form>

              <p className="text-center mt-8 text-muted-foreground">
                Already have account?{" "}
                <Link to="/login" className="text-foreground font-medium underline underline-offset-4">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default SignUp;
