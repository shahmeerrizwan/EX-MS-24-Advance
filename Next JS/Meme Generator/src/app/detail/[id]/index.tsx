"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./detail.module.css"; // Importing the CSS Module

function DetailPage({ response }: any) {
  const { url, id } = response;
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const userName = "MuhammadShahmeerRizwan";
  const userPassword = "shahmeer09";

  const fetchGeneratedMeme = async () => {
    if (!inp1 || !inp2) {
      alert("Please enter all the fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.imgflip.com/caption_image?username=${userName}&password=${userPassword}&template_id=${id}&text0=${inp1}&text1=${inp2}`
      );
      const product = await response.json();
      if (product.success) {
        setProducts(product.data);
      } else {
        alert("Failed to generate meme. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {!products ? (
        <div className={styles.formContainer}>
          <div className={styles.imageContainer}>
            <img src={url} alt="Template" />
          </div>

          <div className={styles.inputsContainer}>
            <label>Text 1:</label>
            <input
              onChange={(e) => setInp1(e.target.value)}
              type="text"
              placeholder="Enter the first line of text"
              value={inp1}
            />
            <label>Text 2:</label>
            <input
              onChange={(e) => setInp2(e.target.value)}
              type="text"
              placeholder="Enter the second line of text"
              value={inp2}
            />
          </div>

          <div className={styles.actionsContainer}>
            <button
              onClick={fetchGeneratedMeme}
              disabled={loading}
              className={styles.generateBtn}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
            <Link href={"/"}>
              <button className={styles.backBtn}>Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.generatedMemeContainer}>
          <div className={styles.imageContainer}>
            <img className={styles.memeImage} src={products.url} alt="Generated Meme" />
          </div>
          <button onClick={() => setProducts(null)} className={styles.backBtn}>
            Back to edit
          </button>

          <a href={products.url} download={`meme-${id}.jpg`} className={styles.downloadBtn}>
            Download Meme
          </a>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
