import styled from "styled-components";

function HomePage() {
  return (
    <>
      <Title>Website Roadmap</Title>
      <List>
        <Item done={true}>Next.js</Item>
        <Item done={true}>Add Typescript</Item>
        <Item done={true}>Create Dockerfile</Item>
        <Item done={true}>Next.js Standalone</Item>
        <Item done={true}>Cloud Run</Item>
        <Item done={true}>Add Cloud Build file</Item>
        <Item done={true}>Cloud Build</Item>
        <Item done={true}>Firebase Hosting Reverse Proxy</Item>
        <Item done={true}>Add Caching Headers</Item>
        <Item done={true}>Add Styled Components</Item>
        <Item done={true}>Setup pre-prod deploys</Item>
        <Item done={false}>Setup E2E and Unit Testing</Item>
        <List>
          <Item done={false}>Add to CI/CD</Item>
        </List>
        <Item done={false}>Add Sentry.io</Item>
        <Item done={false}>Add Firebase</Item>
        <Item done={false}>Add Firebase Anonymous Login</Item>
        <Item done={false}>Read in Mark Down Files</Item>
        <Item done={false}>Generate Pages from Mark Down Files</Item>
        <Item done={false}>load and optimise images</Item>
        <Item done={false}>Add SEO</Item>
        <List>
          <Item done={false}>Add SEO for Home page</Item>
          <Item done={false}>Add SEO for Post pages</Item>
        </List>
        <Item done={false}>Create Home page</Item>
        <List>
          <Item done={false}>Design Home Page UI</Item>
          <Item done={false}>Create Layout Component</Item>
          <Item done={false}>Create Header Component</Item>
          <Item done={false}>Create Footer Component</Item>
          <Item done={false}>Generate list of latest posts</Item>
        </List>
        <Item done={false}>Create Post Page</Item>
        <List>
          <Item done={false}>Design Post Page UI</Item>
          <Item done={false}>Create Post Page Component</Item>
        </List>
        <Item done={false}>Create Icon / Branding</Item>
        <Item done={false}>Create 404 page</Item>
        <Item done={false}>Create Error page</Item>
        <Item done={false}>Create About me page</Item>
        <Item done={false}>Update Dev Deploy to link back to github</Item>
        <Item done={false}>Register domain and connect</Item>
        <Item done={false}>Comments</Item>
        <List>
          <Item done={false}>Plan out storage of Comments</Item>
          <Item done={false}>Create Comments API</Item>
          <Item done={false}>Create Comments List Component</Item>
          <Item done={false}>Create Comment Form Component</Item>
          <Item done={false}>Add Sign in with Google</Item>
        </List>
        <Item done={false}>Reactions</Item>
        <List>
          <Item done={false}>Plan out storage of Reactions</Item>
          <Item done={false}>Plan out UX of Reactions</Item>
          <Item done={false}>Plan out UI of Reactions</Item>
          <Item done={false}>Create Reactions Component</Item>
          <Item done={false}>Store Reactions</Item>
        </List>
        <Item done={false}>Add History page</Item>
      </List>
    </>
  );
}

export default HomePage;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin: 32px;
`;

const List = styled.ul``;

const Item = styled.li<{ done?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  margin-bottom: 2px;

  &:before {
    content: ${({ done }) => (done ? '"[✔]"' : '"[ ]"')};
    color: ${({ done }) => (done ? "#349727" : "#811616")};
    margin-right: 8px;
  }
`;
