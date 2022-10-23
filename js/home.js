showSearchBox=() => {
    $('#searchBox').css('display', 'flex');
    $('#hiddenBox').css('display', 'block');
}
hiddenSearchBox=() => {
    $('#searchBox').css('display', 'none');
    $('#hiddenBox').css('display', 'none');
}
showMenuPopup=() => {
    $('#menuPopupActive').css('display', 'block');
}
hiddenMenuPopup=() => {
    $('#menuPopupActive').css('display', 'none');
}

$( document ).ready(function() {
    var h1 = $('#articleTopMediumImg1').height();
    var h2 = $('#articleTopMediumImg2').height();

    if (h1 > h2)
        $('#articleTopMediumImg2').css('height', h1 + "px");
    else
        $('#articleTopMediumImg1').css('height', h2 + "px");
    $('.centerNewsContentSmall').css('height', $('.centerNewsBigImg').height() + $('.centerNewsBigTitle').height() + "px");

    $('.smallTravel a.image').css('height', $('.bigTravel').height()*0.33 + "px");
    
    var count=$("#contentVertical > article").length;
    var h3 = $('.articleVertical').height();
    $('.contentVerticalContainer').css('height', (h3+40)*count + "px");
});

var header = document.getElementById('header')
header.innerHTML = `<div class="menuContainer">
    <div class="menu">
        <div id="toggle">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <div class="logo">
            <img src="img/logo.png">
        </div>
        <div class="listMenuContainer">
            <ul>
                <li>                      
                    <a href="#">Thời sự</a>
                </li>
                <li>                      
                    <a href="#">Thế giới</a>
                </li>
                <li>
                    <a href="#">Kinh doanh</a>
                </li>
                <li>
                    <a href="#">Thể thao</a>
                </li>
                <li>
                    <a href="#">Công nghệ</a>
                </li>
                <li>
                    <a href="#">Giải trí</a>
                </li>
                <li>
                    <a href="#">Du lịch</a>
                </li>
                <li class="iconDot" onmouseover="showMenuPopup()">
                    <i class="fas fa-ellipsis-h" style="font-size: 22px;"></i>
                </li>     
            </ul>
        </div>
        <div class="toolBox">
            <div class="searchForm">
                <div class="showBox" onclick="showSearchBox()">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                
                <div id="searchBox">
                    <input placeholder="Nhập nội dung cần tìm...">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <div id="hiddenBox" onclick="hiddenSearchBox()"></div>
            </div>
        </div>
    </div>
</div>
<div class="menuPopupContainer" id="menuPopupActive" onmouseover="showMenuPopup()" onmouseout="hiddenMenuPopup()">
    <div class="row menuPopup">
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="#">Thời sự</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="#">Xã hội</a>
                <a href="#">Chính trị</a>
                <a href="#">Đô thị</a>
                <a href="#">Giao thông</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="#">Thế giới</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="#">Tư liệu</a>
                <a href="#">Phân tích</a>
                <a href="#">Người Việt 4 phương</a>
                <a href="#">Tầm nhìn</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="#">Kinh doanh</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="#">Quốc tế</a>
                <a href="#">Bất động sản</a>
                <a href="#">Kinh tế số</a>
                <a href="#">Chứng khoán</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="#">Thể thao</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="#">Bóng đá quốc tế</a>
                <a href="#">Bóng đá Việt Nam</a>
                <a href="#">eSports</a>
                <a href="#">Các môn khác</a>
            </div>
        </div>
    </div>
    <div class="row menuPopup">
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="#">Công nghệ</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="#">Blockchain</a>
                <a href="#">Mobile</a>
                <a href="#">Laptop</a>
                <a href="#">Internet</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="#">Giải trí</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="#">Giới sao</a>
                <a href="#">Âm nhạc</a>
                <a href="#">Phim ảnh</a>
                <a href="#">Thời trang</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="#">Du lịch</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="#">Điểm đến</a>
                <a href="#">Ẩm thực</a>
                <a href="#">Kinh nghiệm du lịch</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="#">Đời sống</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="#">Bài học sống</a>
                <a href="#">Tiêu dùng</a>
                <a href="#">Nhà</a>
            </div>
        </div>
    </div>
</div>`

var footer = document.getElementById('footer')
footer.innerHTML = `<div class="row" id="footerContainer">
<div class="col-lg-5" id="footerLeft">
    <div class="logo">
        <img src="img/logo.png">
    </div>
    <div class="footerLeftWord">
        <p>BEST news là trang tin tức trực tuyến hàng đầu Việt Nam</p>
        <p>Giấy phép báo chí: số XYZ</p>
        <p>Phụ trách nội dung: Công ty TNHH BEST news</p>
        <p>© Toàn bộ bản quyền thuộc BEST news</p>     
    </div>          
</div>
<div class="col-lg-1">
</div>
<div class="col-lg-4" id="footerRight">
    <div class="footerRightWord">
        <p>Địa chỉ: 123ABCXYZ đường Trần Phú, Quận Hà Đông, Hà Nội</p>
        <p>Hotline: 0123.456.789 - Email: bestnews123@gmail.com</p>
        <div class="linkWord">
            <a href="#">Liên hệ</a>
            <p>|</p> 
            <a href="#">Tuyển dụng</a> 
            <p>|</p> 
            <a href="#">Quảng cáo</a>  
        </div>
    </div>         

</div>
</div>`