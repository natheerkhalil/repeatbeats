<template>
  <!-- MAIN PAGE WRAP -->
  <div @click="handleOutsideClick" class="__b _flex _fd-co">

    <!-- HEADER -->
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
      class="__b __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
      <div class="_flex _cc _fd-ro">
        <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
        &nbsp;
        <p class="logo-text _sm-hide __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
      </div>
      <div class="_flex _cc">
        <div v-if="!userIsMember" class="tooltip">
          <svg @click='goToUpgrade' class="__po" xmlns="http://www.w3.org/2000/svg" width="45" height="45"
            viewBox="0 0 24 24">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#b4b059;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#af4261;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#768a86;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path fill="url(#grad1)"
              d="M1 6.417c0-1.013.822-1.833 1.834-1.833 1.215 0 2.104 1.167 1.763 2.329-.559 1.915 5.827 3.731 6.771-1.471.239-1.323-.021-1.67-.668-2.321-.329-.329-.534-.783-.534-1.287 0-1.013.822-1.834 1.834-1.834 1.014 0 1.833.821 1.833 1.833 0 .504-.204.958-.533 1.287-.646.65-.905.998-.666 2.321.941 5.2 7.33 3.387 6.77 1.471-.339-1.162.548-2.329 1.764-2.329 1.012 0 1.832.821 1.832 1.834 0 1.118-.992 1.97-2.084 1.816-1.32-.187-3.03 4.554-3.417 6.716-1.765-.615-3.618-.942-5.493-.949-1.875.006-3.74.334-5.504.949-.388-2.162-2.098-6.903-3.418-6.717-1.092.155-2.084-.697-2.084-1.815zm-1 14.583h2.359l.566 3c.613-1.012 1.388-1.912 2.277-2.68l-2.342-3.335c-1.089.879-2.053 1.848-2.86 3.015zm24 0h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-12-4.998c-2.845.009-5.491.825-7.757 2.211l2.334 3.322c1.603-.924 3.448-1.464 5.423-1.473 1.975.009 3.82.549 5.423 1.473l2.334-3.322c-2.266-1.386-4.912-2.202-7.757-2.211zm-3.022 3.498l-.65-.348-.651.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.13.725zm3.672-.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.129.725zm3.718.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.322-.663.322.663.729.101-.53.511.128.726z" />
          </svg>
          <p class="tooltiptext">Upgrade</p>
        </div> &nbsp; &nbsp; &nbsp;
        <svg fill="var(--grey_10)" id="sidebarOpen" @click="toggleSidebar" class="__po" clip-rule="evenodd"
          fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" width="45" height="45" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m15 17.75c0-.414-.336-.75-.75-.75h-11.5c-.414 0-.75.336-.75.75s.336.75.75.75h11.5c.414 0 .75-.336.75-.75zm7-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
            fill-rule="nonzero" />
        </svg>
      </div>
    </div>
    <!-- END HEADER -->

    <div style="margin-top: 25px;" class="__b _flex _fd-co _cc">

      <div v-if="!this.emailVerified && this.showUnverifiedEmailAlert"
        class="__b __w __mauto _flex __bg-warn-5 _sm-fd-co __bo-warn-8 __bod _ai-ce _jc-be __bdxs __padxs">
        <p class="__txt-grey-1 __b __tle">Your email is not verified yet. You can only add a maximum
          of&nbsp;<strong>10</strong>&nbsp;videos and&nbsp;<strong>1</strong>&nbsp;playlist with an unverified account.
        </p>
        <br class="m_hide _sm-show">
        <div class="_flex _cc _fd-ro">
          <button @click="sendVerificationEmail" style="min-width: max-content;"
            class="__padxs __tsx __bg-none __po __bo-grey-1 __bod">Send Verification Email</button> &nbsp; &nbsp;
          <svg width=24 height=24 class="__po" @click="hideEmailAlert" clip-rule="evenodd" fill-rule="evenodd"
            stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </div>
      </div>

      <div v-if="this.showMaxStorageAlert && !this.showMaxStorageAlertHidden"
        class="__b __w __mauto _flex __bg-info-4 _sm-fd-co __bo-warn-8 __bod _ai-ce _jc-be __bdxs __padxs">
        <div class="_flex _fd-co _cc">
          <p class="__txt-grey-10 __b __tle">You are reaching the maximum storage limit with a free account. You can
            only
            add up to <strong>100</strong> videos and <strong>10</strong> playlists. Upgrade to unlock unlimited
            storage.
          </p>
          <p style="margin-top: 5px; font-size: 13px;" class="__b __tle __txt-grey-8">Already upgraded on another
            device? Press the <strong>refresh</strong> button.
          </p>
        </div>
        <br class="m_hide _sm-show">
        <div style="margin-left: 15px; " class="_flex _cc _fd-ro">
          <button @click="goToUpgrade" style="min-width: max-content;"
            class="__padxs __tsx __bg-none __po __bo-grey-10 __txt-grey-10 __bod">Upgrade Account</button> &nbsp; &nbsp;
          <svg style="margin-left: 10px; " width=24 height=24 class="__po" fill=var(--grey_10)
            @click="refreshMembershipStatus" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path data-v-2dc54a20=""
              d="m21.897 13.404.008-.057v.002c.024-.178.044-.357.058-.537.024-.302-.189-.811-.749-.811-.391 0-.715.3-.747.69-.018.221-.044.44-.078.656-.645 4.051-4.158 7.153-8.391 7.153-3.037 0-5.704-1.597-7.206-3.995l1.991-.005c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.033c-.414 0-.75.336-.75.75v4.049c0 .414.336.75.75.75s.75-.335.75-.75l.003-2.525c1.765 2.836 4.911 4.726 8.495 4.726 5.042 0 9.217-3.741 9.899-8.596zm-19.774-2.974-.009.056v-.002c-.035.233-.063.469-.082.708-.024.302.189.811.749.811.391 0 .715-.3.747-.69.022-.28.058-.556.107-.827.716-3.968 4.189-6.982 8.362-6.982 3.037 0 5.704 1.597 7.206 3.995l-1.991.005c-.414 0-.75.336-.75.75s.336.75.75.75h4.033c.414 0 .75-.336.75-.75v-4.049c0-.414-.336-.75-.75-.75s-.75.335-.75.75l-.003 2.525c-1.765-2.836-4.911-4.726-8.495-4.726-4.984 0-9.12 3.654-9.874 8.426z"
              fill-rule="nonzero"></path>
          </svg>
          <svg style="margin-left: 15px; " fill="var(--grey_10)" width=35 height=35 class="__po"
            @click="hideStorageAlert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
            stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </div>
      </div>

      <br class="__br __brme">

      <div class="__b __w _flex _fd-ro _jc-ce _ai-st _md-fd-co">

        <!-- VIDEO PLAYER & URL BAR -->
        <div class="_flex __b _fd-co _cc">

          <div class="__b _flex _cc _fd-ro">
            <div class="__b _flex _cc _fd-ro">

              <input v-model="tempUrl"
                style="border-bottom: 1px solid black !important; width: 70%; margin: 15px; margin-left: 0px;"
                class="__padxs __bg-none __bo-none" placeholder="Video URL">

              <svg class="__po" @click="loadUrl()" width=25 height="25" clip-rule="evenodd" fill-rule="evenodd"
                stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm1.5 0c0 4.69 3.808 8.498 8.498 8.498s8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497-8.498 3.807-8.498 8.497zm6.711-4.845c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.564v-5.446l3.523 2.718z"
                  fill-rule="nonzero" />
              </svg>

            </div>

            <svg class="_md-hide __po" @click="showVidData = !showVidData" v-if="!showVidData"
              xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
              <path
                d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                fill-rule="nonzero" />
            </svg>

          </div>

          <div class="__bd-3 __bo-3" style="height: 350px; width: 100%" id="player"></div>

          <div class="__b _flex _jc-be _ai-ce __padxs">
            <svg v-if="allVideos.length > 2 && this.loop" @click="previousVideo()" class="__po" width=29 height=29
              style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12l-12 8v-16l12 8zm0-8v16l12-8-12-8z" />
            </svg>
            <div class="_flex _jc-en _ai-ce">
              <p class="__txt-grey-5 __tsx">Music mode (video cannot be paused)</p> &nbsp; &nbsp;
              <input type="checkbox" class="custcheck" v-model="musicMode">
            </div>
            <svg v-if="allVideos.length > 2 && this.loop" @click="nextVideo()" class="__po" width=29 height=29
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12l-12 8v-16l12 8zm0-8v16l12-8-12-8z" />
            </svg>
          </div>

        </div>
        <!-- END VIDEO PLAYER & URL BAR -->

        <br class="_hide _md-show">

        <!-- TOGGLE VIDEO DATA -->

        <div class="__b _flex _jc-en _hide _md-show">

          <div v-if="!playerLoaded" class="tooltip">
            <svg class="__po" @click="refreshPlayer();" xmlns="http://www.w3.org/2000/svg" width="31" height="31"
              viewBox="0 0 24 24">
              <path
                d="m11.998 2.001c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-4.496 6.028-.002-.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.048c0 .414.336.75.75.75h3.022c.414 0 .75-.336.75-.75s-.336-.756-.75-.756h-1.512c.808-1.205 2.182-1.998 3.74-1.998 2.483 0 4.5 2.016 4.5 4.5 0 2.483-2.017 4.5-4.5 4.5-1.956 0-3.623-1.251-4.242-2.997-.106-.299-.389-.499-.707-.499-.518 0-.88.513-.707 1.001.825 2.327 3.048 3.995 5.656 3.995 3.312 0 6-2.689 6-6 0-3.312-2.688-6-6-6-1.79 0-3.399.786-4.498 2.031z"
                fill-rule="nonzero" />
            </svg>
            <p class="tooltiptext">Refresh Player</p>
          </div> &nbsp;&nbsp;&nbsp;

          <svg class="__po" @click="syncCache();" xmlns="http://www.w3.org/2000/svg" width="29" height="29"
            viewBox="0 0 24 24">
            <path
              d="M15.408 21h-9.908c-3.037 0-5.5-2.463-5.5-5.5 0-2.702 1.951-4.945 4.521-5.408.212-3.951 3.473-7.092 7.479-7.092 3.267 0 6.037 2.089 7.063 5.003l-.063-.003c-.681 0-1.336.102-1.958.283-.878-2.025-2.73-3.283-5.042-3.283-3.359 0-5.734 2.562-5.567 6.78-1.954-.113-4.433.923-4.433 3.72 0 1.93 1.57 3.5 3.5 3.5h7.76c.566.81 1.3 1.49 2.148 2zm2.257-8.669c.402-.206.852-.331 1.335-.331 1.455 0 2.67 1.042 2.941 2.418l1.96-.398c-.456-2.291-2.475-4.02-4.901-4.02-.957 0-1.845.278-2.604.745l-1.396-1.745-1 5h5l-1.335-1.669zm5.335 8.669l-1.396-1.745c-.759.467-1.647.745-2.604.745-2.426 0-4.445-1.729-4.901-4.02l1.96-.398c.271 1.376 1.486 2.418 2.941 2.418.483 0 .933-.125 1.335-.331l-1.335-1.669h5l-1 5z" />
          </svg> &nbsp; &nbsp; &nbsp;

          <svg class="__po" @click="showImportModal = !showImportModal" width="27" height="27" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M23 24v-20h-8v2h6v16h-18v-16h6v-2h-8v20h22zm-12-13h-4l5 6 5-6h-4v-11h-2v11z" />
          </svg> &nbsp; &nbsp; &nbsp;


          <svg v-if="showVidData" class="__po" @click="showVidData = !showVidData" width="24" height="24"
            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
          </svg>
          <svg v-if="!showVidData" class="__po" @click="showVidData = !showVidData" width="24" height="24"
            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
          </svg>
        </div>

        <div v-if="showVidData" class="__b _flex _cc _fd-co">

          <div class="__b _md-hide _flex _jc-en">
            <div v-if="!playerLoaded" class="tooltip">
              <svg class="__po" @click="refreshPlayer();" xmlns="http://www.w3.org/2000/svg" width="31" height="31"
                viewBox="0 0 24 24">
                <path
                  d="m11.998 2.001c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-4.496 6.028-.002-.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.048c0 .414.336.75.75.75h3.022c.414 0 .75-.336.75-.75s-.336-.756-.75-.756h-1.512c.808-1.205 2.182-1.998 3.74-1.998 2.483 0 4.5 2.016 4.5 4.5 0 2.483-2.017 4.5-4.5 4.5-1.956 0-3.623-1.251-4.242-2.997-.106-.299-.389-.499-.707-.499-.518 0-.88.513-.707 1.001.825 2.327 3.048 3.995 5.656 3.995 3.312 0 6-2.689 6-6 0-3.312-2.688-6-6-6-1.79 0-3.399.786-4.498 2.031z"
                  fill-rule="nonzero" />
              </svg>
              <p class="tooltiptext">Refresh Player</p>
            </div> &nbsp;&nbsp;&nbsp;
            <div class="tooltip">
              <svg class="__po" @click="syncCache();" xmlns="http://www.w3.org/2000/svg" width="29" height="29"
                viewBox="0 0 24 24">
                <path
                  d="M15.408 21h-9.908c-3.037 0-5.5-2.463-5.5-5.5 0-2.702 1.951-4.945 4.521-5.408.212-3.951 3.473-7.092 7.479-7.092 3.267 0 6.037 2.089 7.063 5.003l-.063-.003c-.681 0-1.336.102-1.958.283-.878-2.025-2.73-3.283-5.042-3.283-3.359 0-5.734 2.562-5.567 6.78-1.954-.113-4.433.923-4.433 3.72 0 1.93 1.57 3.5 3.5 3.5h7.76c.566.81 1.3 1.49 2.148 2zm2.257-8.669c.402-.206.852-.331 1.335-.331 1.455 0 2.67 1.042 2.941 2.418l1.96-.398c-.456-2.291-2.475-4.02-4.901-4.02-.957 0-1.845.278-2.604.745l-1.396-1.745-1 5h5l-1.335-1.669zm5.335 8.669l-1.396-1.745c-.759.467-1.647.745-2.604.745-2.426 0-4.445-1.729-4.901-4.02l1.96-.398c.271 1.376 1.486 2.418 2.941 2.418.483 0 .933-.125 1.335-.331l-1.335-1.669h5l-1 5z" />
              </svg>
              <p class="tooltiptext">Sync Data</p>
            </div>
            &nbsp; &nbsp; &nbsp;
            <div class="tooltip">
              <svg class="__po" @click="showImportModal = !showImportModal" width="27" height="27" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M23 24v-20h-8v2h6v16h-18v-16h6v-2h-8v20h22zm-12-13h-4l5 6 5-6h-4v-11h-2v11z" />
              </svg>
              <p class="tooltiptext">Import Playlist</p>
            </div> &nbsp; &nbsp; &nbsp;
            <svg class="__po" @click="showVidData = !showVidData" v-if="showVidData" xmlns="http://www.w3.org/2000/svg"
              width="29" height="29" viewBox="0 0 24 24">
              <path
                d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
            </svg>
          </div>

          <!-- VIDEO DATA -->
          <div class="_flex _cc __b _fd-co __padmd">

            <div class="_sm-cc __b _flex _fd-ro _sm-fd-co _jc-ar _ai-fs">

              <div class="_flex __bo-grey-7 __bod __padxs __bdxs _sm-bo-none _ai-ce _jc-st _fd-co">
                <div class="__b _flex _ai-ce _fd-ro">

                  <p style="width: 50px;">title*</p>
                  <div style="margin-left: 15px;" class="_flex">

                    <input required v-model="videoData.title"
                      style="min-width: 200px; max-width: 200px; border-bottom: 1px solid black !important;" type="text"
                      placeholder="Title" maxlength="255" class="__bg-none __bo-none __txt-grey-1">

                  </div>

                </div>
                <br class="__br __brme">
                <div class="__b _flex _ai-ce _fd-ro">

                  <p style="width: 50px;">desc</p>

                  <div style="margin-left: 15px;" class="_flex">
                    <input required v-model="videoData.desc"
                      style="min-width: 200px; max-width: 200px; border-bottom: 1px solid black !important;" type="text"
                      placeholder="Description" maxlength="255" class="__bg-none __bo-none __txt-grey-1">
                  </div>

                </div>

                <br>

                <div class="__b _flex _ai-ce _fd-ro">

                  <p style="width: 50px;">start*</p>

                  <svg class="__po" @click="setToCurrentTime('start')" xmlns="http://www.w3.org/2000/svg" width="15"
                    height="15" viewBox="0 0 24 24">
                    <path
                      d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                  </svg>

                  <div style="margin-left: 15px;" class="_flex">
                    <input @input="this.ignoreLimit = true;" :max="parseFloat(this.videoData.end)" required
                      v-model="videoData.start"
                      style="min-width: 200px; max-width: 200px; border-bottom: 1px solid black !important;"
                      type="number" placeholder="0.00" min="0" class="__bg-none __bo-none __txt-grey-1">
                  </div>

                </div>

                <br class="__br __brme">

                <div class="__b _flex _ai-ce _fd-ro">

                  <p style="width: 50px;">end*</p>

                  <svg class="__po" @click="setToCurrentTime('end')" xmlns="http://www.w3.org/2000/svg" width="15"
                    height="15" viewBox="0 0 24 24">
                    <path
                      d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                  </svg>

                  <div style="margin-left: 15px;" class="_flex">
                    <input @input="this.ignoreLimit = true;" :min="parseFloat(this.videoData.start)" required
                      v-model="videoData.end"
                      style="min-width: 200px; max-width: 200px; border-bottom: 1px solid black !important;"
                      type="number" placeholder="0.00" class="__bg-none __bo-none __txt-grey-1">
                  </div>
                </div>

                <br>

                <div class="__b _flex _jc-en _ai-ce">
                  <p class="__txt-grey-5 __tsx">Ignore start & end</p> &nbsp; &nbsp;
                  <input type="checkbox" class="custcheck" v-model="ignoreLimit">
                </div>
              </div>

              <br class="_hide _sm-show">

              <div class="__b _flex _cc _hide _sm-show">
                <hr class="__hr __b __bg-grey-1 _hide _sm-show">
              </div>

              <br class="_hide _sm-show">

              <div class="_sm-">&nbsp;</div>

              <!-- SKIPS -->
              <div style="min-width: 240px; " class="_flex __bo-grey-7 __bod __padxs __bdxs _sm-bo-none _fd-co _cc">
                <div class="_flex _jc-ar _ai-ce _fd-ro">

                  <div class="__b _flex _cc _fd-ro">
                    <p>skips</p> &nbsp; &nbsp; <svg @click="addSkip()" class="__po" height=20 width=20
                      clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                        fill-rule="nonzero" />
                    </svg> &nbsp; &nbsp;
                    <svg class="__po" @click="clearSkip()" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd" clip-rule="evenodd">
                      <path
                        d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z" />
                    </svg>
                  </div>

                </div>

                <br>

                <div style="max-height: 75px; overflow-y: auto" class="__custscroll __b _flex _fd-co">

                  <div v-for="(x, i) in videoData.skip" class="__b _flex _fd-ro _ai-ce">

                    <input style="width: 75px;" min=0 v-model="videoData.skip[i].start" type="number" placeholder="0.00"
                      class="skip-val __bg-none __bo-none __txt-grey-1">

                    &nbsp;

                    <svg style="margin-right: 10px" class="__po" @click="setStartSkipToCurrentTime(i)"
                      xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                      <path
                        d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                    </svg>

                    &nbsp; &nbsp;

                    <input style="width: 75px;" min=0 v-model="videoData.skip[i].end" type="number" placeholder="0.00"
                      class="skip-val __bg-none __bo-none __txt-grey-1">

                    &nbsp;

                    <svg style="margin-right: 10px" class="__po" @click="setEndSkipToCurrentTime(i)"
                      xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                      <path
                        d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                    </svg>

                    <div style="margin-left: 15px" class="_flex _fd-ro _jc-ar _ai-ce">

                      <svg @click="removeSkip(i)" class="__po" style="margin-right: 10px" height="25" width="25"
                        clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                      </svg>

                      <svg @click="addSkip()" class="__po" height="25" width="25" clip-rule="evenodd"
                        fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                          fill-rule="nonzero" />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- END SKIPS -->

                <br>

                <div class="__b _flex _jc-en _ai-ce">
                  <p class="__txt-grey-5 __tsx">Ignore skips</p> &nbsp; &nbsp;
                  <input type="checkbox" class="custcheck" v-model="ignoreSkip">
                </div>

              </div>
            </div>
            <!-- END VIDEO DATA-->


            <br>

            <hr class="__hr __bg-grey-1">

            <br>

            <!-- SVG BUTTONS -->
            <div class="__b _flex _fd-ro _jc-ar _ai-ce">
              <!-- delete -->
              <div v-if="allVideos.length > 1" class="_flex tooltip">
                <svg v-if="!loading.delete" @click="destroy()" class="opt-svg" width="24" height="24"
                  clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                    fill-rule="nonzero" />
                </svg>

                <div
                  style="min-width: 35px; min-height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
                  class="__loader-og" v-if="loading.delete"></div>
                <p class="tooltiptext">Delete</p>
              </div>

              <!-- random -->
              <div v-if="allVideos.length > 1" class="_flex tooltip">
                <svg @click="random()" class="opt-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z" />
                </svg>
                <p class="tooltiptext">Random</p>
              </div>

              <!-- save -->
              <div class="_flex tooltip">
                <svg v-if="!this.loading.save" @click="save()" class="opt-svg" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
                </svg>

                <div
                  style="min-width: 35px; min-height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
                  class="__loader-og" v-if="loading.save"></div>

                <p class="tooltiptext">Save</p>
              </div>

              <!-- copy current time -->
              <div class="_flex tooltip">
                <svg @click="copyCurrentTime()" class="opt-svg" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24">
                  <path
                    d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                </svg>
                <p class="tooltiptext">Copy video time</p>
              </div>

              <!-- add to playlist -->
              <div v-if="playlists.length > 0" class="_flex tooltip">
                <svg @click="showAddModal = !showAddModal" height="35" width=35 class="__po" clip-rule="evenodd"
                  fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.5 4v-1.5c0-.265-.235-.5-.5-.5s-.5.235-.5.5v1.5h-1.5c-.265 0-.5.235-.5.5s.235.5.5.5h1.5v1.5c0 .265.235.5.5.5s.5-.235.5-.5c0-.592 0-1.5 0-1.5h1.5c.265 0 .5-.235.5-.5s-.235-.5-.5-.5c-.592 0-1.5 0-1.5 0zm-6.479 1c.043.522.153 1.025.321 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm1.106-4c-.328.456-.594.96-.785 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm7.373-3.25c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
                    fill-rule="nonzero" />
                </svg>
                <p class="tooltiptext">Add to playlist</p>
              </div>

              <!-- fav (unfilled) -->
              <div v-if="!videoData.fav" class="_flex tooltip">
                <svg @click="fav();" width="33" height="33" class="__po" clip-rule="evenodd" fill-rule="evenodd"
                  stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033-2.361 4.792-5.246.719 3.848 3.643-.948 5.255 4.707-2.505 4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z"
                    fill-rule="nonzero" />
                </svg>
                <p class="tooltiptext">Favorite</p>
              </div>

              <!-- fav (filled) -->
              <div v-if="videoData.fav" class="_flex tooltip">
                <svg @click="fav();" width="33" height="33" class="__po" clip-rule="evenodd" fill-rule="evenodd"
                  stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                    fill-rule="nonzero" />
                </svg>
                <p class="tooltiptext">Unfavourite</p>
              </div>

              <!-- lyrics -->
              <div class="_flex tooltip">
                <svg @click="this.showLyricsModal = !this.showLyricsModal" class="__po" width="28" height="28"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M2.5 19.245l.816 1.506 1.684.31-1.18 1.241.225 1.698-1.545-.739-1.545.739.225-1.698-1.18-1.241 1.684-.31.816-1.506zm19.293-3.851l-.917-.326-1.946 5.471c-1.44-.856-3.521-.263-3.98 1.028-.386 1.085.276 1.953 1.211 2.286 1.11.395 2.609.035 3.183-1.574l1.471-4.135c1.42 1.766 1.881 1.979 1.617 3.305.684-.622 1.002-1.098 1.204-1.664.615-1.729-2.338-3-1.843-4.391zm-7.61-12.343l-8.13 5.493 2.849 7.266c-1.789.323-2.981 2.243-2.438 3.627.467 1.191 1.635 1.43 2.646 1.033 1.201-.47 2.18-1.837 1.502-3.571l-2.381-6.074 6.149-3.992 1.885 4.806c-1.786.323-2.98 2.238-2.439 3.618.468 1.195 1.662 1.427 2.668 1.032 1.192-.467 2.16-1.828 1.483-3.562l-3.794-9.676zm-11.683 8.005l-2.5 2.5 2.5 2.5 2.5-2.5-2.5-2.5zm18.346-8.056l1.029 1.9 2.125.392-1.489 1.566.284 2.142-1.949-.932-1.95.932.284-2.142-1.489-1.566 2.125-.392 1.03-1.9zm-12.193-2.381l-.863-.619-3.284 4.575c-1.059-1.622-3.104-2.051-4.158-.582-.651.907-.341 2.187.538 2.818 1.046.751 2.666.91 3.634-.435l4.133-5.757z" />
                </svg>
                <p class="tooltiptext">Lyrics</p>
              </div>

              <!-- share -->
              <div @click="this.showShareModal = !this.showShareModal" class="_flex tooltip">
                <svg class="opt-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
                </svg>
                <p class="tooltiptext">Share</p>
              </div>

              <!-- received shares -->
              <div class="_flex tooltip">
                <svg class="__po" @click="this.showSharesModal = !this.showSharesModal"
                  :fill="this.receivedShares.length > 1 ? 'var(--err_1)' : 'var(--grey_1)'" viewBox="0 0 24 24"
                  width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M24 22.917h-24v-13.275l2-1.456v-7.269h20v7.272l2 1.453v13.275zm-21-10.472v-10.528h18v10.526l-9 5.474-9-5.472zm6-8.916l1.305 2.41 2.695.496-1.888 1.986.36 2.717-2.472-1.183-2.472 1.183.36-2.717-1.888-1.986 2.695-.496 1.305-2.41zm8 6.471v1h-3v-1h3zm2-2v1h-5v-1h5zm0-2v1h-5v-1h5zm0-2v1h-5v-1h5z" />
                </svg>
                <p class="tooltiptext">Received shares</p>
              </div>

            </div>
            <!-- END SVG BUTTONS -->

            <br>
            <br>

            <div class="__b _flex _jc-be _ai-ce">

              <!-- SPEED CONTROL -->
              <div class="_flex">
                <div class="__b _flex _fd-ro">
                  <div class="_flex _fd-ro _cc">
                    <p class="__tsx __txt-grey-1">speed</p> &nbsp; &nbsp;
                    <input @input="updateSpeed()" step="0.25" type="number" v-model="videoData.speed"
                      style="border-bottom: 1px solid black" class="__bo-none __bg-none" placeholder="1.00" max="2"
                      min="0.25">
                  </div>
                </div>
              </div>
              <!-- END SPEED CONTROL -->

            </div>

          </div>
        </div>
      </div>

      <br>

      <div class="__w __b _fd-co _cc __mauto _flex">

        <div class="__b _sm-fd-co _flex _fd-ro _jc-be">

          <!-- FAVOURITE VIDEOS -->
          <div
            :class="[(loop == 'fav') ? 'playing' : '', 'main-tab', 'playlist-container', '__b', '__padsm', '_flex', '_fd-co']">
            <div class=" __bo-err-1 __b __bod__w _flex _fd-co">
              <div class="__b _flex _jc-be _ai-ce _fd-ro">
                <div class="_flex _fd-ro _ai-ce">
                  <p class="main-tab-title">Favourite Videos ({{ favs.length }})
                  </p> &nbsp; &nbsp;

                  <svg v-if="this.favs.length > 0" class="__po" @click="clearFavs()" width="24" height="24"
                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                      d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z" />
                  </svg> &nbsp; &nbsp;
                </div>

                <div v-if="this.favs.length > 0" class="_flex _fd-ro">
                  <svg @click="toggleShuffle('fav')" :fill="(this.shuffle && this.loop == 'fav') ? 'green' : 'black'"
                    :class="this.loop == 'fav' ? '__po' : ''" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path
                      d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z" />
                  </svg> &nbsp; &nbsp;
                  <svg @click="startLoop('fav')" class="__po" v-if="loop != 'fav'" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z" />
                  </svg>
                  <svg @click="endLoop()" fill="green" v-if="loop == 'fav'" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z" />
                  </svg>
                </div>

              </div>
              <hr class="__hr __b __bg-grey-1">
              <br>
              <div ref="favContainer" id="fav" @scroll="handleScroll" class="__b _flex _fd-ro __custscroll"
                style="max-width: 100%; overflow-x: auto; overflow-y: hidden">

                <div v-if="!this.initialised.favs" class="__b _flex _cc">
                  <div class="__loader"></div>
                </div>

                <p v-if="favs.length == 0 && initialised.favs == true">You haven't favourited any videos</p>

                <draggable class="__b _flex _fd-ro" v-model="favs" group="favs" @start="drag = true;"
                  @end="drag = false; updateFavOrder();" item-key="url">

                  <template #item="{ element }">

                    <div :id="`fav_${element.url}`" @click="pressPlay(element.url)"
                      :class="[(element.url == this.videoData.url) ? 'image-container playing_tab' : 'image-container', `${element.url}`, 'fav-el']">
                      <img :src="element.thumbnail" alt="Image" class="image">
                      <div class="overlay">

                        <div class="overlay-text-wrap">
                          <p class="overlay-text">{{ element.title }}
                          </p>
                        </div>

                        <br>
                        <span v-if="element.url == this.videoData.url" class="__txt-succ-3 __txs">currently
                          playing</span>
                        <span class="__txt-grey-8 __txs">added {{ timeAgo(element.created_at) }}</span>
                      </div>
                    </div>

                  </template>

                </draggable>

                <!--<div :id="`fav_${v.url}`" @click="pressPlay(v.url)" v-for="(v, i) in favs.slice(0, loadLimit.fav)"
                  :class="[(v.url == this.videoData.url) ? 'image-container playing_tab' : 'image-container', `${v.url}`]">
                  <img :src="v.thumbnail" alt="Image" class="image">
                  <div class="overlay">

                    <div class="overlay-text-wrap">
                      <p class="overlay-text">{{ v.title }}
                      </p>
                    </div>

                    <br>
                    <span v-if="v.url == this.videoData.url" class="__txt-succ-3 __txs">currently playing</span>
                    <span class="__txt-grey-8 __txs">added {{ timeAgo(v.created_at) }}</span>
                  </div>
                </div>-->

              </div>
            </div>
          </div>
          <!-- END FAVOURITE VIDEOS -->

          <br class="_hide _sm-show">

          <!-- CURRENT PLAYLIST -->
          <div
            :class="[(loop == 'playlist') ? 'playing' : '', 'main-tab', 'playlist-container', '__b', '__padsm', '_flex', '_fd-co']">
            <div class="__b __bod__w _flex _fd-co">
              <div class="__b _flex _jc-be _ai-ce _fd-ro">
                <p class="main-tab-title">Current Playlist {{ this.videoPlaylist.videos.length ?
                  `(${this.videoPlaylist.videos.length})` : "" }}
                  <span class="__txt-3">
                    {{ videoPlaylist.name ? "// " + videoPlaylist.name : " - No playlist currently playing" }}
                  </span>
                </p> &nbsp; &nbsp;

                <div v-if="this.videoPlaylist.videos.length > 0" class="_flex _fd-ro">
                  <svg @click="toggleShuffle('playlist')"
                    :fill="(this.shuffle && this.loop == 'playlist') ? 'green' : 'black'"
                    :class="this.loop == 'playlist' ? '__po' : ''" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24">
                    <path
                      d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z" />
                  </svg> &nbsp; &nbsp;
                  <svg @click="startLoop('playlist')" class="__po" v-if="loop != 'playlist'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z" />
                  </svg>
                  <svg @click="endLoop()" fill="green" v-if="loop == 'playlist'" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z" />
                  </svg>
                </div>

              </div>
              <hr class="__hr __b __bg-grey-1">
              <br>
              <div id="playlist" @scroll="handleScroll" class="__b _flex _fd-ro __custscroll"
                style="max-width: 100%; overflow-x: auto; overflow-y: hidden">

                <div v-if="initialised.playlist == false" class="__b _flex _cc">
                  <div class="__loader"></div>
                </div>

                <div :id="`playlist_${v.url}`" @click="pressPlay(v.url)"
                  v-for="(v, i) in videoPlaylist.videos.slice(0, loadLimit.playlist)"
                  :class="[(v.url == this.videoData.url) ? 'image-container playing_tab' : 'image-container', `${v.url}`]">
                  <img :src="v.thumbnail" alt="Image" class="image">
                  <div class="overlay">

                    <div class="overlay-text-wrap">
                      <p class="overlay-text">{{ v.title }}
                      </p>
                    </div>

                    <br>
                    <span v-if="v.url == this.videoData.url" class="__txt-succ-3 __txs">currently playing</span>
                    <span class="__txt-grey-8 __txs">added {{ timeAgo(v.created_at) }}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <!-- END CURRENT PLAYLIST -->

        <br>

        <!-- ALL VIDEOS -->
        <div :class="[(loop == 'all') ? 'playing' : '', 'main-tab', '__b', '__padsm', '_flex', '_fd-co']">
          <div class=" __bo-err-1 __b __bod__w _flex _fd-co">
            <div class="__b _flex _jc-be _ai-ce _fd-ro">

              <div class="_flex _fd-ro _sm-fd-co _ai-ce __b _fw-wr">

                <p class="__mrauto">All Videos ({{ (searchVids.length == 0) ? allVideos.length :
                  (searchVids.length) }})
                </p> &nbsp;

                <input style="flex-grow: 1; " @input="searchVideos()" v-model="searchV"
                  class="__bg-none __bo-none __padxs __txt-grey-1" placeholder="Search Videos">

              </div>

              &nbsp;

              <div class="_ai-ce _flex _fd-ro">
                <svg @click="toggleShuffle('all')" :fill="(this.shuffle && this.loop == 'all') ? 'green' : 'black'"
                  :class="this.loop == 'all' ? '__po' : ''" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z" />
                </svg> &nbsp; &nbsp;
                <svg @click="startLoop('all')" class="__po" v-if="loop != 'all'" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24">
                  <path d="M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z" />
                </svg>
                <svg @click="endLoop()" fill="green" v-if="loop == 'all'" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24">
                  <path d="M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z" />
                </svg>
              </div>

            </div>
            <hr class="__hr __b __bg-grey-1">
            <br>
            <div id="all" @scroll="handleScroll" class="__b _flex _fd-ro __custscroll"
              style="max-width: 100%; overflow-x: auto; overflow-y: hidden">

              <div v-if="!(this.initialised.all && this.allVideos.length > 0)" class="__b _flex _cc">
                <div class="__loader"></div>
              </div>

              <p v-if="allVideos.length == 0 && initialised.all == true && searchVids.length == 0">You haven't added any
                videos</p>

              <div v-if="searchVids.length == 0" class="video" :id="`search_${v.url}`" @click="pressPlay(v.url)"
                v-for="v in allVideos.slice(0, loadLimit.all)"
                :class="[(v.url == this.videoData.url) ? 'image-container playing_tab' : 'image-container', `${v.url}`]">
                <img :src="v.thumbnail" alt="Image" class="image">
                <div class="overlay">

                  <div class="overlay-text-wrap">
                    <p class="overlay-text">{{ v.title }}
                    </p>
                  </div>

                  <br>
                  <span v-if="v.url == this.videoData.url" class="__txt-succ-3 __txs">currently playing</span>
                  <span class="__txt-grey-8 __txs">added {{ timeAgo(v.created_at) }}</span>
                </div>
              </div>

              <div v-if="searchVids.length > 0" class="video" :id="`all_${v.url}`" @click="pressPlay(v.url)"
                v-for="v in searchVids"
                :class="[(v.url == this.videoData.url) ? 'image-container playing_tab' : 'image-container', `${v.url}`]">
                <img :src="v.thumbnail" alt="Image" class="image">
                <div class="overlay">

                  <div class="overlay-text-wrap">
                    <p class="overlay-text">{{ v.title }}
                    </p>
                  </div>

                  <br>

                  <span v-if="v.url == this.videoData.url" class="__txt-succ-3 __txs">currently playing</span>
                  <span class="__txt-grey-8 __txs">added {{ timeAgo(v.created_at) }}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- END ALL VIDEOS -->

      </div>

      <br>


    </div>

    <br>

    <!-- SIDEBAR -->
    <div id="sidebar" class="sidebar _flex _fd-co">
      <div @scroll="handleVerticalScroll" id="sidebar-inner" class="__b _flex _fd-co">
        <div class="__b _flex _fd-ro _ai-ce _jc-be">
          <svg class="__po" @click="toggleSidebar" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd" clip-rule="evenodd">
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>
          <div class="_flex tooltip cc">
            <svg class="__po" @click="showPlaylistCreate = !showPlaylistCreate" width="24" height="24"
              xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />
            </svg>
            <p class="tooltiptext">Create playlist</p>
          </div>
          <div class="_flex tooltip cc">
            <svg class="__po" @click="goToAccount()" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
            </svg>
            <p class="tooltiptext">Account</p>
          </div>
          <div class="_flex tooltip cc">
            <svg class="__po" @click="logout" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd" clip-rule="evenodd">
              <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z" />
            </svg>
            <p class="tooltiptext">Logout</p>
          </div>
        </div>

        <br>

        <!-- CREATE PLAYLIST -->
        <form @submit.prevent="createPlaylist" v-if="showPlaylistCreate" class="__b _flex _cc _fd-co">
          <input required maxlength="18" v-model="playlistData.name" type="text"
            class="__txt-grey-10 __bg-none __bo-none __tmd __txt-grey-1"
            style="width: 250px; max-width: 100%; margin-right: auto; border-bottom: 1px solid black !important;"
            placeholder="Playlist Name">
          <br>
          <input v-if="!loading.createPlaylist" style="width: 250px; max-width: 100%; margin-right: auto" type="submit"
            class="__bo-info-1 __bod __hv __hv-info-1 __po __padxs __bg-none __txt-grey-10" value="Create">

          <div v-if="loading.createPlaylist"
            style="min-width: 35px; min-height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
            class="__loader-og"></div>
        </form>
        <!-- END CREATE PLAYLIST -->

        <br>

        <input v-model="searchP" @input="searchPlaylists()" class="__b __padxs __bg-grey-10 __bo-none __txt-grey-7"
          placeholder="Search playlists...">

        <br>

        <!-- PLAYLISTS -->
        <div v-if="searchPls.length == 0" v-for="(pl, index) in playlists.slice(0, loadLimit.allPlaylists)"
          :id="`pl_${pl.id}`" class="playlist __b _flex _fd-co">
          <div class="__b _flex _fd-ro _jc-be _ai-ce">
            <p :contenteditable="pl.isEditable" :style="pl.isEditable ? 'text-decoration: underline' : ''"
              :id="`pl_${pl.id}_title`" class="sidebar-title __padxs __b __tle __tmd">{{ pl.name }}</p>
            <div class="_flex _fd-ro _cc">
              <svg v-if="pl.id != this.videoPlaylist.id && pl.videos.length > 0" class="__po"
                @click="setCurrentPlaylist(pl.id, pl.name, pl.thumbnail, pl.videos)" width="24" height="24"
                xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z" />
              </svg>
              &nbsp; &nbsp;
              <svg :class="!pl.isEditable ? '__po' : ''" @click="pl.isEditable = !pl.isEditable" height="24" width=24
                clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                  fill-rule="nonzero" />
              </svg>

              <!-- SAVE & CANCEL EDIT -->
              <svg @click="updatePlaylist(pl.id)" style="margin-right: 7px" class="__po" v-if="pl.isEditable"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
              </svg>
              <svg @click="cancelUpdate(pl.id)" class="__po" v-if="pl.isEditable" clip-rule="evenodd" width="30"
                height="30" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                  fill-rule="nonzero" />
              </svg>

              &nbsp; &nbsp;
              <svg @click="deletePlaylist(pl.id)" class="__po" height="24" width="24" clip-rule="evenodd"
                fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                  fill-rule="nonzero" />
              </svg>
            </div>
          </div>

          <hr class="__hr __b __bg-grey-10">

          <br class="__br __brsm">

          <!-- PLAYLIST VIDEOS -->
          <div class="__b playlist-scroll __flow _flex _fd-ro _jc-ar">
            <div :id="`pl_vid_${v.url}`" @click="pressPlay(v.url)" v-for="v in pl.videos"
              :class="[(v.url == this.videoData.url) ? 'image-container playing_tab' : 'image-container', `${v.url}`]">
              <img :src="v.thumbnail" alt="Image" class="image">
              <div class="overlay">

                <div class="overlay-text-wrap">
                  <p class="overlay-text">{{ v.title }}
                  </p>
                </div>

                <br>
                <span v-if="v.url == this.videoData.url" class="__txt-succ-3 __txs">currently playing</span>
                <span class="__txt-grey-8 __txs">added {{ timeAgo(v.created_at) }}</span>
              </div>
            </div>
          </div>

        </div>
        <!-- END PLAYLISTS -->

        <!-- SEARCH PLAYLISTS -->
        <div v-if="searchPls.length > 0" v-for="(pl, index) in searchPls.slice(0, 10)" :id="`pl_${pl.id}`"
          class="playlist __b _flex _fd-co">
          <div class="__b _flex _fd-ro _jc-be _ai-ce">
            <p :contenteditable="pl.isEditable" :style="pl.isEditable ? 'text-decoration: underline' : ''"
              :id="`pl_${pl.id}_title`" class="sidebar-title __padxs __b __tle __tmd">{{ pl.name }}</p>
            <div class="_flex _fd-ro _cc">
              <svg v-if="pl.id != this.videoPlaylist.id && pl.videos.length > 0" class="__po"
                @click="setCurrentPlaylist(pl.id, pl.name, pl.thumbnail, pl.videos)" width="24" height="24"
                xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z" />
              </svg>
              &nbsp; &nbsp;
              <svg :class="!pl.isEditable ? '__po' : ''" @click="pl.isEditable = !pl.isEditable" height="24" width=24
                clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m4.481 15.659c-1.334 3.916-1.48 4.232-1.48 4.587 0 .528.46.749.749.749.352 0 .668-.137 4.574-1.492zm1.06-1.061 3.846 3.846 11.321-11.311c.195-.195.293-.45.293-.707 0-.255-.098-.51-.293-.706-.692-.691-1.742-1.74-2.435-2.432-.195-.195-.451-.293-.707-.293-.254 0-.51.098-.706.293z"
                  fill-rule="nonzero" />
              </svg>

              <!-- SAVE & CANCEL EDIT -->
              <svg @click="updatePlaylist(pl.id)" style="margin-right: 7px" class="__po" v-if="pl.isEditable"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
              </svg>
              <svg @click="cancelUpdate(pl.id)" class="__po" v-if="pl.isEditable" clip-rule="evenodd" width="30"
                height="30" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                  fill-rule="nonzero" />
              </svg>

              &nbsp; &nbsp;
              <svg @click="deletePlaylist(pl.id)" class="__po" height="24" width="24" clip-rule="evenodd"
                fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                  fill-rule="nonzero" />
              </svg>
            </div>
          </div>

          <hr class="__hr __b __bg-grey-10">

          <br class="__br __brsm">

          <div class="__b playlist-scroll __flow _flex _fd-ro _jc-ar">
            <div :id="`pl_vid_2_${v.url}`" @click="pressPlay(v.url)" v-for="v in pl.videos"
              :class="[(v.url == this.videoData.url) ? 'image-container playing_tab' : 'image-container', `${v.url}`]">
              <img :src="v.thumbnail" alt="Image" class="image">
              <div class="overlay">

                <div class="overlay-text-wrap">
                  <p class="overlay-text">{{ v.title }}
                  </p>
                </div>

                <br>
                <span v-if="v.url == this.videoData.url" class="__txt-succ-3 __txs">currently playing</span>
                <span class="__txt-grey-8 __txs">added {{ timeAgo(v.created_at) }}</span>
              </div>
            </div>
          </div>

          <!-- END SEARCH PLAYLISTS -->

        </div>
      </div>
    </div>

    <!-- ADD VIDEO TO PLAYLIST -->
    <div v-if="showAddModal"
      style="max-height: 90vh; overflow-x: auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 750px;"
      class="__custscroll __w _flex _fd-co _ai-ce __bg-grey-9 __bo-1 __bod __padsm">
      <div class="__b _flex _fd-ro _jc-be">
        <p class="__tmd __tle">Add {{ this.videoData.title }} to playlist</p>
        <svg @click="showAddModal = !showAddModal" width=35 height=35 class="__po" clip-rule="evenodd"
          fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
        </svg>
      </div>
      <hr class="__hr __b __bg-grey-1">
      <br>
      <div class="__b _flex _fd-ro _fw-wr _ai-ce _jc-ar">

        <div
          style="min-width: 75px; min-height: 75px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
          class="__loader-og" v-if="loading.add"></div>

        <div v-if="!loading.add" :id="`pl_${v.id}`" @click="addToPlaylist(v.id)" v-for="v in playlists"
          class="image-container">
          <img :src="v.thumbnail" alt="Image" class="image">
          <div class="overlay">

            <div class="overlay-text-wrap">
              <p class="overlay-text">{{ v.name }}
              </p>
            </div>

            <br>

            <span v-if="v.url == this.videoData.url" class="__txt-succ-3 __txs">currently playing</span>

            <span class="__txt-grey-8 __txs">created {{ timeAgo(v.created_at) }}</span>
            <span v-if="v.created_at != v.updated_at" class="__txt-grey-8 __txs">updated {{ timeAgo(v.updated_at)
              }}</span>

            <div
              style="position: absolute; bottom: 0; right: 0; background-color: black; color: white; padding: 2px 5px; border-radius: 3px;">
              <p class="__txs __txt-grey-10">
                {{ v.videos.length }} videos
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- IMPORT PLAYLIST -->
    <div v-if="showImportModal"
      style="max-height: 90vh; overflow-x: auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 750px;"
      class="__custscroll __w _flex _fd-co _ai-ce __bg-grey-10 __bo-1 __bod __padsm">
      <div class="__b _flex _fd-ro _jc-be">
        <div class="_flex _fd-co">
          <p class="__tmd __tle">Import playlist</p>
          <p v-if="importProgress.state" class="__b __tle __txt-grey-4">The playlist is being imported. You can close
            this
            modal while you wait.</p>
          <p v-if="importProgress.state" class="__b __tle __txt-info-3 __tsx">Videos: {{ importProgress.videos.now }} /
            {{
              importProgress.videos.max }} (---) Expected time: {{ importProgress.expected }}s</p>
        </div>
        <br>
        <div class="_flex _fd-ro _ai-ce">
          <svg @click="showImportModal = !showImportModal" width=35 height=35 class="__po" clip-rule="evenodd"
            fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </div>
      </div>
      <hr class="__hr __b __bg-grey-1">
      <br>
      <div class="__b _flex">
        <div class="__b _flex _jc-be _ai-ce">
          <input v-model="importPlaylistUrl" type="text" placeholder="Playlist URL..."
            class="__mauto __b __bg-none __bo-none __padxs __txt-grey-1">
          <svg v-if="!loading.importPlaylist" width=24 height=24 @click="importPlaylist" class="__po"
            clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
              fill-rule="nonzero" />
          </svg>
          <div style="min-width: 50px; min-height: 50px; border-color: white; border-top-color: red; border-width: 5px;"
            class="__loader-og" v-if="loading.importPlaylist"></div>
        </div>
      </div>
    </div>

    <!-- VIDEO LYRICS -->
    <div v-if="showLyricsModal"
      style="max-height: 90vh; overflow-x: auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 750px;"
      class="__custscroll __w _flex _fd-co _ai-ce __bg-grey-10 __bo-1 __bod __padsm">
      <div class="__b _flex _fd-ro _jc-be">
        <p class="__tmd __tle">Lyrics for {{ this.videoData.title }}</p>
        <div class="_flex _fd-ro _ai-ce">
          <p class="__po" v-if="!lyricData.disabled" @click="this.showLyricsData = !this.showLyricsData">Get Lyrics</p>
          &nbsp;
          <svg @click="showLyricsModal = !showLyricsModal" width=35 height=35 class="__po" clip-rule="evenodd"
            fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </div>
      </div>
      <hr class="__hr __b __bg-grey-1">
      <br>
      <div v-if="showLyricsData && !lyricData.disabled"
        class="__b _flex __bo-grey-6 __bdxs __padsm __bod _fd-ro _md-fd-co _jc-ar _ai-ce">
        <input style="border-bottom: 1px solid var(--grey_7);" type="text" v-model="lyricData.title" placeholder="Title"
          class="__bg-none __bo-none __padxs __txt-grey-1"> &nbsp;
        <input style="border-bottom: 1px solid var(--grey_7);" type="text" v-model="lyricData.artist"
          placeholder="Artist (optional)" class="__bg-none __bo-none __padxs __txt-grey-1"> &nbsp;
        <svg v-if="this.lyricData.loading == 0" width="30" height="30" class="__po" @click="getLyrics"
          clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m15.985 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007zm.741 8.499h-4.5c-.414 0-.75.336-.75.75s.336.75.75.75h4.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm3-2.5h-7.5c-.414 0-.75.336-.75.75s.336.75.75.75h7.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-2.5h-7.5c-.414 0-.75.336-.75.75s.336.75.75.75h7.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
            fill-rule="nonzero" />
        </svg>
        <div style="min-width: 50px; min-height: 50px; border-color: white; border-top-color: red; border-width: 5px;"
          class="__loader-og" v-if="this.lyricData.loading == 1"></div>
      </div>
      <br v-if="showLyricsData">
      <div class="__custscroll __b _flex _fd-co">
        <textarea spellcheck="false" v-model="videoData.lyrics" class="__custscroll __b __bd-1 __bod __padxs __bg-none"
          style="outline: none; resize: vertical; min-height: 700px;"></textarea>
      </div>
    </div>

    <!-- OPEN FEEDBACK MODAL -->
    <div class="__po tooltip" @click="this.showFeedbackModal = !this.showFeedbackModal"
      style="width: 30px; height: 30px; position: fixed; top: 90%; right: 15px;"><svg clip-rule="evenodd"
        fill="var(--grey_5)" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.239 15.533c-1.045 3.004-1.238 3.451-1.238 3.84 0 .441.385.627.627.627.272 0 1.108-.301 3.829-1.249zm.888-.888 3.22 3.22 6.408-6.401c.163-.163.245-.376.245-.591 0-.213-.082-.427-.245-.591-.58-.579-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245zm-3.127-.895c0-.402-.356-.75-.75-.75-2.561 0-2.939 0-5.5 0-.394 0-.75.348-.75.75s.356.75.75.75h5.5c.394 0 .75-.348.75-.75zm5-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75zm0-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75zm0-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75z"
          fill-rule="nonzero" />
      </svg>
      <p class="tooltiptext">Feedback</p>
    </div>

    <!-- FEEDBACK MODAL -->
    <div v-if="showFeedbackModal"
      style="max-height: 90vh; overflow-x: auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 750px;"
      class="__custscroll __w _flex _fd-co _ai-ce __bg-grey-10 __bo-1 __bod __padsm">

      <div class="__b _flex _fd-ro _jc-be">
        <p class="__tle">Feedback</p>
        <div class="_flex _fd-ro _ai-ce">
          <svg @click="showFeedbackModal = !showFeedbackModal" width=35 height=35 class="__po" clip-rule="evenodd"
            fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </div>
      </div>
      <hr class="__hr __b __bg-grey-1">
      <br>

      <div class="__b _flex _cc">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24">
          <path
            d="m11.239 15.533c-1.045 3.004-1.238 3.451-1.238 3.84 0 .441.385.627.627.627.272 0 1.108-.301 3.829-1.249zm.888-.888 3.22 3.22 6.408-6.401c.163-.163.245-.376.245-.591 0-.213-.082-.427-.245-.591-.58-.579-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245zm-3.127-.895c0-.402-.356-.75-.75-.75-2.561 0-2.939 0-5.5 0-.394 0-.75.348-.75.75s.356.75.75.75h5.5c.394 0 .75-.348.75-.75zm5-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75zm0-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75zm0-3c0-.402-.356-.75-.75-.75-2.561 0-7.939 0-10.5 0-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75z"
            fill-rule="nonzero" />
        </svg>
      </div>

      <br>

      <div class="__b _flex _c">
        <p class="__b __tal __tmd">Have any comments about the website? Feel free to write them here</p>
        <br>
        <textarea v-model="feedback" placeholder="Write your feedback here..." style="resize: vertical; outline: none;"
          class="__w __b __bg-grey-10 __txt-grey-1 __br __padsm"></textarea>
        <br>
        <button v-if="!this.loading.feedback" @click="submitFeedback"
          class="__padxs __b __bg-grey-1 __txt-grey-10 __hv __hv-grey-10 __po __bo-grey-1 __bod __ht-grey-1">Submit</button>
        <div class="__b _flex _cc">
          <div
            style="min-width: 50px; min-height: 50px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
            class="__loader-og" v-if="this.loading.feedback"></div>
        </div>
      </div>
    </div>

    <!-- SHARE VIDEO -->
    <div v-if="this.showShareModal"
      style="max-height: 90vh; overflow-x: auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 750px;"
      class="__custscroll __w _flex _fd-co _ai-ce __bg-grey-10 __bo-1 __bod __padsm">
      <div class="__b _flex _fd-ro _jc-be">
        <p class="__tmd __tle">Share {{ this.videoData.title }}</p>
        <svg @click="showShareModal = !showShareModal" width=35 height=35 class="__po" clip-rule="evenodd"
          fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
        </svg>
      </div>
      <hr class="__hr __b __bg-grey-1">
      <br>
      <div class="__b _flex _cc">
        <input v-model="shareUser" type="text" style="border-bottom: 1px solid var(--grey_6);"
          placeholder="Username of person you'd like to share this song with"
          class="__b __padxs __bg-none __bo-none __txt-grey-1">
        &nbsp; &nbsp;
        <svg v-if="!loading.share" class="__po" @click="share()" width="24" height="24" clip-rule="evenodd"
          fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm1.5 0c0 4.69 3.808 8.498 8.498 8.498s8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497-8.498 3.807-8.498 8.497zm6.711-4.845c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.564v-5.446l3.523 2.718z"
            fill-rule="nonzero" />
        </svg>

        <div
          style="min-width: 35px; min-height: 35px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
          class="__loader-og" v-if="loading.share"></div>
      </div>
    </div>

    <!-- RECEIVED SHARES -->
    <div v-if="this.showSharesModal"
      style="max-height: 90vh; overflow-x: auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 750px;"
      class="__custscroll __w _flex _fd-co _ai-ce __bg-grey-10 __bo-1 __bod __padsm">
      <div class="__b _flex _fd-ro _jc-be">
        <p class="__tmd __tle">Videos people have shared with you</p>
        <svg @click="showSharesModal = !showSharesModal" width=35 height=35 class="__po" clip-rule="evenodd"
          fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
        </svg>
      </div>
      <hr class="__hr __b __bg-grey-1">
      <br>
      <div v-if="receivedShares.length == 0" class="__b _flex _cc _fd-co">
        <p class="__txt-grey-6">You haven't received any shares</p>
        <br>
        <svg @click="refreshReceivedShares" v-if="!loading.refreshShares" class="__po" width="55" height="55"
          clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m21.897 13.404.008-.057v.002c.024-.178.044-.357.058-.537.024-.302-.189-.811-.749-.811-.391 0-.715.3-.747.69-.018.221-.044.44-.078.656-.645 4.051-4.158 7.153-8.391 7.153-3.037 0-5.704-1.597-7.206-3.995l1.991-.005c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4.033c-.414 0-.75.336-.75.75v4.049c0 .414.336.75.75.75s.75-.335.75-.75l.003-2.525c1.765 2.836 4.911 4.726 8.495 4.726 5.042 0 9.217-3.741 9.899-8.596zm-19.774-2.974-.009.056v-.002c-.035.233-.063.469-.082.708-.024.302.189.811.749.811.391 0 .715-.3.747-.69.022-.28.058-.556.107-.827.716-3.968 4.189-6.982 8.362-6.982 3.037 0 5.704 1.597 7.206 3.995l-1.991.005c-.414 0-.75.336-.75.75s.336.75.75.75h4.033c.414 0 .75-.336.75-.75v-4.049c0-.414-.336-.75-.75-.75s-.75.335-.75.75l-.003 2.525c-1.765-2.836-4.911-4.726-8.495-4.726-4.984 0-9.12 3.654-9.874 8.426z"
            fill-rule="nonzero" />
        </svg>
        <div
          style="min-width: 55px; min-height: 55px; border-color: var(--grey_9); border-top-color: var(--theme3); border-width: 5px;"
          class="__loader-og" v-if="loading.refreshShares"></div>
      </div>
      <div class="__b _flex _cc _fd-co">
        <div style="margin-bottom: 15px;" class="_flex __b __padxs __bo-grey-7 __bod __bdxs _jc-be _ai-ce"
          v-for="r in receivedShares">
          <div class="_flex _cc _fd-ro">{{ r.sender }} shared a video with you:</div>
          <div class="image-container">
            <img :src="r.video.thumbnail" alt="Image" class="image">
            <div class="overlay">

              <div class="overlay-text-wrap">
                <p class="overlay-text">{{ r.video.title }}
                </p>
              </div>

              <br>
              <span class="__txt-grey-8 __txs">not yet accepted</span>
            </div>
          </div>
          <div class="_flex _cc _fd-ro">
            <svg :id="r.id" fill="var(--succ_4)" @click="acceptShare(r.id)" viewBox="0 0 24 24" class="__po" width="24"
              height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
            </svg> &nbsp; &nbsp;
            <svg fill="var(--err_4)" @click="rejectShare(r.id)" viewBox="0 0 24 24" class="__po" width="20" height="20"
              xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path
                d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uauth } from "@/utils/auth";

import { request } from "@/utils/api";

import { useResponseStore } from "@/stores/response";

import { reactive, toRaw } from 'vue';

import axios from 'axios';

import draggable from 'vuedraggable/src/vuedraggable'

import { YT_API_KEY } from "../../config";
import { YT_DATA_KEY } from "../../config";

export default {

  components: {
    draggable
  },

  computed: {
    sortedFavs() {
      let favs = this.favs;
      let orders = this.favOrder;

      // for each fav item, set its order from the favOrder array
      this.favs.forEach(f => {
        let order = orders.find(o => o.url === f.url);
        if (order) {
          f.order = order.order;
        } else {
          f.order = 0;
        }
      });

      this.favs.sort((a, b) => a.order - b.order);

      return this.favs;
    }
  },

  data() {
    return {
      // FEEDBACK
      feedback: '',

      // DRAG
      drag: false,
      favOrder: [],

      // MUSIC MODE
      musicMode: false,

      // VISUAL TAB PROGRESS
      playTime: 0,

      // AUTHENTICATION
      isAuthenticated: uauth.isAuthenticated(),
      uauth: uauth,

      // SHOW / HIDE
      showLyricsModal: false,
      showLyricsData: false,
      showShareModal: false,
      showAddModal: false,
      showImportModal: false,
      showSharesModal: false,
      showPlaylistCreate: false,
      showVidData: true,
      showFeedbackModal: false,
      showMaxStorageAlert: false,

      // KEY
      apiKey: YT_API_KEY,
      dataKey: YT_DATA_KEY,

      // IMPORT PLAYLIST DATA
      importPlaylistUrl: 'https://www.youtube.com/watch?v=btn7E8yYvaM&list=PLhAF4Vr5DtTs893br4wmfhXEsQYVURcMM',
      importProgress: {
        videos: {
          max: 0,
          now: 0
        },
        expected: 0,
        state: 0
      },

      // USER MEMBERSHIP STATUS
      userIsMember: false,

      // URL IN URL BAR
      tempUrl: '',

      // VIDEO PLAYER
      ytplayer: null,

      // LOOP CONTROL
      ignoreSkip: false,
      ignoreLimit: false,

      // SEARCH VIDEOS
      searchV: '',
      searchVids: [],

      // SEARCH PLAYLISTS
      searchP: '',
      searchPls: [],

      // VIDEO DURATION
      duration: 9999,

      // SHARE DATA
      shareUser: "",
      receivedShares: [],

      // VIDEO DATA
      videoData: {
        fav: false,
        fav_date: null,

        speed: 1.0,

        url: "",

        start: 0,
        end: 999,

        thumbnail: '',

        title: '',
        desc: '',

        skip: [
        ],

        lyrics: ''
      },
      tempVideoData: {
        end: 0,
        start: 0,
      },

      // LYRIC DATA
      lyricData: {
        title: "",
        artist: "",
        loading: 0,
        disabled: false
      },

      loading: {
        importPlaylist: false,
        createPlaylist: false,
        deletePlaylist: false,

        refreshShares: false,

        save: false,
        delete: false,
        share: false,
        add: false
      },

      // INITIALISED
      initialised: {
        video: false,
        playlist: false,
        all: false,
        favs: false
      },

      // COOLDOWNS
      cooldown: new Date().getTime(),

      // VIDEO PLAYLIST DATA
      videoPlaylist: {
        id: '',
        name: '',
        videos: []
      },

      // LOOP & SHUFFLE PLAYLIST
      loop: '',
      shuffle: false,

      // CREATING PLAYLIST
      playlistData: {
        name: '',
        desc: ''
      },

      // PLAYLIST LOAD LIMITES
      loadLimit: {
        fav: 25,
        playlist: 25,
        all: 25,
        allPlaylists: 25
      },

      // MAIN TAB PLAYLISTS
      playlists: [],
      favs: [],
      allVideos: [],

      // SIDEBAR TOGGLE
      showSidebar: false,

      // IS EMAIL VERIFIED
      emailVerified: true,
      verificationEmailSent: false,
      showUnverifiedEmailAlert: false,

      // IS PLAYER LOADED
      playerLoaded: false,

      // INTERVALS
      tabInterval: null,
      loopInterval: null,
    }
  },

  beforeUnmount() {
    clearInterval(this.tabInterval);
    clearInterval(this.loopInterval);
  },

  mounted() {
  },

  created() {
    setInterval(() => {
      if (!uauth.isAuthenticated()) {
        window.location.href = '/';
      }
    }, 1000);

    if (this.isAuthenticated) {
      // LOAD ALL TABS
      this.loadAllTabs().then(() => {
        // FETCH INITIAL DATA
        this.initialiseData();

        // UPDATE USER MEMBERSHIP STATUS
        this.userIsMember = localStorage.getItem("user_is_member") ? true : false;
        this.showMaxStorageAlertHidden = localStorage.getItem("hideMaxStorageAlert") || false;

        this.checkMaxStorage();
      });

      // CHECK IF USER'S EMAIL IS VERIFIED
      this.verifyEmail();

      // LOAD RECEIVED SHARES
      this.loadReceivedShares();
    }

  },

  methods: {
    // REFRESH MEMBERSHIP STATUS
    refreshMembershipStatus() {
      request({}, "/account/membership-status").then(res => {
        if (!res.failed) {
          if (res.data.data === false || res.data.data === 0) {
            console.log("User is not a member");
            localStorage.removeItem("user_is_member");

            this.userIsMember = false;
          } else {
            console.log("User is a member");
            localStorage.setItem("user_is_member", 1);

            this.userIsMember = true;
          }

          this.checkMaxStorage();
        } else {
          useResponseStore().updateResponse("Failed to refresh membership status", "err");
        }
      });
    },
    // CHECK MAX STORAGE
    checkMaxStorage() {
      console.log("Checking max storage");
      if (this.userIsMember === false) {
        let count = this.allVideos.length;
        let pl_count = this.playlists.length;

        if (count > 90 || pl_count >= 9) {
          this.showMaxStorageAlert = true;
        }
      } else {
        this.showMaxStorageAlert = false;
      }
    },
    // HIDE MAX STORAGE ALERT
    hideStorageAlert() {
      this.showMaxStorageAlertHidden = true;

      localStorage.setItem("hideMaxStorageAlert", 1);
    },

    // CHECK AUTHENTICATION STATE OF USER
    checkAuthToken() {
      setInterval(() => {
        if (!localStorage.getItem("auth_token")) {
          window.location.href = "/login?msg=You have been logged out&type=info";
        }
      }, 1000);
    },

    // VERIFY USER'S EMAIL
    verifyEmail() {
      let cache = localStorage.getItem("email_verified");
      let cache_2 = localStorage.getItem("showUnverifiedEmailAlert");


      if (JSON.parse(cache_2) === false) {
        this.showUnverifiedEmailAlert = false;
      } else {
        this.showUnverifiedEmailAlert = true;
      }

      if (cache) {
        this.emailVerified = JSON.parse(cache);
        console.log(JSON.parse(cache));
      } else {
        request({}, "/account/is-verified").then(res => {
          if (!res.failed) {
            this.emailVerified = res.data.data;

            localStorage.setItem("email_verified", JSON.stringify(this.emailVerified));
          } else {
            console.log(`Failed to fetch email verification status`, "err");

            this.emailVerified = true;
          }
        });
      }
    },
    sendVerificationEmail() {
      if (!this.emailVerified) {
        request({}, "/account/send-verification-email").then(res => {
          if (!res.failed) {
            useResponseStore().updateResponse("Verification email sent. Check your inbox", "succ");

            this.hideEmailAlert = true;
            this.verificationEmailSent = true;
          } else {
            useResponseStore().updateResponse(`Failed to send verification email`, "err");
            this.verificationEmailSent = false;
            console.log(res);
          }
        });
      }
    },
    hideEmailAlert() {
      this.showUnverifiedEmailAlert = false;

      localStorage.setItem("showUnverifiedEmailAlert", JSON.stringify(false));
    },


    // FEEDBACK
    submitFeedback() {
      let fb = this.feedback;

      if (fb.trim() !== '') {

        this.loading.feedback = true;

        request({ data: fb }, "/feedback").then(res => {
          if (!res.failed) {
            this.feedback = '';

            useResponseStore().updateResponse("Thanks for the feedback!", "succ");

            this.showFeedbackModal = false;
            this.loading.feedback = false;
          } else {
            useResponseStore().updateResponse(`Something went wrong`, "err");
          }
        });
      }
    },



    // INITIALISATION
    initialiseData() {
      let data;

      let cache_favs = localStorage.getItem('cache_favs');

      if (cache_favs) {
        cache_favs = JSON.parse(cache_favs);

        if (cache_favs.length > 0) {
          data = cache_favs[0];

          this.initialisePlayer(data);

          return false;
        }
      }

      let cache_all = localStorage.getItem('cache_all');

      if (cache_all) {
        cache_all = JSON.parse(cache_all);
        if (cache_all.length > 0) {
          data = cache_all[0];

          this.initialisePlayer(data);

          return false;
        }
      }

      request({}, "/video/fetch").then(res => {
        if (!res.failed) {
          data = res.data.data;

          this.initialisePlayer(data);
        } else {
          useResponseStore().updateResponse("Failed to fetch video data", "err");
        }
      })
    },
    initialisePlayer(data) {
      let pr = new Promise((resolve, reject) => {
        this.videoData = data;
        this.videoData.start = parseFloat(data.start);
        this.videoData.end = parseFloat(data.end);
        this.tempUrl = "https://www.youtube.com/watch?v=" + this.videoData.url;

        resolve();
      }).then(() => {

        let pr_api = new Promise((resolve, reject) => {

          this.loadYouTubeAPI();
          resolve();

        }).then(() => {
          let pr_player = new Promise((resolve, reject) => {

            this.createPlayer();
            resolve();

          }).then(() => {

            this.loadVideoPlaylist();
            this.playerLoaded = true;

          })
        });

        setTimeout(() => {
          if (!this.playerLoaded) {
            let pr_api = new Promise((resolve, reject) => {

              this.loadYouTubeAPI();
              resolve();

            }).then(() => {
              let pr_player = new Promise((resolve, reject) => {

                this.createPlayer();
                resolve();

              }).then(() => {

                this.loadVideoPlaylist();
                this.playerLoaded = true;

              })
            });
          }
        }, 500);

        setTimeout(() => {
          if (!this.playerLoaded) {
            let pr_api = new Promise((resolve, reject) => {

              this.loadYouTubeAPI();
              resolve();

            }).then(() => {
              let pr_player = new Promise((resolve, reject) => {

                this.createPlayer();
                resolve();

              }).then(() => {

                this.loadVideoPlaylist();
                this.playerLoaded = true;

              })
            });
          }
        }, 1500);

      });
    },
    refreshPlayer() {
      if (!this.playerLoaded) {
        let pr_api = new Promise((resolve, reject) => {

          this.loadYouTubeAPI();
          resolve();

        }).then(() => {
          let pr_player = new Promise((resolve, reject) => {

            this.createPlayer();
            resolve();

          }).then(() => {

            this.loadVideoPlaylist();
            this.playerLoaded = true;

          })
        });
      }
    },



    // DRAGGING & ORDER
    updateFavOrder() {
      let els = document.getElementsByClassName("fav-el");

      for (let i = 0; i < els.length; i++) {
        let el = els[i];
        let url = el.id.replace("fav_", "");

        // update favOrder based on url
        let oel;

        if (!this.favOrder.find(obj => obj.url === url)) {
          this.favOrder.push({ url: url, order: i });
        }

        oel = this.favOrder.find(obj => obj.url === url);

        oel.order = i;
      }

      this.cacheFavs();
    },

    // LOGOUT
    logout() {
      this.uauth.logout();
    },

    // NAVIGATION
    goToAccount() {
      this.$router.push('/account');
    },
    goToUpgrade() {
      this.$router.push('/upgrade');
    },


    // NEXT & PREV VIDEO
    nextVideo() {
      let list;

      switch (this.loop) {
        case "fav":
          list = this.favs;
          break;
        case "playlist":
          list = this.videoPlaylist.videos;
          break;
        case "all":
          list = this.allVideos;
          break;
      }

      let index;
      let vid;

      index = list.findIndex(obj => obj.url === this.videoData.url);

      if (!this.shuffle) {
        if (index !== -1 && index < list.length - 1) {
          vid = list[index + 1];
        } else {
          vid = list[0];
        }
      } else {
        index = Math.floor(Math.random() * list.length);
        vid = list[index];
      }

      this.pressPlay(vid.url);
    },
    previousVideo() {
      let list;

      switch (this.loop) {
        case "fav":
          list = this.favs;
          break;
        case "playlist":
          list = this.videoPlaylist.videos;
          break;
        case "all":
          list = this.allVideos;
          break;
      }

      let index;
      let vid;

      index = list.findIndex(obj => obj.url === this.videoData.url);

      if (!this.shuffle) {
        if (index > 0) {
          vid = list[index - 1];
        } else {
          vid = list[list.length - 1];
        }
      } else {
        index = Math.floor(Math.random() * list.length);
        vid = list[index];
      }

      this.pressPlay(vid.url);
    },


    // LYRICS
    getLyrics() {
      if (this.lyricData.title.length === 0) {
        useResponseStore().updateResponse('Title of song required', 'warn');
        return;
      } else {

        this.lyricData.loading = 1;

        request({ title: this.lyricData.title, artist: this.lyricData.artist }, "/video/lyrics").then(res => {

          if (!res.failed) {

            try {
              let lyrics = res.data.lyrics;

              this.videoData.lyrics = lyrics;

              this.lyricData.loading = 0;

              this.lyricData.disabled = true;
            } catch (err) {

              useResponseStore().updateResponse('Failed to fetch lyrics', 'err');

              console.log(err);

              this.lyricData.loading = 0;
            }
          } else {
            useResponseStore().updateResponse('Failed to fetch lyrics', 'err');

            console.log("!!!");

            this.lyricData.loading = 0;
          }
        });
      }
    },



    // HANDLE LOAD LIMITS
    handleScroll(event) {
      const element = event.target;

      if ((element.scrollWidth - element.scrollLeft) <= element.clientWidth + 10) {
        this.loadMore(element.id);
      }
    },
    handleVerticalScroll(event) {
      const element = event.target;

      if ((element.scrollHeight - element.scrollTop) <= element.clientHeight + 10) {
        this.loadMore("allplaylists");
      }
    },


    // SHARES
    loadReceivedShares() {
      let cache = localStorage.getItem('cache_received_shares');

      if (cache) {
        this.receivedShares = JSON.parse(cache);
      } else {
        request({}, '/share/list').then(res => {
          if (!res.failed) {
            this.receivedShares = res.data.data;

            this.cacheReceivedShares();
          } else {
            useResponseStore().updateResponse('Failed to load received shares. Please try again later', 'err');
          }
        });
      }
    },
    refreshReceivedShares() {
      this.loading.refreshShares = true;

      request({}, '/share/list').then(res => {
        if (!res.failed) {
          this.receivedShares = res.data.data;

          this.loading.refreshShares = false;

          this.cacheReceivedShares();
        } else {
          useResponseStore().updateResponse('Failed to load received shares. Please try again later', 'err');

          this.loading.refreshShares = false;
        }
      });
    },
    acceptShare(id) {
      request({ id: id, res: true }, '/share/respond').then(res => {
        if (!res.failed) {
          useResponseStore().updateResponse('Share accepted', 'succ');

          // get share from array
          let share = this.receivedShares.find(r => r.id === id);

          share.video.created_at = new Date();

          // add video to all
          this.allVideos.unshift(share.video);

          // remove share from received shares
          this.receivedShares = this.receivedShares.filter(r => r.id !== id);

          // if received shares are empty, hide modal
          if (this.receivedShares.length === 0) {
            this.showSharesModal = false;
          }

          this.cacheAll();
          this.cacheFavs();
          this.cachePlaylists();
          this.cacheReceivedShares();
        } else if (res.code === 403) {
          useResponseStore().updateResponse('Storage limit reached or some other error occurred', 'warn');
        } else {
          useResponseStore().updateResponse('Failed to accept share', 'err');
        }
      })
    },
    rejectShare(id) {
      if (window.confirm("Decline this share?")) {
        request({ id: id, res: false }, '/share/respond').then(res => {
          if (!res.failed) {
            useResponseStore().updateResponse('Share declined', 'info');

            // remove share from received shares
            this.receivedShares = this.receivedShares.filter(r => r.id !== id);

            // if received shares are empty, hide modal
            if (this.receivedShares.length === 0) {
              this.showSharesModal = false;
            }

            this.cacheReceivedShares();
          }
        })
      }
    },


    // SEARCH VIDEOS
    searchVideos() {
      let q = this.searchV.trim().normalize('NFC').toLowerCase();

      if (q == '') {
        this.searchVids = [];
        return;
      }

      this.allVideos.forEach(v => {
        let title = v.title.toLowerCase().normalize('NFC');;

        if (title.includes(q)) {
          // if video isn't in search results, add it
          if (!this.searchVids.includes(v)) {
            this.searchVids.push(v);
          }
        } else {
          // if video doesn't match, remove it from search results
          if (this.searchVids.includes(v)) {
            let idx = this.searchVids.indexOf(v);
            this.searchVids.splice(idx, 1);
          }
        }
      });
    },


    // SEARCH PLAYLISTS
    searchPlaylists() {
      let q = this.searchP.trim().normalize('NFC').toLowerCase();

      if (q == '') {
        this.searchPls = [];
        return;
      }

      this.playlists.forEach(v => {
        let name = v.name.toLowerCase().normalize('NFC');;

        if (name.includes(q)) {
          // if playlist isn't in search results, add it
          if (!this.searchPls.includes(v)) {
            this.searchPls.push(v);
          }
        } else {
          // if playlist doesn't match, remove it from search results
          if (this.searchPls.includes(v)) {
            let idx = this.searchPls.indexOf(v);
            this.searchPls.splice(idx, 1);
          }
        }
      });
    },


    // UPDATE LYRICS
    updateLyrics(e) {
      this.videoData.lyrics = event.target.innerText;
    },


    // LOOP PLAYLIST
    startLoop(v) {
      let vs = ["fav", "playlist", "all"];

      if (!vs.includes(v)) {
        return;
      }

      let list = [];

      switch (v) {
        case "fav":
          list = this.favs;
          break;
        case "playlist":
          list = this.videoPlaylist.videos;
          break;
        case "all":
          list = this.allVideos;
          break;
      }

      if (list.length === 0) {
        return;
      }

      this.loop = v;
    },
    endLoop() {
      this.loop = "";
    },
    toggleShuffle(v) {
      let vs = ["fav", "playlist", "all"];

      if (!vs.includes(v)) {
        return;
      }

      if (v != this.loop) {
        return;
      }

      this.shuffle = !this.shuffle;
    },


    // LOAD MAIN TABS
    async loadAllTabs() {
      // Your existing code for loading all tabs
      return new Promise((resolve, reject) => {
        // After loading all tabs, resolve the promise
        this.loadFavs();
        this.loadPlaylists();
        this.loadAllVideos();
        resolve();
      });
    },
    loadFavs() {
      let cache = localStorage.getItem("cache_favs");
      let cache_order = localStorage.getItem("cache_fav_order");

      if (cache) {
        this.favs = JSON.parse(cache);

        if (cache_order) {
          cache_order = JSON.parse(cache_order);
          this.favOrder = cache_order;
        } else {
          this.favs.forEach(v => {
            this.favOrder.push({ url: v.url, order: this.favOrder.length });
          });
        }

        this.initialised.favs = true;
      } else {
        request({}, '/video/favs').then(res => {
          if (!res.failed) {
            let data = res.data.data;

            this.favs = data;

            this.initialised.favs = true;

            localStorage.setItem("cache_favs", JSON.stringify(this.favs));
          } else {
            useResponseStore().updateResponse('Failed to load favorite videos. Please try again later', 'err');
          }
        });
      }
    },
    loadAllVideos() {
      let cache = localStorage.getItem("cache_all");

      if (cache) {
        this.allVideos = JSON.parse(cache);
        this.initialised.all = true;

        this.checkMaxStorage();
      } else {
        request({}, '/video/all').then(res => {
          if (!res.failed) {
            let data = res.data.data;

            this.allVideos = data;

            this.initialised.all = true;

            this.cacheAll();

            localStorage.setItem("cache_all", JSON.stringify(this.allVideos));

            this.checkMaxStorage();
          } else {
            useResponseStore().updateResponse('Failed to load all videos. Please try again later', 'err');
            console.log(res);
          }
        });
      }
    },


    // SIDEBAR
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    handleOutsideClick(event) {
      const sidebar = document.getElementById("sidebar");
      const sidebarOpen = document.getElementById("sidebarOpen");

      if (this.showSidebar && !sidebar.contains(event.target) && !sidebarOpen.contains(event.target)) {
        this.showSidebar = false;
      }
    },


    // INCREASE LOAD LIMITES
    loadMore(v) {
      if (!["fav", "all", "playlist", "allplaylists"].includes(v)) {
        return;
      }

      switch (v) {
        case "fav":
          if (this.favs.length <= 25) {
            return;
          }

          this.loadLimit.fav += 75;
          break;
        case "all":
          if (this.allVideos.length <= 25) {
            return;
          }

          this.loadLimit.all += 75;
          break;
        case "playlist":
          if (this.videoPlaylist.videos.length <= 25) {
            return;
          }

          this.loadLimit.playlist += 75;
          break;
        case "allplaylists":
          if (this.playlists.length <= 25) {
            return;
          }

          this.loadLimit.allPlaylists += 75;
          break;
        default:
          return;
      }
    },


    // PLAYLISTS
    loadVideoPlaylist() {
      let video_url = this.videoData.url;
      let video_playlist = this.playlists.find(p => p.videos.some(v => v.url === video_url));

      if (video_playlist) {

        this.videoPlaylist = video_playlist;
        this.initialised.playlist = true;

      } else {

        this.initialised.playlist = true;

      }
    },
    loadPlaylists() {
      let cache = localStorage.getItem("cache_playlists");

      if (cache) {
        this.playlists = JSON.parse(cache);

        this.checkMaxStorage();
      } else {
        request({}, '/playlist/list').then(res => {
          if (!res.failed) {
            this.playlists = res.data.data;

            this.cachePlaylists();
            this.cacheVideoPlaylist();

            res.data.data.forEach(pl => {
              pl["isEditable"] = false;
            });

            this.checkMaxStorage();
          } else {
            useResponseStore().updateResponse('Failed to load playlists', 'err');
          }
        });
      }
    },
    createPlaylist() {
      this.loading.createPlaylist = true;

      request(this.playlistData, '/playlist/create').then(res => {
        if (!res.failed) {
          useResponseStore().updateResponse('Playlist created successfully!', 'succ');

          this.playlists.unshift({
            id: res.data.data.id,
            name: this.playlistData.name,
            isEditable: false,
            videos: [],
            thumbnail: 'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg',
            created_at: new Date(),
            updated_at: new Date()
          });

          this.playlistData = {};

          this.cachePlaylists();
          this.cacheVideoPlaylist();

          this.checkMaxStorage();

          this.loading.createPlaylist = false;
        } else if (this.showMaxStorageAlert) {
          useResponseStore().updateResponse('Storage limit reached or some other error occurred.', 'warn');

          this.loading.createPlaylist = false

          return false;
        } else {

          useResponseStore().updateResponse('Failed to create playlist', 'err');

          this.loading.createPlaylist = false;
        }
      });
    },
    updatePlaylist(id) {
      let el = document.getElementById('pl_' + id + '_title');
      let name = el.textContent;

      request({ id: id, name: name }, '/playlist/update').then(res => {
        if (!res.failed) {
          useResponseStore().updateResponse('Playlist updated successfully', 'succ');

          this.playlists.forEach(pl => {
            if (pl.id === id) {
              pl.name = name;
              pl["isEditable"] = false;
            }
          });

          if (id == this.videoPlaylist.id) {
            this.videoPlaylist.name = name;
          }

          this.cachePlaylists();
          this.cacheVideoPlaylist();

        } else {
          useResponseStore().updateResponse('Failed to update playlist', 'err');
          console.log(res);
        }
      })
    },
    cancelUpdate(id) {
      let el = document.getElementById('pl_' + id + '_title');

      this.playlists.forEach(pl => {
        if (pl.id === id) {
          el.textContent = pl.name;
          setTimeout(() => {
            pl["isEditable"] = false;
          }, 100);

          return;
        }
      });
    },
    deletePlaylist(id) {
      if (window.confirm('Delete this playlist?')) {
        request({ id: id }, '/playlist/delete').then(res => {
          if (!res.failed) {

            this.playlists = this.playlists.filter(pl => pl.id !== id);

            if (this.videoPlaylist.id === id) {

              this.videoPlaylist = {
                id: '',
                name: '',
                videos: [],
                thumbnail: ''
              };

              this.loop = '';
            }

            this.cacheVideoPlaylist();

            useResponseStore().updateResponse('Playlist deleted successfully', 'succ');

            this.cachePlaylists();
            this.cacheVideoPlaylist();

            this.checkMaxStorage();

          } else {
            useResponseStore().updateResponse('Failed to delete playlist', 'err');
            console.log(res);
          }
        });
      }
    },
    addToPlaylist(pl_id) {

      let pl = this.playlists.find(pl => pl.id === pl_id);
      let pl_videos = pl.videos;

      this.loading.add = true;

      // check if video is already in playlist videos
      if (!pl_videos.some(obj => obj.url === this.videoData.url)) {
        request({ plid: pl_id, url: this.videoData.url }, '/playlist/add').then(res => {
          if (!res.failed) {
            // add video to playlist array
            pl.videos.unshift(this.videoData);

            // change thumbnail if playlist has no thumbnail
            if (pl.thumbnail == 'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg') {
              pl.thumbnail = this.videoData.thumbnail;
            }

            this.videoPlaylist = pl;

            this.showAddModal = false;

            useResponseStore().updateResponse('Video added to playlist', 'succ');

            this.cachePlaylists();

            this.loading.add = false;
          } else {
            useResponseStore().updateResponse('Failed to add video to playlist', 'err');

            this.loading.add = false;

            console.log(res);
          }
        })
      } else if (window.confirm("Remove video from playlist?")) {
        this.loading.add = true;

        request({ plid: pl_id, url: this.videoData.url }, '/playlist/remove').then(res => {
          if (!res.failed) {
            // remove video from playlist array
            pl.videos = pl_videos.filter(obj => obj.url !== this.videoData.url);

            // change thumbnail of playlist
            if (pl.videos.length == 0) {
              pl.thumbnail = 'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg';
            } else {
              pl.thumbnail = pl_videos[0].thumbnail;
            }

            // if current video playlist is the one being removed, clear loop & shuffle
            if (pl.id === this.videoPlaylist.id && this.loop == 'playlist') {
              this.loop = '';
              this.shuffle = false;
            }

            this.showAddModal = false;

            useResponseStore().updateResponse('Video removed from playlist', 'succ');

            this.cachePlaylists();

            this.loading.add = false;
          } else {
            useResponseStore().updateResponse('Failed to remove video from playlist', 'err');

            this.loading.add = false;

            console.log(res);
          }
        });
      } else {
        this.loading.add = false;
      }
    },
    setCurrentPlaylist(id, name, thumbnail, videos) {
      if (id == this.videoPlaylist.id) {
        useResponseStore().updateResponse('Already viewing this playlist', 'warn');

        return;
      }

      if (videos.length === 0) {
        useResponseStore().updateResponse('No videos in this playlist', 'warn');

        return;
      }

      this.pressPlay(videos[0].url);

      this.videoPlaylist.id = id;
      this.videoPlaylist.name = name;
      this.videoPlaylist.thumbnail = thumbnail;
      this.videoPlaylist.videos = videos;
    },


    // TIME FORMATTING
    timeAgo(timestamp) {
      // Parse the ISO 8601 timestamp
      const date = new Date(timestamp);

      // Get the time in milliseconds since the Unix epoch
      const timeInMilliseconds = date.getTime();

      // Convert milliseconds to seconds
      const timeInSeconds = Math.floor(timeInMilliseconds / 1000);

      timestamp = timeInSeconds;

      const now = Math.floor(Date.now() / 1000);
      const secondsAgo = now - timestamp;

      if (secondsAgo < 60) {
        return `${secondsAgo} seconds ago`;
      } else if (secondsAgo < 3600) {
        const minutesAgo = Math.floor(secondsAgo / 60);
        return `${minutesAgo} minutes ago`;
      } else if (secondsAgo < 86400) {
        const hoursAgo = Math.floor(secondsAgo / 3600);
        return `${hoursAgo} hours ago`;
      } else {
        const daysAgo = Math.floor(secondsAgo / 86400);
        return `${daysAgo} days ago`;
      }
    },


    // SKIP FUNCTIONS
    addSkip() {
      this.ignoreSkip = true;

      this.videoData.skip.push({
        start: this.videoData.start,
        end: this.videoData.end,
      });
    },
    removeSkip(index) {
      this.videoData.skip.splice(index, 1);
    },
    clearSkip() {
      if (window.confirm('Clear all skips?')) {
        this.videoData.skip = [];
      }
    },


    // INITIALISE PLAYER & FECTH DATA
    async initialise() {
      await new Promise((resolve, reject) => {
        let cached_favs = JSON.parse(localStorage.getItem("cache_favs"));
        let cached_all = JSON.parse(localStorage.getItem("cache_all"));

        let fetched_vid = (cached_favs && cached_favs.length > 0) ? cached_favs[0] : (cached_all && cached_all.length > 1 ? cached_all[0] : null);

        console.log(fetched_vid);

        if (fetched_vid !== null) {

          this.videoData = fetched_vid;
          this.videoData.start = parseFloat(fetched_vid.start);
          this.videoData.end = parseFloat(fetched_vid.end);
          this.tempUrl = "https://www.youtube.com/watch?v=" + this.videoData.url;

          resolve();
        } else {
          request({}, '/video/fetch').then(res => {
            try {
              this.videoData = res.data.data;
              this.videoData.start = parseFloat(res.data.data.start);
              this.videoData.end = parseFloat(res.data.data.end);
              this.tempUrl = "https://www.youtube.com/watch?v=" + this.videoData.url;
              resolve();
            } catch (err) {
              this.videoData = [];
              useResponseStore().updateResponse('Failed to fetch video data', 'err');
              reject(err);
            }
          }).catch(err_1 => {
            useResponseStore().updateResponse('Failed to fetch video data', 'err');
            console.log(err_1);
            reject(err_1); // Ensure reject is called here
          });
        }
      });
    },



    // SAVE VIDEO DATA
    save() {
      this.loading.save = true;

      this.cooldown = new Date().getTime() + 1000 * 60 * 5;

      let valid = true;

      let vstart = parseFloat(this.videoData.start);
      let vend = parseFloat(this.videoData.end);

      // check all fields are filled in
      if (this.videoData.title === '' || this.videoData.start === '' || this.videoData.end === '' || this.videoData === null || this.videoData === undefined) {
        useResponseStore().updateResponse('Please fill in all required fields.', 'err');

        this.cooldown = 0;
        this.loading.save = false;

        valid = false;
        return;
      }

      // check that start and end times are valid and within the video duration
      if (vend <= vstart) {
        useResponseStore().updateResponse('End time must be greater than start time.', 'err');

        this.cooldown = 0;
        this.loading.save = false;

        valid = false;
        return;
      }

      // check that start and end times are positive
      if (vend < 0 || vstart < 0) {
        useResponseStore().updateResponse('Start and end times must be positive.', 'err');

        this.cooldown = 0;

        valid = false;
        return;
      }

      // validate skip times
      if (this.videoData.skip.length > 0) {
        this.videoData.skip.forEach(skip => {

          let start = parseFloat(skip.start);
          let end = parseFloat(skip.end);

          if (isNaN(start) || isNaN(end)) {
            useResponseStore().updateResponse('Invalid skip time(s).', 'err');

            this.cooldown = 0;
            this.loading.save = false;

            valid = false;
            return;
          }

          if (start <= 0 || end <= 0 || end <= start) {
            useResponseStore().updateResponse('Invalid skip time(s).', 'err');

            this.cooldown = 0;
            this.loading.save = false;

            valid = false;
            return;
          }
        });
      }

      // if all checks passed, save the video to the server
      if (valid) {
        try {

          request(this.videoData, '/video/save').then(res => {
            if (!res.failed) {
              useResponseStore().updateResponse('Video saved successfully', 'succ');

              this.ignoreLimit = false;
              this.ignoreSkip = false;

              this.cooldown = 0;
              this.loading.save = false;

              this.tempVideoData.start = this.videoData.start;
              this.tempVideoData.end = this.videoData.end;

              // if video isn't in allVideos, add it there
              if (!this.allVideos.find(video => video.url === this.videoData.url)) {
                this.allVideos.unshift(this.videoData);
              }

              // update the video in allVideos
              this.allVideos = this.allVideos.map(video => {
                if (video.url === this.videoData.url) {
                  return this.videoData;
                } else {
                  return video;
                }
              });

              // update the video in playlists
              this.playlists.forEach(p => {
                p.videos = p.videos.map(video => {
                  if (video.url === this.videoData.url) {
                    return this.videoData;
                  } else {
                    return video;
                  }
                });
              });

              // update the video in favs
              this.favs = this.favs.map(fav => {
                if (fav.url === this.videoData.url) {
                  return this.videoData;
                } else {
                  return fav;
                }
              });

              this.checkMaxStorage();

              this.cacheAll();
              this.cacheVideo();
              this.cacheFavs();
              this.cachePlaylists();
            } else {
              if (this.showMaxStorageAlert) {
                useResponseStore().updateResponse('Maximum storage limit reached or other error', 'warn');

                this.cooldown = 0;
                this.loading.save = false;

                return false;
              }

              useResponseStore().updateResponse(`Failed to save video`, 'err');

              this.cooldown = 0;
              this.loading.save = false;

              console.log(err);
            }
          });

        } catch (err) {

          this.cooldown = 0;
          this.loading.save = false;

          useResponseStore().updateResponse(`Failed to save video`, 'err');
        }
      }
    },


    // DELETE VIDEO
    destroy() {
      if (window.confirm("Delete this video?")) {

        this.loading.delete = true;

        request({ url: this.videoData.url }, '/video/delete').then(res => {
          if (!res.failed) {
            useResponseStore().updateResponse('Video deleted successfully', 'succ');
            // remove from main playlist
            this.playlists.forEach(p => {
              p.videos = p.videos.filter(video => video.url !== this.videoData.url);
            });

            // remove from favs
            this.favs = this.favs.filter(fav => fav.url !== this.videoData.url);

            // remove from all videos
            this.allVideos = this.allVideos.filter(video => video.url !== this.videoData.url);

            // remove from other playlists
            this.playlists.forEach(p => {
              p.videos.forEach(video => {
                if (video.url === this.videoData.url) {
                  this.videoPlaylist = p;
                  return;
                }
              });
            });

            if (this.videoPlaylist.videos.length == 0) {
              this.videoPlaylist = {
                id: '',
                name: '',
                videos: [],
                thumbnail: ''
              };
            }

            let new_video;
            this.favs[0] ? new_video = this.favs[0] : new_video = this.allVideos[0];
            this.videoData = new_video;

            this.ytplayer.loadVideoById(new_video.url);
            this.ytplayer.setPlaybackRate(new_video.speed);

            this.cacheAll();
            this.cacheFavs();
            this.cachePlaylists();
            this.cacheVideoPlaylist();

            this.checkMaxStorage();

            this.loading.delete = false;
          } else {
            useResponseStore().updateResponse('Failed to delete video', 'err');

            this.loading.delete = false;
            console.log(err);
          }
        });
      }
    },


    // PLAY RANDOM VIDEO
    random() {
      // get a random video from the 'allVideos' array
      const randomVideo = this.allVideos[Math.floor(Math.random() * this.allVideos.length)];
      this.pressPlay(randomVideo.url);
    },


    // GET CURRENT TIME
    copyCurrentTime() {
      const textToCopy = this.ytplayer.getCurrentTime().toFixed(1);
      navigator.clipboard.writeText(textToCopy).then(() => {
        useResponseStore().updateResponse('Current time copied to clipboard', 'succ');
      }).catch(err => {
        useResponseStore().updateResponse('Failed to copy current time to clipboard', 'err');
      });
    },
    setToCurrentTime(v) {
      let vs = ["start", "end"];

      if (!vs.includes(v)) {
        return;
      } else {
        let ct = parseFloat(this.ytplayer.getCurrentTime()).toFixed(1);
        switch (v) {
          case "start":
            this.videoData.start = ct;

            this.ignoreLimit = true;
            break;
          case "end":
            this.videoData.end = ct;

            this.ignoreLimit = true;
            break;
        }
      }
    },
    setStartSkipToCurrentTime(i) {
      let ct = parseFloat(this.ytplayer.getCurrentTime()).toFixed(1);

      this.videoData.skip[i].start = ct;

      this.ignoreSkip = true;
    },
    setEndSkipToCurrentTime(i) {
      let ct = parseFloat(this.ytplayer.getCurrentTime()).toFixed(1);

      this.videoData.skip[i].end = ct;

      this.ignoreSkip = true;
    },


    // IMPORT PLAYLIST
    async importPlaylist() {
      // Set loading state
      this.loading.importPlaylist = true;

      // Define playlist variables
      let videos = [];
      let pl_name = Math.random().toString(36);
      let pl_id = '';

      // Extract playlist ID from the URL
      const playlistId = this.extractPlaylistId(this.importPlaylistUrl);

      // Update import progress state
      this.importProgress.state = 1;

      // If playlist ID is not valid, return
      if (!playlistId) {
        useResponseStore().updateResponse('Invalid playlist URL', 'err');

        this.loading.importPlaylist = false;

        return false;
      }

      // Get array of videos from the imported playlist
      try {
        let nextPageToken = '';

        do {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
              part: 'snippet',
              maxResults: 50,
              playlistId: playlistId,
              pageToken: nextPageToken,
              key: this.dataKey,
            },
          });

          videos.push(...response.data.items);
          nextPageToken = response.data.nextPageToken;

        } while (nextPageToken);
      } catch (err) {
        useResponseStore().updateResponse('Failed to fetch playlist videos', 'err');

        this.loading.importPlaylist = false;

        return false;
      }

      // Create a new playlist
      request({ name: pl_name }, "/playlist/create").then(res => {
        // If failed to create playlist, return
        if (res.failed) {
          useResponseStore().updateResponse('Failed to create playlist', 'err');

          this.loading.importPlaylist = false;

          return false;
        }

        // Set current playlist to imported playlist
        this.videoPlaylist = {
          id: res.data.data.id,
          name: res.data.data.name,
          videos: [],
          thumbnail: ''
        };

        // Add playlist to playlists array
        this.playlists.unshift({
          id: res.data.data.id,
          name: pl_name,
          isEditable: false,
          videos: [],
          thumbnail: 'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg',
          created_at: new Date(),
          updated_at: new Date()
        });

        // Get playlist ID
        pl_id = res.data.data.id;

        if (videos.length > 0) {
          this.createImportedVideos(videos);
        } else {
          useResponseStore().updateResponse("This playlist doesn't have any videos", 'info');

          this.cacheAll();
          this.cacheFavs();
          this.cachePlaylists();
          this.cacheVideoPlaylist();
        }
      })

    },

    async createImportedVideos(videos, pl_id = this.videoPlaylist.id) {
      let vids_existed = false;
      let vids_failed = false;
      let vids_failed_to_playlist = false;

      this.importProgress.videos.max = videos.length;

      this.importProgress.expected = (videos.length * 5.4).toFixed(0);

      setInterval(() => {
        if (this.importProgress.videos.now < videos.length) {
          this.importProgress.expected = this.importProgress.expected - 1;
        }
      }, 1000);

      /*Promise.all(videos.map(async (v) => {
        // Get video ID from the playlist item
        let id = v.snippet.resourceId.videoId;
        let v_data = {
          title: v.snippet.title,
          desc: "",
          skip: [],
          start: 0,
          end: 999,
          lyrics: "",
          fav: false,
          speed: 1.0,
          url: id,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          created_at: new Date(),
          updated_at: new Date()
        };

        try {
          // Save video to database and await the result
          const saveRes = await request(v_data, "/video/save");

          if (saveRes.failed) {
            vids_failed = true;
          } else {
            useResponseStore().updateResponse(`Video with title "${v.snippet.title}" saved successfully`, 'succ');

            // Add the video to the playlist and await the result
            const addRes = await request({ plid: pl_id, url: id }, "/playlist/add");

            if (addRes.failed) {
              vids_failed_to_playlist = true;
            } else {
              // Add the video to the videoPlaylist array
              this.videoPlaylist.videos.unshift(v_data);

              // Add the video to the playlist in the playlists array
              this.playlists.find(pl => pl.id === pl_id).videos.unshift(v_data);;

              // Add the video to the allVideos array if it doesn't exist in allVideos array
              if (!this.allVideos.some(v => v.url === id)) {
                this.allVideos.unshift(v_data);
              }

              useResponseStore().updateResponse(`Video with title "${v.snippet.title}" added to playlist`, 'info');
            }
          }
        } catch (err) {

          vids_failed = true;

        }

        // Add a delay of 5 seconds before processing the next video
        await new Promise(resolve => setTimeout(resolve, 5000));
      }))*/
      for (const v of videos) {
        // Get video ID from the playlist item
        let id = v.snippet.resourceId.videoId;
        let v_data = {
          title: v.snippet.title,
          desc: "",
          skip: [],
          start: 0,
          end: 999,
          lyrics: "",
          fav: false,
          speed: 1.0,
          url: id,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          created_at: new Date(),
          updated_at: new Date()
        };

        // Update progress
        this.importProgress.videos.now = this.importProgress.videos.now + 1;

        try {
          // Save video to database and await the result
          const saveRes = await request(v_data, "/video/save");

          if (saveRes.failed) {
            vids_failed = true;
          } else {
            useResponseStore().updateResponse(`Video with title "${v.snippet.title}" saved successfully`, 'succ');

            // Add the video to the playlist and await the result
            const addRes = await request({ plid: pl_id, url: id }, "/playlist/add");

            if (addRes.failed) {
              vids_failed_to_playlist = true;
            } else {
              // Add the video to the videoPlaylist array
              this.videoPlaylist.videos.unshift(v_data);

              // Add the video to the playlist in the playlists array
              this.playlists.find(pl => pl.id === pl_id).videos.unshift(v_data);

              // Add the video to the allVideos array if it doesn't exist in allVideos array
              if (!this.allVideos.some(v => v.url === id)) {
                this.allVideos.unshift(v_data);
              }

              useResponseStore().updateResponse(`Video with title "${v.snippet.title}" added to playlist`, 'info');
            }
          }
        } catch (err) {
          vids_failed = true;
        }

        // Add a delay of 5 seconds before processing the next video
        await new Promise(resolve => setTimeout(resolve, 5000));
      }

      if (vids_failed) {
        useResponseStore().updateResponse("Playlist created, but we failed to save some videos", 'warn');
      }

      if (vids_failed_to_playlist) {
        useResponseStore().updateResponse("Playlist created, but we failed to add some videos to the playlist", 'warn');
      }

      if (vids_existed) {
        useResponseStore().updateResponse("One or more videos from this playlist already existed. They've been added to the playlist", 'info');
      }

      if (!vids_existed && !vids_failed && !vids_failed_to_playlist) {
        useResponseStore().updateResponse('Playlist & video(s) created successfully', 'succ');
      }

      if (this.videoPlaylist.videos.length == 0) {
        useResponseStore().updateResponse("There aren't any videos in the imported playlist", 'info');
      } else {
        // play the first video in the playlist
        this.pressPlay(this.videoPlaylist.videos[0].url);
      }

      this.importPlaylistUrl = '';
      this.showImportModal = false;
      this.loading.importPlaylist = false;

      this.cacheAll();
      this.cacheFavs();
      this.cachePlaylists();
      this.cacheVideoPlaylist();
    },

    extractPlaylistId(url) {
      const regex = /[?&]list=([^&]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    },


    // SHARE VIDEO
    share() {

      if (this.shareUser.trim() != '') {
        this.loading.share = true;

        request({ url: this.videoData.url, username: this.shareUser }, '/share/create').then(res => {
          if (!res.failed) {
            this.showShareModal = !this.showShareModal;
            this.shareUser = '';

            useResponseStore().updateResponse('Video shared successfully', 'succ');

            this.loading.share = false;
          } else {
            useResponseStore().updateResponse('Failed to share video - ' + res.data, 'err');

            this.loading.share = false;

            console.log(res);
          }
        });
      }
    },

    // UPDATE CACHE
    cacheAll() {
      localStorage.setItem("cache_all", JSON.stringify(this.allVideos));

      this.allVideos.forEach(v => {
        localStorage.setItem(`cache_vid_${v.url}`, JSON.stringify(v));
      });
    },
    cacheFavs() {
      localStorage.setItem("cache_favs", JSON.stringify(this.favs));
      localStorage.setItem("cache_fav_order", JSON.stringify(this.favOrder));
    },
    cachePlaylists() {
      localStorage.setItem("cache_playlists", JSON.stringify(this.playlists));
    },
    cacheVideo() {
      localStorage.setItem(`cache_vid_${this.videoData.url}`, JSON.stringify(this.videoData));
    },
    cacheVideoPlaylist() {
    },
    cacheReceivedShares() {
      localStorage.setItem('cache_received_shares', JSON.stringify(this.receivedShares));
    },
    syncCache() {
      localStorage.removeItem("cache_all");
      localStorage.removeItem("cache_favs");
      localStorage.removeItem("cache_playlists");
      this.allVideos.forEach(v => {
        localStorage.removeItem(`cache_vid_${v.url}`);
      })
      localStorage.removeItem("cache_received_shares");

      window.location.reload();
    },


    // ADD OR REMOVE VIDEO FROM FAVOURITES
    fav() {
      const og_state = this.videoData.fav;
      this.videoData.fav = !this.videoData.fav;

      request({ url: this.videoData.url }, '/video/fav').then(res => {
        if (res.failed) {
          this.videoData.fav = !this.videoData.fav;

          useResponseStore().updateResponse('Failed to toggle favorite status', 'err');
        } else {
          if (og_state) {
            this.favs = this.favs.filter(fav => fav.url !== this.videoData.url);
            this.favOrder = this.favOrder.filter(o => o.url !== this.videoData.url);

            this.cacheFavs();
          } else {
            this.favs.unshift(this.videoData);

            if (!this.favOrder.find(o => o.url === this.videoData.url)) {
              this.favOrder.push({ url: this.videoData.url, order: 0 });
            } else {
              this.favOrder.find(o => o.url === this.videoData.url).order = 0
            }

            this.cacheFavs();
          }
        }
      });
    },
    clearFavs() {
      if (window.confirm('Are you sure you want to clear all your favorite videos?')) {
        useResponseStore().updateResponse("Clearing favourites, please wait...", 'info');
        Promise.all(this.favs.map(async f => {
          const res = await request({ url: f.url }, '/video/fav');
          if (res.failed) {
            useResponseStore().updateResponse(`'${f.title}' couldn't be removed`, 'warn');
          } else {
            this.favs = this.favs.filter(fav => fav.url !== f.url);
          }
        })).then(() => {
          this.cacheFavs();
        });
      }
    },


    // YOUTUBE PLAYER FUNCTIONS
    loadYouTubeAPI() {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    },
    createPlayer() {
      this.ytplayer = new YT.Player('player', {
        height: '350',
        width: '100%',
        videoId: this.videoData.url,
        events: {
          'onReady': this.onPlayerReady,
          'onStateChange': (event) => this.onPlayerStateChange(event)
        }
      });
    },
    onPlayerReady(event) {
      event.target.seekTo(this.videoData.start);
      event.target.playVideo();
      event.target.setPlaybackRate(parseFloat(this.videoData.speed));

      this.videoData.thumbnail = `https://img.youtube.com/vi/${this.ytplayer.playerInfo.videoData.video_id}/hqdefault.jpg`;

      event.target.setVolume(100);

      this.loopInterval = setInterval(() => this.loopVideo(), 1);
      this.tabInterval = setInterval(() => this.playingTabProgress(), 1);
      this.incrementPlayTime = setInterval(() => { this.playTime = this.ytplayer.getCurrentTime() }, 1);
    },
    onPlayerStateChange(event) {
    },
    updateSpeed() {
      let speed = this.videoData.speed;

      if (speed >= 0.25 && speed <= 2) {
        this.ytplayer.setPlaybackRate(speed);
      } else {
        return;
      }
    },
    loopVideo() {
      var ct = this.ytplayer.playerInfo.currentTime;
      ct = parseFloat(ct).toFixed(1);

      let start = parseFloat(this.videoData.start);
      let end = parseFloat(this.videoData.end);

      // if video is paused and musicMode is true, then unpause the video
      if (this.ytplayer.getPlayerState() == YT.PlayerState.PAUSED && this.musicMode) {
        this.ytplayer.playVideo();
      }

      if (!this.ignoreLimit) {
        // if ct is less than start, reset to start time
        if (ct < start) {
          this.ytplayer.seekTo(this.videoData.start);
          this.ytplayer.playVideo(); // Ensure the video is playing
        }

        // if ct is greater than end, check if loop is set to fav, playlist, or all
        if (ct >= end) {
          if (!this.loop) {
            // reset to start if no loop set
            this.ytplayer.seekTo(this.videoData.start);
            this.ytplayer.playVideo(); // Ensure the video is playing
          } else {
            // go to next video or start from beginning of list
            let list;

            switch (this.loop) {
              case "fav":
                list = this.favs;
                break;
              case "playlist":
                list = this.videoPlaylist.videos;
                break;
              case "all":
                list = this.allVideos;
                break;
            }

            let index;
            let vid;

            index = list.findIndex(obj => obj.url === this.videoData.url);

            if (!this.shuffle) {
              if (index !== -1 && index < list.length - 1) {
                vid = list[index + 1];
              } else {
                vid = list[0];
              }
            } else {
              index = Math.floor(Math.random() * list.length);
              vid = list[index];
            }

            this.pressPlay(vid.url);
          }
        }
      }

      let skip = this.videoData.skip;

      // if skip times are set, check if current time is within a skip time range
      if (!this.ignoreSkip) {
        skip.forEach(skip => {
          let start = parseFloat(skip.start);
          let end = parseFloat(skip.end);

          if (ct > start) {
            if (ct < end) {
              this.ytplayer.seekTo(end);
              this.ytplayer.playVideo(); // Ensure the video is playing
            }
          }
        });
      }

      // Additional check to ensure the video is playing
      if (this.ytplayer.getPlayerState() != YT.PlayerState.PLAYING && this.musicMode) {
        this.ytplayer.playVideo();
      }
    },
    playingTabProgress() {
      // add percentage border to video tab - visual effect
      let videos = document.getElementsByClassName(this.videoData.url);

      let vstart = this.tempVideoData.start;
      let vend = this.tempVideoData.end;

      let pt = this.playTime;
      let duration = parseFloat(vend) - parseFloat(vstart);
      let percentage = ((pt - vstart) / duration) * 100;

      for (let i = 0; i < videos.length; i++) {
        videos[i].style.borderImage = `linear-gradient(to bottom right, green ${percentage}%, transparent ${percentage}%) 1`;
      }
    },
    reloadVideo(url) {
      this.ytplayer.loadVideoById(url);
      this.ytplayer.setPlaybackRate(parseFloat(this.videoData.speed));
    },
    parseUrl(url) {
      try {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        return url.match(regex);
      } catch (error) {
        return null;
      }
    },


    // LOADING NEW VIDEO
    loadUrl() {
      let url = this.tempUrl;
      let parsed_url = this.parseUrl(this.tempUrl);

      try {

        parsed_url = parsed_url[1];

      } catch (err) {

        useResponseStore().updateResponse('Invalid YouTube URL', 'err');
        return;

      }

      if (parsed_url == this.videoData.url) {
        useResponseStore().updateResponse('This video is already playing', 'warn');
        return;
      }

      let cached_all = JSON.parse(localStorage.getItem("cache_all"));

      if (cached_all.find(v => v.url === parsed_url)) {
        this.videoData = cached_all.find(v => v.url === parsed_url);
      } else {

        request({ url: parsed_url }, '/video/load').then(res => {
          if (!res.failed) {
            this.videoData = res.data.data;

            this.reloadVideo(parsed_url);
          } else {
            this.getVidData(parsed_url);
          }

        })
      }

    },


    // PLAY VIDEO
    pressPlay(url, playlist = this.videoPlaylist) {

      if (new Date().getTime() - this.cooldown > 750) {

        this.cooldown = new Date().getTime();

        if (url == this.videoData.url) {
          //useResponseStore().updateResponse('This video is already playing', 'warn');
          return;
        }

        // set video playlist
        let new_playlist = this.playlists.find(pl => pl.videos.some(v => v.url === url));

        this.videoPlaylist = new_playlist ? new_playlist : { id: "", name: "", videos: [], thumbnail: "" };

        this.cacheVideoPlaylist();

        let cache = localStorage.getItem(`cache_vid_${url}`);

        if (cache) {
          this.videoData = JSON.parse(cache);

          if (this.loop) {

            let list;

            switch (this.loop) {
              case "fav":
                list = this.favs;
                break;
              case "playlist":
                list = this.videoPlaylist.videos;
                break;
              case "all":
                list = this.allVideos;
                break;
            }

            if (!list.some(obj => obj.url === this.videoData.url)) {
              this.loop = null;
            }
          }

          this.reloadVideo(url);
        } else {
          request({ url: url }, '/video/load').then(res => {

            this.ignoreLimit = false;
            this.ignoreSkip = false;

            try {

              this.videoData = res.data.data;

              // if song isn't in list, remove loop
              if (this.loop) {

                let list;

                switch (this.loop) {
                  case "fav":
                    list = this.favs;
                    break;
                  case "playlist":
                    list = this.videoPlaylist.videos;
                    break;
                  case "all":
                    list = this.allVideos;
                    break;
                }

                if (!list.some(obj => obj.url === this.videoData.url)) {
                  this.loop = null;
                }
              }
              //

              this.cacheVideo();

              this.reloadVideo(url);

            } catch (err) {

              this.getVidData(url);
            }

          })
        }
      } else {
      }
    },


    // IF VIDEO IS NEW, FETCH VIDEO DATA
    async getVidData(url) {

      try {
        const id = this.parseUrl(url) ? this.parseUrl(url)[1] : url;
        const key = "AIzaSyDV9INVJodSVheJQohxNRdj-1PJezpTFc8";

        const api_url = "https://www.googleapis.com/youtube/v3/videos?id=" + id + "&key=" + key + "&part=snippet,contentDetails";

        try {
          const response = await axios.get(api_url);
          const videoData = response.data.items[0];

          let videoInfo = { title: '', duration: '', thumbnail: '' };

          videoInfo.title = videoData.snippet.title;
          videoInfo.duration = this.convertISO8601Duration(videoData.contentDetails.duration);
          videoInfo.thumbnail = videoData.snippet.thumbnails.high.url;

          // updating video data with fetched data
          this.videoData.title = videoInfo.title;
          this.videoData.thumbnail = videoInfo.thumbnail;
          this.videoData.desc = "";

          this.videoData.start = 0;
          this.videoData.end = videoInfo.duration;

          this.duration = videoInfo.duration;

          this.videoData.url = id;

          this.videoData.skip = [];

          this.videoData.fav = false;

          this.videoData.created_at = new Date();

          this.videoData.lyrics = '';

          this.videoData.speed = 1;

          // update lyrics
          this.lyricData.title = this.videoData.title;

          // updating video player
          this.ytplayer.loadVideoById(id);
          this.ytplayer.setPlaybackRate(1);
        } catch (error) {
          useResponseStore().updateResponse('Failed to get video.', 'err');
          console.error('Error fetching video info:', error);

          this.tempUrl = "https://www.youtube.com/watch?v=" + this.videoData.url;
        }

      } catch (error) {
        useResponseStore().updateResponse('Failed to get video data' + JSON.stringify((error)), 'err');

        this.tempUrl = "https://www.youtube.com/watch?v=" + this.videoData.url;
      }
    },
    convertISO8601Duration(duration) {
      const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
      const hours = (parseInt(match[1]) || 0);
      const minutes = (parseInt(match[2]) || 0);
      const seconds = (parseInt(match[3]) || 0);
      return (hours * 3600) + (minutes * 60) + seconds;
    },
  },


  watch: {
    // FAV ORDER
    favOrder: {
      handler(newVal, oldVal) {
        let favs = this.favs;
        let orders = newVal;

        // for each fav item, set its order from the favOrder array
        this.favs.forEach(f => {
          let order = orders.find(o => o.url === f.url);
          if (order) {
            f.order = order.order;
          } else {
            f.order = 0;
          }

        });

        this.favs.sort((a, b) => a.order - b.order);
      },
      deep: true
    },
    // PLAY SIDEBAR ANIMATION
    showSidebar(val) {

      const sidebar = document.getElementById("sidebar");

      if (sidebar) {

        if (val) {

          sidebar.classList.add("sidebar-open", "sidebar-transition");

          setTimeout(() => {
          }, 500); // Match the transition duration

        } else {

          sidebar.classList.add("sidebar-transition");
          sidebar.classList.remove("sidebar-open");

          setTimeout(() => {

            sidebar.classList.remove("sidebar-transition");

          }, 500); // Match the transition duration
        }
      }
    },

    loop(val) {
      if (!val) {
        this.shuffle = false;
      }
    },

    videoData(val) {
      this.tempUrl = "https://www.youtube.com/watch?v=" + val.url;

      this.lyricData.title = this.videoData.title;
      this.lyricData.artist = "";

      this.lyricData.disabled = false;

      if (!this.ignoreLimit) {
        this.tempVideoData.start = this.videoData.start;
        this.tempVideoData.end = this.videoData.end;
      }
    },

    showLyricsModal(val) {
      if (!val) {
        this.showLyricsData = false;
      }
    }
  },

  favs(val) {
    if (val.length == 0 && this.loop == "fav") {
      this.loop = null;
      this.shuffle = false;
    }
  },

  videoPlaylist(val) {
    if (val.videos.length == 0 && this.loop == "fav") {
      this.loop = null;
      this.shuffle = false;
    }
  },
}
</script>



<style scoped>
/* MODAL */
#modal {
  height: 100vh;
  width: 100vw;
  position: fixed;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}

/* PLAYLISTS */
.playlist-container {
  min-width: 49%;
  max-width: 49%;
}

@media only screen and (max-width: 576px) {
  .playlist-container {
    min-width: 100% !important;
    max-width: 100% !important;
  }
}

.main-tab {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--grey_7);
}

.main-tab-title {
  width: 100%;
  text-align: left;
  color: black;
}

/* TOOLTIP */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  opacity: 0;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;
  font-size: 12px;

  min-width: max-content;

  position: absolute;
  right: 0;
  z-index: 1;
  transition: 0.5s;
}

.tooltip:hover .tooltiptext {
  opacity: 1;
}

/* VIDEOS */
.image-container {
  margin: 15px;
  cursor: pointer;
  min-width: max-content;
  position: relative;
  min-width: 200px;
  max-width: 200px;
  height: 113px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);
}

.playing {
  border-color: green;
}

.playing_tab {
  border-width: 4px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}

.overlay-text-wrap {
  max-width: 100%;
  overflow-x: auto;
  width: 100%;
  display: flex;
}

.overlay-text-wrap {
  max-height: 100vh;
  overflow-y: auto;
  padding-right: 10px;
}

.overlay-text-wrap::-webkit-scrollbar {
  width: 8px;
  height: 2px;
}

.overlay-text-wrap::-webkit-scrollbar-thumb {
  background-color: var(--grey_10);
  border-radius: 3px;
}

.overlay-text-wrap::-webkit-scrollbar-track {
  background: transparent;
}

.overlay-text {
  width: 100%;
  text-align: center;
  min-width: max-content;
  color: white;
  font-size: 15px;
  text-align: center;
}

/* SIDEBAR */

@import url('../assets/css/styles.css');

#sidebar {
  /*background: #1A2B7A;
  background: #A083BE;
  background: #D5B5A4;*/
  background-repeat: no-repeat;
  background-size: cover;
  /*background-image: linear-gradient(#1A2B7A, #A083BE);*/
  background: var(--grey_5);
  background: var(--theme3);
  border-left: 1px solid var(--grey_1);
  padding: 20px;
  position: fixed;
  height: 100%;
  top: 0;
  right: -300px;
  width: 300px;

  fill: white;
  color: white;
}

.sidebar-title {
  outline: none;
}

#sidebar-inner {
  max-height: 100vh;
  overflow-y: auto;
  padding-right: 10px;
}

#sidebar-inner::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

#sidebar-inner::-webkit-scrollbar-thumb {
  background-color: var(--grey_1);
  border-radius: 2px;
}

#sidebar-inner::-webkit-scrollbar-track {
  background: transparent;
}

.playlist-scroll::-webkit-scrollbar {
  width: 8px;
  height: 4px;
}

.playlist-scroll::-webkit-scrollbar-thumb {
  background: var(--grey_4);
  border-radius: 10px;
}

.playlist-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-open {
  right: 0px !important;
}

.sidebar-transition {
  transition: right 0.5s;
}


/* HOME */
.skip-val {
  max-width: 35%;
  border-bottom: 1px solid black !important;
}

.opt-svg {
  cursor: pointer;
  width: 24px;
  height: 24px
}

.custcheck {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-width: 24px;
  min-height: 24px;
  border: 2px solid var(--info_5);
  border-radius: 50%;
  /* Make it circular */
  padding: 4px;
  cursor: pointer;
  position: relative;
}

.custcheck:checked {
  background-color: var(--info_5);
}

.custcheck:checked::before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: var(--info_7);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>