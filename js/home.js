showSearchBox=() => {
    $('#searchBox').css('display', 'flex')
    $('#hiddenBox').css('display', 'block')
}
hiddenSearchBox=() => {
    $('#searchBox').css('display', 'none')
    $('#hiddenBox').css('display', 'none')
}

showMenuPopup=() => {
    $('#menuPopupActive').css('display', 'block')
}
hiddenMenuPopup=() => {
    $('#menuPopupActive').css('display', 'none')
}

$( document ).ready(function() {
    var h1 = $('#articleTopMediumImg1').height()
    var h2 = $('#articleTopMediumImg2').height()

    if (h1 > h2)
        $('#articleTopMediumImg2').css('height', h1 + "px")
    else
        $('#articleTopMediumImg1').css('height', h2 + "px")
        
    $('.centerNewsContentSmall').css('height', $('.centerNewsBigImg').height() + $('.centerNewsBigTitle').height() + "px")
    $('.smallTravel a.image').css('height', $('.bigTravel').height()*0.33 + "px")
    
    var count=$("#contentVertical > article").length
    var h3 = $('#contentVertical > article').height()
    $('.contentVerticalContainer').css('height', (h3+40)*count + "px")
})

$('toggle').click(function(){
    $('listMenuContainer').css('display','block')
})

/* 
<div id="toggle">
    <i class="fa-solid fa-bars"></i>
</div>
*/ 


var header = document.getElementById('header')
header.innerHTML = `<div class="menuContainer">
    <div class="menu">
       
        <div id="menuToggle">
            <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menuMobile">
                <li>
                    <a href="category.html">THỜI SỰ</a>
                    <div class="smallCategory"> 
                        <a href="category.html">XÃ HỘI</a>
                        <a href="category.html">CHÍNH TRỊ</a>
                        <a href="category.html">ĐÔ THỊ</a>
                    </div>
                </li>
                <li>
                    <a href="category.html">THẾ GIỚI</a>
                    <div class="smallCategory"> 
                        <a href="category.html">TƯ LIỆU</a>
                        <a href="category.html">PHÂN TÍCH</a>
                        <a href="category.html">TẦM NHÌN</a>
                    </div>
                </li>
                <li>
                    <a href="category.html">KINH DOANH</a>
                    <div class="smallCategory"> 
                        <a href="category.html">BĐS</a>
                        <a href="category.html">KINH TẾ SỐ</a>
                        <a href="category.html">CHỨNG KHOÁN</a>
                    </div>
                </li>
                <li>
                    <a href="category.html">THỂ THAO</a>
                    <div class="smallCategory"> 
                        <a href="category.html">BÓNG ĐÁ VIỆT NAM</a>
                        <a href="category.html">BÓNG ĐÁ QUỐC TẾ</a>
                    </div>
                </li>
                <li>
                    <a href="category.html">CÔNG NGHỆ</a>
                    <div class="smallCategory"> 
                        <a href="category.html">BLOCKCHAIN</a>
                        <a href="category.html">MOBILE</a>
                        <a href="category.html">LAPTOP</a>
                    </div>
                </li>
                <li>
                    <a href="category.html">GIẢI TRÍ</a>
                    <div class="smallCategory"> 
                        <a href="category.html">ÂM NHẠC</a>
                        <a href="category.html">PHIM ẢNH</a>
                        <a href="category.html">THỜI TRANG</a>
                    </div>
                </li>
                <li>
                    <a href="category.html">DU LỊCH</a>
                    <div class="smallCategory"> 
                        <a href="category.html">ĐIỂM ĐẾN</a>
                        <a href="category.html">ẨM THỰC</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="logo">
            <a href="home.html">
                <img src="img/logo.png">
            </a>
        </div>              
        <div class="listMenuContainer">
            <ul>
                <li>                      
                    <a href="category.html">Thời sự</a>
                </li>
                <li>                      
                    <a href="category.html">Thế giới</a>
                </li>
                <li>
                    <a href="category.html">Kinh doanh</a>
                </li>
                <li>
                    <a href="category.html">Thể thao</a>
                </li>
                <li class="techMenu">
                    <a href="category.html">Công nghệ</a>
                </li>
                <li>
                    <a href="category.html">Giải trí</a>
                </li>
                <li>
                    <a href="category.html">Du lịch</a>
                </li>
                <li class="iconDot" onmouseover="showMenuPopup()">
                    <i class="fas fa-ellipsis-h" style="font-size: 22px;"></i>
                </li>       
            </ul>
        </div>
        <div class="toolBox">
            <div class="searchForm">
                <div class="showBox" onclick="showSearchBox()">
                    <i class="fi fi-rr-search"></i>
                </div>
                
                <div id="searchBox">
                    <input placeholder="Nhập nội dung cần tìm...">
                    <i class="fi fi-rr-search"></i>
                </div>
                <div id="hiddenBox" onclick="hiddenSearchBox()"></div>
            </div>
            <div class="userIcon">
                <a href="sign-in.html" style="text-decoration: none;">
                    <i class="fi fi-rr-user" style="font-size: 22px;"></i>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="menuPopupContainer" id="menuPopupActive" onmouseover="showMenuPopup()" onmouseout="hiddenMenuPopup()">
    <div class="row menuPopup">
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="category.html">Thời sự</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="category.html">Xã hội</a>
                <a href="category.html">Chính trị</a>
                <a href="category.html">Đô thị</a>
                <a href="category.html">Giao thông</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="category.html">Thế giới</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="category.html">Tư liệu</a>
                <a href="category.html">Phân tích</a>
                <a href="category.html">Người Việt 4 phương</a>
                <a href="category.html">Tầm nhìn</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="category.html">Kinh doanh</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="category.html">Quốc tế</a>
                <a href="category.html">Bất động sản</a>
                <a href="category.html">Kinh tế số</a>
                <a href="category.html">Chứng khoán</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="category.html">Thể thao</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="category.html">Bóng đá quốc tế</a>
                <a href="category.html">Bóng đá Việt Nam</a>
                <a href="category.html">eSports</a>
                <a href="category.html">Các môn khác</a>
            </div>
        </div>
    </div>
    <div class="row menuPopup">
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="category.html">Công nghệ</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="category.html">Blockchain</a>
                <a href="category.html">Mobile</a>
                <a href="category.html">Laptop</a>
                <a href="category.html">Internet</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="category.html">Giải trí</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="category.html">Giới sao</a>
                <a href="category.html">Âm nhạc</a>
                <a href="category.html">Phim ảnh</a>
                <a href="category.html">Thời trang</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="category.html">Du lịch</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="category.html">Điểm đến</a>
                <a href="category.html">Ẩm thực</a>
                <a href="category.html">Kinh nghiệm du lịch</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="category.html">Đời sống</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="category.html">Bài học sống</a>
                <a href="category.html">Tiêu dùng</a>
                <a href="category.html">Nhà</a>
            </div>
        </div>
    </div>
</div>`

var footer = document.getElementById('footer')
footer.innerHTML = `<div class="row" id="footerContainer">
<div class="col-lg-5" id="footerLeft">
    <div class="logo logoFooter" style="width: 165px;">
        <img src="img/logo.png">
    </div>
    <div class="footerLeftWord">
        <p>BEST news là trang tin tức trực tuyến hàng đầu Việt Nam</p>
        <p>Giấy phép báo chí: số XYZ</p>
        <p>Phụ trách nội dung: Công ty TNHH BEST news</p>
        <p class="textNoResponsive">© Toàn bộ bản quyền thuộc BEST news</p>     
    </div>          
</div>
<div class="col-lg-1">
</div>
<div class="col-lg-4" id="footerRight">
    <div class="footerRightWord">
        <p>Địa chỉ: 123ABCXYZ đường Trần Phú, Quận Hà Đông, Hà Nội</p>
        <p>Hotline: 0123.456.789 - Email: bestnews123@gmail.com</p>
        <div class="linkWord">
            <a href="">Liên hệ</a>
            <p>|</p> 
            <a href="">Tuyển dụng</a> 
            <p>|</p> 
            <a href="">Quảng cáo</a>  
        </div>
        <p class="textResponsive">© Toàn bộ bản quyền thuộc BEST news</p>  
    </div>         

</div>
</div>`