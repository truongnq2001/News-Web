const data = [
    {imgArticle: 'img/laptop-tien-hoa-thanh-smp.jpg',
    titleArticle: 'Laptop đang tiến hoá ngược để trở thành smartphone', 
    summaryArticle: 'Các hãng máy tính đang tích hợp nhiều tính năng của điện thoại lên laptop, trái ngược xu hướng cách đây 10 năm.', 
    hourArticle: '1 ngày trước'},

    {imgArticle: 'img/loi-nhuan-cty-me-gg.jpg',
    titleArticle: 'Lợi nhuận công ty mẹ của Google giảm 27%', 
    summaryArticle: 'Tăng trưởng doanh thu của tập đoàn đang có dấu hiệu chững lại. Doanh thu quảng cáo cũng không mấy khả quan do sự sụt giảm trong chi tiêu của người dùng và sự cạnh tranh của TikTok.', 
    hourArticle: '17 giờ trước'},

    {imgArticle: 'img/laptop-tien-hoa-thanh-smp.jpg',
    titleArticle: 'Laptop đang tiến hoá ngược để trở thành smartphone', 
    summaryArticle: 'Các hãng máy tính đang tích hợp nhiều tính năng của điện thoại lên laptop, trái ngược xu hướng cách đây 10 năm.', 
    hourArticle: '14 giờ trước'},

    {imgArticle: 'img/loi-nhuan-cty-me-gg.jpg',
    titleArticle: 'Lợi nhuận công ty mẹ của Google giảm 27%', 
    summaryArticle: 'Tăng trưởng doanh thu của tập đoàn đang có dấu hiệu chững lại. Doanh thu quảng cáo cũng không mấy khả quan do sự sụt giảm trong chi tiêu của người dùng và sự cạnh tranh của TikTok.', 
    hourArticle: '11 giờ trước'},

    {imgArticle: 'img/doanh-nghiep-tq-livestream-tim-ng-lam.jpg',
    titleArticle: 'Doanh nghiệp Trung Quốc livestream để tìm người làm', 
    summaryArticle: 'Những công nhân thất nghiệp ở Trung Quốc bất ngờ tìm được việc làm, có thu nhập ổn định từ các ứng dụng livestream.', 
    hourArticle: '10 giờ trước'},

    {imgArticle: 'img/dokwon-keu-oan.jpg',
    titleArticle: 'Do Kwon kêu oan', 
    summaryArticle: 'Cả CEO Hàn Quốc lẫn đại diện công ty Terraform Labs đều phủ nhận các cáo buộc về việc rút vốn, tẩu tán tiền số.', 
    hourArticle: '7 giờ trước'},

    {imgArticle: 'img/laptop-tien-hoa-thanh-smp.jpg',
    titleArticle: 'Laptop đang tiến hoá ngược để trở thành smartphone', 
    summaryArticle: 'Các hãng máy tính đang tích hợp nhiều tính năng của điện thoại lên laptop, trái ngược xu hướng cách đây 10 năm.', 
    hourArticle: '4 giờ trước'},

    {imgArticle: 'img/loi-nhuan-cty-me-gg.jpg',
    titleArticle: 'Lợi nhuận công ty mẹ của Google giảm 27%', 
    summaryArticle: 'Tăng trưởng doanh thu của tập đoàn đang có dấu hiệu chững lại. Doanh thu quảng cáo cũng không mấy khả quan do sự sụt giảm trong chi tiêu của người dùng và sự cạnh tranh của TikTok.', 
    hourArticle: '3 giờ trước'},

    {imgArticle: 'img/doanh-nghiep-tq-livestream-tim-ng-lam.jpg',
    titleArticle: 'Doanh nghiệp Trung Quốc livestream để tìm người làm', 
    summaryArticle: 'Những công nhân thất nghiệp ở Trung Quốc bất ngờ tìm được việc làm, có thu nhập ổn định từ các ứng dụng livestream.', 
    hourArticle: '2 giờ trước'},

    {imgArticle: 'img/nhung-laptop-choi-game.jpg',
    titleArticle: 'Những laptop chơi game đáng mua, giá dưới 30 triệu đồng', 
    summaryArticle: 'Lenovo Legion 5, Acer Nitro 5 hay MSI Bravo 15 là những chiếc laptop gaming có hiệu năng, màn hình, tản nhiệt tốt trong phân khúc dưới 30 triệu đồng.', 
    hourArticle: '1 giờ trước'},
]

const dataPost = [
     {imgArticle: 'img/doanh-nghiep-tq-livestream-tim-ng-lam.jpg',
    titleArticle: 'Doanh nghiệp Trung Quốc livestream để tìm người làm', 
    summaryArticle: 'Những công nhân thất nghiệp ở Trung Quốc bất ngờ tìm được việc làm, có thu nhập ổn định từ các ứng dụng livestream.', 
    hourArticle: '1 ngày trước'},

    {imgArticle: 'img/VMS-nhieu-xe-moi.jpg',
    titleArticle: 'Nhiều xe mới và concept xuất hiện tại VMS 2022', 
    summaryArticle: 'Các mẫu xe mới được giới thiệu có cả xe thể thao và xe điện, trong khi một số mẫu concept mang tính trình diễn công nghệ cũng xuất hiện.', 
    hourArticle: '17 giờ trước'},

    {imgArticle: 'img/u20-vn-chung-bang-iran.jpg',
    titleArticle: 'U20 Việt Nam chung bảng Iran và Australia', 
    summaryArticle: 'Theo kết quả bốc thăm chia bảng VCK U20 châu Á 2023 diễn ra trưa 26/10, U20 Việt Nam rơi vào bảng B với các đối thủ Iran, Australia và Qatar.', 
    hourArticle: '14 giờ trước'},

    {imgArticle: 'img/hang-nghin-nguoi-chen-chuc-vms.jpg',
    titleArticle: 'Hàng nghìn người chen chúc tại Vietnam Motor Show 2022', 
    summaryArticle: 'Ngày cuối tuần, triển lãm xe lớn nhất tại Việt Nam thu hút lượng lớn người dân đến tham quan. Đội ngũ sale đông đảo, biến sự kiện thành một "chợ xe".', 
    hourArticle: '11 giờ trước'},

    {imgArticle: 'img/laptop-tien-hoa-thanh-smp.jpg',
    titleArticle: 'Laptop đang tiến hoá ngược để trở thành smartphone', 
    summaryArticle: 'Các hãng máy tính đang tích hợp nhiều tính năng của điện thoại lên laptop, trái ngược xu hướng cách đây 10 năm.', 
    hourArticle: '10 giờ trước'},

    {imgArticle: 'img/thanh-pho-thu-duc-duoc-tang-quyen.jpg',
    titleArticle: 'TP Thủ Đức được tăng quyền', 
    summaryArticle: 'Từ cuối năm nay đến hết 2024, UBND TP HCM cho phép TP Thủ Đức được quyền quyết định nhiều lĩnh vực mà cấp quận huyện không có.', 
    hourArticle: '7 giờ trước'},

    {imgArticle: 'img/noi_nguoi_dan_di_tren_mai_nha.jpg',
    titleArticle: 'Nơi người dân đi trên mái nhà nhau', 
    summaryArticle: 'Masuleh (Iran) là ngôi làng có kiến trúc đặc biệt. Nhìn từ xa, ngôi làng trông như những bậc thang khổng lồ xếp chồng nhau.', 
    hourArticle: '4 giờ trước'},

    {imgArticle: 'img/toan-canh-ham-chui-le-van-luong.jpg',
    titleArticle: 'Toàn cảnh hầm chui 700 tỷ đồng "giải cứu" đường Lê Văn Lương', 
    summaryArticle: 'Giao thông qua khu vực nút giao Lê Văn Lương - vành đai 3 sau 2 ngày khánh thành hầm chui đã thông suốt và được cải thiện đáng kể so với trước khi có công trình này.', 
    hourArticle: '3 giờ trước'},

    {imgArticle: 'img/loat-du-an-nha-o-thuong-mai-quanh-vanh-dai-3.5.jpg',
    titleArticle: 'Loạt dự án nhà ở thương mại mọc dày đặc quanh đường vành đai 3,5', 
    summaryArticle: 'Nút giao 2.400 tỷ chưa triển khai còn đoạn vành đai 3,5 vẫn ì ạch sau 5 năm khởi công, song hàng loạt dự án nhà ở thương mại đang được xây dựng rầm rộ xung quanh khu vực này.', 
    hourArticle: '2 giờ trước'},

    {imgArticle: 'img/phan-ung-cua-allgeri-khi-juve-bi-loai-khoi-cpl.jpg',
    titleArticle: 'Phản ứng của Allegri khi Juve bị loại khỏi Champions League', 
    summaryArticle: 'Nhà cầm quân người Italy cảm thấy thất vọng sau trận thua 3-4 của Juventus trước Benfica tại lượt trận 5 bảng H Champions League rạng sáng 26/10 (giờ Hà Nội).', 
    hourArticle: '1 giờ trước'},
]

showArticle = (arr) =>{
    arr.map(item => {
    document.querySelector('#contentVertical').insertAdjacentHTML('afterbegin', `
    <article class="articleVertical">
        <a class="image" href="post.html">
            <img src="${item.imgArticle}">
        </a>
        <div class="articleContent">
            <a data-title="Title Article" href="post.html">
                ${item.titleArticle}
            </a>
            <p data-title="Summary Article" >
                ${item.summaryArticle}
            </p>
            <p data-title="Hour Article" class="hour">
                ${item.hourArticle}
            </p>
        </div>
    </article>
    `)
    })
    $( document ).ready(function() {
        var currentItems = 4
        var h3 = $('.articleVertical').height();
        $('.contentVerticalContainer').css('height', (h3+40)*currentItems + "px")
        elementList = [...document.querySelectorAll('.articleVertical')]
        $(elementList[currentItems-1]).addClass('lastArticle')
        $(".bonusButton").click(function()
        {
            $(elementList[currentItems-1]).removeClass('lastArticle')
            $('.bonusButton').css('display', 'none')
            for(var i = currentItems; i < currentItems + 4; i++){
                    $('.bonusButton').css('display', 'block')
                        if(elementList[i]){
                            $(elementList[i]).css('display', 'flex')
                        }
            }
            currentItems += 4
            if(currentItems > elementList.length){
                currentItems = elementList.length
                $('.bonusButtonContainer').css('display', 'none')
            }
            elementList[currentItems-1].classList.add('lastArticle')
            $('.contentVerticalContainer').css('height', (h3+40)*currentItems + "px")
        })
        
    })
}

