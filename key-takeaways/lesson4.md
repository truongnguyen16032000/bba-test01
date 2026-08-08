# Tong hop cac kien thuc buoi 4
## Tong hop kien thuc ve Javascript
1, convention 
- snake_case : tất cả chữ cái viết thường, cách nhau bởi dấu gạch dưới _
vd : first_name
- kebab-case: tất cả chữ cái viết thường, cách nhau bởi dấu gạch ngang -
vd : first-name
- camel-case:Từ đầu viết thường, từ tiếp theo viết hoa chữ cái đầu 
vd : userName, firstName
- pasCal - case:Mỗi từ đều viết hoa chữ cái đầu
vd: UserName,LoginPage
2, consolog 
- Dùng để in thông tin ra Console/Terminal
console.log("Hello");
3, object 
Object dùng để lưu thông tin của một đối tượng
ví dụ: 
const student = {
    name: "Nguyen",
    age: 25,
    score: 90
};
4, array 
Array dùng để lưu nhiều giá trị/phần tử trong một danh sách
const fruits = [
    "Apple",
    "Banana",
    "Orange"
];

- lấy phần tử : 
console.log(fruits[0]);
- mảng luôn bắt đầu =0
5, funtion
Function = một nhóm code thực hiện một công việc.

## Tong hop kien thuc ve git
1, Một số câu lệnh với nhánh branch
- git branch: xem danh sách 
- git branch <tên nhánh >: Tạo nhánh mới 
- git checkout <tên nhánh>: chuyển nhánh mới 
- git checkout -b <tên nhánh > Vừa tạo vừa chuyển sang nhánh mới 
- git branch - d: xóa branch vừa tạo 
LUÔN PULL CODE VỀ TRƯỚC KHI TẠO 1 BRANCH MỚI 
2, git pull
git pull origin main: lấy code từ server về 
3, git undo 
git restore --staged [ten-file.js]: bỏ file khỏi stagging 
git restore --staged . : Bỏ toàn bộ các file khỏi stagging 
