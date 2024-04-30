const fetchDataApi = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
};

//fitur paket internet
let domPaketInternet = document.getElementById("paketInternet");
fetchDataApi("./config/data/internetPackage.json")
  .then((res) => {
    if (res.status && domPaketInternet) {
      // document.title = res.label.title;
      domPaketInternet.classList.remove("hidden");
      let dom = `<div class="flex flex-col space-y-3 p-3 rounded-3xl bg-indigo-100">
      <p class="text-xl font-semibold text-center">${res.label.title}</p>
      
      <div class="w-full flex flex-col space-y-3">`;

      res.data.map((val, key) => {
        dom += `<div class="flex flex-col space-y-1 bg-gradient-to-r from-fuchsia-800 to-violet-900 p-[0.18rem] rounded-full">
        <div class="w-full flex bg-slate-50 rounded-full p-[0.18rem] justify-between items-center">
          <div class="w-max pl-4 text-slate-600">
            <p class="text-sm">${val.name}</p>
            <p class="font-semibold">${val.price}</p>
          </div>`;

        dom += res.buttonOrder.status
          ? `<button onclick="redirect('${val.url}', true)" class="w-auto px-6 py-3 bg-gradient-to-r from-fuchsia-800 to-violet-900 rounded-full text-white">${res.buttonOrder.text}</button>`
          : `<button onclick="copyText('${val.name} - ${val.price}', this)" class="flex space-x-1 px-3 py-1 justify-start items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-slate-600">
<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg></button>`;

        dom += `</div>
      </div>`;
      });

      dom += `</div>
      </div>`;
      domPaketInternet.innerHTML = dom;
    }
  })
  .catch((error) => console.error("Error:", error));

// fitur katalog produk
const domKatalogProduk = document.getElementById("katalogProduk");
const runDisplayProduct = () => {
  fetchDataApi("./config/data/product.json")
    .then((res) => {
      if (res.status && domKatalogProduk) {
        domKatalogProduk.classList.remove("hidden");

        const mydata = JSON.stringify(res);

        let currentIndex = 0;
        let totaldata = res.data.length;
        const displayData = () => {
          const currentItem = res.data[currentIndex];
          let dom = `<div class="flex flex-col space-y-3 p-3 rounded-3xl bg-indigo-100">
        <div class="z-10 w-full flex flex-col space-y-3">
      <p class="text-xl font-semibold text-center">${res.label.title}</p>
        <div class="w-full flex justify-center items-center space-x-3">`;
          dom += `<div class="w-32">
                    <img src="${currentItem.img}" alt="" class="w-max rounded-3xl shadow-xl shadow-slate-700/20">
                </div>
                <div class="w-full">
                    <div class="space-y-1 text-slate-600">
                        <p class="font-semibold text-lg">${currentItem.title}</p>
                        <p>${currentItem.price}</p>
                    </div>
                    <div class="w-full xbg-red-500 flex justify-end items-center">
                        <div class="w-full flex space-x-4 justify-end xbg-purple-500">
                            <button onclick="katalogAll()" class="w-max px-3 py-1 bg-white rounded-full bg-gradient-to-r from-fuchsia-800 to-violet-900 text-white font-light shadow-md shadow-violet-700/30">${res.label.see_all}</button>
                        </div>
                    </div>
                </div>`;

          dom += `</div>
          </div>
        </div>`;

          currentIndex++;
          if (currentIndex >= totaldata) {
            currentIndex = 0;
          }
          domKatalogProduk.innerHTML = dom;
        };

        displayData();
        const showKatalog = setInterval(displayData, 3000);
        this.katalogAll = () => {
          clearInterval(showKatalog);
          myKatalog(res);
          scrollTo("#katalogProduk");
        };
      }
    })
    .catch((error) => console.error("Error:", error));
};

runDisplayProduct();

const myKatalog = (data) => {
  let dom = `<div class="flex flex-col space-y-3 p-3 rounded-3xl bg-indigo-100">
      <p class="text-xl font-semibold text-center">${data.label.title}</p>
          <div class="w-full flex flex-col space-y-3">
            `;

  data.data.map((val, key) => {
    dom += `<div class="w-full flex justify-center items-center space-x-3"><div class="w-32">
              <img src="${
                val.img
              }" alt="" class="w-max rounded-3xl shadow-xl shadow-slate-700/20">
          </div>
          <div class="w-full">
              <div class="space-y-1 text-slate-600">
                  <p class="font-semibold text-lg">${val.title}</p>
                  <p>${val.price}</p>
              </div>
              <div class="w-full xbg-red-500 flex justify-end items-center">
                  <div class="w-full flex space-x-1 justify-end xbg-purple-500">
                    <button onclick="copyText('${val.title} - ${
      val.price
    }', this)" class="${
      data.button_copy.status == 1 ? `` : `hidden`
    } flex space-x-1 px-3 py-1 justify-start items-center bg-white rounded-full border border-violet-900 bg-gradient-to-r from-sky-50 to-blue-50 text-slate-600 font-light shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>
<p>${data.label.button_copy}</p></button>
                    
                    <button onclick="redirect('${val.url}', true)" class="${
      data.button_order.status == 1 ? `` : `hidden`
    } w-max px-3 py-1 bg-white rounded-full bg-gradient-to-r from-fuchsia-800 to-violet-900 text-white font-light shadow-lg shadow-violet-700/30">${
      data.label.button_order
    }</button>
                  </div>
              </div>
          </div></div>
          <div class="${
            data.data.length != key + 1 ? `border-b border-violet-900` : ``
          }"></div>
          `;
  });

  dom += `
            
        
          </div>
        <p onclick="runDisplayProduct()" class="w-full text-center text-lg text-violet-900 cursor-pointer font-semibold animate-pulse">${data.label.close}</p>

        </div>
        `;
  domKatalogProduk.innerHTML = dom;
};

const copyText = (string, elem = "") => {
  navigator.clipboard
    .writeText(string)
    .then(() => {
      if (elem) {
        elem.classList.add("animate-pulse");
        setTimeout(() => {
          elem.classList.remove("animate-pulse");
        }, 1000);
      }
    })
    .catch((err) => {
      // console.error("Gagal menyalin teks: ", err);
    });
};

const scrollTo = (selector) => {
  var elem = document.querySelector(selector);
  elem.scrollIntoView({ behavior: "smooth" });
};

// fitur slide
let slide = document.querySelector("#slide");
fetchDataApi("./config/data/slide.json")
  .then((res) => {
    if (res.status && slide) {
      slide.classList.remove("hidden");

      let scriptSiema = document.createElement("script");
      scriptSiema.src = `./assets/siema.min.js`;
      scriptSiema.id = "siema";
      document.body.appendChild(scriptSiema);

      let dom = `<div class="siema w-full">`;
      res.url.map((val, key) => {
        dom += `<img src="${val}" alt="${key}" class="rounded-3xl">`;
      });
      dom += `</div>`;
      slide.innerHTML = dom;

      setTimeout(() => {
        const mySiema = new Siema({
          selector: ".siema",
          duration: 200,
          easing: "ease-out",
          perPage: 1,
          startIndex: 0,
          draggable: true,
          multipleDrag: true,
          threshold: 20,
          loop: true,
          rtl: false,
          onInit: () => {},
          onChange: () => {},
        });
        setInterval(() => mySiema.next(), res.delay * 1000);
      }, 500);
    }
  })
  .catch((error) => console.error("Error:", error));

// fitur audio
const domAudio = document.getElementById("audio");
const domAuch = document.getElementById("auch");

// let xaudio = `<button id="stopBtn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 hidden">
// <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#f8fafc" stroke-width="1.5"/>
// <path d="M8 12C8 10.1144 8 9.17157 8.58579 8.58579C9.17157 8 10.1144 8 12 8C13.8856 8 14.8284 8 15.4142 8.58579C16 9.17157 16 10.1144 16 12C16 13.8856 16 14.8284 15.4142 15.4142C14.8284 16 13.8856 16 12 16C10.1144 16 9.17157 16 8.58579 15.4142C8 14.8284 8 13.8856 8 12Z" stroke="#f8fafc" stroke-width="1.5"/>
// </svg>
// </button>`;

// let btnAudioRounded = `<button id="xbtnAudio" class="hidden w-16 h-16 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full">
// <div class="w-full flex justify-center items-center">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
//   </svg>
// </div>
// </button>`;

let audioAutoplay = false;
fetchDataApi("./config/data/audio.json")
  .then((res) => {
    if (res.status) {
      if (!chatActive) {
        domAuch.classList.remove("space-x-3");
      }

      domAudio.classList.remove("hidden");

      audioAutoplay = res.autoplay.status;

      let elemAudio = `<div class="w-full">
      <audio id="myAudio">
        <source src="" type="audio/mp3">
        Your browser does not support the audio tag.
      </audio>

      <div class="hidden" id="remaining-time"></div>
      
      <div id="audio" class="w-full text-xl px-[0.82rem] bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 border-2 border-orange-500 rounded-full">
        <div class="w-full flex flex-col">

          <progress id="progressBar" value="0" max="100" class="w-full h-[0.32rem] rounded-full px-3"></progress>
      
          <div class="w-full py-[0.6rem] flex space-x-3 justify-center items-center">

        <div class=" text-xs lg:text-sm text-slate-50" id="current-time"></div>


          <button id="prevBtn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
            <path opacity="0.5" d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#f8fafc" stroke-width="1.5"/>
            <path d="M11 8.07141L7.77844 10.3725C6.66174 11.1702 6.66174 12.8298 7.77844 13.6274L11 15.9286M16.5 15.0568V8.94317C16.5 8.1298 15.5806 7.65667 14.9188 8.12944L10.6392 11.1862C10.0809 11.5851 10.0809 12.4149 10.6392 12.8137L14.9188 15.8705C15.5806 16.3433 16.5 15.8702 16.5 15.0568Z" stroke="#f8fafc" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>

          <button id="playPauseBtn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
              <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#f8fafc" stroke-width="1.5"/>
              <path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#f8fafc" stroke-width="1.5"/>
            </svg>
          </button>

          <button id="nextBtn"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#f8fafc" stroke-width="1.5"/>
            <path d="M13 8.07141L16.2215 10.3725C17.3382 11.1702 17.3382 12.8298 16.2215 13.6274L13 15.9286M7.5 15.0568V8.94317C7.5 8.1298 8.41937 7.65667 9.08124 8.12944L13.3608 11.1862C13.9191 11.5851 13.9191 12.4149 13.3608 12.8137L9.08124 15.8705C8.41937 16.3433 7.5 15.8702 7.5 15.0568Z" stroke="#f8fafc" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>

          <div class="text-xs lg:text-sm text-slate-50" id="total-time"></div>
              
          </div>
        </div>
      </div>
    </div>`;

      domAudio.innerHTML = elemAudio;

      setTimeout(() => {
        loadAudioPlayer();
      }, 1000);

      const loadAudioPlayer = () => {
        let audioPlayer = document.querySelector("#audio");
        var audio = document.getElementById("myAudio");
        var playPauseBtn = document.getElementById("playPauseBtn");
        var prevBtn = document.getElementById("prevBtn");
        var nextBtn = document.getElementById("nextBtn");
        // var stopBtn = document.getElementById("stopBtn");
        var progressBar = document.getElementById("progressBar");
        var currentTimeDisplay = document.getElementById("current-time");
        var remainingTimeDisplay = document.getElementById("remaining-time");
        var totalTimeDisplay = document.getElementById("total-time");

        var playlist = res.url;
        var currentTrack = 0;

        this.startAudio = () => {
          if (audioPlayer.classList.contains("hidden")) {
            audioPlayer.classList.remove("hidden");
          }
          if (audio.src) {
            audio.paused
              ? audio.play().catch((error) => console.error(error))
              : audio.pause();

            togglePlayPauseIcon();
          } else {
            playFirstTrack();
          }
          savePlayerState();
        };

        function loadPlayPauseIcon() {
          const checkLPPI = setInterval(() => {
            var playPauseIcon = document.getElementById("playPauseIcon");
            if (playPauseIcon) {
              clearInterval(checkLPPI);
              // Dapatkan nilai atribut 'data-status' pada elemen <svg>
              var status = playPauseIcon.getAttribute("data-status");

              // Ganti inner HTML sesuai ikon play atau pause dan atur nilai atribut 'data-status'
              if (status === "play" || !status) {
                playPauseIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
          <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#0ea5e9" stroke-width="1.5"/>
          <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#0ea5e9" stroke-width="1.5"/>
          <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#0ea5e9" stroke-width="1.5"/>
          </svg>
          
        `;
                playPauseIcon.setAttribute("data-status", "pause");
              } else {
                playPauseIcon.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#0ea5e9" stroke-width="1.5"/>
            <path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#0ea5e9" stroke-width="1.5"/>
          </svg>
        
          `;
                playPauseIcon.setAttribute("data-status", "play");
              }
            }
          }, 1);
        }

        function togglePlayPauseIcon() {
          var playPauseIcon = document.getElementById("playPauseIcon");
          if (playPauseIcon) {
            loadPlayPauseIcon();
          } else {
            loadPlayPauseIcon();
          }
        }

        if (!audio.src) {
          playFirstTrack();
        }

        function savePlayerState() {
          localStorage.setItem(
            "audioPlayerState",
            JSON.stringify({
              url: audio.src,
              currentTime: audio.currentTime,
            })
          );
        }

        function restorePlayerState() {
          var playerState = JSON.parse(
            localStorage.getItem("audioPlayerState")
          );
          if (playerState && playerState.url) {
            audio.src = playerState.url;
            audio.currentTime = playerState.currentTime || 0;
            updateProgressBar();
          }
        }

        window.addEventListener("load", restorePlayerState);

        function playFirstTrack() {
          currentTrack = 0;
          if (localStorage.getItem("audioPlayerState")) {
            restorePlayerState();
          } else {
            audio.src = playlist[currentTrack];
            audio.play();
            savePlayerState();
          }
        }

        function togglePlayPause() {
          if (audio.paused) {
            if (audio.ended) {
              playFirstTrack();
            } else {
              audio.play();
              // playPauseBtn.textContent = "Pause";
              togglePlayPauseIcon();
              // if (dataBg.default == "video") {
              //   checkVideoStatus();
              // }
            }
          } else {
            audio.pause();
            // playPauseBtn.textContent = "Play";
            togglePlayPauseIcon();
          }
          savePlayerState();
        }

        function prevTrack() {
          if (currentTrack > 0) {
            currentTrack--;
          } else {
            currentTrack = playlist.length - 1;
          }
          audio.src = playlist[currentTrack];
          audio.play();
          savePlayerState();
        }

        window.checkAudioStatus = (res = false) => {
          if (isAudioPlaying()) {
            if (res) return "play";
            // document.getElementById("playPauseIcon").innerHTML = iconPause();
            audio.pause();
          } else if (isAudioPaused()) {
            if (res) return "pause";
            // document.getElementById("playPauseIcon").innerHTML = iconPlay();
            audio.play();
          }
        };

        function isAudioPlaying() {
          if (!audio.paused) {
            return true;
          }
          return false;
        }

        window.isAudioPaused = () => {
          if (audio.paused) {
            return true;
          }
          return false;
        };

        window.playAudio = () => {
          audio.play();
        };

        window.pauseAudio = () => {
          audio.pause();
        };

        //   const iconPause = () => {
        //     return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
        // <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#0ea5e9" stroke-width="1.5"/>
        // <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#0ea5e9" stroke-width="1.5"/>
        // <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#0ea5e9" stroke-width="1.5"/>
        // </svg>`;
        //   };

        //     const iconPlay = () => {
        //       return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
        //   <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#0ea5e9" stroke-width="1.5"/>
        //   <path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#0ea5e9" stroke-width="1.5"/>
        // </svg>`;
        //     };

        function nextTrack() {
          if (currentTrack < playlist.length - 1) {
            currentTrack++;
          } else {
            currentTrack = 0;
          }

          audio.src = playlist[currentTrack];

          if (!audio.paused) {
            audio.pause();
          }

          audio.play().catch((error) => console.error(error));
          savePlayerState();
        }

        function updateProgressBar() {
          if (audio.duration > 0) {
            var value = (audio.currentTime / audio.duration) * 100;
            progressBar.value = value;

            // Update current time display
            currentTimeDisplay.textContent = formatTime(audio.currentTime);

            // Update remaining time display
            var remainingTime = audio.duration - audio.currentTime;
            remainingTimeDisplay.textContent = formatTime(remainingTime);

            // Update total time display
            totalTimeDisplay.textContent = formatTime(audio.duration);
          } else {
            progressBar.value = 0;
            currentTimeDisplay.textContent = "0:00";
            remainingTimeDisplay.textContent = "0:00";
            totalTimeDisplay.textContent = "0:00";
          }
        }

        function formatTime(seconds) {
          var minutes = Math.floor(seconds / 60);
          var seconds = Math.floor(seconds % 60);
          return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        }

        function seekProgressBar(event) {
          var percent = 0;
          if (audio.duration > 0) {
            percent = event.offsetX / this.offsetWidth;
          }
          audio.currentTime = percent * audio.duration;
          savePlayerState();
        }

        playPauseBtn.addEventListener("click", togglePlayPause);

        audio.addEventListener("play", function () {
          playPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#f8fafc" stroke-width="1.5"/>
      <path d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z" stroke="#f8fafc" stroke-width="1.5"/>
      <path d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z" stroke="#f8fafc" stroke-width="1.5"/>
      </svg>
    `;
        });

        audio.addEventListener("pause", function () {
          playPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#f8fafc" stroke-width="1.5"/>
      <path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#f8fafc" stroke-width="1.5"/>
    </svg>`;
        });

        audio.addEventListener("ended", function () {
          playPauseBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8">
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#f8fafc" stroke-width="1.5"/>
      <path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#f8fafc" stroke-width="1.5"/>
    </svg>`;
          nextTrack();
        });

        audio.addEventListener("canplay", function () {
          updateProgressBar();
        });

        setInterval(function () {
          savePlayerState();
        }, 1000);

        prevBtn.addEventListener("click", prevTrack);
        nextBtn.addEventListener("click", nextTrack);
        // stopBtn.addEventListener("click", () => {
        //   audio.pause();
        //   audio.currentTime = 0;
        //   togglePlayPauseIcon();
        // });
        progressBar.addEventListener("click", seekProgressBar);

        audio.addEventListener("timeupdate", updateProgressBar);
      };
    }
  })
  .catch((error) => console.error("Error:", error));
