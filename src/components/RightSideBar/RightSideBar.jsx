import { Bar, Ul, H2, List } from './RightSideBarStyle';

export const RightSideBar = () => {
  return (
    <Bar>
      <div>
        <H2>Summary for RENDER</H2>
        <Ul>
          <List>
            <span>Left</span>
            <span>RENDER</span>
          </List>
          <List>
            <span>Consumed</span>
            <span>RENDER</span>
          </List>
          <List>
            <span>rate</span>
            <span>RENDER</span>
          </List>
          <List>
            <span>n% normal</span>
            <span>RENDER</span>
          </List>
        </Ul>
      </div>
      <div>
        <H2 className="headerBottom">Food not recommended</H2>
        <Ul>
          <List>RENDER</List>
          <List>RENDER</List>
          <List>RENDER</List>
          <List>RENDER</List>
        </Ul>
      </div>
    </Bar>
  );
};
