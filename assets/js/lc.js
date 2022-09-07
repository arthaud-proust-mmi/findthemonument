window.lc = {
    appKey: 'app',
    exists: item=>!!localStorage.getItem(`${window.lc.appKey}-${item}`),
    get: item=>localStorage.getItem(`${window.lc.appKey}-${item}`)||'',
    set: (item, value)=>localStorage.setItem(`${window.lc.appKey}-${item}`, value),
}
