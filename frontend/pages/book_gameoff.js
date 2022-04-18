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
          src="/book_gameoff.jpg"
          alt="my picture"
          width={200}
          height={200}
        />
        <h3>
          {" "}
          เกมล่าบัลลังก์ (A Game of Thrones){" "}
          <button onClick={copyText}> Copy </button>
        </h3>
        เกมล่าบัลลังก์ (A Game of Thrones) จาก George R. R. Martin แฟนๆ ซีรีส์ Game of Thrones ต้องไม่พลาด <br></br>
        นวนิยายเล่มแรกของซีรีส์นี้ ที่มาในชื่อเดียวกับภาพยนตร์ เรื่องราวของการแย่งชิงบัลลังค์เหล็ก ตำแหน่งแห่งเกียรติยศและอำนาจของเหล่าขุนนาง<br></br>
        แม่ทัพ เจ้าหญิงเจ้าชาย ที่เต็มไปด้วยการหักหลัง กลศึก และการเมืองเข้มข้นในรูปแบบของโลกแฟนตาซีแห่งดาบและเวทย์มนต์<br></br>
        ที่จะทำให้คุณวางไม่ลงเลยทีเดียว <br></br>
       
        <div style={style}>
          <a href="/products" className={styles.card}>
            <h3> To cart </h3>
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
