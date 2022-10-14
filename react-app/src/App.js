import { useEffect, useState } from 'react';

function App() {
  const [myData, setMyData] = useState();
  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1Iu__YUzKCrmCV4icemyuBR65pLDIseAU5Zl9e5B&s'

  // const fetchData = async (url) => {
  //   const rawdata = await fetch(url);
  //   let data = await rawdata.json()
  //   console.log(data);
  //   return data;
  // }
  useEffect(() => {

    console.log("getting your data");
    fetch(url)
      .then(res => res.blob())
      .then(data => setMyData(data))
      .catch(err => console.log(err))
    // document.getElementById('myImage').src = myData;

  }, [])

  console.log(URL.createObjectURL(myData));

  return (
    <>
      <h1>ready</h1>
      <img id="myImage" src="" alt='error' />
      {
        // document.getElementById("myImage").src = URL.createObjectURL(myData)
        // console.log(myData)
      }

    </>
  )

}

export default App;
