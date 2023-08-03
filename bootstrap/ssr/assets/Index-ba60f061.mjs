import { resolveComponent, useSSRContext, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-e5d31bb3.mjs";
import { Head } from "@inertiajs/vue3";
import { register } from "vue-advanced-chat";
import { _ as _export_sfc } from "./ApplicationLogo-848ae812.mjs";
register();
const userId = "support";
const roomId = "room";
const _sfc_main$1 = {
  data() {
    return {
      currentUserId: userId,
      rooms: [
        {
          roomId,
          roomName: "Support",
          avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",
          users: [
            { _id: userId, username: "John Doe" },
            { _id: "user", username: "John Snow" }
          ]
        }
      ],
      messages: [],
      messagesLoaded: false
    };
  },
  methods: {
    sendMessage({ content, roomId: roomId2 }) {
      const message = {
        _id: this.messages.length,
        senderId: "support",
        content
      };
      axios.post("https://api.travallama.com/api/message", { message, roomId: roomId2 }).then((res) => {
      }, (err) => {
        console.log(err);
      });
    }
  },
  mounted() {
    Echo.channel("chat").listen("NewChatMessage", (e) => {
      if (e.room_id == roomId) {
        this.messages = [
          ...this.messages,
          e.message
        ];
      }
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_advanced_chat = resolveComponent("vue-advanced-chat");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_vue_advanced_chat, {
    "current-user-id": $data.currentUserId,
    rooms: JSON.stringify($data.rooms),
    "rooms-loaded": true,
    messages: JSON.stringify($data.messages),
    "messages-loaded": true,
    "show-audio": false,
    "show-files": false,
    onSendMessage: ($event) => $options.sendMessage($event.detail[0])
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Chatbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Chatbox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    roles: Array,
    permissions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Roles and Permissions" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="mb-8 text-3xl font-bold"${_scopeId}>Chatroom</h1>`);
            _push2(ssrRenderComponent(Chatbox, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "mb-8 text-3xl font-bold" }, "Chatroom"),
              createVNode(Chatbox)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Messages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
