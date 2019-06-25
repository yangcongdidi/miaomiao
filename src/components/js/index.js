import Vue from 'vue'
import pop from './pop'
import store from '../../../stores'
console.log(pop);
export let message=(function(){
    let defaults={
        title:'',
        content:'',
        cannel:'',
        ok:'',
        handleCannel:null,
        handleOk:null,
    }
    return function(opts){
        for(let key in opts){
            defaults[key]=opts[key]
        }
    
        let myComponents=Vue.extend(pop);
        let vm=new myComponents({
            store,
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cannel:defaults.cannel,
                ok:defaults.ok,
            },
            methods:{
                handleCannel(){
                    defaults.handleCannel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                },
            }
        })
        console.log(vm);
        document.body.appendChild(vm.$el);
    }
  

})();