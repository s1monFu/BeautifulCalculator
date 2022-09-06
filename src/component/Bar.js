import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

const Bar = () => {
  return (
    <Box display={"flex"} w={"100%"} justifyContent={"space-between"} p={"6"} backgroundColor={"#5591a3"}>
        <Image boxSize={"50px"} objectFit={"cover"} src="1024.png"></Image>
      <Text fontSize={"3xl"} fontWeight={"extrabold"} pl={"120"}>BEAUTIFUL CALCULATOR</Text>
      <Link href="https://github.com/s1monFu/BeautifulCalculator">
        <Button size="lg" leftIcon={<FaGithub />}>
          Github Page
        </Button>
      </Link>
    </Box>
  );
};
export default Bar;
