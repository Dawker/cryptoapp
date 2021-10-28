import { Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
        <Link to="/">
          CryptoApp Inc.
        </Link> <br />
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  )
}

export default Footer
