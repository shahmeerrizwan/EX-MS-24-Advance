"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function DetailPage({ response }: any) {
  const { url, id } = response;
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [products, setProducts] = useState<any>(null);

  const userName = "MuhammadShahmeerRizwan";
  const userPassword = "shahmeer09";

  useEffect(() => {
    if (inp1 && inp2) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.imgflip.com/caption_image?username=${userName}&password=${userPassword}&template_id=${id}&text0=${inp1}&text1=${inp2}`
          );
          const product = await response.json();
          console.log(product);
          setProducts(product.data); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [id, inp1, inp2]); 

  const generate = () => {
    if (!inp1 || !inp2) {
      alert("Please enter all the fields");
      return;
    }
  };

  return (
    <>
      {!products ? (
        <>
          <div >
            <div>
              <img className="w-full mt-5" src={url} alt="Template" />
            </div>
            <div >
              <label>Text 1:</label>
              <input
                onChange={(e) => setInp1(e.target.value)}
                type="text"
               
              />
              <label>Text 2:</label>
              <input
                onChange={(e) => setInp2(e.target.value)}
                type="text"
               
              />
            </div>
            <div className="w-[60%] flex items-center">
              <button
              onClick={generate}
              >
                Generate
              </button>

              <Link
                href={"/"}
              >
                Back
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div >
            <img className="w-full mt-5" src={products.url} alt="Generated Meme" />
          </div>
          <button
            onClick={() => setProducts(null)}
          >
            Back
          </button>
        </div>
      )}
    </>
  );
}

export default DetailPage;
