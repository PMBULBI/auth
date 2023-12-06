import { setInner } from "https://jscroot.github.io/element/croot.js";
import { postWithToken, getWithHeader } from "https://jscroot.github.io/api/croot.js";
import { getCookie, setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";
import { getHash } from "https://jscroot.github.io/url/croot.js";


let referal = getHash();
if (referal !== ""){
    setCookieWithExpireHour("referal", referal, 8);
}

let token = getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    setInner("nama","Anda akan diarahkan ke laman selanjutnya "+token);
    getWithHeader("https://komarbe.ulbi.ac.id/isadmin", "LOGIN", token, responseDataAdmin);
    getWithHeader("https://komarbe.ulbi.ac.id/pendaftar/pendaftar/registered", "LOGIN", token, responseData);
    // window.location.replace("../pmb-mhs/");
}

function responseDataAdmin(result){
    setCookieWithExpireHour("admin status", result.status);
    if (result.success){
        window.location.replace("../pmb-admin/");
    } else {
        getWithHeader("https://komarbe.ulbi.ac.id/pendaftar/pendaftar/registered", "LOGIN", token, responseData);
    }
}

function responseData(result){
    if (result.data.is_registered){
        window.location.replace("../pmb-mhs/");
    } else {
        setInner("nama","Silahkan Lakukan Pendaftaran "+token);
        setCookieWithExpireHour("no_hp", result.data.phone_num, 2);
        window.location.replace("../signup");
    }
    
}