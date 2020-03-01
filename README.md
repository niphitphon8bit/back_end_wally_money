Node.js RESTFUL API
database
- ใช้ database เป็น mysql โดยใช้ xampp เป็น server database
1. ติดตั้ง XAMPP
2. เปิด XAMPP Control Panel
 - กด start Apache 
 - กด start Mysql
3. นำไฟล์เข้า
 - เปิดเว็บ brower เข้า path localhost
 - localhost/phpmyadmin
 - สร้าง database ชื่อ t5_60_wallet โดยกด New
 - เลือกเป็น utf8_general_ci
 - เข้าไปที่ database ชื่อ t5_60_wallet
 - กด import
 - เลือกไฟล์ t5_60_wallet.sql
 - กด Go
node.js
1. ติดตั้ง nodemon 
 - npm install nodemon --save
2. ติดตั้ง dotenv
 - npm install -g dotenv --save
3. ติดตั้ง express
 - npm install express --save
4. ติดตั้ง mysql
 - npm install mysql --save
5. จากนั้นทำการ run โดยใช้คำสั่ง
 - nodemon ./
