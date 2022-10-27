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
    var h3 = $('#contentVertical > article').height();
    $('.contentVerticalContainer').css('height', (h3+40)*count + "px");
});

var header = document.getElementById('header')
header.innerHTML = `<div class="menuContainer">
    <div class="menu">
        <div id="toggle">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <div class="logo">
            <a href="home.html">
                <img src="img/logo.png">
            </a>
        </div>
        <div class="listMenuContainer">
            <ul>
                <li>                      
                    <a href="catagory.html">Thời sự</a>
                </li>
                <li>                      
                    <a href="catagory.html">Thế giới</a>
                </li>
                <li>
                    <a href="catagory.html">Kinh doanh</a>
                </li>
                <li>
                    <a href="catagory.html">Thể thao</a>
                </li>
                <li class="techMenu">
                    <a href="catagory.html">Công nghệ</a>
                </li>
                <li>
                    <a href="catagory.html">Giải trí</a>
                </li>
                <li>
                    <a href="catagory.html">Du lịch</a>
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
                <a id="tile" href="post.html">Thời sự</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="post.html">Xã hội</a>
                <a href="post.html">Chính trị</a>
                <a href="post.html">Đô thị</a>
                <a href="post.html">Giao thông</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="post.html">Thế giới</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="post.html">Tư liệu</a>
                <a href="post.html">Phân tích</a>
                <a href="post.html">Người Việt 4 phương</a>
                <a href="post.html">Tầm nhìn</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="post.html">Kinh doanh</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="post.html">Quốc tế</a>
                <a href="post.html">Bất động sản</a>
                <a href="post.html">Kinh tế số</a>
                <a href="post.html">Chứng khoán</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="post.html">Thể thao</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="post.html">Bóng đá quốc tế</a>
                <a href="post.html">Bóng đá Việt Nam</a>
                <a href="post.html">eSports</a>
                <a href="post.html">Các môn khác</a>
            </div>
        </div>
    </div>
    <div class="row menuPopup">
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="post.html">Công nghệ</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="post.html">Blockchain</a>
                <a href="post.html">Mobile</a>
                <a href="post.html">Laptop</a>
                <a href="post.html">Internet</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="post.html">Giải trí</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="post.html">Giới sao</a>
                <a href="post.html">Âm nhạc</a>
                <a href="post.html">Phim ảnh</a>
                <a href="post.html">Thời trang</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="post.html">Du lịch</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="post.html">Điểm đến</a>
                <a href="post.html">Ẩm thực</a>
                <a href="post.html">Kinh nghiệm du lịch</a>
            </div>
        </div>
        <div class="col-lg-3 listMenuPopup">
            <div class="titleMenuPopup">
                <p id="tickTile">#</p>
                <a id="tile" href="post.html">Đời sống</a>
            </div>
            <div class="categoryMenuPopup">
                <a href="post.html">Bài học sống</a>
                <a href="post.html">Tiêu dùng</a>
                <a href="post.html">Nhà</a>
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
            <a href="post.html">Liên hệ</a>
            <p>|</p> 
            <a href="post.html">Tuyển dụng</a> 
            <p>|</p> 
            <a href="post.html">Quảng cáo</a>  
        </div>
    </div>         

</div>
</div>`