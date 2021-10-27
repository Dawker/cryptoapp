/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, Row, Col, Input, Select, Typography, Avatar } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { ISimplifedComp } from '../typescript/components.types'

const { Text, Title } = Typography
const { Option } = Select

const News: React.FC<ISimplifedComp> = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count })
  console.log(cryptoNews)
  return (
    <div>

    </div>
  )
}

export default News
