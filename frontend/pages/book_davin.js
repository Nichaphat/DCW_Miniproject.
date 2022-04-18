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
          src="/book_davin.jpg"
          alt="my picture"
          width={300}
          height={200}
        />
        <h3>
          {" "}
          The Da Vinci Code {" "}
          <button onClick={copyText}> Copy </button>
        </h3>
        รหัสลับดาวินชีนี่คือนิยายที่ฉีกทุกกฎบัญญัติในคริสตจักร เป็นผลงานของแดนน์ บราวน์ <br></br>
        ด้วยเนื้อหาที่รุนแรงและส่อเสียดด้านศาสนาทำให้มีคำวิพากษ์วิจารณ์มากมายก็ยิ่งทำให้ <br></br>
        เกิดความน่าสนใจในตัวหนังสือเข้าไปอีกจนนำไปถึงสร้างเป็นภาพยนตร์ สามารถขายได้กว่า 57 ล้านเล่มทั่วโลก <br></br>
        
        <div style={style}>
          <a href="/productsbook_davin" className={styles.card}>
            <h3>To cart</h3>
          </a>
        </div>
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
