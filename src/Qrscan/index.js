import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';
// import {QrReader} from 'modern-react-qr-reader';
import { ReactDOM } from 'react';
import styles from './Qrscan.module.css';
import axios from 'axios';
import ScannedDetails  from './scanned_details';;
const Qrscan = () => {
    const [data, setData] = useState('No result');
    const [cond, setCond] = useState(true)


    function handleScan (da){
      if (da) {
        // this.state.result = da;
        //   console.log(this.state.result);
        //   this.setState({result: da});
          setData(da);
          setCond(false)
      }
    }

   function handleError (err) {
      console.error(err)
    }

    return (





      <>
        {
          cond ? 
          
        //   <QrReader
        //   delay={300}
        //   facingMode={"environment"}
        //   onError={handleError}
        //   onScan={handleScan}
        //   style={{ width: '100%' }}
        // />

          <QrReader
          facingMode={'rear'}
          onResult={(result, error) => {
            if (!!result) {
              setData(result.text);
              setCond(false);
              console.log("Hello");
            }
            if (!!error) {
              // console.info(error);
            }
          }}
        />
        
        
        :
        <ScannedDetails id={data} />
        }
      </>
    );
}

export default Qrscan;