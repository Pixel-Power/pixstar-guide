import mainPageStyles from './Main.module.css';

function Main() {

    const onClickHandler = () => {
        alert("서비스 준비 중입니다.");
    }

    return (
            <div className={mainPageStyles.allmainPageBody}>

                <div className={mainPageStyles.searchbox}>
                    <img className={mainPageStyles.searchBg} src="/images/mainPage-images/검색창배경.png" alt="검색창 배경" />
                    <div className={mainPageStyles.searchinputbox}>
                        <input className={mainPageStyles.searchInput} type="text" placeholder="검색어를 입력하세요"></input>
                        <img className={mainPageStyles.searchButton} src="/images/mainPage-images/search-icon.png" alt="검색"></img>
                    </div>
                </div>
                
                <div className={mainPageStyles.bodybox}>
                    <div className={mainPageStyles.row1}>
                        <div className={mainPageStyles.box1}>

                            <article>
                                <div className={mainPageStyles.imageContainer}>
                                    <img src="/images/mainPage-images/이달의 식당.jpg" alt="이달의 식당" />
                                </div>
                                <div className={mainPageStyles.overlayText}>이달의 식당</div>
                            </article>

                            <article>
                                <div className={mainPageStyles.imageContainer}>
                                    <img src="/images/mainPage-images/이달의 식당.jpg" alt="픽스타 매거진" />
                                </div>
                                <div className={mainPageStyles.overlayText}>픽스타 매거진</div>
                            </article>
                        </div>

                    </div>
                    <hr></hr>
                    <div className={mainPageStyles.row1}>
                        <div className={mainPageStyles.box11}>
                            <img className={mainPageStyles.menuImage} src="/images/mainPage-images/체험단.png" />
                        </div>
                        <div className={mainPageStyles.box1}>
                            <p> pix 체험단</p>
                            <hr></hr>
                            <p> 픽스타 체험단은<br/>
                                다양한 쩝쩝박사님들의<br/>
                                신뢰도 높은 리뷰를 전달해줍니다.
                                다양한 혜택과 함께 PIX 체험단을 경험해보세요</p>
                            <button className={mainPageStyles.apply} onClick={onClickHandler}>신청하기</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={mainPageStyles.row2}>
                        <div className={mainPageStyles.box2}>
                            <img className={mainPageStyles.menuImage} type="button" onClick={onClickHandler} src="/images/mainPage-images/커피의효능.png" alt="커피의 효능" />
                        </div>
                        <div className={mainPageStyles.box2}>
                            <img className={mainPageStyles.menuImage} type="button" onClick={onClickHandler} src="/images/mainPage-images/구글검색1위.png" alt="구글 검색 1위" />
                        </div>
                        <div className={mainPageStyles.box2}>
                            <img className={mainPageStyles.menuImage} type="button" onClick={onClickHandler} src="/images/mainPage-images/오늘의레시피.png" alt="오늘의 레시피" />

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Main;