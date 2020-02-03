<template>
  <div class="chat-block">
    <div class="blocked-wrap">
      <div style="position: relative">
        <div class="chat">
         <chat-list :list-arr="SelectedBotMessageArray"/>
        </div>
        <form @submit.prevent="sendMessage" action="#" @keyup.enter="sendMessage">
          <div class="chat-form">
            <div class="textarea-wrap">
              <textarea placeholder="Text" v-model.trim="message"></textarea>
            </div>
            <div class="textarea-count-wrap">
              <div class="checkbox-wrap">
                <button class="chat-button" type="submit">Press Enter to sent</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ChatList from './ChatList.vue';
import { eventBus } from '../main';

export default {
  name: 'chatBoxComponent',
  components: {
    ChatList,
  },
  props: ['selectedBot'],
  data() {
    return {
      message: '',
      CommonMessageArray: [],
      SelectedBotMessageArray: [],
      nameOfBot: 'Jimmy',
    };
  },
  methods: {
    connectToServer() {
      this.socket = new WebSocket('ws://localhost:3000');
      this.socket.onopen = () => {};
    },
    responseMessage() {
      this.socket.onmessage = ({ data }) => {
        this.CommonMessageArray.push({ name: this.nameOfBot, type: '', data });
        this.checkArraysOfMessage(this.CommonMessageArray, this.nameOfBot);
      };
    },
    sendMessage() {
      if (this.message !== '') {
        const sendMessage = { name: this.nameOfBot, message: this.message };
        this.socket.send(JSON.stringify(sendMessage));
        this.CommonMessageArray.push({ name: this.nameOfBot, type: 'user-message', data: this.message });
        this.message = '';
        this.checkArraysOfMessage(this.CommonMessageArray, this.nameOfBot);
      }
    },
    checkArraysOfMessage(commonArr, name) {
      const chooseArr = commonArr.find(el => el.name === name);
      if (chooseArr === undefined) {
        this.SelectedBotMessageArray = [...this.commonArr];
      } else {
        this.SelectedBotMessageArray = commonArr.filter(el => el.name === name);
      }
    },
  },
  watch: {
    nameOfBot(nameBot) {
      this.SelectedBotMessageArray = [];
      if (this.CommonMessageArray.find(el => el.name === nameBot) !== undefined) {
        this.SelectedBotMessageArray = this.CommonMessageArray.filter(el => el.name === nameBot);
      }
    },
  },
  mounted() {
    this.connectToServer();
    this.responseMessage();
    eventBus.$on('selectedBot', (data) => {
      this.nameOfBot = data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style='css' scoped>
.chat-wrap {
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: row;
  /*height: 1055px;*/
  align-items: stretch;
}

.contacts-wrap {
  width: 240px;
  min-width: 240px;
  overflow: hidden;
}

.chat-block {
  flex-grow: 1;
  min-width: 680px;
  max-width: 680px;
}

.contacts-search {
  padding: 16px 16px 15px 16px;
}

.contacts-search input {
  width: 100%;
  border: 1px solid #dde5eb;
  padding-left: 40px;
  background-image: url("https://i.onthe.io/shpzkl1petq0cmi2m.949e286a.png");
  background-repeat: no-repeat;
  background-position: 12px 50%;
}

.contact {
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 60px;
  position: relative;
  height: 982px;
}

.contact-user {
  padding: 16px 8px 16px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all linear;
}

.contact-user:hover {
  background-color: #f5f5f5;
  transition: 0.2s all linear;
}

.contact-user.active {
  background-color: #f5f5f5;
}

.contact-user-foto {
  width: 40px;
  height: 40px;
  min-width: 40px;
  margin-right: 8px;
  position: relative;
}

.contact-user-foto.online:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 6px;
  height: 6px;
  background-color: #04c01b;
  border-radius: 50px;
}

.contact-user-foto a {
  display: block;
  border: 2px solid #f0faff;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: #dde5eb;
  overflow: hidden;
}

.contact-user-foto a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact-user-info {
  flex-grow: 1;
}

.contact-user-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.contact-user-name {
  font-weight: 600;
  line-height: normal;
  font-size: 12px;
  color: #000000;
}

.contact-user-name:hover {
  text-decoration: none;
  color: #000000;
}

.contact-user-text {
  font-weight: 600;
  line-height: 21px;
  font-size: 12px;
  color: #8c8c8c;

  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-user-text.blocked {
  color: #ffab00;
}

.chat-this-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
}

.chat-this-foto {
  width: 56px;
  height: 56px;
  overflow: hidden;
  margin-right: 16px;
}

.chat-this-foto a {
  display: block;
  width: 56px;
  height: 56px;
  border: 2px solid #f0faff;
  border-radius: 100px;
  overflow: hidden;
  background: #d1d8de;
}

.chat-this-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chat-this-info-right {
  flex: 1 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.chat-this-user-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
}

.chat-this-user-name,
.chat-this-user-name:hover {
  font-weight: 600;
  line-height: 16px;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
  margin-right: 10px;
}

.chat-this-user-bot {
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  color: #8c8c8c;
}

.chat-this-user-foto,
.chat-this-user-foto:hover {
  display: inline-block;
  margin-left: 16px;
  color: #8c8c8c;
  text-decoration: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  vertical-align: bottom;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  padding-left: 25px;
}

.chat-this-user-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.chat-this-user-btn .main-btn {
  margin-right: 8px;
  font-size: 12px;
}

.chat-this-user-btn select {
  width: 80px;
}

.chat-form .textarea-wrap textarea {
  height: 163px;
}

.chat-form .textarea-wrap {
  margin-bottom: 16px;
}

.chat-form .checkbox-wrap label {
  font-weight: 400;
}

.chat-button {
    outline: none;
    border: none;
    color: #2b3038;
    cursor: pointer;
}

.textarea-count-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.chat-form-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 16px 16px;
  background: #fafafa;
}

.chat-form-btn .main-btn:last-child {
  margin-right: 0px;
}

.chat-cost-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 16px 16px 16px;
  background-color: #fafafa;
}

.chat-cost-wrap > div {
  display: flex;
  flex-direction: row;
}

.chat-cost {
  margin-right: 16px;
  line-height: 24px;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #8c8c8c;
}

.chat-cost:last-child {
  margin-right: 0px;
}

.chat-cost-title {
  font-weight: bold;
  line-height: 23px;
  font-size: 14px;
}

.blocked-wrap {
  position: relative;
}

.blocked .blocked-wrap:after {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.94);
}

.blocked-text {
  display: none;
}

.blocked .blocked-text {
  display: block;
  position: absolute;
  z-index: 2;
  left: 0px;
  right: 0px;
  text-align: center;
  top: 32px;
  font-weight: normal;
  line-height: 29px;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #333333;
}

.blocked-text-title {
  font-weight: 600;
  line-height: 40px;
  font-size: 24px;
  color: #000000;
  display: block;
  margin-bottom: 8px;
}

.chat-this-user-bot-blocked {
  display: none;
}

.blocked .chat-this-user-bot-blocked {
  display: block;
  line-height: 24px;
  font-size: 14px;
  color: #f77705;
}

.blocked .chat-this-user-local,
.blocked .chat-this-user-foto {
  display: none;
}

.blocked .chat-this-user-btn button,
.blocked .chat-this-user-btn select {
  display: none;
}

.chat-this-user-btn button.blocked-btn {
  display: none;
}

.blocked .chat-this-user-btn button.blocked-btn {
  display: block;
  min-width: 137px;
  margin-right: 0px;
}

.chat-form {
  padding: 22px 16px 16px 16px;
}

.chat {
  background: linear-gradient(0.08deg, #607d8b 0.09%, #90a4ae 99.95%);
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  max-width: 100%;
  height: 656px;
  padding: 36px 24px 24px 24px;
  position: relative;

  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  border-bottom: 2px solid #f2f2f2;
  border-top: 2px solid #f2f2f2;
}

.chat:after {
  content: "";
  display: block;
  height: 36px;
  width: 100%;
  min-height: 8px;
}

.chat-message {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: flex-end;
  margin-top: 24px;
  padding-right: 56px;
  flex-wrap: wrap;
}

.chat-message-time {
  width: 100%;
  margin-top: 8px;
  font-weight: 600;
  line-height: 24px;
  font-size: 12px;
  letter-spacing: 0.25px;
  color: #ffffff;
  padding-left: 56px;
}

.chat-message-foto {
  min-width: 40px;
  width: 40px;
  height: 40px;
  border: 2px solid #f0faff;
  border-radius: 100px;
  overflow: hidden;
  background-color: #dde5eb;
  margin-right: 16px;
}

.chat-message-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chat-message-text {
  max-width: 520px;
  width: calc(100% - 56px);
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16), 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  text-align: justify;
  letter-spacing: 0.25px;
  color: #000000;
  border-radius: 16px;
  border-bottom-left-radius: 0px;
}

.chat-message.user-message {
  justify-content: flex-start;
  flex-direction: row-reverse;
  padding-left: 56px;
  padding-right: 0px;
}

.user-message .chat-message-foto {
  margin-left: 16px;
  margin-right: 0px;
}

.user-message .chat-message-text {
  background: #2b3038;
  color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 0px;
  font-weight: 300;
}

.user-message .chat-message-time {
  padding-left: 0px;
  padding-right: 56px;
  text-align: right;
}

.chat-message-stickers {
  /*width: 72px;*/
  /*height: 72px;*/
  /*overflow: hidden;*/
}

.chat-message-stickers svg {
  /*width: 72px;*/
  /*height: 72px;*/
}

.chat-notice {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 32px;
  height: 32px;
  text-align: center;
  padding: 4px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: 0.3s all linear;
}

.chat-notice:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transition: 0.3s all linear;
}

.chat-notice-content {
  text-align: left;
  position: absolute;
  right: 0px;
  top: 100%;

  width: 500px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  font-weight: normal;
  line-height: 23px;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #262626;
  mix-blend-mode: normal;
  display: none;
}

.chat-notice:hover .chat-notice-content {
  display: block;
}

.chat-modal {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  background: #ffffff;
  border: 1px solid #fafafa;
  display: none;
}

.chat-modal.active {
  display: block;
}

.chat-modal-head {
  padding: 16px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.chat-modal-title {
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
}

.chat-modal-close {
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
}

.chat-modal-close:focus {
  outline: none;
}

.chat-modal-content {
  height: 236px;
  padding: 8px;
  overflow: auto;
}

.stickers-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -4px;
  margin-right: -4px;
  display: none;
}

.stickers-wrap.active {
  display: flex;
}

.stickers-wrap .stickers {
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  width: 104px;
  height: 104px;
  margin-right: 4px;
  margin-left: 4px;
  margin-bottom: 8px;
  overflow: hidden;
  cursor: pointer;
}

.stickers-wrap .stickers img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.smile-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -4px;
  margin-right: -4px;
  display: none;
}

.smile-wrap.active {
  display: flex;
}

.smile-wrap .smile {
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
  margin-right: 4px;
  margin-left: 4px;
}

.smile-wrap .smile img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.textarea-wrap textarea {
  width: 100%;
  background: #ffffff;
  border: 1px solid #dde5eb;
  box-shadow: inset 0px 2px 8px #dde5eb;
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
  transition: 0.3s all linear;
}

.textarea-wrap textarea::placeholder {
  color: #595959;
}

.textarea-wrap textarea:focus {
  outline: none;
  background: #f0faff;
  transition: 0.3s all linear;
}

.textarea-wrap.disabled textarea {
  background: #fafafa;
  border: 1px solid #dde5eb;
  box-shadow: inset 0px 0px 0px #dde5eb;
  color: #8c8c8c;
}

.textarea-wrap.disabled textarea::placeholder {
  color: #8c8c8c;
}
</style>
