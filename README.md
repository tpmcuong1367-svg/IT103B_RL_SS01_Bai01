Báo Cáo Kỹ Thuật: Dò Vết & Sửa Lỗi Nối Chuỗi Trong Tính Tiền Hóa Đơn
1. Phân tích nguyên nhân kỹ thuật
Trong JavaScript, toán tử + đảm nhận hai vai trò khác nhau tùy thuộc vào kiểu dữ liệu của các toán hạng:

Phép cộng số học (Addition): Thực hiện khi cả hai toán hạng đều là kiểu Number.
Phép nối chuỗi (String Concatenation): Kích hoạt khi có ít nhất một toán hạng mang kiểu String. JavaScript sẽ tự động ép kiểu ngầm định (type coercion) toán hạng còn lại về kiểu String rồi ghép nối hai chuỗi lại với nhau.
Dò vết luồng dữ liệu (Code Tracing):
Biến foodTotal:

Biểu thức: rawFoodPrice + rawToppingPrice
Thực tế: "55000" + "15000"
Do cả hai biến đều có kiểu dữ liệu String, toán tử + thực hiện ghép chuỗi thay vì tính tổng số học.
Kết quả: Chuỗi "5500015000".
Biến finalPayment:

Biểu thức: foodTotal + rawDeliveryFee - voucherDiscount
Phép tính được thực hiện tuần tự từ trái sang phải:
Bước 1: foodTotal + rawDeliveryFee tương đương "5500015000" + "20000" 
→
 Trả về chuỗi "550001500020000".
Bước 2: "550001500020000" - voucherDiscount tương đương "550001500020000" - 10000. Toán tử - chỉ hoạt động với số học nên ép kiểu chuỗi thành số và thực hiện phép trừ.
Kết quả: 550001500010000 (hoàn toàn sai lệch về mặt tài chính).
