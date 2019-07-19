export default [
    {
        name: 'accauntNumber',
        func: function(value) {
            if(!value) return;
            return value.replace(/(\d{4})(\d{2}x{2})(x{4})(\d{4})/i, "$1 $3 $3 $4").replace(/x/gi, '*')   
        }
    },
    {
        name: 'orderType',
        func: function(value) {
            if(!value) return;
            switch(value) {
                case 'PAYOUT': return 'Вывод:';
                case 'PURCHASE': return 'Заказ:';
                default: return value;
            }
        }
    }
]