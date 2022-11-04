import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemUser from './features/ItemUser';
import BaiTap1 from './Bt1Session2/BaiTap1';
import BaiTap2 from './Bt2Session2/BaiTap2';
import BaiTap3 from './Bt3Session2/BaiTap3';
import Block3 from './Block3Session2/Block3';
import ItemUserClass from './features/ItemUserClass';

//custom type

interface IUser {
  id: number,
  name: string,
  age: number,
  address: string
}

function App() {
  // const user: IUser = {
  //   id : 1,
  //   name: "manh",
  //   age: 25,
  //   address: "38 Yen Bai",
  // };

  // const arr: Array<number> = [1, 2, 3, 4]
  const listUser: Array<IUser> = [
    {
      id: 1,
      name: "Den",
      age: 25,
      address: "38 Yen Bai",
    },
    {
      id: 2,
      name: "Trang",
      age: 26,
      address: "38 Yen Bai",
    },
    {
      id: 3,
      name: "Do",
      age: 27,
      address: "38 Yen Bai",
    }
  ]
  return (


    // <BaiTap1 title = {"Clothing & Apparel"} product={"Accessories"} name={"Bags"} gen={"Kid's Fashion"} sex={"Mens"}/>

    // <BaiTap2 title ={"YOUNG SHOP"} name={"Samsung UHD TV 24inch"} money={"$599"}/>

    // <BaiTap3 title={"Technology"} topic={"Harman Kadon Onyx Studio Mini, Reviews & Experiences"} copyright={"Feb 21, 2021 by drfurion"}/>

    // <div>
    //   <div style={{display:"flex"}}>
    //     <Block3 title={"Facebook"} total={"5,00,000 Likes"} color={"cornflowerblue"} icon={"fa-brands fa-facebook-f"} />
    //     <Block3 title={"Twitter"} total={"40,000 Tweets"} color={"deepskyblue"} icon={"fa-brands fa-twitter"}  />
    //     <Block3 title={"Google +"} total={"4,60,000 Plus"} color={"coral"} icon={"fa-brands fa-google-plus-g"}  />
    //     <Block3 title={"Pinterest"} total={"34,000 Pins"} color={"tomato"} icon={"fa-brands fa-pinterest"}  />
    //   </div>
    // </div>
    <ItemUserClass/>
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // -------------------------------------

    // <div className='m-auto w-50 text-center pt-5'>
    //   {

    // output a list array
    // listUser?.map((user)=>{
    //   return(

    //  <ItemUser key={user.id} userprop={user}/> 
    // <div  key={user.id}>
    //   <ItemUserClass userprops={user}/>
    // </div>


    // <div key={user.id}>
    //   <p>{user.name}</p>
    //   <p>{user.age}</p>
    //   <p>{user.address}</p>
    // </div> 
    //       )
    //     })
    //   }

    // </div>



    // ------------------------------
    //   <div>
    //     <header className='header1'>
    //       <h1>Welcome to Tracy</h1>
    //       <img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/298282349_1893719924353053_1242789507859841444_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cxxhnuamzSsAX99xa0R&_nc_ht=scontent.fhan4-3.fna&oh=00_AfDTg2aNUZ73dXjMVJesNeGV8sGvPOVxqZTfRagnSTsxlA&oe=63618D50" alt="" />
    //       <p><q>Mình là người sống <em>Nội Tâm</em> và khá là ít nói, nhưng khi bạn thân với mình thì nhận ra mình là một
    //         người nói khá nhiều.
    //         Ngoài ra, mình còn là người thân thiện, hòa đồng.</q></p>
    //       <h3>Sở thích của mình là:</h3>
    //       <ul>
    //         <li><em>Cooking</em> </li>
    //         <li><em>Games</em></li>
    //         <li><em>Football</em></li>
    //         <li><em>Sleep</em></li>
    //       </ul>
    //       <h3>Điểm mạnh của mình:</h3>
    //       <ul>
    //         <li><i>Có khả năng tập trung cao độ</i></li>
    //         <li><i>Có kỹ năng làm việc nhóm</i></li>
    //       </ul>
    //       <h3>Điểm yếu của mình:</h3>
    //       <ul>
    //         <li><i>Chưa có kinh nghiệm về lập trình</i></li>
    //       </ul>
    //       <h3>Mục tiêu ngắn hạn và dài hạn:</h3>
    //       <p>Mục tiêu ngắn hạn: Cố gắng hoàn thành khóa học <cite>ReactJS & NodeJS</cite> trong 4 tháng tới.</p>
    //       <p>Mục tiêu dài hạn: Mình sẽ cố gắng học thêm nhiều công nghệ mới về lập trình để có thể giúp mình trong quá
    //         trình làm việc sau này.</p>
    //       <h3>Thông tin liên lạc của mình:</h3>
    //       <ul>
    //         <li>Email: Truongvvde140264@gmail.com</li>
    //         <li id="fb">Facebook: <a href="https://www.facebook.com/concadangiu" target="_blank">concadangiu</a></li>
    //         <li>SĐT: 0868906633</li>

    //       </ul>
    //       <h3>Ngoài ra:</h3>
    //       <ul>
    //         <li><a href="https://www.messenger.com/t/100023336528144" target="_blank">Chat with me</a></li>
    //         <li><a href="mailto:truongvvde140264@gmail.com?Subject=CONTACT">Mail to Truong</a></li>
    //       </ul>

    //     </header>
    //   </div>
  );
}

export default App;
