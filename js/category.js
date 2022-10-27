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

];

  data.map(item => {
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