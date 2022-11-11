interface Props {
  slug: string
  city?: string
}

const CITY_PRICE_MAP: Record<string, number> = {
  recife: 3,
  riodejaneiro: 5,
  unknown: 2
}

const ProductDisplay: React.FC<Props> = ({ slug, city }) => {
  return (
    <div>
      <h3>Product {slug}</h3>
      <p>Price: {CITY_PRICE_MAP[city ?? 'unknown']}</p>
    </div>
  );
}


export default ProductDisplay