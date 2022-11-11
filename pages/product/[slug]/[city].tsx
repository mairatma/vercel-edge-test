import { useRouter } from 'next/router'
import cookie from 'cookie'

import ProductDisplay from '../../../components/ProductPage';

export default function ProductPage() {
  const router = useRouter()
  const { asPath } = router

  const [,,slug] = asPath ? (asPath as string).split('/') : []

  const cookies = typeof document !== 'undefined' ? cookie.parse(document.cookie) : {};

  return (
    <div>
      <h1>Product Page</h1>
      <ProductDisplay slug={slug as string} city={cookies.city} />
    </div>
  );
}
