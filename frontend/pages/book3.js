import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home({ token }) {
  const addProducts = async () => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };
  const CodeName = "หูฟัง Gaming รุ่น K5 Pro Wired Stereo - Black/Blue. ";
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
                src="/book3.jpg"
                alt="my picture"
                width={340}
                height={250}
              />
            </div>
            <p class="text-gray-700 text-base">
              Harry Potter –
              ปฏิเสธไม่ได้ว่าหากนึกถึงหนังสือนิยายที่ได้รับความนิยมไปทั่วโลกมากเป็นอันดับต้นๆ
              ชื่อของ Harry Potters จะต้องติดอันดับอยู่เสมอ
              เป็นผลงานจากปลายปากกาของ เจ. เค. โรว์ลิ่ง
              นักเขียนชาวอังกฤษที่ต้องยอมรับเลยว่าเป็นหนังสือที่ทำให้ทุกคนรู้จักเหล่าบรรดาพ่อมดแม่มดน้อยอย่างแท้จริง
              โด่งดังถึงขนาดว่าเอาไปทำเป็นภาพยนตร์กี่เล่มก็ประสบความสำเร็จแทบทั้งหมดนอกจากนี้ยังถือเป็น
              หนังสือนิยายที่มียอดขายสูงติดอันดับตลอดกาลกว่า 400 ล้านเล่มทั่วโลก
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
            href="/productsbook3"
          >
            to cart
          </a>
        </div>
      </div>
      ...
      <br></br>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
