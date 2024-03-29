import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MainLayout from "components/Layout/MainLayout";

import { FiPaperclip } from "react-icons/fi";

import { Row } from "styled-grid-system-component";
import { Col } from "styles/StyledGrid";
import { Card } from "components/Card";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { InfoCard } from "components/InfoCard";
import styled from "styled-components";
import HeadTag from "components/HeadTag";
import { StyledArticleContent } from "components/Article/ArticleDetails/styles";

const StyledSidebar = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    height: 32px;
    a {
      padding-left: 5px;
    }
  }
`;

const StaticPage = ({ content, frontmatter, pages }) => {
  return (
    <MainLayout>
      <HeadTag title={frontmatter.title} />
      <Row>
        <Col md={3}>
          <InfoCard title="অন্যান্য পাতা সমূহ">
            <StyledSidebar>
              {pages.map((page, key) => {
                return (
                  <li key={key}>
                    <FiPaperclip />
                    <Link href={`/p/[slug]`} as={`/p/${page.slug}`}>
                      <a>{page.frontmatter.title}</a>
                    </Link>
                  </li>
                );
              })}
            </StyledSidebar>
          </InfoCard>
        </Col>
        <Col md={9}>
          <div>
            <h3>{frontmatter.title}</h3>
            <div style={{ height: 15 }}></div>
            <Card>
              <StyledArticleContent>
                <ReactMarkdown escapeHtml={false} source={content} />
              </StyledArticleContent>
            </Card>
          </div>
        </Col>
      </Row>
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("contents/pages");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = fs.readdirSync("contents/pages");
  const markdownWithMetadata = fs
    .readFileSync(path.join("contents/pages/", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const pages = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`contents/pages/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      slug: filename.replace(".md", ""),
      frontmatter: data,
    };
  });

  return {
    props: {
      content,
      frontmatter: {
        ...data,
      },
      pages,
    },
  };
}

export default StaticPage;
