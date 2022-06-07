import "./App.css";
import { FaRegSun } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <div className="iconbox">
          <FaRegSun className="icon"></FaRegSun> Abstract | Help Center
        </div>
        <div className="space"></div>
        <div className="button">
          <button> Submit a request</button>
          <button className="signin"> Sign in</button>
        </div>
      </div>

      <div className="searchSection">
        <p>How can we help?</p>
        <input className="inputField" placeholder=" Search"></input>
      </div>

      <div className="grid-container">
        <div class="grid-item">
          <div className="space"></div>
          <div className="image">
            <img
              src="https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwfd95ba5a/images/products/flowers/01814_01_sunrichorangesum.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196"
              width={100}
              height={100}
            ></img>
          </div>
          <div className="text">
            <h4>Branches</h4>
            <p> eleifend et purus. In dignissim porta ex vitae porttitor. Morbi eleifend ornare urna, fringilla eleifend nibh. Praesent quis justo ante. Suspendisse sodales ipsum non eros egest</p>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div class="grid-item">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxpKUACkSklSrDrDlc37bwXy-98HkB_vyjg&usqp=CAU"
              width={100}
              height={100}
            ></img>
          </div>
          <div className="text">
            <h4>Manage your account</h4>
            <p>asdsadasdsdsadasd</p>
            <a href="#">Learn more</a>
          </div>
          <div className="space"></div>
        </div>{" "}
        <div class="grid-item">
          <div className="space"></div>
          <div className="image">
            <img
              src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
              width={100}
              height={100}
            ></img>
          </div>
          <div className="text">
            <h4>Manage organiztions , teams and projects</h4>
            <p>asdsadasdsdsadasd</p>
            <a href="#">Learn more</a>
          </div>
        </div>{" "}
        <div class="grid-item">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDu726oeFoAfkD5EpO-s2rzc8y1Wo_TClKFA&usqp=CAU"
              width={100}
              height={100}
            ></img>
          </div>
          <div className="text">
            <h4>Manage Billing</h4>
            <p>sto consectetur,  Suspendisse potenti. Sed congue ex ante, sed eleifend massa bibendum in. Phasellus a orci molestie elit</p>
            <a href="#">Learn more</a>
          </div>
          <div className="space"></div>
        </div>{" "}
        <div class="grid-item">
          <div className="space"></div>
          <div className="image">
            <img
              src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg"
              width={100}
              height={100}
            ></img>
          </div>
          <div className="text">
            <h4>Authentication to Abstract</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt libero eu orci efficitur, eu rhoncus mi fringilla</p>
            <a href="#">Learn more</a>
          </div>
        </div>{" "}
        <div class="grid-item">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU"
              width={100}
              height={100}
            ></img>
          </div>
          <div className="text">
            <h4>Anstract Support</h4>
            <p>Abs</p>
            <a href="#">Learn more</a>
          </div>
          <div className="space"></div>
        </div>
      </div>

      <div className="footer">
          <div className="Abstract">
            <h4>Abstract</h4>
            <div className="ResourcesChild">
            <p>Branches</p>
            </div>
          </div>
          <div className="Resources">
          <h4>Resources</h4>
          <div className="ResourcesChild">
            <p>Blog</p>
            <p>Help Center</p>
            <p>Release Notes</p>
            <p>Status</p>
            </div>
          </div>
          <div className="Community">
          <h4>Community</h4>
          <div className="ResourcesChild">
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Dribble</p>
            <p>Podcast</p>
            </div>
          </div>
          <div className="Company">
          <h4>Company</h4>
          <div className="ResourcesChild">
            <p>About us</p>
            <p>Carreers</p>
            <p>Legal</p>
          </div>
            <h5>Contact us</h5>
        
          <p>dev.applemon@gmail.com</p>
          </div>
          <div className="logo-footer">
          <FaRegSun className="icon"></FaRegSun>
          <p>C copyright 2022 </p>
          <p>Abstract Studio Design, Inc</p>
          <p>All right Reserved</p>

          </div>
      </div>




    </div>
  );
}

export default App;
