import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import styles from './PriceTag.module.css';


const PriceTag = () => {
	const [Token, setToken] = useState(213);
	const [orderId, setOrderId] = useState("");
	const [itemName, setItemName] = useState("");
	const [itemAmount, setItemAmount] = useState( );
	const [itemQuantity, setItemQuantity] = useState( );
	const [itemPaymentAmount, setItemPaymentAmount] = useState( );
	const [totalPaymentAmount, setTotalPaymentAmount] = useState( );
	const [paymentId, setPaymentId] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState();
	const [name, setName] = useState("X");
	const [isRedeemed, setIsRedeemed] = useState(false);
	

	// useEffect(()=>{

	// })

	const onImageCownload = () => {
		// const svg = document.getElementById("QRCode");
		// const svgData = new XMLSerializer().serializeToString(svg);
		// const canvas = document.createElement("canvas");
		// const ctx = canvas.getContext("2d");
		// const img = new Image();
		// img.onload = () => {
		//   canvas.width = img.width;
		//   canvas.height = img.height;
		//   ctx.drawImage(img, 0, 0);
		//   const pngFile = canvas.toDataURL("image/png");
		//   const downloadLink = document.createElement("a");
		//   downloadLink.download = `${name}QRCode`;
		//   downloadLink.href = `${pngFile}`;
		//   downloadLink.click();
		// };
		// img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
		console.log("Download QR Code Called");
	  };
	  
	  function handleRedeem(){
		// PaymentDetails[y[0]].redeem_status=true;
		// console.log(PaymentDetails[y[0]].redeem_status);
	  }

	return (
		<div className={styles.container}>
			{/* <input className={styles.input} type="text" placeholder="Product name" value={name} onChange={e => {setName(e.target.value); onImageCownload()}} />
			<input className={styles.input} type="number" placeholder="Token" value={Token} onChange={(e) => setToken(e.target.value)}/> */}
			<div className={styles.line}>Generated QR code Token Tag</div>
			<div style={{border:"2px solid grey", padding:"70px", borderRadius:"10px"}}>
			<	div className={styles.content}  >	
				{ (true && Token) ? 
					// onLoad={onImageCownload}
					<QRCode  id="QRCode" value={'35443654'} />
					:
						<div className={styles.blinkme} >Please enter Name and Token</div>
				}
				</div>
            </div>
			{/* <input type="button" value="Download QR" onClick={onImageCownload} /> */}
			<input type="button" value="Redeem" onClick={handleRedeem} />
		</div>
	);
}

export default PriceTag;