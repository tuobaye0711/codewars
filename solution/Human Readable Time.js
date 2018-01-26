function humanReadable(seconds) {
    let h, m, s, rs;
    h = Math.floor(seconds / 3600) < 10 ? '0' + Math.floor(seconds / 3600) : Math.floor(seconds / 3600);
    rs = seconds % 3600;
    m = Math.floor(rs / 60) < 10 ? '0' + Math.floor(rs / 60) : Math.floor(rs / 60);
    s = rs % 60 < 10 ? '0' + rs % 60 : rs % 60;
    return h + ':' + m + ':' + s
}