<template>
<div class="toolbar">
  <button class="button" @click="showModal = true" :hidden="showModal">Neu</button>
			<transition name="modal">
				<div class="modal-mask" v-if="showModal">
					<NewModal @close="closeModal"/>
				</div>
			</transition>
  </div>
</template>
<script>
import NewModal from './NewModal.vue';
export default {
    // eslint-disable-next-line
  name: 'ToolBar',
	components: {NewModal},
	data:function (){
		return{
			showModal: false
		}
	},
	methods:{
		closeModal(){
			this.showModal = false;
		}
	},
  props: {
    msg: String
  }
}
</script>