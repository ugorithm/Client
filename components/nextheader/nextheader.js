import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";

export default function App() {
  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];
  
  return (
    <Layout>
      <Navbar isBordered variant={variant}>
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            REWORK
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Dashboard</Navbar.Link>
          <Navbar.Link isActive href="#">Todo</Navbar.Link>
          <Navbar.Link href="#">PR Tracker</Navbar.Link>
          <Navbar.Link href="#">About us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Register
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <VariantsSelectorWrapper>
        <Card css={{maxW: "50%"}}>
          <Card.Body css={{pt: "$8", px: "$8"}}>
            <Radio.Group
              defaultValue="default"
              label="Select variant"
              orientation="horizontal"
              size="sm"
              value={variant}
              onChange={setVariant}
            >
              {variants.map((variant) => (
                <Radio key={variant} value={variant}>
                  {variant}
                </Radio>
              ))}
            </Radio.Group>
          </Card.Body>
        </Card>
      </VariantsSelectorWrapper>      
    </Layout>
  )
}
