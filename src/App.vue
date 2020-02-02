<template>
  <div id="app">
    <main class="main">
      <div class="container">
          <div class="row">
            <div class="wrap">
                <switch-chat-component/>
                <chat-box-component/>
            </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script>
import ChatBoxComponent from './components/ChatBoxComponent.vue';
import SwitchChatComponent from './components/SwitchChatComponent.vue';


export default {
  name: 'app',
  components: {
    ChatBoxComponent,
    SwitchChatComponent,
  },
};
</script>

<style style="css">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');

/*start style grid*/
.container {
    min-width: 1248px;
    width: 1248px;
    margin-right: auto;
    margin-left: auto;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.no-gutters {
    margin-right: 0;
    margin-left: 0;
}

.no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 8px;
    padding-left: 8px;
}

.col-1 {
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
}

.col-2 {
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}

.col-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}

.col-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
}

.col-5 {
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
}

.col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.col-7 {
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
}

.col-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
}

.col-9 {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
}

.col-10 {
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
}

.col-11 {
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
}

.col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}

.offset-1 {
    margin-left: 8.333333%;
}

.offset-2 {
    margin-left: 16.666667%;
}

.offset-3 {
    margin-left: 25%;
}

.offset-4 {
    margin-left: 33.333333%;
}

.offset-5 {
    margin-left: 41.666667%;
}

.offset-6 {
    margin-left: 50%;
}

.offset-7 {
    margin-left: 58.333333%;
}

.offset-8 {
    margin-left: 66.666667%;
}

.offset-9 {
    margin-left: 75%;
}

.offset-10 {
    margin-left: 83.333333%;
}

.offset-11 {
    margin-left: 91.666667%;
}

/*end style grid*/

/*start main style*/

body {
    width: 100%;
    min-width: 1248px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background-color: #262626;
}

.main {
    padding-top: 16px;
    padding-bottom: 16px;
    min-height: 738px;
    background-color: #011428;
}

.main-menu ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    height: 62px;
}

.main-menu ul a {
    display: inline-block;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    color: #595959;
    padding: 24px 24px;
    text-decoration: none;
    transition: .1s all linear;
}

.main-menu ul a:hover,
.main-menu ul a:focus,
.main-menu ul a:active {
    background-color: #FAFAFA;
    transition: .1s all linear;
    color: #000;
}

.main-menu ul a.active {
    background-color: #F5F5F5;
    color: #F77705;
    transition: .1s all linear;
}

.wrap {
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: row;
    align-items: stretch;
}

.header-right-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.user {
    position: relative;
}

.user-menu {
    width: 289px;
    position: absolute;
    right: 0px;
    top: calc(100% + 8px);
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    z-index: 100;
    overflow: hidden;
    display: none;
}

.user-menu.visible {
    display: block;
}

.user-menu ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
}

.user-menu a {
    display: block;
    color: #333333;
    font-weight: 600;
    padding: 12px 12px 12px 16px;
    transition: .1s all linear;
}

.user-menu a.out {
    color: #F77705;
}

.user-menu a:hover {
    background-color: #F5F5F5;
    transition: .1s all linear;
    text-decoration: none;
}

.user-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 8px 11px 16px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    color: #595959;
    font-weight: 600;
}

.user-btn:hover,
.user-btn:focus,
.user-btn:active {
    outline: none;
}

.user-btn.active {
    background-color: #F5F5F5;
}

.user-foto {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 2px solid #F0FAFF;
    border-radius: 50px;
    margin-left: 8px;
}

.user-foto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/*end main style*/

/*start button*/
.main-btn {
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    font-weight: 600;
    line-height: normal;
    font-size: 14px;
    color: #595959;
    padding: 10px 16px 10px 16px;
    margin-right: 16px;
    transition: .2s all linear;
    cursor: pointer;
    height: 41px;
    vertical-align: middle;
    display: inline-block;
}

.main-btn:focus {
    outline: none;
}

.main-btn:hover {
    background: #595959;
    border: 1px solid #DDE5EB;
    transition: .2s all linear;
    color: #fff;
    text-decoration: none;
}

.main-btn span {
    white-space: nowrap;
}

.main-btn.delete {
    color: #F71705;
    transition: .2s all linear;
}

.main-btn.delete:hover {
    color: #fff;
    background-color: #F71705;
    transition: .2s all linear;
}

.main-btn.active {
    background-color: #595959;
    color: #fff;
    transition: .2s all linear;
}

.main-select {
    display: inline-block;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    font-weight: 600;
    line-height: normal;
    font-size: 14px;
    color: #595959;
    padding: 10px 16px 10px 16px;
    transition: .2s all linear;
    cursor: pointer;
    height: 41px;
    vertical-align: middle;
}

.main-btn.svg {
    color: #F77705;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 0px;
}

.main-btn.svg svg {
    fill: #F77705;
    margin-right: 12px;
    transition: .2s all linear;

}

.main-btn.svg:hover {
    color: #fff;
    background-color: #F77705;
    border: 1px solid #F77705;
}

.main-btn.svg:hover svg {
    fill: #fff;
    transition: .2s all linear;

}

.main-btn.svg.active svg {
    fill: #fff;
}

.main-btn.svg.active {
    color: #fff;
    background-color: #CE6100;
    border: 1px solid #CE6100;
}

.main-btn.svg.smile {
    padding-left: 8px;
    padding-right: 8px;
}

.main-btn.svg.smile svg {
    margin-right: 0px;
}

.main-btn.svg.smile:hover {
    background: #E8E8E8;
    border: 1px solid #DDE5EB;
    transition: .2s all linear;
}

.main-btn.svg.smile:active {
    background: #E8E8E8;
    border: 1px solid #DDE5EB;
    transition: .2s all linear;
}

.main-btn.orange {
    min-width: 132px;
    text-align: center;
    color: #fff;
    background: #F77705;
    border-color: #F77705;
    transition: .2s all linear;
}

.main-btn.orange:hover {
    background: #DA6A05;
    border-color: #DA6A05;
    transition: .2s all linear;
}

.main-btn.orange.active {
    background: #CE6100;
    border-color: #CE6100;
    transition: .2s all linear;
}

.main-btn.success {
    background: #04C01B;
    border-color: #04C01B;
    color: #fff;
    transition: .2s all linear;
}

.main-btn.success:hover {
    background: #03A517;
    border-color: #03A517;
    transition: .2s all linear;
}

.main-btn.success.active {
    background: #03A517;
    border-color: #03A517;
    transition: .2s all linear;
}

.main-btn.validated {
    color: #04C01B;
}

.main-btn.validated:hover {
    background: #04C01B;
    border: 1px solid #D9D9D9;
    transition: .2s all linear;
}

.main-btn.big {
    flex-direction: column;
    justify-content: center;
    height: 64px;
    width: 192px;
}

.main-btn.big svg {
    margin-right: 0px;
    margin-bottom: 8px;
}

/*end button*/

/*start sidebar*/
.sidebar-item {
    margin-bottom: 16px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.24);
    padding: 16px 16px;
    background-color: #ffffff;
}

.sidebar-item.statistics {
    padding: 16px 0px;
}

.sidebar-title {
    margin-bottom: 16px;
    font-weight: 600;
    line-height: normal;
    font-size: 16px;
    text-transform: uppercase;
    color: #000;
}

.statistics .sidebar-title {
    padding-left: 16px;
    padding-right: 16px;
}

.sidebar-statistics a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #595959;
    font-size: 14px;
    text-decoration: none;
    padding: 9px 16px;
    transition: .3s all linear;
}

.sidebar-statistics a:hover {
    background-color: #F5F5F5;
    transition: .3s all linear;
}

.sidebar-statistics a.active {
    background-color: #F5F5F5;
    color: #F77705;
}

.sidebar-statistics a:last-child {
    margin-bottom: 0px;
}

.sidebar-statistics a span {
    display: inline-block;
    font-size: 12px;
    line-height: 12px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background-color: #F77705;
    border-radius: 4px;
    padding: 2px 0px;
}

.sidebar-statistics a span.size-l {
    width: 30px;
}

.sidebar-statistics a span.size-m {
    width: 16px;
}

.sidebar-statistics a span.size-s {
    background-color: transparent;
    color: #F77705;
}

.sidebar-welcome-item {
    font-weight: 400;
    line-height: 23px;
    font-size: 14px;
    letter-spacing: 0.25px;
    color: #333333;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 20px;
    background-repeat: no-repeat;
    background-position: 0% 50%;
}

.sidebar-welcome-btn {
    margin-top: 30px;
}

.sidebar-welcome-btn .main-btn {
    width: 100%;
    margin-right: 0px;
}

.sidebar-item.online-now {
    margin-bottom: 16px;
    box-shadow: none;
    padding: 0px;
    background-color: transparent;
}

.sidebar-similar-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    margin-bottom: 32px;
}

.sidebar-similar-item:hover {
    text-decoration: none;
}

.sidebar-similar-item:last-child {
    margin-bottom: 0px;
}

.sidebar-similar-foto {
    width: 72px;
    height: 72px;
    margin-right: 16px;
    min-width: 72px;
    position: relative;
}

.sidebar-similar-foto.offline:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    right: 0px;
    background: #95A0AB;
    width: 8px;
    height: 8px;
    border-radius: 30px;
}

.sidebar-similar-foto.online:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    right: 0px;
    background: #04C01B;
    width: 8px;
    height: 8px;
    border-radius: 30px;
}

.sidebar-similar-foto > div {
    width: 72px;
    height: 72px;
    border: 2px solid #E9F2F7;
    border-radius: 100px;
    overflow: hidden;
}

.sidebar-similar-foto > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sidebar-similar-name {
    font-weight: 600;
    line-height: 16px;
    font-size: 16px;
    color: #000000;
    margin-bottom: 8px;
}

.sidebar-similar-location {
    font-weight: normal;
    line-height: 14px;
    font-size: 14px;
    letter-spacing: 0.25px;
    color: #333333;
}

.online-now-item {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    height: 104px;
    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.24);
    transition: .2s all linear;
    cursor: pointer;
    overflow: hidden;
}

.online-now-item:hover {
    transition: .2s all linear;
    background: #F5F5F5;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
}

.online-now-foto {
    width: 88px;
    min-width: 88px;
    height: 104px;
    overflow: hidden;
    background-color: #D9D9D9;
}

.online-now-foto img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
}

.online-now-info {
    position: relative;
    padding: 16px;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.online-now-info .tag-marker {
    padding: 1px 10px;
    position: absolute;
    top: 8px;
    right: 8px;
}

.online-now-name {
    font-weight: bold;
    line-height: 16px;
    font-size: 16px;
    color: #262626;
}

.online-now-location {
    line-height: 14px;
    font-size: 14px;
    letter-spacing: 0.25px;
    color: #000000;
}

.online-now-file {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    letter-spacing: 0.25px;
    color: #000000;
    background-position: 0% 50%;
    background-repeat: no-repeat;
    padding-left: 25px;
}

.online-now-file:hover {
    color: #000000;
    text-decoration: none;
}

/*end sidebar*/

/*start input*/
.textarea-wrap textarea {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #DDE5EB;
    box-shadow: inset 0px 2px 8px #DDE5EB;
    border-radius: 4px;
    height: 362px;
    resize: none;
    padding: 16px;
    line-height: 26px;
    font-size: 16px;
    letter-spacing: 0.25px;
    display: block;
    font-weight: 400;
    color: #000000;
    transition: .3s all linear;
}

.textarea-wrap textarea::placeholder {
    color: #595959;
}

.textarea-wrap textarea:focus {
    outline: none;
    background: #F0FAFF;
    transition: .3s all linear;
}

.textarea-wrap.disabled textarea{
    background: #FAFAFA;
    border: 1px solid #DDE5EB;
    box-shadow: inset 0px 0px 0px #DDE5EB;
    color: #8C8C8C;
}

.textarea-wrap.disabled textarea::placeholder {
    color: #8C8C8C;
}

.main-input {
    background-color: #FFFFFF;
    border: 1px solid #DDE5EB;
    box-shadow: inset 0px 2px 8px #DDE5EB;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    height: 41px;
    padding: 0px 16px;
    color: #000000;
    transition: .3s all linear;
}

.main-input::placeholder {
    color: #8C8C8C;
}

.main-input:focus {
    outline: none;
    background-color: #F0FAFF;
    transition: .3s all linear;
    box-shadow: inset 0px 0px 0px #DDE5EB;
}

.main-input.disabled{
    background: #FAFAFA;
    border: 1px solid #DDE5EB;
    box-shadow: inset 0px 0px 0px #DDE5EB;
    color: #8C8C8C;
}

.main-input.disabled::placeholder {
    color: #8C8C8C;
}

.textarea-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #262626;
    margin-top: 8px;
    line-height: 14px;
}
/*end input*/
</style>
