import React from "react";
import { Txt, Wrapper, NavigationBar, LoadingIndicator } from "../src/index";
import Section from "./Section";

function App() {
  return (
    <Wrapper maxWidth={1200} m="0 auto" p={20}>
      <Txt heading34B mb={40} textCenter>
        @yeonpm/react Library Test
      </Txt>

      {/* Txt Component Test */}
      <Section>
        <Txt heading28M mb={20} color="#333">
          Txt Component Test
        </Txt>
        <Wrapper gap={10} column>
          <Txt heading34B>Heading 34 Bold</Txt>
          <Txt text16R>Default text 16px Regular</Txt>
          <Txt text14M>Medium text 14px Medium</Txt>
          <Txt text12L>Small text 12px Light</Txt>
        </Wrapper>
        {/* Various fontVariant combinations */}
        <Wrapper mt={30}>
          <Txt text16R mb={15} color="#666">
            Various fontVariant combinations:
          </Txt>
          <Wrapper flex gap={15} style={{ flexWrap: "wrap" }}>
            <Txt text24B color="red">
              24px Bold Red
            </Txt>
            <Txt text20SB color="blue">
              20px SemiBold Blue
            </Txt>
            <Txt text18M color="green">
              18px Medium Green
            </Txt>
            <Txt text10SM color="purple">
              10px SemiMedium Purple
            </Txt>
            <Txt text8R color="orange">
              8px Regular Orange
            </Txt>
          </Wrapper>
        </Wrapper>
      </Section>

      {/* Wrapper Component Test */}
      <Section>
        <Txt heading28M mb={20} color="#333">
          Wrapper Component Test
        </Txt>
        <Wrapper flex between p={20} background="#f5f5f5" round8>
          <Txt text16R>Left text</Txt>
          <Txt text16R>Right text</Txt>
        </Wrapper>
        <Wrapper
          flex
          column
          gap={10}
          mt={20}
          p={20}
          background="#e8f4fd"
          round8
        >
          <Txt text16R>Vertical item 1</Txt>
          <Txt text16R>Vertical item 2</Txt>
          <Txt text16R>Vertical item 3</Txt>
        </Wrapper>
      </Section>

      {/* LoadingIndicator Component Test */}
      <Section>
        <Txt heading28M mb={20} color="#333">
          LoadingIndicator Component Test
        </Txt>
        <Wrapper flex gap={20}>
          <Wrapper flex column ac gap={10}>
            <Txt text14M>Default size (24px)</Txt>
            <LoadingIndicator />
          </Wrapper>
          <Wrapper flex column ac gap={10}>
            <Txt text14M>Small size (16px)</Txt>
            <LoadingIndicator size={16} />
          </Wrapper>
          <Wrapper flex column ac gap={10}>
            <Txt text14M>Large size (48px)</Txt>
            <LoadingIndicator size={48} />
          </Wrapper>
        </Wrapper>
      </Section>

      {/* NavigationBar Component Test */}
      <Section>
        <Txt heading28M mb={20} color="#333">
          NavigationBar Component Test
        </Txt>
        <Wrapper
          border="1px solid #ddd"
          round8
          overflow="hidden"
          background="#fff"
        >
          <NavigationBar
            navigationConfigs={{
              routePrefix: "/",
              configs: [
                { label: "Home", value: "home" },
                { label: "Service", value: "service" },
                { label: "About", value: "about" },
                { label: "Contact", value: "contact" },
              ],
            }}
            logo={<Txt text16SB>Logo</Txt>}
            router={{}}
            pathname="/"
          />
        </Wrapper>
      </Section>

      {/* Style Combination Test */}
      <Section>
        <Txt heading28M mb={20} color="#333">
          Style Combination Test
        </Txt>
        <Wrapper
          flex
          column
          gap={15}
          p={20}
          background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          borderRadius={12}
        >
          <Txt heading34B white textCenter>
            Title on Gradient Background
          </Txt>
          <Txt text16R white textCenter>
            This is a description text with white color and center alignment.
          </Txt>
          <Wrapper flex jc gap={10}>
            <Txt
              text14M
              white
              pointer
              p="8px 16px"
              background="rgba(255,255,255,0.2)"
              borderRadius={6}
            >
              Button 1
            </Txt>
            <Txt
              text14M
              white
              pointer
              p="8px 16px"
              background="rgba(255,255,255,0.2)"
              borderRadius={6}
            >
              Button 2
            </Txt>
          </Wrapper>
        </Wrapper>
      </Section>
    </Wrapper>
  );
}

export default App;
