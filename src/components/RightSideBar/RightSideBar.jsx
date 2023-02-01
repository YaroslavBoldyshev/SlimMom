import { Bar, Ul, H2, List } from './RightSideBarStyle';

export const RightSideBar = () => {
  return (
    <Bar>
      <div>
        <H2>Summary for 20/06/2020</H2>
        <Ul>
          <List>
            <span>Left</span>
            <span>Render</span>
          </List>
          <List>
            <span>Consumed</span>
            <span>Render</span>
          </List>
          <List>
            <span>rate</span>
            <span>Render</span>
          </List>
          <List>
            <span>n% normal</span>
            <span>Render</span>
          </List>
        </Ul>
      </div>
      <div>
        <H2 className="headerBottom"> Food not recommended</H2>
        <Ul>
          <List>Render</List>
          <List>Render</List>
          <List>Render</List>
          <List>Render</List>
        </Ul>
      </div>
    </Bar>
  );
};
