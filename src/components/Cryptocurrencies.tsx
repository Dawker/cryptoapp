import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { ISimplifedComp } from '../typescript/components.types'
import { Cryptos } from '../typescript/types'


const Cryptocurrencies: React.FC<ISimplifedComp> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isLoading } = useGetCryptosQuery(count)
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [cryptos, setCrypto] = useState<Cryptos[]>([])

  // useEffect(() => {
  //   if (cryptosList?.data?.coins?.length > 1) {
  //     setCrypto(cryptosList?.data?.coins)
  //     setLoading(false)
  //   }
  // }, [cryptosList])

  useEffect(() => {
    const filterCryptos = cryptosList?.data?.coins.filter((coin: Cryptos) => coin.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
    setCrypto(filterCryptos)
  }, [cryptosList, searchTerm])

  if (isLoading === true) return <div>Loading...</div>
  return (
    <>
      {!simplified && <div className="search-crypto">
        <Input placeholder="Search Cryptocurrencies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      }
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.id}>
            <Link to={`/crypto/${crypto.slug}`} />
            <Card title={`${crypto.rank}. ${crypto.name}`}
              extra={<img className='crypto-image'
                src={crypto.iconUrl}
                alt="crypto-img" />}
              hoverable
            >
              <p>Price: ${millify(crypto.price)}</p>
              <p>Market Cap: ${millify(crypto.marketCap)}</p>
              <p>Daily Change: ${millify(crypto.change)}%</p>

            </Card>

          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
