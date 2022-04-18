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
  const CodeName = "The Da Vinci Code ";
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
          <div class="px-6 py-4 ">
            <div class="text-center font-sold text-xl mb-2">product details</div>
            <div class="bg-indigo-300 ...">
              <Image
                className={styles.immage}
                src="/book_davin.jpg"
                alt="my picture"
                width={340}
                height={250}
              />
            </div>
            <p class="text-gray-700 text-base">
              รหัสลับดาวินชีนี่คือนิยายที่ฉีกทุกกฎบัญญัติในคริสตจักร
              เป็นผลงานของแดนน์ บราวน์
              ด้วยเนื้อหาที่รุนแรงและส่อเสียดด้านศาสนาทำให้มีคำวิพากษ์วิจารณ์มากมายก็ยิ่งทำให้
              เกิดความน่าสนใจในตัวหนังสือเข้าไปอีกจนนำไปถึงสร้างเป็นภาพยนตร์
              สามารถขายได้กว่า 57 ล้านเล่มทั่วโลก
              ที่จะทำให้คุณวางไม่ลงเลยทีเดียว
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
            href="/productsbook_davin"
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
