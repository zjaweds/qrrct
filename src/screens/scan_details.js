import React, { useEffect, useState } from 'react';
// import styles from './ScannedDetails.module.css';
import * as XLSX from "xlsx"

const ScannedDetails = () => {
    const [data, setData] = useState('No result');
    const [redeemOption, setRedeemOption] = useState(false);


    useEffect(()=>{
        console.log("Hello");
        
    });
    function handleRedeem(){
        return(
            <>
                <div>
                    Redeem Successful!
                </div>
            </>
        );
    }

    return (
      <>
        <div style={{alignItems:"center"}}>
            <h1>Akash Jaisawal</h1>
            <div>Entry Pass</div>
            <div>Rate: 350</div>
            <div>Total Items: 2</div>
            <div>Total Paid Amount: 350</div>
            <div>Email: Test@email.com</div>
            <div>Phone No.: 493450656</div>
        </div>
      </>
    );
}

export default ScannedDetails;