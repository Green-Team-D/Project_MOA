import style from "styles/buy/buy.module.scss";

export default function Banner() {
  return (
    <div className={style.banner_box}>
      <h3>단어를 구매해 보세요!</h3>
      <p>보유한 단어가 많을 수록 다양한</p>
      <span>이미지를 만들 수 있어요</span>
      <div className={style.mywold_count}>
        <span>나의 단어</span>
        <div></div>
        <p>12개</p> {/* 나의 단어 갯수 들어갈곳 */}
      </div>
      <ul className={style.banner_icons}>
        <li>
          <img src="/assets/images/buy/banner_icons01.png" />
        </li>
        <li>
          <img src="/assets/images/buy/banner_icons02.png" />
        </li>
        <li>
          <img src="/assets/images/buy/banner_icons03.png" />
        </li>
      </ul>
    </div>
  );
}
