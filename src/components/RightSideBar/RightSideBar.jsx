import { Bar, Ul, H2, List } from './RightSideBarStyle';

export const RightSideBar = ({date, left, consumed, rate, normal, food}) => {
  return (
    <Bar>
      <div>
        <H2>Summary for {date}</H2>
        <Ul>
          <List>
            <span>Left</span>
            <span>{left} kcal</span>
          </List>
          <List>
            <span>Consumed</span>
            <span>{consumed} kcal</span>
          </List>
          <List>
            <span>Daily rate</span>
            <span>{rate} kcal</span>
          </List>
          <List>
            <span>n% normal</span>
            <span>{normal} %</span>
          </List>
        </Ul>
      </div>
      <div>
        <H2 className="headerBottom">Food not recommended</H2>
        <Ul>
          {Array.isArray(food) && food.map(meal => {
            <List>{meal.title}</List>
          })}
        </Ul>
      </div>
    </Bar>
  );
};
