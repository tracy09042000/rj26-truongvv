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
    //       <p><q>M??nh l?? ng?????i s???ng <em>N???i T??m</em> v?? kh?? l?? ??t n??i, nh??ng khi b???n th??n v???i m??nh th?? nh???n ra m??nh l?? m???t
    //         ng?????i n??i kh?? nhi???u.
    //         Ngo??i ra, m??nh c??n l?? ng?????i th??n thi???n, h??a ?????ng.</q></p>
    //       <h3>S??? th??ch c???a m??nh l??:</h3>
    //       <ul>
    //         <li><em>Cooking</em> </li>
    //         <li><em>Games</em></li>
    //         <li><em>Football</em></li>
    //         <li><em>Sleep</em></li>
    //       </ul>
    //       <h3>??i???m m???nh c???a m??nh:</h3>
    //       <ul>
    //         <li><i>C?? kh??? n??ng t???p trung cao ?????</i></li>
    //         <li><i>C?? k??? n??ng l??m vi???c nh??m</i></li>
    //       </ul>
    //       <h3>??i???m y???u c???a m??nh:</h3>
    //       <ul>
    //         <li><i>Ch??a c?? kinh nghi???m v??? l???p tr??nh</i></li>
    //       </ul>
    //       <h3>M???c ti??u ng???n h???n v?? d??i h???n:</h3>
    //       <p>M???c ti??u ng???n h???n: C??? g???ng ho??n th??nh kh??a h???c <cite>ReactJS & NodeJS</cite> trong 4 th??ng t???i.</p>
    //       <p>M???c ti??u d??i h???n: M??nh s??? c??? g???ng h???c th??m nhi???u c??ng ngh??? m???i v??? l???p tr??nh ????? c?? th??? gi??p m??nh trong qu??
    //         tr??nh l??m vi???c sau n??y.</p>
    //       <h3>Th??ng tin li??n l???c c???a m??nh:</h3>
    //       <ul>
    //         <li>Email: Truongvvde140264@gmail.com</li>
    //         <li id="fb">Facebook: <a href="https://www.facebook.com/concadangiu" target="_blank">concadangiu</a></li>
    //         <li>S??T: 0868906633</li>

    //       </ul>
    //       <h3>Ngo??i ra:</h3>
    //       <ul>
    //         <li><a href="https://www.messenger.com/t/100023336528144" target="_blank">Chat with me</a></li>
    //         <li><a href="mailto:truongvvde140264@gmail.com?Subject=CONTACT">Mail to Truong</a></li>
    //       </ul>

    //     </header>
    //   </div>
  );
}

export default App;
