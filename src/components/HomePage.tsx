import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const HomePage = () => {
  const { data, isLoading } = useGetCryptosQuery(10);

  if (isLoading) return <p>loading..</p>
  console.log(data?.total)

  return (
    <>
      <Title level={2} className="Heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
        <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
      </Row>
    </>
  )
}

export default HomePage
