/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Typography, Button, Row, Col, Card, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const VirtualPortofolio = () => {
  const [money, setMoney] = useState(0);
  const [boughtCryptos, setBoughtCryptos] = useState([]);


  useEffect(() => {
    // this is just for testing only, ofc you are not gonna store these in localstorage
    const virtualMoney = localStorage.getItem('virtualMoney');
    const virtualCryptos: any = localStorage.getItem('virtualCryptos');
    if (virtualMoney) {

    } else {
      setMoney(100000);
    }
    if (virtualCryptos) {
      setBoughtCryptos(virtualCryptos)
    }
  }, []);



  return (
    <Row>
      {boughtCryptos.length < 1 && (
        <>
          <Link to="/cryptocurrencies">
            <Title>You dont own any crypto, click here</Title>
          </Link>

        </>
      )}


    </Row>
  )
}

export default VirtualPortofolio
