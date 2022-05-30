import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />

      <div className="Home">
        <div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Spy_%C3%97_Family_logo.png" />
            <div class="container">
              <h4></h4>
              <p>
                สปาย × แฟมิลี (SPY×FAMILY; ออกเสียงว่า "สปาย แฟมิลี")
                เป็นซีรีส์มังงะญี่ปุ่น เขียนเรื่องและวาดภาพโดยทัตสึยะ เอ็นโดะ
                เรื่องราวเกี่ยวกับสายลับผู้ "สร้างครอบครัว" เพื่อปฏิบัติภารกิจ
                โดยไม่ได้รู้ว่าเด็กหญิงที่รับเป็นบุตรสาวบุญธรรมเป็นผู้มีความสามารถในการอ่านใจ
                และผู้หญิงที่แต่งงานหลอก ๆ ด้วยเป็นมือสังหาร
                เผยแพร่ฟรีเป็นรายสองสัปดาห์ทางแอปพลิเคชันและเว็บไซต์โชเน็งจัมป์พลัสตั้งแต่วันที่
                25 มีนาคม พ.ศ. 2562
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
