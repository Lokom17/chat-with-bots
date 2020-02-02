<template>
  <div>
    <ul class="chat-list">
        <li class="chat-message" :class="message.type" v-for="(message, i) in ListArr" :key="`u-${i}`">
        <div class="chat-message-foto">
          <a href>
            <img src alt />
          </a>
        </div>
        <div class="chat-message-text">{{ message.data }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChatList',
  props: ['ListArr'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style='css' scoped>

.chat-list {
  display: inline;
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

</style>
