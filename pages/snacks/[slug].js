import Head from "next/head";
import { useRouter } from "next/router";
import { snacks } from "../../lib/data";
import Custom404 from "../404";

export default function Snack() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);

  const snack = snacks.find((snack) => snack.slug === slug);

  if (!snack) {
    return <Custom404 />;
  }

  return (
    <>
      <Head>
        <title>{snack.title}</title>
      </Head>
      <h1>{snack.title}</h1>
      <p>{snack.description}</p>
      {/*Not a valid use-case, use LINK Component instead*/}
      <button
        type="button"
        onClick={() => {
          router.push("/snacks");
        }}
      >
        Back to Snacks Overview
      </button>
    </>
  );
}
