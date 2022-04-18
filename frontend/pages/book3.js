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
      <div className={styles.header}>
        <Navbar />
      </div>
      <Head>
        <title>First Page</title>
      </Head>
      <div className={styles.container}>
        <h3> Product detail </h3>
        <Image
          className={styles.immage}
          src="/book3.jpg"
          alt="my picture"
          width={300}
          height={300}
        />
        <h3>
        Harry Potter Book Set <t></t>
          <button onClick={copyText}> Copy </button>
        </h3>
       <p>
       Harry Potter – ปฏิเสธไม่ได้ว่าหากนึกถึงหนังสือนิยายที่ได้รับความนิยมไปทั่วโลกมากเป็นอันดับต้นๆ  <br></br>
       ชื่อของ Harry Potters จะต้องติดอันดับอยู่เสมอ เป็นผลงานจากปลายปากกาของ เจ. เค. โรว์ลิ่ง  <br></br>
       นักเขียนชาวอังกฤษที่ต้องยอมรับเลยว่าเป็นหนังสือที่ทำให้ทุกคนรู้จักเหล่าบรรดาพ่อมดแม่มดน้อยอย่างแท้จริง  <br></br>
       โด่งดังถึงขนาดว่าเอาไปทำเป็นภาพยนตร์กี่เล่มก็ประสบความสำเร็จแทบทั้งหมดนอกจากนี้ยังถือเป็น  <br></br>
       หนังสือนิยายที่มียอดขายสูงติดอันดับตลอดกาลกว่า 400 ล้านเล่มทั่วโลก  <br></br>
       </p>
        <br></br>
        <div style={style}>
          <a href="/productsbook3" className={styles.card}>
            <h3>To cart</h3>
          </a>
        </div>
      </div>
      <br></br>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
