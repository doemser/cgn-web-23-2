import Link from "next/link";
import { snacks } from "../../lib/data";

export default function Snacks() {
  return (
    <>
      <h1>List of Snacks</h1>
      <ul>
        {snacks.map((snack) => {
          return (
            <li key={snack.id}>
              <Link href={`/snacks/${snack.slug}`}>{snack.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
