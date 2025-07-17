import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/home">Home</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default About;
