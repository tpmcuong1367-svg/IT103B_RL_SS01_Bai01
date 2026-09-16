const customerName = "Nguyễn Thị Mai";
const foodItemName = "Cơm tấm Sườn Bì Chả";
const rawFoodPrice = "55000";
const rawToppingPrice ="15000";
const rawDeliveryFee = "20000";
const voucherDiscount = 10000;

const foodPrice = Number(rawFoodPrice);
const toppingPrice = Number(rawToppingPrice);
const deliveryFee = Number(rawDeliveryFee);

const foodTotal = foodPrice + toppingPrice; 

const finalPayment = foodTotal + deliveryFee - voucherDiscount; 

console.log(`Khách hàng: ${customerName}`);
console.log(`Món ăn: ${foodItemName}`);
console.log(`Tổng tiền món ăn: ${foodTotal} VND`);
console.log(`Số tiền thanh toán thực tế: ${finalPayment} VND`);