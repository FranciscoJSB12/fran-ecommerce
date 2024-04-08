import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";

export default function LogInPage() {
  return (
    <section className="w-full pt-8">
      <h2 className="text-center text-gray-700 italic pb-5">
        Have an account? <strong>Log In!</strong>
      </h2>
      <AuthForm isLoggingIn={true} />
      <h3 className="text-center text-gray-700 italic text-sm pt-5">
        Don&apos;t have an account?{" "}
        <strong className="hover:text-blue-800 underline">
          <Link href="/auth/register">Register!</Link>
        </strong>
      </h3>
      <h3 className="text-center text-gray-700 italic text-sm pt-5">
        Forgot your password?{" "}
        <strong className="cursor-pointer hover:text-blue-800 underline">
          Reset password!
        </strong>
      </h3>
    </section>
  );
}
