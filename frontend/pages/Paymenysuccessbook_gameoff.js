import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home({ token }) {
  return (
    <Layout>
      <Navbar />
      <div class="flex justify-center ...">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="justify-center text-center font-bold text-xl mb-2">
              Successful payment
            </div>
            <div className={styles.image}>
              <Image
                src="/pass.png"
                alt="my picture"
                width={200}
                height={200}
              />
              <br></br>
              <p>เกมล่าบัลลังก์ (A Game of Thrones)</p>
              <p class="text-red-600 font-bold">$18</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
