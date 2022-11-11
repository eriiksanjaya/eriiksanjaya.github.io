var AES = require("crypto-js/aes");
var utf8 = require("crypto-js/enc-utf8");

const eW = text => {
    return AES.encrypt(text, "Bismillah").toString()
};
const dW = ciphertext => {
    const bytes = AES.decrypt(ciphertext, "Bismillah");
    const originalText = bytes.toString(utf8);
    return originalText
};

const date = new Date();

let log = console.log;

let myName = "U2FsdGVkX1/a6VOfstDItQ3C2jd75OkfGv/W9vpizYE=";
let hp = "U2FsdGVkX19LaUWE8kjNJ4gsrjEqmMwG/bsAQGm1qs8=";
let hp_wa = "U2FsdGVkX19xhDeskXgAFhZ0BSMP11FfZYmoRWmPrJI=";
let hp_label = "U2FsdGVkX19kCUYaxcwT5jSf0cnngwKPoiiiVu62ANY=";
let youtube = "U2FsdGVkX1+Bn1aHywUfvHVWwbQK9mHSOS5GnVLZvpi3FmPAT8QuYZoEpWXCEwuvGd66h3zi3vM5NhaljtaOBi+hVrDq0+KOEty5XQqCOLw=";
let website = "U2FsdGVkX1/jG+/pnejOmsaPaDy32aknwVsocxCKZ0NJV+BY0m970yr3pxciF10i";
let website_label = "U2FsdGVkX1+Gk8EaQyWRH/iWu+7HUPtHX4+H/jEJSTI=";

let yourData = configData;
let winLoc = window.location;
let codeNum = "5a";

let style = yourData.style;

// document.body.style = `background-color:${style.body.background}`
document.body.classList.add(`bg-${style.body.background}`);

let bgHeader = document.querySelectorAll('.bgHeader')
for (let i = 0; i < bgHeader.length; i++) {
    bgHeader[i].classList.add(`bg-${style.header.background}`);
}

let bgContainer = document.querySelectorAll('.bgContainer')
for (let i = 0; i < bgContainer.length; i++) {
    bgContainer[i].classList.add(`bg-${style.container.background}`);
}

let bgMenu = document.querySelectorAll('.bgMenu')
for (let i = 0; i < bgMenu.length; i++) {
    bgMenu[i].classList.add(`bg-${style.menu.background}`);
}

let formLabel = document.querySelectorAll('.formLabel')
for (let i = 0; i <formLabel.length; i++) {
    formLabel[i].classList.add(`text-${style.form.label}`);
}

let formInput = document.querySelectorAll('.formInput')
for (let i = 0; i <formInput.length; i++) {
    formInput[i].classList.add(`text-${style.form.value}`, `placeholder-${style.form.placeholder}`, `ring-${style.form.ring}`);
}

let textError = document.querySelectorAll('.textError')
for (let i = 0; i <textError.length; i++) {
    textError[i].classList.add(`text-${style.form.error}`);
}

let labelFitur = document.querySelectorAll('.labelFitur')
for (let i = 0; i <labelFitur.length; i++) {
    labelFitur[i].classList.add(`text-${style.fitur.label}`);
}

let tombolMasuk = document.querySelectorAll('.tombolMasuk')
for (let i = 0; i <tombolMasuk.length; i++) {
    tombolMasuk[i].classList.add(
        `text-${style.tombol.masuk.text}`,
        `bg-gradient-to-r`,
        `from-${style.tombol.masuk.background[0]}`,
        `to-${style.tombol.masuk.background[1]}`,
    );
}

let tombolKeluar = document.querySelectorAll('.tombolKeluar')
for (let i = 0; i <tombolKeluar.length; i++) {
    tombolKeluar[i].classList.add(
        `text-${style.tombol.masuk.text}`,
        `bg-gradient-to-r`,
        `from-${style.tombol.keluar.background[0]}`,
        `to-${style.tombol.keluar.background[1]}`,
    );
}

let bgStatus = document.querySelectorAll('.bgStatus')
for (let i = 0; i <bgStatus.length; i++) {
    bgStatus[i].classList.add(`text-${style.status.text}`, `bg-${style.status.background}`, `border-${style.status.border}`);
}

// let bgLogout = document.querySelectorAll('.bgLogout')
// for (let i = 0; i <bgLogout.length; i++) {
//     bgLogout[i].classList.add(`text-${style.status.text}`, `bg-${style.status.background}`, `border-${style.status.border}`);
// }

const warningAttribute = status => {
    let _wA = status;
    if (_wA == 1) {
        return `<div class="flex flex-col space-y-1"><div class="flex flex-col space-y-1 text-slate-700 bg-amber-400 px-3 py-3 rounded-md shadow-md"><p>Hi, <strong>${winLoc.hostname}</strong>, terimakasih telah menggunakan template kami. <strong>Lisensi</strong> yang Anda pakai <strong>tidak valid</strong>, Pembelian <strong>lisensi</strong> hubungi kontak di bawah.</p><div class="flex justify-start items-center space-x-3"><img src="./public/icon/googlechrome.svg" alt="icon" class="h-4 w-4"><a href="${dW(website)}" class="">${dW(website_label)}</a></div><div class="flex justify-start items-center space-x-3"><img src="./public/icon/whatsapp.svg" alt="icon" class="h-4 w-4"><a href="https://wa.me/${dW(hp_wa)}" class="">${dW(hp_label)}</a></div></div></div>`
    } else if (_wA == 2) {
        return `<div class="flex flex-col space-y-1"><div class="flex flex-col space-y-1 text-slate-700 bg-amber-400 px-3 py-3 rounded-md shadow-md"><p>Hi, <strong>${winLoc.hostname}</strong>, file HTML rusak, silakan ganti ke file Asli. Pembelian template hubungi kontak di bawah.</p><div class="flex justify-start items-center space-x-3"><img src="./public/icon/googlechrome.svg" alt="icon" class="h-4 w-4"><a href="${dW(website)}" class="">${dW(website_label)}</a></div><div class="flex justify-start items-center space-x-3"><img src="./public/icon/whatsapp.svg" alt="icon" class="h-4 w-4"><a href="https://wa.me/${dW(hp_wa)}" class="">${dW(hp_label)}</a></div></div></div>`
    } else if (_wA == 3) {
        return `<div class="flex flex-col space-y-1"><div class="flex flex-col space-y-1 text-slate-700 bg-amber-400 px-3 py-3 rounded-md shadow-md"><p>Hi, <strong>${winLoc.hostname}</strong>, jangan mengubah data creator di file <strong>config/index.js</strong>. Pembelian template hubungi kontak di bawah.</p><div class="flex justify-start items-center space-x-3"><img src="./public/icon/googlechrome.svg" alt="icon" class="h-4 w-4"><a href="${dW(website)}" class="">${dW(website_label)}</a></div><div class="flex justify-start items-center space-x-3"><img src="./public/icon/whatsapp.svg" alt="icon" class="h-4 w-4"><a href="https://wa.me/${dW(hp_wa)}" class="">${dW(hp_label)}</a></div></div></div>`
    } else if (_wA == 4) {
        return `<div class="flex flex-col space-y-1"><div class="flex flex-col space-y-1 text-slate-700 bg-amber-400 px-3 py-3 rounded-md shadow-md"><p>Hi, <strong>${winLoc.hostname}</strong>, Masa <strong>Aktif</strong> berakhir. Pembelian <strong>lisensi</strong> hubungi kontak di bawah.</p><div class="flex justify-start items-center space-x-3"><img src="./public/icon/googlechrome.svg" alt="icon" class="h-4 w-4"><a href="${dW(website)}" class="">${dW(website_label)}</a></div><div class="flex justify-start items-center space-x-3"><img src="./public/icon/whatsapp.svg" alt="icon" class="h-4 w-4"><a href="https://wa.me/${dW(hp_wa)}" class="">${dW(hp_label)}</a></div></div></div>`
    } else {
        return ``
    }
};

let loginPage = document.getElementById("loginPage");
if (!loginPage || !yourData.lisensi) {
	document.body.innerHTML = warningAttribute(2)
} else {
	if (!yourData.creator.name || yourData.creator.name != dW(myName) || yourData.creator.whatsapp != `https://wa.me/${dW(hp_wa)}` || yourData.creator.website != dW(website) || yourData.creator.youtube != dW(youtube)) {
		content.innerHTML = warningAttribute(3)
	} else {
		if (!winLoc.hostname) {} else {
			if (`${winLoc.hostname}${codeNum}` == dW(yourData.lisensi)) {
			} else {
				content.innerHTML = warningAttribute(1)
			}
		}
	}
}


let paket_label = document.getElementById("paketLabel");
if (paket_label) {
    paket_label.innerText = yourData.label.paket
}

let login_label = document.getElementById("btnLogin");
if (login_label) {
    login_label.innerText = yourData.label.tombol_login
}

let logout_label = document.getElementById("btnLogout");
if (logout_label) {
    logout_label.innerText = yourData.label.tombol_logout
}

if (yourData.menu.status) {

        let menu = document.querySelectorAll(".menu");
		for (let i = 0; i < menu.length; i++) {
            menu[i].classList.add(`text-${style.menu.text}`)
            menu[i].onclick = () => {
                let j = 0;
                while (j < menu.length) {
                    menu[j++].classList.remove("rounded-xl","shadow-md",`bg-${style.menu.tombol_menu}`)
                    
                }
                menu[i].classList.add("rounded-xl","shadow-md",`bg-${style.menu.tombol_menu}`)
            }
		}

    // let bgBtnMenu = document.querySelectorAll(".bg-\[\#4f46e5\]")

    // for (let i = 0; i < bgBtnMenu.length; i++) {
    //     bgBtnMenu[i].style = `background-color:red`;
        
    // }
    
    
    let btnVoucher_label = document.getElementById("btnVoucher");
    if (btnVoucher_label) {

        if (yourData.menu.list_menu.voucher.status) {
            btnVoucher_label.innerText = yourData.menu.list_menu.voucher.label
        } else {
            btnVoucher_label.classList.remove('flex')
            btnVoucher_label.classList.add('hidden')
        }
    }

    let btnMember_label = document.getElementById("btnMember");
    if (btnMember_label) {

        if (yourData.menu.list_menu.member.status) {
            btnMember_label.innerText = yourData.menu.list_menu.member.label
        } else {
            btnMember_label.classList.remove('flex')
            btnMember_label.classList.add('hidden')
        }
    }

    let btnQrcode_label = document.getElementById("btnQrcode");
    if (btnQrcode_label) {

        if (yourData.menu.list_menu.qrcode.status) {
            btnQrcode_label.innerText = yourData.menu.list_menu.qrcode.label
        } else {
            btnQrcode_label.classList.remove('flex')
            btnQrcode_label.classList.add('hidden')
        }
    }

    let btnTrial_label = document.getElementById("btnTrial");
    if (btnTrial_label) {

        if (yourData.menu.list_menu.trial.status) {
            btnTrial_label.innerText = yourData.menu.list_menu.trial.label
        } else {
            btnTrial_label.classList.remove('flex')
            btnTrial_label.classList.add('hidden')
        }
    }
}

let copyrightText = document.getElementById("copyRight");
if (copyrightText) {
    copyrightText.innerHTML = `&copy ${date.getFullYear()} ${yourData.copyright}`
    copyrightText.classList.add(`text-${style.copyright.text}`)
}


let sec_menu = document.getElementById('menu')
if (sec_menu) {
    if (yourData.menu.status) {
    } else {
        sec_menu.classList.remove('flex')
        sec_menu.classList.add('hidden')
    }
}

let fitur_paket = document.querySelector(".fitur-paket");
let isPaket = document.querySelector("#paket");
if (fitur_paket) {
    if (yourData.paket.status == 1) {
        if (isPaket) {
            fitur_paket.classList.add("flex");
            fitur_paket.classList.remove("hidden");
            let paketList =``
            yourData.paket.data.map(crow => {
                paketList += `
                <div class="flex px-3 py-3 space-x-3 justify-start items-center bg-gradient-to-r from-${style.paket.background[0]} to-${style.paket.background[1]} shadow-md rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-${style.paket.icon}">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
              
                    <div class="text-sm md:text-base flex justify-between w-full">
                        <p class="font-medium text-${style.paket.text}">${crow.waktu}</p>
                        <p class="text-${style.paket.text}">${crow.harga}</p>
                    </div>
                </div>`
            })

            isPaket.innerHTML = paketList
        }
    } else {
        fitur_paket.hidden = true
        fitur_paket.classList.remove("flex");
    }
}

const wifiLogo = document.getElementById("wifiLogo");

if (wifiLogo) {
    if (yourData.wifi_logo.status) {

        let circle = ''
        if (yourData.wifi_logo.circle == 'full') {
            circle = 'rounded-full'
        }

        if (yourData.wifi_logo.circle == 'medium') {
            circle = 'rounded-md'
        }

        let ring = yourData.wifi_logo.ring;
        
        let logo = `<img src='${yourData.wifi_logo.url}' alt='logo' class='w-${yourData.wifi_logo.width} h-${yourData.wifi_logo.height} ${circle} px-1 py-1 ring-${ring} ring-${style.header.ring_logo}'>`

        wifiLogo.innerHTML = logo
        
    } else {
        wifiLogo.remove()
    }
}

const wifi = document.getElementById("wifi");
const wifiNama = document.getElementById("wifiNama");
const wifiDeskripsi = document.getElementById("wifiDeskripsi");

wifiNama.classList.add(`text-${style.header.wifi_nama}`)
wifiDeskripsi.classList.add(`text-${style.header.wifi_deskripsi}`)

if (yourData.wifi.status) {
    wifiNama.innerText = yourData.wifi.nama;

    let des = '';
    yourData.wifi.deskripsi.map(row => {
        des += `
			<p class="text-sm">${row}</p>
        `
        wifiDeskripsi.innerHTML = des
    })
    
} else {
    wifi.remove()
}


let exp_status = document.getElementById('exp_status')
if (exp_status) {
    exp_status.hidden = true
    if (configData.expired_user.status) {
        exp_status.hidden = false
        let username = document.getElementById('user').innerHTML
        let url = configData.expired_user.url
        let sessionName = configData.expired_user.session_name
        let getvalid = url+username+"&session="+sessionName
        let exp_load = document.getElementById('exp_load')
        let el_exp = ''
        if (configData.expired_user.background) {
            el_exp += `<div class="flex space-x-1"><p>:</p> <iframe id="exp" scrolling="no" class="bg-white bg-opacity-70 w-full rounded-md h-6 -mt-[0.10rem]" src="${getvalid}"></iframe></div>`
        } else {
            el_exp += `<div class="flex space-x-0"><p>:</p> <iframe id="exp" scrolling="no" class="h-6 -mt-[0.10rem]" src="${getvalid}"></iframe></div>`
        }
        exp_load.innerHTML = el_exp
    }
}

function split(array, n) {
    let [...arr]  = array;
    var res = [];
    while (arr.length) {
      res.push(arr.splice(0, n));
    }
    return res;
}