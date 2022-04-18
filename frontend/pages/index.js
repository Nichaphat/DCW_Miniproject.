import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <body>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.h1}>
        <h1>Book Shop</h1>
      </div>
      <div className={styles.row}>
        <div></div>
        <div className={styles.column1}>
          {/* <h2> Column1</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/book3.jpg"
              alt="my picture"
              width={250}
              height={200}
            />
            <div className={styles.p}>
              <a href="/book3" className={styles.card}>
                <p>  Harry Potter Book Set </p>
              </a>
              <h2>$101.46</h2>
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column1}> */}
            {/* <h2> Column1</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/book3.jpg"
                alt="my picture"
                width={250}
                height={200}
              />
              <div className={styles.p}>
                <a href="/book3" className={styles.card}>
                  <p>  Harry Potter Book Set </p>
                </a>
                <h2>$101.46</h2>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className={styles.column2}>
          {/* <h2> Column2</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/book_gameoff.jpg"
              alt="my picture"
              width={200}
              height={200}
            />
            <div className={styles.p}>
              <a href="/book_gameoff" className={styles.card}>
                <p> เกมล่าบัลลังก์ (A Game of Thrones) </p>
              </a>
              <h2>$18</h2>
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column2}> */}
            {/* <h2> Column2</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/book_gameoff.jpg"
                alt="my picture"
                width={200}
                height={200}
              />
              <div className={styles.p}>
                <a href="/book_gameoff" className={styles.card}>
                  <p> เกมล่าบัลลังก์ (A Game of Thrones) </p>
                </a>
                <h2>$18</h2>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className={styles.column3}>
          {/* <h2> Column3</h2> */}
          <div className={styles.box}>
            <Image
              
              src="/book_davin.jpg"
              alt="my picture"
              width={325}
              height={200}
            />
            <div className={styles.p}>
              <a href="/book_davin" className={styles.card}>
                <p> The Da Vinci Code </p>
              </a>
              <h2>$16</h2>{" "}
            </div>
          </div>
          <br></br>
          {/* <div className={styles.column3}> */}
            {/* <h2> Column3</h2> */}
            <div className={styles.box}>
              <Image
                
                src="/book_davin.jpg"
                alt="my picture"
                width={325}
                height={200}
              />
              <div className={styles.p}>
                <a href="/book_davin" className={styles.card}>
                  <p> The Da Vinci Code </p>
                </a>
                <h2>$16</h2>{" "}
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>

      {/* <div className={styles.footer}>
        <footer>footer</footer>
      </div> */}
    </body>
  );
}
