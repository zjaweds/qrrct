import React, { useState, useEffect } from 'react';
import {QrReader} from 'react-qr-reader';
import { ReactDOM } from 'react';
import styles from './Qrscan.module.css';
import axios from 'axios';
import Qrscan from '.';


const ScannedDetails = (id) => {
    const [name, setName] = useState('');
	const [pass_type, setPass_type] = useState("");
	const [item_count, setItem_count] = useState( );
	const [paymentId, setPaymentId] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState();
	const [redeem_status, setRedeem_status] = useState(false);
    const [event, setEvent] = useState('')
    const [rendScan, setRandScan] = useState(false)
    function CompleteRedeem(){
        axios({
            method:'put',
            url:`http://127.0.0.1:8000/apis/update-pass-details/${id.id}`,
            data: {
                event:event,
                email:email,
                full_name:name,
                item_count:item_count,
                pass_type:pass_type,
                payment_id:paymentId,
                redeem_status:true
            }
          });
          setRandScan(true);
    }

    useEffect(()=>{
    function handleRedeem(){
        console.log("Called API", id);
           axios({
              method:'get',
              url:`http://127.0.0.1:8000/apis/unique-pass-details/${id.id}`,
              responseType:'stream'
            }).then((response)=>{
              console.log("API Data: ",response.data);
              setName(response.data.full_name);
              setEmail(response.data.email);
              setEvent(response.data.event);
              setPass_type(response.data.pass_type);
              setPhone(response.data.phone);
              setPaymentId(response.data.payment_id);
              setRedeem_status(response.data.redeem_status);
            })
            // console.log("Payment Id: ",data);
          }
          handleRedeem();

	})


    return (
        <>
        {
            rendScan ? <Qrscan/>
             :
             <>
                {
                    ! redeem_status ?
                     
                    <div>
                    <h1>DelhiKop</h1>
                    <h2> {name}</h2>
                    <h3>{email}</h3>
                    <h3>{phone}</h3>
                    <h3>{paymentId}</h3>
                    <h3>{item_count}</h3>
                    <h3>{pass_type}</h3>
                </div>
                :
                <h1>Already Redeemed</h1>
                }
            <div marginLeft="50px !important">
                {
                    !redeem_status && <button marginLeft="50px !important" 
                      onClick={CompleteRedeem} > Redeem </button>
                }
            </div>
    
          </>
        }
        </>
);
}

export default ScannedDetails;