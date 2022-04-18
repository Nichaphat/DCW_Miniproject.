import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home({ token }) {
  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };
  const CodeName = " เกมล่าบัลลังก์ (A Game of Thrones)";
  const copyText = () => {
    navigator.clipboard.writeText(CodeName);
  };
  const style = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  };
  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="text-center font-sold text-xl mb-2">product details</div>
            <div class="bg-indigo-300 ...">
              <Image
                className={styles.immage}
                src="/book_gameoff.jpg"
                alt="my picture"
                width={340}
                height={250}
              />
            </div>
            <p class="text-gray-700 text-base">
              เกมล่าบัลลังก์ (A Game of Thrones) จาก George R. R. Martin แฟนๆ
              ซีรีส์ Game of Thrones ต้องไม่พลาด <br></br>
              นวนิยายเล่มแรกของซีรีส์นี้ ที่มาในชื่อเดียวกับภาพยนตร์
              เรื่องราวของการแย่งชิงบัลลังค์เหล็ก
              ตำแหน่งแห่งเกียรติยศและอำนาจของเหล่าขุนนาง<br></br>
              แม่ทัพ เจ้าหญิงเจ้าชาย ที่เต็มไปด้วยการหักหลัง กลศึก
              และการเมืองเข้มข้นในรูปแบบของโลกแฟนตาซีแห่งดาบและเวทย์มนต์
              <br></br>
              ที่จะทำให้คุณวางไม่ลงเลยทีเดียว <br></br>
            </p>
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-sold py-2 px-2 rounded-full"
              onClick={copyText}
            >
              Copy
            </button>
          </div>

          <a
            class="inline-block border border-white rounded py-1 px-3 bg-[#6aaa96] text-white"
            href="/products"
          >
            to cart
          </a>
          <div class="px-6 pt-4 pb-2"></div>
        </div>
      </div>
      ...
      <br></br>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
