const app = {
    //資料(函式)
    data() {
        return {
            ToggleMenuOnclick: false,
            onlineUsers: '3,123',
            numberOfOrder: '1,099',
            profit: '204,432',
            orderTitle: ['訂單編號', 'Email', '用戶姓名', '購買品項', '付款狀態', '購買金額', '編輯'],
            orderList: [
                {
                    orderID: 'TX123456789',
                    email: 'ab1234@email.com',
                    name: '卡小伯',
                    product: '六角西餐：大麥克全家餐',
                    payStatus: '尚未付款',
                    price: 900,
                },
                {
                    orderID: 'TX123456781',
                    email: 'tesst@email.com',
                    name: 'John',
                    product: '六角西餐：大麥克全家餐',
                    payStatus: '尚未付款',
                    price: 1900,
                },
                {
                    orderID: 'TX223456789',
                    email: 'ab1234@email.com',
                    name: '卡小伯',
                    product: '六角西餐：大麥克全家餐',
                    payStatus: '尚未付款',
                    price: 900,
                }
            ]
        }
    },
    //生命週期(函式)
    created() {
        // this.counter = 10;
    },
    //方法(物件)
    methods: {
        changeToggleMenuBtn() {
            this.ToggleMenuOnclick = !this.ToggleMenuOnclick;
        }
    }
}

Vue.createApp(app).mount('#app');