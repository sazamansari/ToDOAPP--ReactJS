export default{
    getItems(){
        let items = localStorage.getItem('todo-Items')
        if (items){
            return JSON.parse(items)
        } else{
            return [];
        }
    },
    saveItems(items){
        localStorage.setItem('todo-Items', JSON.stringify(items));
    }
}