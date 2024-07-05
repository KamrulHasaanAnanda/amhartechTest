import { Box, Flex, Select, Text, Grid } from "@radix-ui/themes";
import apiServices from '../services/apiServices'
import ProductCard from "@/components/products/ProductCard";



async function getProducts() {
  let res = await apiServices.allProducts();
  // console.log('res', res.products)
  if (res?.products.length > 0) {
    return res;
  } else {
    return { products: [] }; // Return an object with an empty products array
  }
}

const Home: React.FC = async () => {
  let data = await getProducts();
  console.log('data', data)
  return (
    <Box mt="5">
      <Flex align="center" justify="between" width="100%">
        <Text size="8">Our products</Text>
        <Flex align="center" gap="2">
          <Text size="2">sort by:</Text>
          <Select.Root defaultValue="low to high">
            <Select.Trigger color="gray" />
            <Select.Content color="gray" variant="solid">
              <Select.Item value="low to high">low to high</Select.Item>
              <Select.Item value="high to low">high to low</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
      </Flex>

      <Grid columns={{ xs: '1', sm: '2', md: '5' }} gap="3" mt="5" rows="auto" width="auto">
        {data?.products?.length > 0 && data.products.map((item: Product) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
