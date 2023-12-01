import { setInner } from "https://jscroot.github.io/element/croot.js";
import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getCookie, setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

let token = getCookie("login");
if (token === ""){
    window.location.replace("../");
}else{
    setInner("nama","Anda akan diarahkan ke laman selanjutnya "+token);
    getWithHeader("https://komarbe.ulbi.ac.id/pendaftar/pendaftar/registered", "LOGIN", token, responseData)
    window.location.replace("../pmb-mhs/");
}



function responseData(result){
    if (result.data.is_registered){
        window.location.replace("../pmb-mhs/");
    }else{
        setInner("nama","Silahkan Lakukan Pendaftaran "+token);
        getWithHeader("https://komarbe.ulbi.ac.id/pendaftar/pendaftar/registered", "LOGIN", token, responseData);
        setCookieWithExpireHour("no_hp", result.data.phone_num, 2);
        window.location.replace("../signup");
    }
    
}