import * as React from "react";
import Link from "src/components/Link";
import Grid from "src/components/Grid";
import Section from "src/components/Section";
import Typography, { TypographyContainer } from "src/components/Typography";
import styled from "styled-components";
import profileImg from "./gerhard-brueckl.jpg";

const QuoteWrapper = styled.div`
  padding: xxxl;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
  background-color: hsl(191, 100%, 97.7%);
`;

const ColumnWrapper = styled(TypographyContainer)`
  text-align: left;
  vertical-align: top;
  margin: 0;
  padding: 0;

  img {
    align: right;
    text-align: right;
    width: 250px;
    height: auto;
  }
`;

const NameWrapper = styled(TypographyContainer)`
  font-size: 2.5rem;
`;

const TitleWrapper = styled(TypographyContainer)`
  font-size: 1.5rem;
`;

const profileMaintainer = () => (
  <Section background="white" centerHeader padding="xl">
    <br />
    <h1>
      <center>Contributor of the Month</center>
    </h1>

    <Link href="/profiles/gerhard-brueckl" muted>
      <Section background="white" padding="xl">
        <center>
          <Grid columns={{ xs: 1, sm: 1, md: 4 }} gutter="xl">
            <ColumnWrapper>
              <img src={profileImg} alt="Gerhard Brueckl" />
            </ColumnWrapper>
            <ColumnWrapper style={{ gridColumn: "span 3" }}>
              <NameWrapper>Gerhard Brueckl</NameWrapper>
              <TitleWrapper>
                Lead Data Engineer / Cloud Solution Architect at{" "}
                <a href="https://paiqo.com/en/">paiqo GmbH</a>
              </TitleWrapper>
              <Typography variant="p">
                <br />
                <QuoteWrapper>
                  <em>
                    &#34;Contributing to something you use on a daily basis not
                    only makes you learn the topic in depth but also further
                    drives it and thereby also your success.&#34;
                  </em>
                  <br />
                </QuoteWrapper>
              </Typography>
            </ColumnWrapper>
          </Grid>
        </center>
      </Section>
    </Link>
  </Section>
);

export default profileMaintainer;
