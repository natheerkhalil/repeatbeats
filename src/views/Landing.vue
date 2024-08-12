<template>

    <!-- UNAUTHENTICATED HEADER -->
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="__po _flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text _sm-hide __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>
        <div class="_flex _cc">

            <div style="font-size: 22.5px;" class="__txt-grey-10 _fd-ro _ai-ce">
                <router-link class="__hovun __hovun-grad __nun __txt-grey-10" to="/login">Login</router-link>
                <span class="_sm-hide">&nbsp; // &nbsp;</span>
                <router-link class="_sm-hide __hovun __hovun-grad __nun __txt-grey-10"
                    to="/register">Register</router-link>
            </div>
        </div>
    </div>
    <!-- UNAUTHENTICATED HEADER END -->

    <br>

    <div class="__b _flex _cc">
        <div class="__b __w _flex _fd-co __padsm">
            <br>
            <div class="__b _flex _cc">
                <div class="__13 __w _flex _cc _fd-co">
                    <div class="__b _flex _cc _fd-co">
                        <div class="__b _flex _fd-ro _jc-be _ai-ce">
                            <span class="__tlg"></span>
                            <p class="gradient-text __tal __txl __bo">All of your videos & music, organised, in one
                                place
                            </p>
                            <span class="__tlg"></span>
                        </div>
                    </div>
                    <br><br>
                    <div class="__b _flex _cc">
                        <img class="__po" @click="showImageModal = !showImageModal"
                            style="max-width: 100%; min-width: 100%; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);"
                            src="../../public/landing.webp" alt="Landing Page Image">
                    </div>

                    <br>
                    <br>
                    <br>

                    <div class="__b _flex _fd-co _sm-hide">
                        <div class="_fw-wr __custscroll __b _flex _fd-ro _ai-ce _jc-ce">
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="white" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M22 1v2h-2v-2h-2v4h-12v-4h-2v2h-2v-2h-2v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2v-22h-2zm-18 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm6 8v-6l5 3-5 3zm12 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Customise</p>
                                <p class="__txt-grey-10 __tsx">your videos</p>
                            </div>
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="white" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5c-2.762 0-5-2.239-5-5s2.238-5 5-5zm15-4c0-1.657-1.344-3-3-3-1.657 0-3 1.343-3 3 0 .312.061.606.148.888l-4.209 3.157c.473.471.877 1.009 1.201 1.599l4.197-3.148c.477.317 1.048.504 1.663.504 1.656 0 3-1.343 3-3zm-5.852 17.112c-.087.282-.148.576-.148.888 0 1.657 1.343 3 3 3 1.656 0 3-1.343 3-3s-1.344-3-3-3c-.615 0-1.186.187-1.662.504l-4.197-3.148c-.324.59-.729 1.128-1.201 1.599l4.208 3.157zm6.852-5.05c1.656 0 3-1.343 3-3s-1.344-3-3-3c-1.281 0-2.367.807-2.797 1.938h-6.283c.047.328.08.66.08 1s-.033.672-.08 1h6.244c.395 1.195 1.508 2.062 2.836 2.062z" />
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Share</p>
                                <p class="__txt-grey-10 __tsx">videos with others</p>
                            </div>
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="white" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Control</p>
                                <p class="__txt-grey-10 __tsx">what to watch</p>
                            </div>
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="white" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path data-v-f72d3545=""
                                        d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z">
                                    </path>
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Organise</p>
                                <p class="__txt-grey-10 __tsx">videos into playlists</p>
                            </div>
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="white" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z" />
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Write</p>
                                <p class="__txt-grey-10 __tsx">lyrics or notes</p>
                            </div>
                        </div>
                    </div>

                    <br>
                    <br>
                    <br>

                    <br>
                    <br>
                    
                    <p class="__b gradient-text-3 __txl">
                        How it Works
                    </p>
                    <br>
                    <div class="__b _flex __bo-grey-7 __bod __padxs _fd-ro _sm-fd-co _jc-ar _ai-ce">
                        <div class="_flex _cc _fd-co">
                            <div style="width: 50px; height: 50px;"
                                class="_flex _cc __bo-grey-10 __bdro __padlg __bo-3">
                                <p class="__txt-grey-10 __tmd">1</p>
                            </div>
                            <br>
                            <p class="__txt-grey-10 __tme">Get a video URL from YouTube</p>
                        </div>
                        <br class="_hide _sm-show">
                        <img style="height: 200px; object-fit: cover; width: 400px; max-width: 100%; " src="../../public/landing-1.webp"
                            alt="">
                    </div>
                    <br>
                    <div class="__b __bo-grey-7 __bod __padxs _flex _fd-ro _sm-fd-co _jc-ar _ai-ce">
                        <div class="_flex _cc _fd-co">
                            <div style="width: 50px; height: 50px;"
                                class="_flex _cc __bo-grey-10 __bdro __padlg __bo-3">
                                <p class="__txt-grey-10 __tmd">2</p>
                            </div>
                            <br>
                            <p class="__txt-grey-10 __tme">Paste the URL into RepeatBeats' player</p>
                        </div>
                        <br class="_hide _sm-show">
                        <img style="height: 200px; object-fit: cover; width: 400px; max-width: 100%; " src="../../public/landing-2.webp"
                            alt="">
                    </div>
                    <br>
                    <div class="__b __bo-grey-7 __bod __padxs _flex _fd-ro _sm-fd-co _jc-ar _ai-ce">
                        <div class="_flex _cc _fd-co">
                            <div style="width: 50px; height: 50px;"
                                class="_flex _cc __bo-grey-10 __bdro __padlg __bo-3">
                                <p class="__txt-grey-10 __tmd">3</p>
                            </div>
                            <br>
                            <p class="__txt-grey-10 __tme">Customise the video to your liking!</p>
                        </div>
                        <br class="_hide _sm-show">
                        <img style="height: 200px; object-fit: cover; width: 400px; max-width: 100%; " src="../../public/landing-3.webp"
                            alt="">
                    </div>
                </div>
            </div>

            <br>
            <br>
            <br>
            <br>
            <br>

            <div class="__mauto _flex __13 __w _fd-co _cc">

                <p class="__b __tal __tlg gradient-text">This is an open-source project</p>

                <br>

                <div class="_flex _cc _fd-ro">
                    <p @click="goToGithub" class="__mauto __po __tmd __txt-grey-10 __hovun">Check it
                        out
                        on GitHub</p> &nbsp; &nbsp; &nbsp;
                    <svg class="__po" @click="goToGithub" fill="var(--grey_10)" xmlns="http://www.w3.org/2000/svg"
                        width="44" height="44" viewBox="0 0 24 24">
                        <path
                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                    </svg>
                </div>
                <br>

                <div class="_flex _cc _fd-ro">
                    <p @click="buyCoffee" class="__mauto __po __tmd __txt-grey-10 __hovun">Buy me a coffee</p> &nbsp;
                    &nbsp; &nbsp;
                    <svg class="__po" @click="buyCoffee" fill="var(--grey_10)" xmlns="http://www.w3.org/2000/svg"
                        width="44" height="44" viewBox="0 0 24 24">
                        <path
                            d="M14.911 10c-.308 3.325-1.397 5.712-2.948 8h-4.926c-1.373-2.009-2.613-4.372-2.948-8h10.822zm2.089-2h-15c0 5.716 1.826 8.996 4 12h7c2.12-2.911 4-6.333 4-12zm1.119 2c-.057.701-.141 1.367-.252 2h1.549c-.449 1.29-1.5 2.478-2.299 2.914-.358 1.038-.787 1.981-1.26 2.852 3.275-1.143 5.847-4.509 6.143-7.766h-3.881zm-1.119 12h-15v2h15v-2zm-3.06-19.614c-.416 1.702-3.07 2.477-3.983 4.614-.088-1.846 1.107-3.031 1.75-3.93 1.045-1.465-.537-2.267-1.633-1.171-.188.187-.38.435-.573.756-.193-.322-.386-.57-.573-.757-1.089-1.09-2.664-.294-1.658 1.137.635.903 1.863 2.095 1.775 3.965-.914-2.137-3.567-2.912-3.984-4.614-.355-1.445.928-2.386 2.29-2.386.793 0 1.613.32 2.15 1.045.537-.725 1.357-1.045 2.15-1.045 1.362 0 2.644.941 2.289 2.386z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div style="margin-top: 55px; "></div>

    <div @click="showImageModal = !showImageModal" v-if="showImageModal"
        style="max-height: 90vh; overflow-x: auto; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90vw;"
        class="__custscroll __w _flex _fd-co _ai-ce __bg-grey-10 __bo-1 __bod">
        <div class="__b _flex _fd-ro _jc-be">
            <img style="border: 5px solid #ec8671; max-width: 100%; min-width: 100%; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);"
                src="../../public/landing.webp" alt="Landing Page Image">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showImageModal: false
        }
    },

    methods: {
        goToGithub() {
            window.open('https://github.com/nouralbeirouty/repeatbeats-frontend', '_blank').focus();
        },
        buyCoffee() {
            window.open('https://ko-fi.com/natheer', '_blank').focus();
        },
    }
}
</script>

<style>
.gradient-text {
    background-color: red;

    /*background-image: linear-gradient(45deg, #f3ec78, #af4261);*/
    background-image: linear-gradient(45deg, #f3ec78, #f3ec78, #af4261, #af4261, var(--theme3), var(--theme3));
    background-size: 100%;
    background-repeat: repeat;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    color: black;
}

.gradient-text-2 {
    background-color: red;

    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    background-repeat: repeat;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    color: black;
}

.gradient-text-3 {
    background-color: red;

    background-image: linear-gradient(45deg, #f3ec78, #af4261, var(--theme3));
    background-size: 100%;
    background-repeat: repeat;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    color: black;
}

.__hovun-grad::after {
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
}

div#app {
    background: var(--grey_1);
}
</style>