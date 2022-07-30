import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import { Fragment } from "react";
import styles from "./scanner.module.css";
import flipkartBasicLogo from '../flipkartCloneUI/Icons/flipkartBasicLogo.png'; // importing the flipkart basic logo 
import Image from 'next/image';
import Plus from '../flipkartCloneUI/Icons/plus.png';
import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 
      /> 

function ScannerComponent() {
  const [data, setData] = useState("finding...");

  return (<Fragment>
      <div className={styles.header1}>
        <div className={styles.header}>
                <div className={styles.header_image}>
                    <Image src={flipkartBasicLogo} alt={"flipkart basic logo"} layout="fixed" width={80} height={20} />
                    <div className={styles.header_explore}>
                        <div><i>Explore </i></div>
                        <div className={styles.yellow}><i>Plus</i></div>
                        <div><Image src={Plus} alt={"plusLogo"} layout="fixed" width={10} height={10} /></div>
                    </div>
                </div>
        </div>
      </div>


    <div className={styles.container}>
      <div className={styles.container}>
          <div className={styles.qrContainer}>
                        <QrReader
                        onResult={(result, error) => {
                            if (!!result) {
                            setData(result?.text);
                            }

                            if (!!error) {
                            console.info(error);
                            }

                        } 
                        }
                //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
                // open the front camera
                        constraints    ={{ facingMode:  "environment"  }}
                        style={{ width: "40%", height: "40%" }}
                        />
          </div>
        

        <div className={styles.detailContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.detail}>
                    Current Owner  &nbsp; &nbsp;<span className={styles.value}>
                      { data !== "" ? data : "finding..." 
                      }
                    </span>
                    <hr/>
                </div>
                
                <div className={styles.buttonContainer}>
                    <div className={styles.button}>
                        Claim Ownership
                    </div>
                </div>

            </div>
            
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default ScannerComponent;


