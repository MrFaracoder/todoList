Vue.createApp({
    data(){
        return{
            msg:"TODOLIST",
            todoList:[
                {
                    title:"Read the book",
                    info:"sdfhjdsfjjdksf",
                    completed:false
                },
                {
                    title:"Buy dog food",
                    info:"sdfhjdsfjjdksf",
                    completed:false
                },
                {
                    title:"call my parents",
                    info:"sdfhjdsfjjdksf",
                    completed:false
                },
                {
                    title:"clean my working place",
                    info:"sdfhjdsfjjdksf",
                    completed:false
                },
                {
                    title:"kill dill",
                    info:"sdfhjdsfjjdksf",
                    completed:false
                },
            ],
            AddNewList:'',
            dec:'',
            showDesk: true
           
        }
    },
    methods:{
        addDolist(){
            if(this.AddNewList.length > 0){
                var newList = {
                    title: this.AddNewList,
                    info:this.dec,
                    completed :false
                }
                this.todoList.unshift(newList)
                this.AddNewList = ''
                this.dec=''
            }
           
        },
        trash(){
            alert("remove list")
            
        }
    }
}).mount("#App")