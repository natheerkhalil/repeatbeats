<template>
    <!-- HEADER -->
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="__po _flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text _sm-hide __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>
        <div v-if="!isAuthenticated" class="_flex _cc">

            <div style="font-size: 22.5px;" class="__txt-grey-10 _fd-ro _ai-ce">
                <router-link class="__hovun __hovun-grad __nun __txt-grey-10" to="/login">Login</router-link>
                <span class="_sm-hide">&nbsp; // &nbsp;</span>
                <router-link class="_sm-hide __hovun __hovun-grad __nun __txt-grey-10"
                    to="/register">Register</router-link>
            </div>

        </div>
    </div>
    <!-- HEADER END -->


    <br><br><br><br><br><br><br>


    <!-- MUSIC PLAYER -->
    <div class="__b _flex _cc _fd-co">
        <div style="position: relative; background: linear-gradient(to left, var(--theme1), var(--theme1), var(--theme3), var(--theme2), var(--theme2))"
            class="__b __w _flex _cc _fd-co">
            <div class="overlay" style="z-index: 0"></div>


            <!-- PLAYBACK CUSTOMISATION -->
            <div style="margin-top: 10px; z-index: 1;" class="__b _flex _jc-ar _ai-ce">

                <!-- VOLUME -->
                <div class="_flex _fd-co _cc">
                    <svg class="__fi-grey-8 __po __hfi-grey-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                        viewBox="0 0 24 24">
                        <path
                            d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-14 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z" />
                    </svg>

                    <div class="__b _flex _jc-en">
                        <p class="__tsx __txt-grey-8">73</p>
                    </div>

                    <input style="width: 75px" type="range" min="1" max="100" value="50" class="slider">
                </div>

                <!-- LOOP -->
                <svg class="__fi-grey-8 __hfi-grey-6 __po" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                    viewBox="0 0 24 24">
                    <path
                        d="M18 13v5h-5l1.607-1.608c-3.404-2.824-5.642-8.392-9.179-8.392-2.113 0-3.479 1.578-3.479 4s1.365 4 3.479 4c1.664 0 2.86-1.068 4.015-2.392l1.244 1.561c-1.499 1.531-3.05 2.831-5.259 2.831-3.197 0-5.428-2.455-5.428-6s2.231-6 5.428-6c4.839 0 7.34 6.449 10.591 8.981l1.981-1.981zm.57-7c-2.211 0-3.762 1.301-5.261 2.833l1.244 1.561c1.156-1.325 2.352-2.394 4.017-2.394 2.114 0 3.48 1.578 3.48 4 0 1.819-.771 3.162-2.051 3.718v2.099c2.412-.623 4-2.829 4-5.816.001-3.546-2.231-6.001-5.429-6.001z" />
                </svg>

                <!-- SHUFFLE -->
                <svg style="margin-left: 17px;" class="__fi-warn-6 __hfi-grey-6 __po" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="30" viewBox="0 0 24 24">
                    <path
                        d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z" />
                </svg>

                <!-- SPEED -->
                <div class="_flex _fd-co _cc">
                    <svg class="__fi-grey-8 __po __hfi-grey-6" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                        viewBox="0 0 24 24">
                        <path
                            d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
                    </svg>

                    <div style="margin-top: 10px;" class="__b _flex _jc-en">
                        <p class="__tsx __txt-grey-8">1.1x</p>
                    </div>

                    <input style="width: 75px" type="range" min="1" max="100" value="50" class="slider">
                </div>

            </div>


            <div class="__b _flex _cc __txt-grey-10 __padsm _fd-co" style="z-index: 1">

                <div class="__b _flex _cc">
                    <div class="_flex _cc _fd-ro">
                        <!-- PREVIOUS SONG -->
                        <div class="_flex _cc" style="margin-right: 35px;">
                            <svg class="__hfi-grey-6 __po __fi-grey-8" xmlns="http://www.w3.org/2000/svg" width="35"
                                height="35" viewBox="0 0 24 24">
                                <path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z" />
                            </svg>
                        </div>

                        <!-- PLAY / PAUSE -->
                        <div class="_flex _cc">
                            <svg class="__po __hfi-grey-8 __fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="50"
                                height="50" viewBox="0 0 24 24">
                                <path d="M3 22v-20l18 10-18 10z" />
                            </svg>
                        </div>

                        <!-- NEXT SONG -->
                        <svg class="__hfi-grey-6 __po __fi-grey-8" style="margin-left: 35px;"
                            xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                            <path d="M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z" />
                        </svg>
                    </div>
                </div>

            </div>

            <div style="z-index: 1; margin-top: -10px; padding-right: 5px;" class="__b _flex _jc-be _ai-ce">
                <div class="_cc __padxs _fd-ro _flex">
                    <!-- TOGGLE CONFIG -->
                    <svg @click="toggle('config')" xmlns="http://www.w3.org/2000/svg"
                        class="__po __fi-grey-8 __hfi-grey-6" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M17 10.645v-2.29c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.373-1.017-1.116-1.431-2.28h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333zm-4 3.071v-.808c-.412-.147-.673-.188-.805-.505s.024-.533.212-.927l-.572-.571c-.389.186-.607.344-.926.212s-.359-.394-.506-.805h-.807c-.146.409-.188.673-.506.805-.317.132-.533-.024-.926-.212l-.572.571c.187.393.344.609.212.927-.132.318-.396.359-.805.505v.808c.408.145.673.188.805.505.133.32-.028.542-.212.927l.572.571c.39-.186.608-.344.926-.212.318.132.359.395.506.805h.807c.146-.409.188-.673.507-.805h.001c.315-.131.529.025.924.213l.572-.571c-.186-.391-.344-.609-.212-.927s.397-.361.805-.506zm-3 .596c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1z" />
                    </svg>

                    <!-- TOGGLE INFO -->
                    <svg @click="toggle('info')" style="margin-left: 10px;" xmlns="http://www.w3.org/2000/svg"
                        class="__po __fi-grey-8 __hfi-grey-6" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
                            fill-rule="nonzero" />
                    </svg>
                </div>
                <div class="_flex _cc __padxs">
                    <p class="__txs __txt-grey-10"><strong>27s</strong> / 106s</p>
                </div>
            </div>

            <!-- PROGRESS BAR -->
            <div style="z-index: 1;" class="__b _flex _cc">
                <div style="position: relative; height: 10px; background: grey;" class="__b _flex">
                    <!-- ELAPSED TIME -->
                    <div class="__hack" style="background: var(--theme3); width: 20%;"></div>

                    <!-- ELAPSED TIME CIRCLE -->
                    <div
                        style="z-index: 3; height: 15px; width: 15px; position: absolute; background: var(--theme3); left: calc(20% - 5px); bottom: -2px; border-radius: 50%;">
                    </div>

                    <div class="__hack"
                        style="z-index: 2; position: absolute; background: var(--err_5); right: 30%; width: 50%;"></div>

                </div>
            </div>

            <!-- SONG INFO -->
            <div v-if="show == 'info'" style="position: relative; margin-top: 10px;"
                class="__b __w _flex _fd-co _ai-ce">

                <div class="__b _flex _ai-ce _jc-ar _fd-ro _fw-wr">

                    <!-- CURRENTLY PLAYING -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path
                                d="M5 15h-4v8h4v-8zm0-4h-4v2h4v-2zm6-6h-4v18h4v-18zm0-4h-4v2h4v-2zm6 10h-4v12h4v-12zm0-4h-4v2h4v-2zm6 12h-4v4h4v-4zm0-4h-4v2h4v-2z" />
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Currently Playing:&nbsp;<span class="__txt-warn-6">Song</span> by <span
                                class="__txt-warn-6">Artist</span></p>
                    </div>

                    <!-- START & END -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path
                                d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                        </svg>&nbsp;&nbsp;
                        <p class="__txt-grey-10">Start & End: &nbsp;<span class="__txt-warn-6">10s</span> - <span
                                class="__txt-warn-6">120s</span></p>
                    </div>

                    <!-- QUALITY -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 24 24">
                            <path
                                d="M19.803 13.207l-.829 1.093-1.554-3.826c-.077-.189-.244-.306-.437-.306-.157 0-.356.084-.444.321l-1.356 3.664-1.872-8.759c-.062-.291-.288-.394-.462-.394-.203 0-.428.131-.473.424l-1.629 10.581-1.658-6.968c-.067-.282-.291-.382-.463-.382-.167 0-.374.092-.453.349l-1.453 4.753-1.07-2.53c-.078-.185-.245-.299-.436-.299-.154 0-.294.076-.385.209l-1.257 1.805-.087.058h-2.985c-.276 0-.5.224-.5.5s.224.5.5.5h3.284c.152 0 .296-.074.386-.206l.948-1.353 1.24 2.929c.079.187.241.299.433.299.211 0 .39-.138.455-.35l1.324-4.332 1.814 7.629c.068.283.282.384.46.384.203 0 .428-.131.473-.425l1.605-10.425 1.673 7.83c.058.272.277.395.467.395.202 0 .366-.12.441-.321l1.5-4.049 1.426 3.51c.077.189.245.306.438.306.152 0 .292-.075.382-.206l1.146-1.583.087-.046h3.026c.272 0 .492-.22.492-.492s-.22-.494-.492-.494h-3.322c-.151 0-.294.077-.383.207z" />
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Quality: &nbsp;<span class="__txt-warn-6">340p</span></p>
                    </div>

                    <!-- SONG SOURCE -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm3 6.272l-5 1.305v3.741c-1.083-.213-2 .608-2 1.51 0 .777.607 1.172 1.268 1.172.783 0 1.732-.556 1.732-1.688v-2.962l3-.894v2.135c-1.082-.213-1.909.605-1.909 1.506 0 .779.623 1.175 1.28 1.175.777 0 1.626-.555 1.629-1.687v-5.313z" />
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Source: &nbsp;<span class="__txt-warn-6">YouTube</span></p>
                    </div>

                    <!-- LYRICS MODE -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path
                                d="M2.5 19.245l.816 1.506 1.684.31-1.18 1.241.225 1.698-1.545-.739-1.545.739.225-1.698-1.18-1.241 1.684-.31.816-1.506zm19.293-3.851l-.917-.326-1.946 5.471c-1.44-.856-3.521-.263-3.98 1.028-.386 1.085.276 1.953 1.211 2.286 1.11.395 2.609.035 3.183-1.574l1.471-4.135c1.42 1.766 1.881 1.979 1.617 3.305.684-.622 1.002-1.098 1.204-1.664.615-1.729-2.338-3-1.843-4.391zm-7.61-12.343l-8.13 5.493 2.849 7.266c-1.789.323-2.981 2.243-2.438 3.627.467 1.191 1.635 1.43 2.646 1.033 1.201-.47 2.18-1.837 1.502-3.571l-2.381-6.074 6.149-3.992 1.885 4.806c-1.786.323-2.98 2.238-2.439 3.618.468 1.195 1.662 1.427 2.668 1.032 1.192-.467 2.16-1.828 1.483-3.562l-3.794-9.676zm-11.683 8.005l-2.5 2.5 2.5 2.5 2.5-2.5-2.5-2.5zm18.346-8.056l1.029 1.9 2.125.392-1.489 1.566.284 2.142-1.949-.932-1.95.932.284-2.142-1.489-1.566 2.125-.392 1.03-1.9zm-12.193-2.381l-.863-.619-3.284 4.575c-1.059-1.622-3.104-2.051-4.158-.582-.651.907-.341 2.187.538 2.818 1.046.751 2.666.91 3.634-.435l4.133-5.757z" />
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Lyrics: &nbsp;<span class="__txt-warn-6">Off</span></p>
                    </div>
                </div>

                <div style="opacity: 0.3;" class="overlay">
                </div>
            </div>

            <!-- EDIT SONG -->
            <div v-if="modals.edit" class="_flex _cc"
                style="z-index: 11; position: fixed; right: 0; top: 0; height: 100vh; width: 100vw; background: rgba(0,0,0,0.3);">
                <div class="__flex __bdxs __b __13 __w __bg-grey-10">
                    <div class="__b _flex __padsm _cc _fd-co">
                        <div class="__b _flex _fd-ro _jc-be _ai-ce">
                            <div class="_flex _cc _fd-ro">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path
                                        d="M23.269 19.743l-11.945-11.945c-.557-.557-.842-1.33-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.376-1.537-3.723-1.537-.507 0-1.015.072-1.505.216l3.17 3.17c.344 1.589-1.959 3.918-3.567 3.567l-3.169-3.17c-.145.492-.218 1-.218 1.509 0 1.347.51 2.691 1.538 3.721 1.135 1.136 2.66 1.645 4.146 1.53.783-.06 1.557.226 2.113.783l11.946 11.944c.468.468 1.102.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.731-1.763zm-1.769 2.757c-.553 0-1-.448-1-1s.447-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm-7.935-15.289l5.327-5.318c.584-.585 1.348-.878 2.113-.878.764 0 1.529.292 2.113.878.589.587.882 1.357.882 2.125 0 .764-.291 1.528-.873 2.11l-5.326 5.318-4.236-4.235zm-3.53 9.18l-5.227 5.185c-.227.23-.423.488-.574.774l-.301.58-2.1 1.07-.833-.834 1.025-2.146.58-.302c.286-.15.561-.329.79-.558l5.227-5.185 1.413 1.416z" />
                                </svg>
                                <p style="margin-left: 15px;" class="__tmd">edit song</p>
                            </div>
                            <svg @click="toggleModal('edit')" width="24" height="24" clip-rule="evenodd"
                                fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                            </svg>
                        </div>
                        <hr class="__b __hr __bg-grey-6">

                        <br>

                        <div class="__b _flex _fd-co _cc">
                            <div class="__b _flex _jc-en">
                                <p class="__txt-3 __un">start & end time</p>
                            </div>
                            <!-- EDIT START & END TIME-->
                            <div style="margin-top: 7px;" class="__b _flex _cc _fd-ro">
                                <div class="_flex _cc __b _fd-co">
                                    <div class="__b _flex _jc-st">
                                        <p class="__txt-grey-4" style="font-size: 15px">start: <strong>10.4s</strong>
                                        </p>
                                    </div>
                                    <input style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;"
                                        type="range" min="1" max="100" value="50" class="slider __b">
                                </div>
                                <div class="_flex _cc __b _fd-co">
                                    <div class="__b _flex _jc-en">
                                        <p class="__txt-grey-4" style="font-size: 15px">end: <strong>67.3s</strong></p>
                                    </div>
                                    <input style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;"
                                        type="range" min="1" max="100" value="50" class="slider __b">
                                </div>
                            </div>
                        </div>

                        <br>

                        <hr class="__hr __b __bg-grey-9" style="opacity: 0.5">

                        <br>

                        <div class="__b _flex _fd-co _cc">
                            <div class="__b _flex _jc-en">
                                <p class="__txt-warn-5 __un">loop song section [optional]</p>
                            </div>
                            <!-- LOOP SECTION -->
                            <div class="__b _flex _cc _fd-ro">
                                <div class="_flex _cc __b _fd-co">
                                    <div class="__b _flex _jc-st">
                                        <p class="__txt-grey-4" style="font-size: 15px">loop song:
                                            <strong>10.4s</strong> &rarr; <strong>67.3s</strong>
                                        </p>
                                    </div>
                                    <input style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;"
                                        type="range" min="1" max="100" value="50" class="slider slider-2 __b">
                                </div>
                                <div class="_flex _cc __b _fd-co">
                                    <div class="__b _flex _jc-en">
                                        <p class="__no-sel __txt-grey-10" style="font-size: 15px">loop song:
                                            <strong>10.4s</strong> &rarr; <strong>67.3s</strong>
                                        </p>
                                    </div>
                                    <input style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;"
                                        type="range" min="1" max="100" value="50" class="slider slider-2 __b">
                                </div>
                            </div>
                        </div>

                        <br>

                        <hr class="__hr __b __bg-grey-9" style="opacity: 0.5">

                        <br>

                        <div class="__b _flex _fd-co _cc">
                            <!-- SKIP SECTION -->
                            <div class="__b _flex _jc-be _ai-ce">
                                <div class="_flex _cc">
                                    <svg width="24" height="24" clip-rule="evenodd" fill-rule="evenodd"
                                        stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                            fill-rule="nonzero" />
                                    </svg> &nbsp;&nbsp;
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                        clip-rule="evenodd">
                                        <path
                                            d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z" />
                                    </svg>
                                </div>
                                <p class="__txt-1 __un">manage skips</p>
                            </div>
                            <div style="margin-top: 7px;" class="__b _flex _cc _fd-ro">
                                <div class="_flex _cc __b _fd-co">
                                    <div class="__b _flex _jc-st">
                                        <p class="__txt-grey-4" style="font-size: 15px">duration: <strong>35s</strong>
                                            &rarr; <strong>45s</strong></p>
                                    </div>
                                    <input style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;"
                                        type="range" min="1" max="100" value="50" class="slider slider-3 __b">
                                </div>
                                <div class="_flex _cc __b _fd-co">
                                    <div class="__b _flex _jc-en">
                                        <p class="__no-sel __txt-grey-10" style="font-size: 15px">end:
                                            <strong>67.3s</strong>
                                        </p>
                                    </div>
                                    <input style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;"
                                        type="range" min="1" max="100" value="50" class="slider slider-3 __b">
                                </div>
                            </div>
                        </div>

                        <br>

                        <hr class="__hr __b __bg-grey-9" style="opacity: 0.5">

                        <br>

                        <div class="__b _flex _jc-en _ai-ce">
                            <div class="__padxs __po __hv-grey-8 __hv __tsx __bo-grey-8 __bod">confirm</div> &nbsp;
                            &nbsp;
                            <div class="__padxs __po __hv-grey-8 __hv __tsx __bo-grey-8 __bod">preview</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SONG SETTINGS -->
            <div v-if="show == 'config'" style="position: relative; margin-top: 10px;"
                class="__b __w _flex _fd-co _ai-ce">

                <div class="__b _flex _ai-ce _jc-ar _fd-ro _fw-wr">

                    <!-- FAVOURITE -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path
                                d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033-2.361 4.792-5.246.719 3.848 3.643-.948 5.255 4.707-2.505 4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z"
                                fill-rule="nonzero"></path>
                        </svg>&nbsp;&nbsp;
                        <p class="__txt-grey-10">Add to Favs</p>
                    </div>

                    <!-- EDIT -->
                    <div @click="toggleModal('edit')" style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 24 24">
                            <path
                                d="M23.269 19.743l-11.945-11.945c-.557-.557-.842-1.33-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.376-1.537-3.723-1.537-.507 0-1.015.072-1.505.216l3.17 3.17c.344 1.589-1.959 3.918-3.567 3.567l-3.169-3.17c-.145.492-.218 1-.218 1.509 0 1.347.51 2.691 1.538 3.721 1.135 1.136 2.66 1.645 4.146 1.53.783-.06 1.557.226 2.113.783l11.946 11.944c.468.468 1.102.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.731-1.763zm-1.769 2.757c-.553 0-1-.448-1-1s.447-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm-7.935-15.289l5.327-5.318c.584-.585 1.348-.878 2.113-.878.764 0 1.529.292 2.113.878.589.587.882 1.357.882 2.125 0 .764-.291 1.528-.873 2.11l-5.326 5.318-4.236-4.235zm-3.53 9.18l-5.227 5.185c-.227.23-.423.488-.574.774l-.301.58-2.1 1.07-.833-.834 1.025-2.146.58-.302c.286-.15.561-.329.79-.558l5.227-5.185 1.413 1.416z" />
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Edit Song</p>
                    </div>

                    <!-- PLAYLIST -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 24 24">
                            <path data-v-fb6afb46=""
                                d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.5 4v-1.5c0-.265-.235-.5-.5-.5s-.5.235-.5.5v1.5h-1.5c-.265 0-.5.235-.5.5s.235.5.5.5h1.5v1.5c0 .265.235.5.5.5s.5-.235.5-.5c0-.592 0-1.5 0-1.5h1.5c.265 0 .5-.235.5-.5s-.235-.5-.5-.5c-.592 0-1.5 0-1.5 0zm-6.479 1c.043.522.153 1.025.321 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm1.106-4c-.328.456-.594.96-.785 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm7.373-3.25c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
                                fill-rule="nonzero"></path>
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Add / Remove from Playlist</p>
                    </div>

                    <!-- DOWNLOAD -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path
                                d="m6.864 3.424c.502-.301 1.136.063 1.136.642 0 .264-.138.509-.365.644-2.476 1.486-4.135 4.197-4.135 7.292 0 4.691 3.808 8.498 8.498 8.498s8.497-3.807 8.497-8.498c0-3.093-1.656-5.803-4.131-7.289-.225-.136-.364-.38-.364-.644 0-.582.635-.943 1.137-.642 2.91 1.748 4.858 4.936 4.858 8.575 0 5.519-4.479 9.998-9.997 9.998s-9.998-4.479-9.998-9.998c0-3.641 1.951-6.83 4.864-8.578zm.831 8.582s2.025 2.021 3.779 3.774c.147.147.339.22.53.22.192 0 .384-.073.531-.22 1.753-1.752 3.779-3.775 3.779-3.775.145-.145.217-.336.217-.526 0-.192-.074-.384-.221-.531-.292-.293-.766-.294-1.056-.004l-2.5 2.499v-10.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v10.693l-2.498-2.498c-.289-.289-.762-.286-1.054.006-.147.147-.221.339-.222.531 0 .19.071.38.215.524z"
                                fill-rule="nonzero" />
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Download Song</p>
                    </div>

                    <!-- METADATA -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path
                                d="M14.812 20.171c-.791.523-1.738.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.019-.306 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-9.083-1.171c-3.528 0-5.729-2.65-5.729-5.5 0-2.702 1.952-4.945 4.521-5.408.212-3.951 3.474-7.092 7.479-7.092 4.006 0 7.267 3.141 7.479 7.092 2.57.463 4.521 2.706 4.521 5.408 0 2.881-2.261 5.5-5.62 5.5.433-.909.675-1.927.675-3 0-3.863-3.137-7-7-7-3.864 0-7 3.137-7 7 0 1.073.242 2.091.674 3m6.326-6c1.655 0 3 1.345 3 3s-1.345 3-3 3c-1.656 0-3-1.345-3-3s1.344-3 3-3" />
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Track Details</p>
                    </div>

                    <!-- CHANGE THEME -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.262 18.324l-1.42 1.42c-1.77-2.09-2.842-4.79-2.842-7.744s1.072-5.654 2.841-7.745l1.42 1.42c-1.411 1.725-2.261 3.928-2.261 6.325s.85 4.6 2.262 6.324zm17.738-6.324c0 2.397-.85 4.6-2.262 6.324l1.42 1.42c1.77-2.09 2.842-4.79 2.842-7.744s-1.072-5.654-2.842-7.745l-1.42 1.42c1.412 1.725 2.262 3.928 2.262 6.325zm-16.324-7.738c1.724-1.412 3.927-2.262 6.324-2.262s4.6.85 6.324 2.262l1.42-1.42c-2.091-1.77-4.791-2.842-7.744-2.842-2.954 0-5.654 1.072-7.744 2.842l1.42 1.42zm12.648 15.476c-1.724 1.412-3.927 2.262-6.324 2.262s-4.6-.85-6.324-2.262l-1.42 1.42c2.09 1.77 4.79 2.842 7.744 2.842 2.953 0 5.653-1.072 7.744-2.842l-1.42-1.42z" />
                        </svg> &nbsp;&nbsp;
                        <p class="__txt-grey-10">Change Player Theme</p>
                    </div>

                    <!-- SHARE -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg class="__fi-grey-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path
                                d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z">
                            </path>
                        </svg>&nbsp;&nbsp;
                        <p class="__txt-grey-10">Share</p>
                    </div>

                    <!-- DELETE SONG -->
                    <div style="z-index: 1;" class="__padsm _flex _ai-ce">
                        <svg style="fill: #CD5C5C" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path data-v-fb6afb46=""
                                d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                                fill-rule="nonzero"></path>
                        </svg> &nbsp;&nbsp;
                        <p style="color: #CD5C5C;">Delete Song</p>
                    </div>
                </div>

                <div style="opacity: 0.3;" class="overlay">
                </div>
            </div>
        </div>
    </div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br>

    <div class="__b _flex _cc _fd-co">
        <h1 class="__txl __b __tal">404 - Page Not Found</h1>
        <br>
        <div class="__12 __w _flex _cc">
            <svg width="375" height="375" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
                    fill-rule="nonzero" />
            </svg>
        </div>
        <br>
        <div class="__12 __w _flex _cc">
            <p class="__mauto __tmd __txt-grey-1 __po __padsm __padsm __un" @click="goHome">Go Home</p>
        </div>
    </div>
</template>

<style>
.slider {
    -webkit-appearance: none;
    appearance: none;
    height: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
    opacity: 1;
    /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    width: 15px;
    /* Set a specific slider handle width */
    height: 15px;
    border-radius: 50%;
    /* Slider handle height */
    background: var(--theme3);
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
}

.slider::-moz-range-thumb {
    width: 5px;
    /* Set a specific slider handle width */
    height: 5px;
    /* Slider handle height */
    background: var(--theme3);
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
}

.slider-2::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    width: 15px;
    /* Set a specific slider handle width */
    height: 15px;
    border-radius: 50%;
    /* Slider handle height */
    background: var(--theme2);
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
}

.slider-2::-moz-range-thumb {
    width: 5px;
    /* Set a specific slider handle width */
    height: 5px;
    /* Slider handle height */
    background: var(--theme2);
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
}

.slider-3::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    width: 15px;
    /* Set a specific slider handle width */
    height: 15px;
    border-radius: 50%;
    /* Slider handle height */
    background: var(--theme1);
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
}

.slider-3::-moz-range-thumb {
    width: 5px;
    /* Set a specific slider handle width */
    height: 5px;
    /* Slider handle height */
    background: var(--theme1);
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
}
</style>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
    data() {
        return {
            isAuthenticated: false,

            show: '',

            modals: {
                edit: true
            }
        }
    },

    created() {
        this.isAuthenticated = useAuthStore().isAuthenticated;
    },

    methods: {
        toggle(d) {
            if (this.show === d) { this.show = ''; return; }
            this.show = d;
        },

        toggleModal(d) {
            this.modals[d] = !this.modals[d];
        },

        goHome() {
            this.$router.push('/')
        }
    },
}
</script>

<!--

<div class="_hide _flex _fd-co _cc">
                        <!-- VOLUME
                        <svg class="__fi-grey-10 __po __hfi-grey-8" xmlns="http://www.w3.org/2000/svg" width="40"
                            height="40" viewBox="0 0 24 24">
                            <path
                                d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-14 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z" />
                        </svg>

                        <input style="width: 75px" type="range" min="1" max="100" value="50" class="slider">

                        <br>

                        <!-- SPEED
                        <div class="_flex _fd-co _cc">
                            <svg class="__fi-grey-10 __po __hfi-grey-8" xmlns="http://www.w3.org/2000/svg" width="35"
                                height="35" viewBox="0 0 24 24">
                                <path
                                    d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
                            </svg>

                            <input style="margin-top: 10px; width: 75px" type="range" min="0.1" max="3" step="0.1"
                                value="1" class="slider">
                        </div>
                    </div>
                    <!-- LOOP SONG + SONG SETTINGS
                    <div class="_hide _flex _cc _fd-co" style="margin-right: 35px;">
                        <div class="_flex _cc _fd-ro">
                            <svg class="__fi-grey-10 __hfi-grey-8 __po" xmlns="http://www.w3.org/2000/svg" width="35"
                                height="35" viewBox="0 0 24 24">
                                <path
                                    d="M18 13v5h-5l1.607-1.608c-3.404-2.824-5.642-8.392-9.179-8.392-2.113 0-3.479 1.578-3.479 4s1.365 4 3.479 4c1.664 0 2.86-1.068 4.015-2.392l1.244 1.561c-1.499 1.531-3.05 2.831-5.259 2.831-3.197 0-5.428-2.455-5.428-6s2.231-6 5.428-6c4.839 0 7.34 6.449 10.591 8.981l1.981-1.981zm.57-7c-2.211 0-3.762 1.301-5.261 2.833l1.244 1.561c1.156-1.325 2.352-2.394 4.017-2.394 2.114 0 3.48 1.578 3.48 4 0 1.819-.771 3.162-2.051 3.718v2.099c2.412-.623 4-2.829 4-5.816.001-3.546-2.231-6.001-5.429-6.001z" />
                            </svg>

                            <svg style="margin-left: 17px;" class="__fi-grey-10 __hfi-grey-8 __po"
                                xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path
                                    d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z" />
                            </svg>
                        </div>

                        <br>

                        <div class="_flex _fd-ro _cc">
                            <svg style="margin-right: 17px;" class="__fi-grey-10 __hfi-grey-8 __po"
                                xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                <path
                                    d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
                                    fill-rule="nonzero" />
                            </svg> <svg class="__fi-grey-10 __hfi-grey-8 __po" xmlns="http://www.w3.org/2000/svg"
                                width="30" height="30" viewBox="0 0 24 24">
                                <path
                                    d="M23.269 19.743l-11.945-11.945c-.557-.557-.842-1.33-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.376-1.537-3.723-1.537-.507 0-1.015.072-1.505.216l3.17 3.17c.344 1.589-1.959 3.918-3.567 3.567l-3.169-3.17c-.145.492-.218 1-.218 1.509 0 1.347.51 2.691 1.538 3.721 1.135 1.136 2.66 1.645 4.146 1.53.783-.06 1.557.226 2.113.783l11.946 11.944c.468.468 1.102.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.731-1.763zm-1.769 2.757c-.553 0-1-.448-1-1s.447-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm-7.935-15.289l5.327-5.318c.584-.585 1.348-.878 2.113-.878.764 0 1.529.292 2.113.878.589.587.882 1.357.882 2.125 0 .764-.291 1.528-.873 2.11l-5.326 5.318-4.236-4.235zm-3.53 9.18l-5.227 5.185c-.227.23-.423.488-.574.774l-.301.58-2.1 1.07-.833-.834 1.025-2.146.58-.302c.286-.15.561-.329.79-.558l5.227-5.185 1.413 1.416z" />
                            </svg>
                        </div>
                    </div>

-->