let state={
    nm:window.localStorage.getItem('cityNm')||'广州',
    id:window.localStorage.getItem('cityId')||1
}

let actions={

}

let mutations={
    CITY_INFO(state,payload){
        state.nm=payload.nm;
        state.id=payload.id;
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}