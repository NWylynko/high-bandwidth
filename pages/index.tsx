import styled from "styled-components";
import { Title } from "@/components/Roadmap/Title";
import { Item } from "@/components/Roadmap/Item";

function HomePage() {
  return (
    <>
      <Title>Website Roadmap</Title>
      <List>
        <Item status="done">Next.js</Item>
        <Item status="done">Add Typescript</Item>
        <Item status="done">Create Dockerfile</Item>
        <Item status="done">Next.js Standalone</Item>
        <Item status="done">Cloud Run</Item>
        <Item status="done">Add Cloud Build file</Item>
        <Item status="done">Cloud Build</Item>
        <Item status="done">Firebase Hosting Reverse Proxy</Item>
        <Item status="done">Add Caching Headers</Item>
        <Item status="done">Add Styled Components</Item>
        <Item status="done">Setup pre-prod deploys</Item>
        <Item status="partial">Setup Testing</Item>
        <List>
          <Item status="created">Add E2E Testing</Item>
          <Item status="created">Add to E2E CI/CD</Item>
          <Item status="done">Add Unit Testing</Item>
          <Item status="done">Add to Unit CI/CD</Item>
        </List>
        <Item status="done">Add Sentry.io</Item>
        <Item status="done">Add Firebase</Item>
        <Item status="done">Add Firebase Anonymous Login</Item>
        <Item status="done">Add Linting</Item>
        <List>
          <Item status="done">Setup with `next lint`</Item>
          <Item status="done">Add to CI/CD</Item>
        </List>
        <Item status="created">Add StoryBook</Item>
        <Item status="created">Read in Mark Down Files</Item>
        <Item status="created">Generate Pages from Mark Down Files</Item>
        <Item status="created">load and optimise images</Item>
        <Item status="created">Add SEO</Item>
        <List>
          <Item status="created">Add SEO for Home page</Item>
          <Item status="created">Add SEO for Post pages</Item>
        </List>
        <Item status="created">Create Home page</Item>
        <List>
          <Item status="created">Design Home Page UI</Item>
          <Item status="created">Create Layout Component</Item>
          <Item status="created">Create Header Component</Item>
          <Item status="created">Create Footer Component</Item>
          <Item status="created">Generate list of latest posts</Item>
        </List>
        <Item status="created">Create Post Page</Item>
        <List>
          <Item status="created">Design Post Page UI</Item>
          <Item status="created">Create Post Page Component</Item>
        </List>
        <Item status="created">Create Icon / Branding</Item>
        <Item status="created">Create 404 page</Item>
        <Item status="created">Create Error page</Item>
        <Item status="created">Create About me page</Item>
        <Item status="created">Update Dev Deploy to link back to github</Item>
        <Item status="created">Register domain and connect</Item>
        <Item status="created">Comments</Item>
        <List>
          <Item status="created">Plan out storage of Comments</Item>
          <Item status="created">Create Comments API</Item>
          <Item status="created">Create Comments List Component</Item>
          <Item status="created">Create Comment Form Component</Item>
          <Item status="created">Add Sign in with Google</Item>
        </List>
        <Item status="created">Reactions</Item>
        <List>
          <Item status="created">Plan out storage of Reactions</Item>
          <Item status="created">Plan out UX of Reactions</Item>
          <Item status="created">Plan out UI of Reactions</Item>
          <Item status="created">Create Reactions Component</Item>
          <Item status="created">Store Reactions</Item>
        </List>
        <Item status="created">Add History page</Item>
      </List>
    </>
  );
}

export default HomePage;

const List = styled.ul``;
