
const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

function DessertsList() {
    // Implement the component here.
  
     const data = desserts.filter(desertCal => desertCal.calories < 500).
     sort((a,b) => {return a.calories - b.calories}).map(dessert => {
        const obj = `${dessert.name}-${dessert.calories}`;
        return <li>{obj}</li>
     })
  
    return (
        <div>
            <ul>
                <li>{data}</li>
            </ul>
        </div>
    );
  
  }
  
  export default DessertsList;
  