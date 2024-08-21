import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 className="text-4xl">Home</h2>
      <Link className="button button-normal" href="/admin">
        Open admin page
      </Link>
    </div>
  );
}
