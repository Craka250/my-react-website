
function Food () {

  const foodItem1 = "Pizza";
  const foodItem2 = "Ugali";
  // const foodItem3 = "Tilapia";

  return (
    <div>
      <h2>Food Component</h2>
      <p>This is the Food component content.</p>
      <p>My favorite food is {foodItem1}.</p>
      <p>Another food I like is {foodItem2}.</p>

        <ul> 
            <li>{foodItem1}</li>
            <li>{foodItem2.toLocaleUpperCase()}</li>
            <li>Greens</li>
            <li>Beef</li>
            <li>Fruits</li>
            {/* <li>{foodItem3}</li> */}
        </ul>

    </div>
  );
}

export default Food;