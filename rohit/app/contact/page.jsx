"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Page</h1>
      <Link href="/home">Home</Link> <br />
      <Link href="/about">About</Link> <br />
      <Link href="/contact/employee">Employee</Link> <br />
      <button onClick={() => router.push("/contact/company")}>Company</button>
    </div>
  );
};

export default Contact;
