import { GoogleLogin } from '@react-oauth/google';

// eslint-disable-next-line react/prop-types
export default function AuthForm({ type, onSubmit }) {
  const isSignUp = type === 'signup';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-full px-6 lg:px-16">
      <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
        {isSignUp ? 'Create an Account' : 'Welcome Back'}
      </h2>
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <div className="flex items-center my-4">
        <div className="h-px flex-grow bg-gray-300" />
        <span className="mx-4 text-sm text-gray-500">OR</span>
        <div className="h-px flex-grow bg-gray-300" />
      </div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <p className="text-sm text-gray-500 mt-4">
        {isSignUp
          ? 'Already have an account?'
          : "Don't have an account?"}{' '}
        <span
          className="text-indigo-500 cursor-pointer"
          onClick={onSubmit}
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </span>
      </p>
    </div>
  );
}
