export default {
    path:'/movie',
    component:()=>import ('@/views/movie'),
    children:[
        {
            path:'nowplaying',
            component:()=> import('@/components/nowplaying')
        },
        {
            path:'playsoon',
            component:()=> import('@/components/playsoon')
        },
        {
            path:'city',
            component:()=> import('@/components/city')
        },
        {
            path:'search',
            component:()=> import('@/components/search')
        },
        {
           path:'detail/:movieId',
           components:{
               detail:()=> import('@/views/movie/detail.vue'),
               default:()=>import('@/components/nowplaying')
           },
           props:{
            detail:true
           }
        },
        {
            path:'/movie',
            redirect:'/movie/nowplaying'
        }
    ]
}