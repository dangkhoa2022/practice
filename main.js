//Bài 2: Viết một đoạn mã Javascript, khai báo biến width chứa giá trị độ rộng của hình chữ nhật, biến height chứa giá trị chiều cao của hình chữ nhật. In ra màn hình diện tích của hình chữ nhật đó.
let width = 20
let height = 10
document.write('S = ', S = width * height)
//Bài 3: Dùng hàm prompt() để nhập 2 số từ bàn phím, lưu vào 2 biến là a và b. Kiểm tra xem a có phải là bội số của b hay không (tức là a có chia hết cho b hay không). Hiển thị kết quả ra màn hình bằng cách sử dụng hàm alert().

let a = prompt("Nhap a: ")
let b = prompt("Nhap b: ")
if (a % b == 0){
  alert(' a chia het cho b')
}
else{      
  alert('a khong chia het cho b')
}
document.write("</br>a = ", a) 

document.write("</br>b = ", b) 

