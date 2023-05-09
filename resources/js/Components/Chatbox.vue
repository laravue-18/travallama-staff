<template>
	<div>
		<vue-advanced-chat
			:current-user-id="currentUserId"
			:rooms="JSON.stringify(rooms)"
			:rooms-loaded="true"
			:messages="JSON.stringify(messages)"
			:messages-loaded="true"
            :show-audio="false"
            :show-files="false"
			@send-message="sendMessage($event.detail[0])"
		/>
	</div>
</template>

<script>
import { register } from 'vue-advanced-chat'
register()

// const userId = Math.random().toString(36).slice(-5)
// const roomId = Math.random().toString(36).slice(-5)
const userId = 'support'
const roomId = 'room'

export default {
	data() {
		return {
			currentUserId: userId,
			rooms: [
				{
					roomId: roomId,
					roomName: 'Support',
					avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj',
					users: [
						{ _id: userId, username: 'John Doe' },
						{ _id: 'user', username: 'John Snow' }
					]
				}
			],
			messages: [],
			messagesLoaded: false
		}
	},

	methods: {
		sendMessage({content, roomId}) {
            const message = {
                _id: this.messages.length,
                senderId: 'support',
                content,
            }

            axios.post('https://api.travallama.com/api/message', {message, roomId})
                .then((res) => {
                }, (err) => {
                    console.log(err)
                })
		},
	},
    mounted() {
        Echo.channel('chat')
            .listen('NewChatMessage', (e) => {
                    if(e.room_id == roomId) {
                        this.messages = [
                            ...this.messages,
                            e.message
                        ]
                    }
                });
    }
}
</script>

<style>
</style>