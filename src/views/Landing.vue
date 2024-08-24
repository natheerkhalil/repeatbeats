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

    <div class="__b _flex _cc">
        <div class="__b __w _flex _fd-co __padsm">
            <br>
            <div class="__b _flex _cc">
                <div class="__13 __w _flex _cc _fd-co">
                    <div class="__b _flex _cc _fd-co">
                        <div class="__b _flex _fd-ro _cc">
                            <p class="_md-hide gradient-text __tal __txl __bo">All of your videos & music in
                                one
                                place
                            </p>
                            <p class="__tlg _hide _md-show gradient-text __tal __bo">All of your videos & music in one
                                place
                            </p>
                        </div>
                    </div>
                    <br>
                    <div class="__b _flex _cc">
                        <img class="__bd-3 __bod _md-hide"
                            style="max-width: 100%; min-width: 100%; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);"
                            src="/landing.webp" alt="Landing Page Image">
                        <img class="__bo-grey-7 _md-show _hide __bod"
                            style="min-width: 100%; min-height: 100%; object-fit: contain; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);"
                            src="/landing-mb.webp" alt="Mobile Landing Page Image">
                    </div>

                    <div class="_flex _fd-ro _md-hide">
                        <br>
                        <br>
                    </div>

                    <div class="__b _flex _fd-co _sm-hide">
                        <div class="_fw-wr __custscroll __b _flex _fd-ro _ai-ce _jc-ce">
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="var(--grey_1)" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M22 1v2h-2v-2h-2v4h-12v-4h-2v2h-2v-2h-2v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2v-22h-2zm-18 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm6 8v-6l5 3-5 3zm12 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Customise</p>
                                <p class="__txt-grey-4 __tsx">your videos</p>
                            </div>
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="var(--grey_1)" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5c-2.762 0-5-2.239-5-5s2.238-5 5-5zm15-4c0-1.657-1.344-3-3-3-1.657 0-3 1.343-3 3 0 .312.061.606.148.888l-4.209 3.157c.473.471.877 1.009 1.201 1.599l4.197-3.148c.477.317 1.048.504 1.663.504 1.656 0 3-1.343 3-3zm-5.852 17.112c-.087.282-.148.576-.148.888 0 1.657 1.343 3 3 3 1.656 0 3-1.343 3-3s-1.344-3-3-3c-.615 0-1.186.187-1.662.504l-4.197-3.148c-.324.59-.729 1.128-1.201 1.599l4.208 3.157zm6.852-5.05c1.656 0 3-1.343 3-3s-1.344-3-3-3c-1.281 0-2.367.807-2.797 1.938h-6.283c.047.328.08.66.08 1s-.033.672-.08 1h6.244c.395 1.195 1.508 2.062 2.836 2.062z" />
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Share</p>
                                <p class="__txt-grey-4 __tsx">videos with others</p>
                            </div>
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="var(--grey_1)" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Control</p>
                                <p class="__txt-grey-4 __tsx">what to watch</p>
                            </div>
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="var(--grey_1)" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path data-v-f72d3545=""
                                        d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z">
                                    </path>
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Organise</p>
                                <p class="__txt-grey-4 __tsx">videos into playlists</p>
                            </div>
                            <div style="margin: 10px; max-width: 200px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);"
                                class="__bdsm __bo-grey-4 __bo-1 __padsm _flex _cc _fd-co">
                                <svg fill="var(--grey_1)" width="35" height="35" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                    <path
                                        d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z" />
                                </svg>
                                <br class="__br __brsm">
                                <p class="gradient-text-2 __tsm">Write</p>
                                <p class="__txt-grey-4 __tsx">lyrics or notes</p>
                            </div>
                        </div>
                    </div>

                    <br>
                    <br>
                    <br>

                    <br>
                    <br>

                    <p class="__b gradient-text _md-hide __txl">
                        How does it work?
                    </p>
                    <p class="__tlg _hide _md-show gradient-text __tal __bo">How does it work?
                    </p>
                    <br>
                    <div class="__b _flex __bo-grey-7 __bod __padxs _fd-ro _sm-fd-co _jc-ar _ai-ce">
                        <div style="width: 500px;" class="_flex _cc _fd-co">
                            <div style="width: 50px; height: 50px;" class="_flex _cc __bo-grey-1 __bdro __padlg __bo-3">
                                <p class="__txt-grey-1 __tmd">1</p>
                            </div>
                            <br>
                            <p class="__txt-grey-1 __tme">Get a video URL from YouTube</p>
                        </div>
                        <br>
                        <img style="height: 200px; object-fit: cover; width: 400px; max-width: 100%; "
                            src="../../public/landing-1.webp" alt="Get video URL from YouTube">
                    </div>
                    <br>
                    <div class="__b __bo-grey-7 __bod __padxs _flex _fd-ro _sm-fd-co _jc-ar _ai-ce">
                        <div style="width: 500px;" class="_flex _cc _fd-co">
                            <div style="width: 50px; height: 50px;" class="_flex _cc __bo-grey-1 __bdro __padlg __bo-3">
                                <p class="__txt-grey-1 __tmd">2</p>
                            </div>
                            <br>
                            <p class="__txt-grey-1 __tme">Paste the URL into RepeatBeats' player</p>
                        </div>
                        <br>
                        <img style="height: 200px; object-fit: cover; width: 400px; max-width: 100%; "
                            src="../../public/landing-2.webp" alt="Paste the URL into RepeatBeats' player">
                    </div>
                    <br>
                    <div class="__b __bo-grey-7 __bod __padxs _flex _fd-ro _sm-fd-co _jc-ar _ai-ce">
                        <div style="width: 500px;" class="_flex _cc _fd-co">
                            <div style="width: 50px; height: 50px;" class="_flex _cc __bo-grey-1 __bdro __padlg __bo-3">
                                <p class="__txt-grey-1 __tmd">3</p>
                            </div>
                            <br>
                            <p class="__txt-grey-1 __tme">Customise the video to your liking</p>
                        </div>
                        <br class="_hide _sm-show">
                        <img style="height: 200px; object-fit: cover; width: 400px; max-width: 100%; "
                            src="../../public/landing-3.webp" alt="Customise the video to your liking!">
                    </div>
                    <br>
                    <div class="__b __bo-grey-7 __bod __padxs _flex _fd-ro _sm-fd-co _jc-ar _ai-ce">
                        <div style="width: 500px;" class="_flex _cc _fd-co">
                            <div style="width: 50px; height: 50px;" class="_flex _cc __bo-grey-1 __bdro __padlg __bo-3">
                                <p class="__txt-grey-1 __tmd">4</p>
                            </div>
                            <br>
                            <p class="__txt-grey-1 __tme">Organise videos using playlists</p>
                        </div>
                        <br class="_hide _sm-show">
                        <img style="height: 200px; object-fit: cover; width: 400px; max-width: 100%; "
                            src="../../public/landing-4.webp" alt="Customise the video to your liking!">
                    </div>
                </div>
            </div>

            <br>
            <br>
            <br>
        </div>
    </div>

    <div class="__b _flex _cc">
        <div class="__b _flex bg-gradient _cc">
            <div style="background: rgba(0,0,0,0.2);" class="__mauto _flex __b _cc _fd-co __padmd">
                <p class="__b __tal __tlg __txt-grey-10">Listen the right way with RepeatBeats</p>
                <br>
                <button style="background: rgba(0,0,0,0.6); border: 1px solid rgba(0,0,0,0.5);"
                    class="__padxs __po __bdxs"><span class="gradient-text">Get started for free</span>
                </button>
            </div>
        </div>
    </div>

    <div style="margin-top: 55px; "></div>
</template>

<script>
export default {
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
    background-image: linear-gradient(45deg, #f3a578, #f3a578, #af4261, #af4261, var(--theme3), var(--theme3));
    background-size: 100%;
    background-repeat: repeat;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    color: black;
}

.gradient-hr {
    background: linear-gradient(to left, #f3a578, var(--theme3), #af4261, #af4261, var(--theme3), var(--theme3));
    height: 2px;
    width: 1300px;
    max-width: 90vw;
    margin: auto;
}

.bg-gradient {
    background-image: linear-gradient(to right, #f3a578, #af4261);
}

.ht-gradient:hover {
    background-color: red;

    background-image: linear-gradient(45deg, #f3a578, #af4261);
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

    background-image: linear-gradient(45deg, #f3a578, #af4261);
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

    background-image: linear-gradient(45deg, #f3a578, #af4261, var(--theme3));
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
    background-image: linear-gradient(45deg, #f3a578, #af4261);
}

div#app {
    background: var(--grey_1);
}
</style>