// generate.js
import React, { useState } from "react";
import QRCode from "react-qr-code";
import classes from "./styles.module.css";
import flipkartBasicLogo from '../flipkartCloneUI/Icons/flipkartBasicLogo.png';
import Plus from '../flipkartCloneUI/Icons/plus.png';
import Image from 'next/image';
import { Fragment } from "react";

function Generate(props) {
    console.log(props.userData);
  const [qrCodeValue, setQrCodeValue] = useState(props.userData.username);

  return (
    <Fragment>
      <div className={classes.header}>
                <div className={classes.header_image}>
                    <Image src={flipkartBasicLogo} alt={"flipkart basic logo"} layout="fixed" width={80} height={20} />
                    <div className={classes.header_explore}>
                        <div><i>Explore </i></div>
                        <div className={classes.yellow}><i>Plus</i></div>
                        <div><Image src={Plus} alt={"plusLogo"} layout="fixed" width={10} height={10} /></div>
                    </div>
                </div>
            </div>
    <div className={classes.main}>
          {/* <div className={styles.card}>Generate QR</div> */}

    <div className={classes.heading}>
        Scan this QR Code to get my digital warranty
    </div>
    <div className={classes.qrcode}>
    {qrCodeValue != "" && (
        <QRCode value={qrCodeValue} className={classes.containerColumn} />
      )}
    </div>
      
      <div className={classes.userDataContainer}>
        <div className={classes.innerContaier}>
            <div className={classes.details}>Details</div>
            <hr/>
            <div className={classes.username}>
                <span className={classes.key}>Username</span>
                <span className={classes.value}>&nbsp;&nbsp;{props.userData.username}</span>
                  
            </div>
            <div className={classes.userId}>
            <span className={classes.key}>UserId</span>&nbsp;&nbsp;<span className={classes.value}>{props.userData.userId}</span>
            </div>
            <div className={classes.name}>
            <span className={classes.key}>Current Owner</span>&nbsp;&nbsp;
            <span className={classes.value}><div className={classes.firstName}>{props.userData.firstName }&nbsp;{props.userData.lastName}</div>
                </span>
                
            </div>
            <div className={classes.productName}>
            <span className={classes.key}>Product Name</span>&nbsp;&nbsp;<span className={classes.value}>{props.productData.productName}</span>
            </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Generate;
