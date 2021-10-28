import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { ISimplifedComp } from '../typescript/components.types'
import { Cryptos } from '../typescript/types'
import Loader from './UI/Loader'


const Cryptocurrencies: React.FC<ISimplifedComp> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
  const [searchTerm, setSearchTerm] = useState('')
  const [cryptos, setCrypto] = useState<Cryptos[]>([])

  useEffect(() => {
    const filterCryptos = cryptosList?.data?.coins.filter((coin: Cryptos) => coin.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))

    setCrypto(filterCryptos)
  }, [cryptosList, searchTerm])

  if (isFetching || cryptos?.length < 1) return <Loader />
  return (
    <>
      {!simplified && <div className="search-crypto">
        <Input placeholder="Search Cryptocurrencies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      }
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((crypto: any) => {
          const price = crypto.price < 0.01 ? parseFloat(Number.parseFloat(crypto.price).toFixed(8)) : millify(crypto.price)

          return (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.id}>
              <Link to={`/crypto/${crypto.id}`}>
                <Card title={`${crypto.rank}. ${crypto.name}`}
                  extra={<img className='crypto-image'
                    src={crypto.iconUrl}
                    alt="crypto-img" />}
                  hoverable
                >
                  <p>Price: ${price}</p>
                  <p>Market Cap: ${millify(crypto.marketCap)}</p>
                  <p>Daily Change: ${millify(crypto.change)}%</p>

                </Card>
              </Link>

            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Cryptocurrencies
