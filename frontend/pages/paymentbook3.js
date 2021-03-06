import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Router from "next/router";

export default function Home({ token }) {
  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };

  const paymoney = () => Router.push({ pathname: "/Paymenysuccess" });

  return (
    <Layout>
      <Navbar />
      <Head>
        <title>First Page</title>
      </Head>
      <div className={styles.h1}>
        <br></br> <br></br>
        <h1>Payment</h1>{" "}
      </div>
      <br></br>
      <div className={styles.image}>
        <Image src="/book3.jpg" alt="my picture" width={200} height={200} />
        <p>Harry Potter Book Set</p>
        <h2> $101.46 </h2>

        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
          onClick={() => paymoney()}
        >
          Proceed to payment
        </button>
      </div>
      <br></br>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
